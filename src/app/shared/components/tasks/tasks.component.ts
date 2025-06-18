import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

import { Task, ConstructionWorker } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

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
    TranslateModule,
    MatSnackBarModule,
  ],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  columnas = ['numero', 'nombre', 'fecha', 'prioridad', 'estado', 'problemas', 'descripcion'];
  tareas: Task[] = [];
  obreros: ConstructionWorker[] = [];

  nuevaTarea: Partial<Task> = {
    nombre: '',
    fechaLimite: '',
    prioridad: 1,
    estado: 'PENDING',
    assignedTo: undefined
  };

  constructor(private taskService: TaskService, private translate: TranslateService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.tareas = this.taskService.getTareas().sort((a, b) => b.prioridad - a.prioridad);
    this.obreros = this.taskService.getObreros();
  }
  traducirNombreTarea(nombre: string): string {
    const key = `TASKS.NAMES.${nombre}`;
    const traducido = this.translate.instant(key);
    return traducido === key ? nombre : traducido;
  }
  asignarTarea() {
    if (
      this.nuevaTarea.nombre?.trim() &&
      this.nuevaTarea.fechaLimite &&
      this.nuevaTarea.assignedTo

    ) {
      const nueva = {
        ...this.nuevaTarea,
        id: this.generarId()
      } as Task;

      this.taskService.agregarTarea(nueva); // Guardar y persistir
      this.tareas = this.taskService.getTareas(); // Refrescar vista
      this.tareas.sort((a, b) => b.prioridad - a.prioridad);
      const mensaje = this.translate.instant('TASKS.NOTIFICATION', {
        task: nueva.nombre,
        worker: nueva.assignedTo?.name
      });

      this.snackBar.open(mensaje, '', {
        duration: 4000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['custom-snackbar']
      });
      this.reiniciarFormulario();
    }
  }

  private generarId(): number {
    return this.tareas.length > 0
      ? Math.max(...this.tareas.map(t => t.id)) + 1
      : 1;
  }

  reiniciarFormulario() {
    this.nuevaTarea = {
      nombre: '',
      fechaLimite: '',
      prioridad: 1,
      estado: 'PENDING',
      assignedTo: undefined
    };
  }

  ordenarPorFecha() {
    this.tareas.sort((a, b) => a.fechaLimite.localeCompare(b.fechaLimite));
  }

  ordenarPorPrioridad() {
    this.tareas.sort((a, b) => b.prioridad - a.prioridad);
  }
}
