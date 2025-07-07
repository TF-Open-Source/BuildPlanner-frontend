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
  private apiUrl = 'http://localhost:8080/api/workers'; // Ajusta el puerto si es diferente

  constructor(private http: HttpClient) {}

  getWorkers(): Observable<ConstructionWorker[]> {
    return this.http.get<ConstructionWorker[]>(this.apiUrl);
  }
  createWorker(worker: Partial<ConstructionWorker>): Observable<ConstructionWorker> {
    return this.http.post<ConstructionWorker>(this.apiUrl, worker);
  }
  updateWorker(id: number, worker: Partial<ConstructionWorker>): Observable<ConstructionWorker> {
    return this.http.put<ConstructionWorker>(`${this.apiUrl}/${id}`, worker);
  }
  deleteWorker(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
