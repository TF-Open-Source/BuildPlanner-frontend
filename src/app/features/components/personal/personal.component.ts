import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionWorker, WorkerService } from '../../../shared/services/worker.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  selectedWorker: ConstructionWorker | null = null;
  workers: ConstructionWorker[] = [];

  showForm = false;
  editMode = false;

  newWorker: Partial<ConstructionWorker> = {
    name: '',
    age: 0,
    dni: '',
    status: 'Disponible'
  };

  constructor(private workerService: WorkerService) {}

  ngOnInit() {
    this.loadWorkers();
  }

  loadWorkers() {
    this.workerService.getWorkers().subscribe(data => {
      this.workers = data;
    });
  }

  openModal(worker: ConstructionWorker) {
    this.selectedWorker = { ...worker }; // copia para editar
    this.editMode = false;
  }

  closeModal() {
    this.selectedWorker = null;
    this.editMode = false;
  }

  openForm() {
    this.showForm = true;
    this.newWorker = { name: '', age: 0, dni: '', status: 'Disponible' };
  }

  closeForm() {
    this.showForm = false;
  }

  saveWorker() {
    if (this.newWorker.name && this.newWorker.dni) {
      this.workerService.createWorker(this.newWorker).subscribe(() => {
        this.loadWorkers();
        this.closeForm();
      });
    } else {
      alert('Por favor completa todos los campos requeridos.');
    }
  }

  enableEdit() {
    this.editMode = true;
  }

  saveEdit() {
    if (this.selectedWorker) {
      this.workerService.updateWorker(this.selectedWorker.id, this.selectedWorker).subscribe(() => {
        this.loadWorkers();
        this.closeModal();
      });
    }
  }

  deleteWorker() {
    if (this.selectedWorker && confirm('¿Estás seguro de eliminar este trabajador?')) {
      this.workerService.deleteWorker(this.selectedWorker.id).subscribe(() => {
        this.loadWorkers();
        this.closeModal();
      });
    }
  }

  sendMessage() {
    if (this.selectedWorker) {
      alert(`Mensaje enviado a ${this.selectedWorker.name}`);
    }
  }
}
