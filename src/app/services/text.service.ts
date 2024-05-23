import { Injectable } from '@angular/core';
import { TextConfig } from '../config/text-config';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor() { }

  getClases() {
    return TextConfig.clase;
  }

  getClasesById(id: number) {
    return TextConfig.clase.find(clase => clase.id === id);
  }


  getPersonal() {
    return TextConfig.personal;
  }

  getPersonalById(id: number) {
    return TextConfig.personal.find(personal => personal.id === id);
  }

  getPreguntas() {
    return TextConfig.pregunta;
  }

  getPreguntaById(id: number) {
    return TextConfig.pregunta.find(pregunta => pregunta.id === id);
  }

  getProducto() {
    return TextConfig.producto;
  }

  getProductoById(id: number) {
    return TextConfig.producto.find(producto => producto.id === id);
  }

  getInfo() {
    return TextConfig.texto;
  }

  getInfoById(id: number) {
    return TextConfig.texto.find(info => info.id === id);
  }
}


