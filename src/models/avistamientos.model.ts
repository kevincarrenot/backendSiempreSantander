import {Entity, model, property} from '@loopback/repository';

@model()
export class Avistamientos extends Entity {
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
  provincia?: string;


  constructor(data?: Partial<Avistamientos>) {
    super(data);
  }
}

export interface AvistamientosRelations {
  // describe navigational properties here
}

export type AvistamientosWithRelations = Avistamientos & AvistamientosRelations;
