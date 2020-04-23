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
import {Agencias} from '../models';
import {AgenciasRepository} from '../repositories';

export class AgenciasController {
  constructor(
    @repository(AgenciasRepository)
    public agenciasRepository : AgenciasRepository,
  ) {}

  @post('/agencias', {
    responses: {
      '200': {
        description: 'Agencias model instance',
        content: {'application/json': {schema: getModelSchemaRef(Agencias)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Agencias, {
            title: 'NewAgencias',
            exclude: ['id'],
          }),
        },
      },
    })
    agencias: Omit<Agencias, 'id'>,
  ): Promise<Agencias> {
    return this.agenciasRepository.create(agencias);
  }

  @get('/agencias/count', {
    responses: {
      '200': {
        description: 'Agencias model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Agencias) where?: Where<Agencias>,
  ): Promise<Count> {
    return this.agenciasRepository.count(where);
  }

  @get('/agencias', {
    responses: {
      '200': {
        description: 'Array of Agencias model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Agencias, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Agencias) filter?: Filter<Agencias>,
  ): Promise<Agencias[]> {
    return this.agenciasRepository.find(filter);
  }

  @patch('/agencias', {
    responses: {
      '200': {
        description: 'Agencias PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Agencias, {partial: true}),
        },
      },
    })
    agencias: Agencias,
    @param.where(Agencias) where?: Where<Agencias>,
  ): Promise<Count> {
    return this.agenciasRepository.updateAll(agencias, where);
  }

  @get('/agencias/{id}', {
    responses: {
      '200': {
        description: 'Agencias model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Agencias, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Agencias, {exclude: 'where'}) filter?: FilterExcludingWhere<Agencias>
  ): Promise<Agencias> {
    return this.agenciasRepository.findById(id, filter);
  }

  @patch('/agencias/{id}', {
    responses: {
      '204': {
        description: 'Agencias PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Agencias, {partial: true}),
        },
      },
    })
    agencias: Agencias,
  ): Promise<void> {
    await this.agenciasRepository.updateById(id, agencias);
  }

  @put('/agencias/{id}', {
    responses: {
      '204': {
        description: 'Agencias PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() agencias: Agencias,
  ): Promise<void> {
    await this.agenciasRepository.replaceById(id, agencias);
  }

  @del('/agencias/{id}', {
    responses: {
      '204': {
        description: 'Agencias DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.agenciasRepository.deleteById(id);
  }
}
