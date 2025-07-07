import { Component, OnInit } from '@angular/core';
import {
  MatCard, MatCardActions, MatCardContent, MatCardHeader,
  MatCardSubtitle, MatCardTitle
} from '@angular/material/card';
import { MatProgressBar } from '@angular/material/progress-bar';
import {
  MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable
} from '@angular/material/table';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { DatePipe, NgClass, NgForOf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Project {
  name: string; // debe coincidir con la clave en JSON (ej: BUILDING_A)
  progress: number;
  endDate: Date;
}

interface Task {
  description: string; // clave de traducción (ej: REVIEW_STRUCTURAL_PLANS)
  project: string;     // clave de traducción (ej: BUILDING_A)
  dueDate: Date;
  status: string;      // PENDING | COMPLETED
}

@Component({
  selector: 'app-home',
  imports: [
    MatCard, MatCardHeader, MatProgressBar, MatCardActions, MatHeaderCell,
    MatColumnDef, MatCell, MatIcon, MatHeaderRow, MatRow, MatButton,
    MatCardContent, MatHeaderCellDef, MatCellDef, NgClass, MatIconButton,
    MatHeaderRowDef, MatRowDef, MatTable, NgForOf, DatePipe, MatCardTitle,
    MatCardSubtitle, TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  projects: Project[] = [
    { name: 'BUILDING_A', progress: 75, endDate: new Date('2025-12-31') },
    { name: 'CENTRAL_BRIDGE', progress: 40, endDate: new Date('2025-08-15') },
    { name: 'NORTH_HIGHWAY', progress: 90, endDate: new Date('2025-06-30') }
  ];

  tasks: Task[] = [
    {
      description: 'REVIEW_STRUCTURAL_PLANS',
      project: 'BUILDING_A',
      dueDate: new Date('2025-05-19'),
      status: 'PENDING'
    },
    {
      description: 'COORDINATE_MATERIAL_DELIVERY',
      project: 'CENTRAL_BRIDGE',
      dueDate: new Date('2025-05-17'),
      status: 'PENDING'
    },
    {
      description: 'FINAL_INSPECTION',
      project: 'NORTH_HIGHWAY',
      dueDate: new Date('2025-05-24'),
      status: 'COMPLETED'
    }
  ];

  displayedColumns: string[] = ['task', 'project', 'dueDate', 'status', 'actions'];

  ngOnInit(): void {}

  createProject(): void {
    console.log('Crear nuevo proyecto');
  }

  addTask(): void {
    console.log('Añadir nueva tarea');
  }

  markAsCompleted(task: Task): void {
    task.status = 'COMPLETED';
    console.log(`Task "${task.description}" marked as completed`);
  }
}
