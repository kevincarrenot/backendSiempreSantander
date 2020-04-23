import {DefaultCrudRepository} from '@loopback/repository';
import {Avistamientos, AvistamientosRelations} from '../models';
import {MongossDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AvistamientosRepository extends DefaultCrudRepository<
  Avistamientos,
  typeof Avistamientos.prototype.id,
  AvistamientosRelations
> {
  constructor(
    @inject('datasources.mongoss') dataSource: MongossDataSource,
  ) {
    super(Avistamientos, dataSource);
  }
}
