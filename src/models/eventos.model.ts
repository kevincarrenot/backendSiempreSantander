import {Entity, model, property} from '@loopback/repository';

@model()
export class Eventos extends Entity {
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
    required: true,
  })
  provincia: string;


  constructor(data?: Partial<Eventos>) {
    super(data);
  }
}

export interface EventosRelations {
  // describe navigational properties here
}

export type EventosWithRelations = Eventos & EventosRelations;
