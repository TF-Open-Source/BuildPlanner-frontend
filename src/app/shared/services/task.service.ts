import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task, ConstructionWorker } from '../models/task.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/api/tasks';
  private workersUrl = 'http://localhost:8080/api/workers'; // Asegúrate que el backend lo soporte

  constructor(private http: HttpClient) {}

  getTareas(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  getTareaPorId(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  agregarTarea(tarea: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, tarea);
  }

  actualizarTarea(tarea: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${tarea.id}`, tarea);
  }

  eliminarTarea(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getObreros(): Observable<ConstructionWorker[]> {
    return this.http.get<ConstructionWorker[]>(this.workersUrl);
  }
}

