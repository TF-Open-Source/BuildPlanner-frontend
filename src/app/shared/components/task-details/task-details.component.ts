import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-details',
  standalone: true,
  encapsulation: ViewEncapsulation.Emulated,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  tarea: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Aquí puedes reemplazar por un fetch a servicio en el futuro
    const tareasMock = [
      { id: 1, nombre: 'Preparar mezcla', descripcion: 'Descripción de la mezcla', fechaInicio: '2025-04-20', fechaLimite: '2025-05-10', prioridad: 5 },
      { id: 2, nombre: 'Instalar andamios', descripcion: 'Instalación segura de andamios', fechaInicio: '2025-05-15', fechaLimite: '2025-06-20', prioridad: 2 },
      { id: 3, nombre: 'Revisar Planos', descripcion: 'Revisión de planos estructurales', fechaInicio: '2025-06-10', fechaLimite: '2025-06-21', prioridad: 3 },
    ];

    this.tarea = tareasMock.find(t => t.id == id);
  }
}
