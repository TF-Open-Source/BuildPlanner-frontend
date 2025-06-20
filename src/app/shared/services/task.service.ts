import { Injectable } from '@angular/core';
import { Task, ConstructionWorker } from '../models/task.model';

const STORAGE_KEY = 'ironTasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tareas: Task[] = [];

  private obreros: ConstructionWorker[] = [
    { id: 1, name: 'Juan Pérez' },
    { id: 2, name: 'Ana Torres' },
    { id: 3, name: 'Luis Ramos' }
  ];

  constructor() {
    this.cargarDesdeLocalStorage();
  }

  getTareas(): Task[] {
    return [...this.tareas];
  }

  getObreros(): ConstructionWorker[] {
    return [...this.obreros];
  }

  agregarTarea(tarea: Task): void {
    this.tareas.push(tarea);
    this.guardarEnLocalStorage();
  }

  actualizarTarea(tareaActualizada: Task): void {
    const index = this.tareas.findIndex(t => t.id === tareaActualizada.id);
    if (index !== -1) {
      this.tareas[index] = { ...tareaActualizada };
      this.guardarEnLocalStorage();
    }
  }

  private guardarEnLocalStorage(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tareas));
  }

  private cargarDesdeLocalStorage(): void {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      this.tareas = JSON.parse(data);
    }
  }
}
