import {Entity, model, property} from '@loopback/repository';

@model()
export class Gastronomia extends Entity {
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


  constructor(data?: Partial<Gastronomia>) {
    super(data);
  }
}

export interface GastronomiaRelations {
  // describe navigational properties here
}

export type GastronomiaWithRelations = Gastronomia & GastronomiaRelations;
