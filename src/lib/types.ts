export interface authApiT {
  username: string;
  password: string;
}
export type AuthResponse = {
  access: string;
  refresh: string;
};
export interface jobsApiT {
  id: number;
  title: string;
  company: string;
  description: string;
  location: string;
  created_at: string;
  work_type: string;
  ish_vaqti: string;
  salary: string;
  user: number;
}
export interface usersApiT {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  phone: string | null;
  email: string;
  position: string | null;
  age: number | null;
}
export interface JobFormValuesT {
  id?: number;
  title: string;
  company: string;
  description: string;
  location: string;
  work_type: string;
  ish_vaqti: string;
  salary: string;
}
