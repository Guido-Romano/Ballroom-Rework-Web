import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9._]+')]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]],
      message: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(255), Validators.pattern('[a-zA-Z0-9._]+')]],
    });
  }
  

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulario válido:', this.form.value);
    } else {
      console.log('Formulario inválido');
      this.form.markAllAsTouched(); 
  }
}
}