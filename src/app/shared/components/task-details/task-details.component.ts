import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-task-details',
  standalone: true,
  encapsulation: ViewEncapsulation.Emulated,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  tarea: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Simulación de datos con claves i18n
    const tareasMock = [
      {
        id: 1,
        nombre: 'PREPARE_MIX',
        descripcion: 'TASK_DETAILS.DESCRIPTIONS.PREPARE_MIX',
        fechaInicio: '2025-04-20',
        fechaLimite: '2025-05-10',
        prioridad: 5
      },
      {
        id: 2,
        nombre: 'INSTALL_SCAFFOLDING',
        descripcion: 'TASK_DETAILS.DESCRIPTIONS.INSTALL_SCAFFOLDING',
        fechaInicio: '2025-05-15',
        fechaLimite: '2025-06-20',
        prioridad: 2
      },
      {
        id: 3,
        nombre: 'REVIEW_PLANS',
        descripcion: 'TASK_DETAILS.DESCRIPTIONS.REVIEW_PLANS',
        fechaInicio: '2025-06-10',
        fechaLimite: '2025-06-21',
        prioridad: 3
      }
    ];

    this.tarea = tareasMock.find(t => t.id === id);
  }
}
