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
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

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
    MatMenuModule,
    MatDialogModule
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

  tareaSeleccionada!: Task;

  constructor(
    private taskService: TaskService,
    private translate: TranslateService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.obtenerTareas();
    this.obtenerObreros();
  }

  ngAfterViewInit() {
    this.tareas.paginator = this.paginator;
  }

  obtenerTareas() {
    this.taskService.getTareas().subscribe(tareas => {
      this.tareas.data = tareas;
    });
  }

  obtenerObreros() {
    this.taskService.getObreros().subscribe(obreros => {
      this.obreros = obreros;
    });
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
        hasIssue: false,
        issueDescription: ''
      } as Task;

      this.taskService.agregarTarea(nueva).subscribe(() => {
        this.obtenerTareas();
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
      });
    }
  }

  cambiarPrioridad(tarea: Task) {
    this.taskService.actualizarTarea(tarea).subscribe();
  }

  cambiarEstado(tarea: Task) {
    this.taskService.actualizarTarea(tarea).subscribe(() => {
      const mensaje = this.translate.instant('TASKS.STATUS_UPDATED', {
        task: tarea.nombre,
        status: this.translate.instant(`TASKS.STATUS_VALUES.${tarea.estado}`),
      });
      this.snackBar.open(mensaje, '', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: ['custom-snackbar'],
      });
    });
  }

  ingresarProblema(tarea: Task) {
    const descripcion = prompt(this.translate.instant('TASKS.PROBLEMS.ADD') + ':');
    if (descripcion) {
      tarea.hasIssue = true;
      tarea.issueDescription = descripcion;
      this.taskService.actualizarTarea(tarea).subscribe(() => {
        this.snackBar.open(this.translate.instant('TASKS.PROBLEMS.ADD') + ' OK', '', {
          duration: 2000,
          panelClass: ['custom-snackbar'],
        });
      });
    }
  }

  mostrarProblema(tarea: Task) {
    if (tarea.hasIssue && tarea.issueDescription) {
      alert(`${this.translate.instant('TASKS.PROBLEMS.SHOW')}: ${tarea.issueDescription}`);
    } else {
      alert(this.translate.instant('TASKS.PROBLEMS.SHOW') + ': (no data)');
    }
  }

  eliminarProblema(tarea: Task) {
    if (confirm(this.translate.instant('TASKS.PROBLEMS.DELETE') + '?')) {
      tarea.hasIssue = false;
      tarea.issueDescription = '';
      this.taskService.actualizarTarea(tarea).subscribe(() => {
        this.snackBar.open(this.translate.instant('TASKS.PROBLEMS.DELETE') + ' OK', '', {
          duration: 2000,
          panelClass: ['custom-snackbar'],
        });
      });
    }
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
