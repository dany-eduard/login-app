import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  mensajeRegistro = '';
  registerForm = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  async onRegister() {
    try {
      this.mensajeRegistro = await this.authService.register(
        this.registerForm.value
      );
      Swal.fire({
        title: `${this.mensajeRegistro}`,
        text: 'Vaya a Inicia Sesión para ingresar',
        icon: 'success',
      });
    } catch (error: any) {
      console.log(error);
      Swal.fire({
        title: 'Ah ocurrido un error',
        text: `${error.error.Message}`,
        icon: 'error',
      });
    }
  }
}
