import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConstructionWorker, WorkerService} from '../../../shared/services/worker.service';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  selectedWorker: ConstructionWorker | null = null;
  workers: ConstructionWorker[] = [];

  constructor(private workerService: WorkerService) {}

  ngOnInit() {
    this.workerService.getWorkers().subscribe(data => {
      this.workers = data;
    });
  }

  openModal(worker: ConstructionWorker) {
    this.selectedWorker = worker;
  }

  closeModal() {
    this.selectedWorker = null;
  }

  sendMessage() {
    if (this.selectedWorker) {
      alert(`Mensaje enviado a ${this.selectedWorker.name}`);
    }
  }
}
