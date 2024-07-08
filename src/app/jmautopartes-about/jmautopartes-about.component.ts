import { Component } from '@angular/core';

@Component({
  selector: 'app-jmautopartes-about',
  templateUrl: './jmautopartes-about.component.html',
  styleUrl: './jmautopartes-about.component.scss'
})
export class JMAutopartesAboutComponent {
  selectedOption: number | null = null;

  selectOption(option: number) {
    this.selectedOption = this.selectedOption === option ? null : option;
  }

  getPageClass(): string {
    return 'full-page';
  }

  getTitle(): string {
    if (this.selectedOption === 1) {
      return '¿Quienes somos?';
    } else if (this.selectedOption === 2) {
      return '¿Cual es el proposito de nuestra Web?';
    }else if( this.selectedOption === 3){
      return '¿Como funcionan los impuestos?';
    }
    return 'Preguntas frecuentes:';
  }
}

