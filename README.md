# Homework 12: Service Unit-Test

## 🧩 Task Definition

Complete all **service-level unit tests** for the `EmployeesService`.
Update `EmployeesService.test.ts` so that each service method (except `save`) is covered.

**Your task includes:**

-   ✅ Write tests for `getAll`, `getEmployee`, `addEmployee`, `updateEmployee`, and `deleteEmployee`.
-   ✅ Use `beforeEach(resetTestEmployees)` to reset the service state before every test.
-   ✅ Test for all expected success and error cases (`NotFoundError`, `AlreadyExistsError`).
-   ✅ Ensure all tests pass.

**Run tests**

```bash
npm run test-service map
```

All tests must pass ✅

---

## 📝 Description

This homework implements **unit tests for the EmployeesService module**, responsible for CRUD operations on employee data.
The service is tested independently from the Express API and focuses solely on business logic and data handling.

Each test verifies:

-   Proper data retrieval and filtering.
-   Correct employee addition, updates, and deletions.
-   Proper error throwing for non-existing or duplicate employees.
-   Stable state before each test run.

---

## 🎯 Purpose

The goal is to practice **isolated unit testing of service logic**, ensuring that business rules work as expected without involving routes or controllers.

By the end you should:

-   Understand how to structure service tests in TypeScript.
-   Use `node:test` and `assert/strict` for validation.
-   Apply test data reset to maintain consistent test environments.
-   Detect logical or state management errors early.

---

## ✨ Features

-   🧩 Unit tests for all EmployeesService methods.
-   🧱 Independent of Express controllers or routes.
-   ⚙️ Pre-defined test data set (`stateEmployees`) for repeatable scenarios.
-   🔁 `beforeEach` environment reset with `resetTestEmployees()`.
-   🚨 Error handling tests for `AlreadyExistsError` and `NotFoundError`.
-   🧠 Written in TypeScript using modern Node.js test API.

---

## 🔍 How It Works

1. **Service Initialization**
   `EmployeesServiceMap` loads a predefined in-memory collection of employees.

2. **Test Environment Setup**
   The `resetTestEmployees()` utility clears the current employees and re-adds a fresh copy of `stateEmployees` before each test block.

3. **Grouped Test Cases**

    - `employeesGetTestCases` → tests for retrieving data.
    - `employeesAddTestCases` → tests for adding employees.
    - `employeesUpdateTestCases` → tests for updates.
    - `employeesDeleteTestCases` → tests for deletion.

4. **Assertions**

    - Uses `assert.rejects()` for error cases.
    - Uses `assert.deepEqual()` and `assert.ok()` for data comparison.
    - Validates object equality and state consistency.

---

## 📜 Output Example

**✅ All tests pass**

```
✔ Add existing employee -> throwing AlreadyExistsError
✔ Add new employee object with no id -> returns added object with id
✔ Delete non existing employee -> throws NotFoundError
✔ Delete existing employee
✔ Get non existing employee by ID -> throws NotFoundError
✔ Get all employee objects -> returns all state employees
✔ Get all employees by department -> filters correctly
✔ Get existing employee -> returns employee
✔ Update non existing employee -> throws NotFoundError
✔ Update existing employee -> returns employee with updated salary value
```

---

## 📦 Usage

1️⃣ Install dependencies

```bash
npm install
```

2️⃣ Run the service unit tests

```bash
npm run test-service map
```

3️⃣ Inspect results
All tests should display a ✅ status and no failures.

---

## 🚀 Usage Examples (HTTP)

_(Optional — for context with controller integration)_

```bash
# Fetch all employees
curl -X GET http://localhost:3000/employees

# Add new employee
curl -X POST http://localhost:3000/employees \
-H "Content-Type: application/json" \
-d '{"fullName":"John Doe","department":"QA","salary":10000,"birthDate":"2000-01-01","avatar":"https://example.com"}'
```

---

## 🗂 Project Structure

```
src/
├── __tests__/
│   └── serviceTests/
│       ├── EmployeesService.test.ts
│       ├── testCases/
│       │   ├── employeesGet.test.ts
│       │   ├── employeesAdd.test.ts
│       │   ├── employeesUpdate.test.ts
│       │   └── employeesDelete.test.ts
│       ├── employeesData/
│       │   └── employeesData.ts
│       └── utils/
│           └── setupTestEnv.ts
├── service/
│   ├── employee/
│   │   ├── EmployeesService.ts
│   │   ├── EmployeesServiceMap.ts
│   │   └── EmployeesServiceMock.test.ts
│   ├── accounting/
│   └── registry.ts
└── model/
    └── errorTypes/
```

---

## ✅ Dependencies

| Package           | Purpose                                         |
| :---------------- | :---------------------------------------------- |
| **node:test**     | Built-in test framework for unit tests          |
| **assert/strict** | Assertion library for equality and error checks |
| **lodash**        | Used for array comparison and utility functions |
| **uuid**          | Generates unique employee IDs                   |
| **TypeScript**    | Static typing and compiler support              |
| **dotenv**        | Environment configuration                       |
| **winston**       | Structured logging utility                      |

---

## 📄 License

MIT License

---

## 🧮 Conclusion

Homework #12 focuses on ensuring that the **EmployeesService** business logic is fully tested and reliable.
By testing each method individually, the project achieves:

-   Consistent data handling across CRUD operations.
-   Predictable behavior for edge cases and errors.
-   Clean, maintainable unit tests that can serve as templates for future services.

All tests ✅ passed — the service is solid and ready for integration with controllers and routes.

---

Made with ❤️ and `TypeScript` by **Sam-Shepsl Malikin**
