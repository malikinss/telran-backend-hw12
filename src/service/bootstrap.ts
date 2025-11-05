// src/service/bootstrap.ts

import "./employee/EmployeesServiceMap.ts";
import "./employee/EmployeesServiceMock.test.ts";
import { createEmployeeService } from "./registry.ts";

const key = process.argv[2] || process.env.EMPLOYEES_IMPL;
const service = await createEmployeeService(key);
export default service;
