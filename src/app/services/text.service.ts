import { Injectable } from '@angular/core';
import { TextConfig } from '../config/text-config';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor() { }

  getPreguntas() {
    return TextConfig.preguntas;
  }

  getPreguntaById(id: number) {
    return TextConfig.preguntas.find(pregunta => pregunta.id === id);
  }

  getPersonal() {
    return TextConfig.personal;
  }

  getPersonalById(id: number) {
    return TextConfig.personal.find(personal => personal.id === id);
  }

  getClases() {
    return TextConfig.clases;
  }

  getClasesById(id: number) {
    return TextConfig.clases.find(clase => clase.id === id);
  }

  getNosotros() {
    return TextConfig.nosotros;
  }

  getNosotrosById(id: number) {
    return TextConfig.nosotros.find(nosotros => nosotros.id === id);
  }

  getVestuario() {
    return TextConfig.vestuario;
  }

  getVestuarioById(id: number) {
    return TextConfig.vestuario.find(vestuario => vestuario.id === id);
  }

  getInfo() {
    return TextConfig.info;
  }

  getInfoById(id: number) {
    return TextConfig.info.find(info => info.id === id);
  }
}


