import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

/**
 * @summary Muestra la lista de tareas asignadas a los obreros de construcción con su estado editable.
 */
@Component({
  selector: 'app-tasks',
  standalone: true,
  encapsulation: ViewEncapsulation.Emulated,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
    TranslateModule
  ],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  columnas = ['numero', 'nombre', 'fecha', 'prioridad', 'estado', 'problemas', 'descripcion'];

  tareas = [
    {
      id: 1,
      nombre: 'PREPARE_MIX',
      fechaLimite: '2025-05-10',
      prioridad: 5,
      estado: 'PENDING'
    },
    {
      id: 2,
      nombre: 'INSTALL_SCAFFOLDING',
      fechaLimite: '2025-06-20',
      prioridad: 2,
      estado: 'IN_PROGRESS'
    },
    {
      id: 3,
      nombre: 'REVIEW_PLANS',
      fechaLimite: '2025-06-21',
      prioridad: 3,
      estado: 'COMPLETED'
    }
  ];

  ordenarPorFecha() {
    this.tareas.sort((a, b) => a.fechaLimite.localeCompare(b.fechaLimite));
  }

  ordenarPorPrioridad() {
    this.tareas.sort((a, b) => b.prioridad - a.prioridad);
  }
}
