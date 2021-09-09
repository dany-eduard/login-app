export interface User {
  username: string;
  password: string;
}

export interface UserRgister {
  nombre: string;
  apellido: string;
  correo: string;
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

export interface BlogsResponse {
  id: number;
  title: string;
  author: string;
  body: string;
  url_portada: string;
  external_cover: string;
  id_categories: number;
  tile_categorie: string;
  creation_date: string;
  update_date: string;
}
