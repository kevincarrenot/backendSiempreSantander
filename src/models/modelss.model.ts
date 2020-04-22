import {Entity, model, property} from '@loopback/repository';

@model()
export class Modelss extends Entity {
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
  autor?: string;


  constructor(data?: Partial<Modelss>) {
    super(data);
  }
}

export interface ModelssRelations {
  // describe navigational properties here
}

export type ModelssWithRelations = Modelss & ModelssRelations;
