import {DefaultCrudRepository} from '@loopback/repository';
import {Gastronomia, GastronomiaRelations} from '../models';
import {MongossDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GastronomiaRepository extends DefaultCrudRepository<
  Gastronomia,
  typeof Gastronomia.prototype.id,
  GastronomiaRelations
> {
  constructor(
    @inject('datasources.mongoss') dataSource: MongossDataSource,
  ) {
    super(Gastronomia, dataSource);
  }
}
