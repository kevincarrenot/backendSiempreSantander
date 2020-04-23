import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Avistamientos} from '../models';
import {AvistamientosRepository} from '../repositories';

export class AvistamientosController {
  constructor(
    @repository(AvistamientosRepository)
    public avistamientosRepository : AvistamientosRepository,
  ) {}

  @post('/avistamientos', {
    responses: {
      '200': {
        description: 'Avistamientos model instance',
        content: {'application/json': {schema: getModelSchemaRef(Avistamientos)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Avistamientos, {
            title: 'NewAvistamientos',
            exclude: ['id'],
          }),
        },
      },
    })
    avistamientos: Omit<Avistamientos, 'id'>,
  ): Promise<Avistamientos> {
    return this.avistamientosRepository.create(avistamientos);
  }

  @get('/avistamientos/count', {
    responses: {
      '200': {
        description: 'Avistamientos model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Avistamientos) where?: Where<Avistamientos>,
  ): Promise<Count> {
    return this.avistamientosRepository.count(where);
  }

  @get('/avistamientos', {
    responses: {
      '200': {
        description: 'Array of Avistamientos model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Avistamientos, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Avistamientos) filter?: Filter<Avistamientos>,
  ): Promise<Avistamientos[]> {
    return this.avistamientosRepository.find(filter);
  }

  @patch('/avistamientos', {
    responses: {
      '200': {
        description: 'Avistamientos PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Avistamientos, {partial: true}),
        },
      },
    })
    avistamientos: Avistamientos,
    @param.where(Avistamientos) where?: Where<Avistamientos>,
  ): Promise<Count> {
    return this.avistamientosRepository.updateAll(avistamientos, where);
  }

  @get('/avistamientos/{id}', {
    responses: {
      '200': {
        description: 'Avistamientos model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Avistamientos, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Avistamientos, {exclude: 'where'}) filter?: FilterExcludingWhere<Avistamientos>
  ): Promise<Avistamientos> {
    return this.avistamientosRepository.findById(id, filter);
  }

  @patch('/avistamientos/{id}', {
    responses: {
      '204': {
        description: 'Avistamientos PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Avistamientos, {partial: true}),
        },
      },
    })
    avistamientos: Avistamientos,
  ): Promise<void> {
    await this.avistamientosRepository.updateById(id, avistamientos);
  }

  @put('/avistamientos/{id}', {
    responses: {
      '204': {
        description: 'Avistamientos PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() avistamientos: Avistamientos,
  ): Promise<void> {
    await this.avistamientosRepository.replaceById(id, avistamientos);
  }

  @del('/avistamientos/{id}', {
    responses: {
      '204': {
        description: 'Avistamientos DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.avistamientosRepository.deleteById(id);
  }
}
