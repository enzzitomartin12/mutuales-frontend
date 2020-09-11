export class EntityListRequest {
  name?: string;
  address?: string;
<<<<<<< HEAD
=======
  type?: string;
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
  limit: number;
  offset: number;

  constructor() {
<<<<<<< HEAD
    this.limit = 15;
=======
    this.limit = 20;
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
    this.offset = 0;
  }
}
