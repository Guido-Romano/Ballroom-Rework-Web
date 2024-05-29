import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(255)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.http.post<any>('http://localhost:3000/send-email', this.form.value).subscribe(
        response => {
          console.log('Correo enviado:', response);
          // Puedes mostrar un mensaje de éxito al usuario si lo deseas
        },
        error => {
          console.error('Error al enviar el correo:', error);
          // Puedes mostrar un mensaje de error al usuario si lo deseas
        }
      );
    } else {
      console.log('Formulario inválido');
      this.form.markAllAsTouched();
      console.log(this.form);
    }
  }
}
