export class EntityListRequest {
  name?: string;
  address?: string;
  limit: number;
  offset: number;

  constructor() {
    this.limit = 20;
    this.offset = 0;
  }
}
