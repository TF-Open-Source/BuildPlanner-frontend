import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {TaskService} from '../../../shared/services/task.service';
import { Task} from '../../../shared/models/task.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, TranslateModule]
})
export class DashboardComponent implements OnInit {
  tareasAgrupadas: { obrero: string; tareas: Task[] }[] = [];

  constructor(
    private taskService: TaskService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    const tareas = this.taskService.getTareas();
    const agrupadas: { [obrero: string]: Task[] } = {};

    for (const tarea of tareas) {
      const nombreObrero = tarea.assignedTo?.name || 'Sin asignar';
      if (!agrupadas[nombreObrero]) {
        agrupadas[nombreObrero] = [];
      }
      agrupadas[nombreObrero].push(tarea);
    }

    // Convertimos a array para usar *ngFor
    this.tareasAgrupadas = Object.entries(agrupadas).map(([obrero, tareas]) => ({
      obrero,
      tareas
    }));
  }

  traducirNombreTarea(nombre: string): string {
    const key = `TASKS.NAMES.${nombre}`;
    const traducido = this.translate.instant(key);
    return traducido === key ? nombre : traducido;
  }

  traducirEstado(estado: string): string {
    const key = `TASKS.STATUS_VALUES.${estado}`;
    return this.translate.instant(key);
  }
}
