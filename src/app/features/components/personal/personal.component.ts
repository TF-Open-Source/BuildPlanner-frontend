import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {
  selectedWorker: any = null;

  workers = [
    { name: 'Pedro Gómez', age: 45, dni: '12345678', status: 'Disponible' },
    { name: 'Mariana Ruiz', age: 32, dni: '87654321', status: 'Ocupado' },
    { name: 'Carlos López', age: 39, dni: '11223344', status: 'Disponible' },
    { name: 'Ana Torres', age: 28, dni: '99887766', status: 'Disponible' },
    { name: 'Luis Mendoza', age: 50, dni: '44332211', status: 'Ocupado' },
    { name: 'Julia Vega', age: 36, dni: '66778899', status: 'Disponible' }
  ];

  openModal(worker: any) {
    this.selectedWorker = worker;
  }

  closeModal() {
    this.selectedWorker = null;
  }

  sendMessage() {
    alert(`Mensaje enviado a ${this.selectedWorker.name}`);
  }
}
