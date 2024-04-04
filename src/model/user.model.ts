export class RegisterUserRequest {
  username: string;
  name: string;
  password: string;
}

export class UserResponse {
  id?: string;
  username: string;
  name: string;
  token?: string;
}
