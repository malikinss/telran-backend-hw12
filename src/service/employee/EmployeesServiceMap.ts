// src/service/employee/EmployeesServiceMap.ts

import { v4 as uuidv4 } from "uuid";
import { Employee } from "../../model/dtoTypes/Employee.ts";
import EmployeesService from "./EmployeesService.ts";
import { fileStorage } from "../../utils/fileStorage.ts";
import { registerEmployeeService } from "../registry.ts";
import {
	AlreadyExistsError,
	NotFoundError,
} from "../../model/errorTypes/employeeErrors.ts";
import logger from "../../utils/logger.ts";

const logPrefix = "[EmployeeService]";

const messages = {
	loading: (size) => `${logPrefix} ✅  Loaded ${size} employees from file`,
	fill: (employee) =>
		`${logPrefix} ⚠️  Skipping employee without ID: ${employee}`,
};

const FACTORY_KEY = "map";
/**
 * In-memory implementation of EmployeesService using a Map.
 * Provides methods to add, get, update, and delete employees.
 * Loads initial data from file storage.
 * @implements EmployeesService
 */
class EmployeesServiceMap implements EmployeesService {
	private _employees: Map<string, Employee> = new Map();
	private _isUpdated: boolean;

	constructor(isUpdated = false) {
		this._isUpdated = isUpdated;
		this._loadFromFile();
	}

	private _loadFromFile(): void {
		const loaded = fileStorage.loadEmployees();
		this._fillEmployeeMap(loaded);
		logger.debug(messages.loading(this._employees.size));
	}

	private _fillEmployeeMap(employees: Employee[]): void {
		this._employees.clear();
		for (const employee of employees) {
			if (employee.id) {
				this._employees.set(employee.id, employee);
			} else {
				logger.warn(messages.fill(JSON.stringify(employee)));
			}
		}
	}

	async addEmployee(empl: Employee): Promise<Employee> {
		const id: string = empl.id ?? uuidv4();
		if (this._employees.has(id)) {
			throw new AlreadyExistsError(id);
		}
		empl.id = id;
		this._employees.set(id, empl);
		this._isUpdated = true;
		return empl;
	}

	async getAll(department?: string): Promise<Employee[]> {
		let all: Employee[] = Array.from(this._employees.values());
		if (department) {
			all = all.filter((empl) => empl.department === department);
		}
		return all;
	}

	async updateEmployee(
		id: string,
		empl: Partial<Employee>
	): Promise<Employee> {
		const existing = await this.getEmployee(id);
		Object.assign(existing, empl);
		this._isUpdated = true;
		return existing;
	}

	async deleteEmployee(id: string): Promise<Employee> {
		const existing = await this.getEmployee(id);
		this._employees.delete(id);
		this._isUpdated = true;
		return existing;
	}

	async getEmployee(id: string): Promise<Employee> {
		const existing = this._employees.get(id);
		if (!existing) {
			throw new NotFoundError(id);
		}
		return existing;
	}

	toArray(): Employee[] {
		return Array.from(this._employees.values());
	}

	isUpdated(): boolean {
		return this._isUpdated;
	}
}

registerEmployeeService(FACTORY_KEY, async () => new EmployeesServiceMap());
