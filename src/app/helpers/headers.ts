import { HttpHeaders } from '@angular/common/http';

export const headers = () => {
  const token = localStorage.getItem('token') ?? '';
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    }),
  };
  return httpOptions;
};
