export interface IUser {
  name: string;
  email: string;
  password: string;
  age: number;
  is_Active: boolean;
  role: string
}

export type Method = "GET" | "POST" | "PUT" | "DELETE";