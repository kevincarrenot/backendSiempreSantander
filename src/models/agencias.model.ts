import {Entity, model, property} from '@loopback/repository';

@model()
export class Agencias extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'string',
  })
  descripcion?: string;


  constructor(data?: Partial<Agencias>) {
    super(data);
  }
}

export interface AgenciasRelations {
  // describe navigational properties here
}

export type AgenciasWithRelations = Agencias & AgenciasRelations;
