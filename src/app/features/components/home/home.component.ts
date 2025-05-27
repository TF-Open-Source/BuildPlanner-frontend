import {Component, OnInit} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatProgressBar} from '@angular/material/progress-bar';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from '@angular/material/table';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {DatePipe, NgClass, NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

interface Project {
  name: string;
  progress: number;
  endDate: Date;
}

interface Task {
  description: string;
  project: string;
  dueDate: Date;
  status: string;
}

@Component({
  selector: 'app-home',
  imports: [
    MatCard,
    MatCardHeader,
    MatProgressBar,
    MatCardActions,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatIcon,
    MatHeaderRow,
    MatRow,
    MatButton,
    MatCardContent,
    MatHeaderCellDef,
    MatCellDef,
    NgClass,
    MatIconButton,
    MatHeaderRowDef,
    MatRowDef,
    MatTable,
    NgForOf,
    DatePipe,
    MatCardTitle,
    MatCardSubtitle,
    RouterLink,
    TranslatePipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  projects: Project[] = [
    { name: 'Construcción Edificio A', progress: 75, endDate: new Date('2025-12-31') },
    { name: 'Puente Central', progress: 40, endDate: new Date('2025-08-15') },
    { name: 'Carretera Norte', progress: 90, endDate: new Date('2025-06-30') }
  ];

  tasks: Task[] = [
    { description: 'Revisar planos estructurales', project: 'Construcción Edificio A', dueDate: new Date('2025-05-20'), status: 'Pendiente' },
    { description: 'Coordinar entrega de materiales', project: 'Puente Central', dueDate: new Date('2025-05-18'), status: 'Pendiente' },
    { description: 'Inspección final', project: 'Carretera Norte', dueDate: new Date('2025-05-25'), status: 'Completado' }
  ];

  displayedColumns: string[] = ['task', 'project', 'dueDate', 'actions'];

  ngOnInit(): void {}

  createProject(): void {
    console.log('Crear nuevo proyecto');
  }

  addTask(): void {
    console.log('Añadir nueva tarea');
  }

  markAsCompleted(task: Task): void {
    task.status = 'Completado';
    console.log(`Tarea "${task.description}" marcada como completada`);
  }
}
