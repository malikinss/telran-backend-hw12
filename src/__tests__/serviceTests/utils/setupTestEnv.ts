// src/__tests__/serviceTests/utils/setupTestEnv.ts

import service from "../../../service/bootstrap.ts";
import { stateEmployees } from "../employeesData/employeesData.ts";
import { Employee } from "../../../model/dtoTypes/Employee.ts";

/**
 * Resets the employee data in the service to a predefined state.
 * This function clears all existing employees and adds a set of predefined employees.
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 * @example
 * await resetTestEmployees();
 * const employees = await service.getAll();
 * console.log(employees); // Outputs the predefined state employees
 */
export async function resetTestEmployees(): Promise<void> {
	const existing: Employee[] = await service.getAll();
	for (const empl of existing) {
		await service.deleteEmployee(empl.id);
	}
	for (const empl of stateEmployees) {
		await service.addEmployee(empl);
	}
}
