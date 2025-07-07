import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ConstructionWorker {
  id: number;
  name: string;
  age: number;
  dni: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  private apiUrl = 'http://localhost:8081/api/workers'; // Ajusta el puerto si es diferente

  constructor(private http: HttpClient) {}

  getWorkers(): Observable<ConstructionWorker[]> {
    return this.http.get<ConstructionWorker[]>(this.apiUrl);
  }

  // Opcional: más métodos (crear, actualizar, borrar) si los necesitas
}
