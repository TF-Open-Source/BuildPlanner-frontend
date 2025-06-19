import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { Task, ConstructionWorker } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    MatSnackBarModule,
  ],
})
export class TasksComponent implements OnInit {
  columnas = ['numero', 'nombre', 'fecha', 'prioridad', 'estado', 'problemas', 'descripcion'];
  tareas = new MatTableDataSource<Task>();
  obreros: ConstructionWorker[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  nuevaTarea: Partial<Task> = {
    nombre: '',
    fechaLimite: '',
    prioridad: 1,
    estado: 'PENDING',
    assignedTo: undefined,
  };

  constructor(
    private taskService: TaskService,
    private translate: TranslateService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.tareas.data = this.taskService.getTareas();
    this.obreros = this.taskService.getObreros();
  }

  ngAfterViewInit() {
    this.tareas.paginator = this.paginator;
  }

  traducirNombreTarea(nombre: string): string {
    const key = `TASKS.NAMES.${nombre}`;
    const traducido = this.translate.instant(key);
    return traducido === key ? nombre : traducido;
  }

  traducirEstado(estado: string): string {
    const key = `TASKS.STATUS_VALUES.${estado}`;
    const traducido = this.translate.instant(key);
    return traducido === key ? estado : traducido;
  }

  asignarTarea() {
    if (
      this.nuevaTarea.nombre?.trim() &&
      this.nuevaTarea.fechaLimite &&
      this.nuevaTarea.assignedTo
    ) {
      const nueva = {
        ...this.nuevaTarea,
        id: this.generarId(),
      } as Task;

      this.taskService.agregarTarea(nueva);
      this.tareas.data = this.taskService.getTareas();
      this.tareas.paginator = this.paginator;

      const mensaje = this.translate.instant('TASKS.NOTIFICATION', {
        task: nueva.nombre,
        worker: nueva.assignedTo?.name,
      });

      this.snackBar.open(mensaje, '', {
        duration: 4000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['custom-snackbar'],
      });

      this.reiniciarFormulario();
    }
  }

  cambiarPrioridad(tarea: Task) {
    this.taskService.actualizarTarea(tarea);
  }

  cambiarEstado(tarea: Task) {
    this.taskService.actualizarTarea(tarea);

    const mensaje = this.translate.instant('TASKS.STATUS_UPDATED', {
      task: tarea.nombre,
      status: this.translate.instant(`TASKS.STATUS_VALUES.${tarea.estado}`),
    });

    this.snackBar.open(mensaje, '', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['custom-snackbar'],
    });
  }

  private generarId(): number {
    const data = this.tareas.data;
    return data.length > 0 ? Math.max(...data.map((t) => t.id)) + 1 : 1;
  }

  reiniciarFormulario() {
    this.nuevaTarea = {
      nombre: '',
      fechaLimite: '',
      prioridad: 1,
      estado: 'PENDING',
      assignedTo: undefined,
    };
  }

  ordenarPorFecha() {
    const sorted = [...this.tareas.data].sort((a, b) =>
      a.fechaLimite.localeCompare(b.fechaLimite)
    );
    this.tareas.data = sorted;
    this.tareas.paginator = this.paginator;
  }

  ordenarPorPrioridad() {
    const sorted = [...this.tareas.data].sort((a, b) => b.prioridad - a.prioridad);
    this.tareas.data = sorted;
    this.tareas.paginator = this.paginator;
  }

  getPrioridadIcon(prioridad: number): string {
    switch (prioridad) {
      case 1: return 'looks_one';
      case 2: return 'looks_two';
      case 3: return 'looks_3';
      case 4: return 'priority_high';
      case 5: return 'error';
      default: return 'help';
    }
  }

  esPrioridadAlta(prioridad: number): boolean {
    return prioridad >= 4;
  }
}
