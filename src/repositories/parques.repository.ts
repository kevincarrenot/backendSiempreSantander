import {DefaultCrudRepository} from '@loopback/repository';
import {Parques, ParquesRelations} from '../models';
import {MongossDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ParquesRepository extends DefaultCrudRepository<
  Parques,
  typeof Parques.prototype.id,
  ParquesRelations
> {
  constructor(
    @inject('datasources.mongoss') dataSource: MongossDataSource,
  ) {
    super(Parques, dataSource);
  }
}
