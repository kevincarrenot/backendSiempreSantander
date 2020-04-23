import {DefaultCrudRepository} from '@loopback/repository';
import {Agencias, AgenciasRelations} from '../models';
import {MongossDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AgenciasRepository extends DefaultCrudRepository<
  Agencias,
  typeof Agencias.prototype.id,
  AgenciasRelations
> {
  constructor(
    @inject('datasources.mongoss') dataSource: MongossDataSource,
  ) {
    super(Agencias, dataSource);
  }
}
