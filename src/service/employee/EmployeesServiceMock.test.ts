// src/service/employee/EmployeeServiceMock.test.ts

import EmployeesService from "./EmployeesService.ts";
import { Employee } from "../../model/dtoTypes/Employee.ts";
import { registerEmployeeService } from "../registry.ts";

const FACTORY_KEY = "mock";

export default class EmployeesServiceMock implements EmployeesService {
	async getAll(department?: string): Promise<Employee[]> {
		return [];
	}

	async getEmployee(id: string): Promise<Employee> {
		return {} as Employee;
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

registerEmployeeService(FACTORY_KEY, async (_) => new EmployeesServiceMock());
