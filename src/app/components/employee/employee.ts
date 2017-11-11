export interface IEmployee {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    gender: string;
    address: string;
}

export class Employee {
    firstName?: '';
    lastName?: '';
    email?: '';
    mobile?: '';
    gender?: '';
    address?: '';
}

export interface IEmployeeResponse {
    status: boolean;
    employee: IEmployee;
}
