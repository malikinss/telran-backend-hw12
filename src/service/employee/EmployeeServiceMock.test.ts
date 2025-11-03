// src/service/employee/EmployeeServiceMock.test.ts

import EmployeesService from "./EmployeesService.ts";
import { Employee } from "../../model/dtoTypes/Employee.ts";

export default class EmployeesServiceMock implements EmployeesService {
	async getAll(department?: string): Promise<Employee[]> {
		return [];
	}

	async addEmployee(empl: Employee): Promise<Employee> {
		return {} as Employee;
	}

	async updateEmployee(
		id: string,
		empl: Partial<Employee>
	): Promise<Employee> {
		return {} as Employee;
	}

	async deleteEmployee(id: string): Promise<Employee> {
		return {} as Employee;
	}
}
