export class EntityListResponse {
  success: boolean;
<<<<<<< HEAD
  cooperatives: Entity[];
  totalElements: number;
=======
  mutuales: Entity[];
  cantidad: number;
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
}

export class Entity {
  id: number;
<<<<<<< HEAD
  name: string;
  address: string;
  type: string;
=======
  nombre: string;
  direccion: string;
  tipo: string
  localidad: string;
  departamento: string;
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
}
