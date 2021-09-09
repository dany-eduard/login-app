export interface User {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  nameuser: string;
  surname: string;
  url_photo_profile: string | null;
  change_password_necesary: number;
  answer: string | null;
}
