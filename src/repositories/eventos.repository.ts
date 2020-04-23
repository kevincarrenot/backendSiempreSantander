import {DefaultCrudRepository} from '@loopback/repository';
import {Eventos, EventosRelations} from '../models';
import {MongossDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EventosRepository extends DefaultCrudRepository<
  Eventos,
  typeof Eventos.prototype.id,
  EventosRelations
> {
  constructor(
    @inject('datasources.mongoss') dataSource: MongossDataSource,
  ) {
    super(Eventos, dataSource);
  }
}
