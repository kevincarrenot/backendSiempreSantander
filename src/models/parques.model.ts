import {Entity, model, property} from '@loopback/repository';

@model()
export class Parques extends Entity {
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


  constructor(data?: Partial<Parques>) {
    super(data);
  }
}

export interface ParquesRelations {
  // describe navigational properties here
}

export type ParquesWithRelations = Parques & ParquesRelations;
