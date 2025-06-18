export interface ConstructionWorker {
  id: number;
  name: string;
}

export interface Task {
  id: number;
  nombre: string; // clave para traducir el nombre de la tarea
  fechaLimite: string; // formato YYYY-MM-DD
  prioridad: number;
  estado: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  assignedTo: ConstructionWorker;
}
