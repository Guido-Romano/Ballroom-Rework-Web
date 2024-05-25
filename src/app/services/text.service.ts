import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor(private translate: TranslateService) {}

  loadLanguage(language: string) {
    this.translate.use(language);
  }

  getClases() {
    return this.translate.get('clase');
  }

  getClasesById(id: number) {
    return this.translate.get('clase').pipe(
      map(clases => clases.find(clase => clase.id === id))
    );
  }

  getPreguntas() {
    return this.translate.get('pregunta');
  }

  getPreguntaById(id: number) {
    return this.translate.get('pregunta').pipe(
      map(preguntas => preguntas.find(pregunta => pregunta.id === id))
    );
  }

  getPersonal() {
    return this.translate.get('personal');
  }

  getPersonalById(id: number) {
    return this.translate.get('personal').pipe(
      map(personal => personal.find(personal => personal.id === id))
    );
  }

  getProducto() {
    return this.translate.get('producto');
  }

  getProductoById(id: number) {
    return this.translate.get('producto').pipe(
      map(productos => productos.find(producto => producto.id === id))
    );
  }

  getInfo() {
    return this.translate.get('texto');
  }

  getInfoById(id: number) {
    return this.translate.get('texto').pipe(
      map(textos => textos.find(texto => texto.id === id))
    );
  }
}




















/*
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TEXT_CONFIG } from '../config/text-config'; 
import { TextConfig } from '../config/text-config';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor(private translate: TranslateService) {}

  loadSpanishTexts() {
    this.translate.setTranslation('es', TextConfig);
  }
  
  getClases() {
    return TextConfig.clase;
  }

  getClasesById(id: number) {
    return TextConfig.clase.find(clase => clase.id === id);
  }

  getPreguntas() {
    return TextConfig.pregunta;
  }

  getPreguntaById(id: number) {
    return TextConfig.pregunta.find(pregunta => pregunta.id === id);
  }

  getPersonal() {
    return TextConfig.personal;
  }

  getPersonalById(id: number) {
    return TextConfig.personal.find(personal => personal.id === id);
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
*/

