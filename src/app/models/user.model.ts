export interface UserModel {
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  isActive?: boolean;
  isAdmin?: boolean;
  courses?: [];
}
