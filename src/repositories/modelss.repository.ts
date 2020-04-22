import {DefaultCrudRepository} from '@loopback/repository';
import {Modelss, ModelssRelations} from '../models';
import {MongossDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ModelssRepository extends DefaultCrudRepository<
  Modelss,
  typeof Modelss.prototype.id,
  ModelssRelations
> {
  constructor(
    @inject('datasources.mongoss') dataSource: MongossDataSource,
  ) {
    super(Modelss, dataSource);
  }
}
