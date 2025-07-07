import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-details',
  standalone: true,
  encapsulation: ViewEncapsulation.Emulated,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  tarea!: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.taskService.getTareaPorId(id).subscribe({
      next: (task) => {
        this.tarea = task;
      },
      error: (err) => {
        console.error('Error al cargar la tarea:', err);
      }
    });
  }
}
