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
import {Gastronomia} from '../models';
import {GastronomiaRepository} from '../repositories';

export class GastronomiaController {
  constructor(
    @repository(GastronomiaRepository)
    public gastronomiaRepository : GastronomiaRepository,
  ) {}

  @post('/gastronomias', {
    responses: {
      '200': {
        description: 'Gastronomia model instance',
        content: {'application/json': {schema: getModelSchemaRef(Gastronomia)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gastronomia, {
            title: 'NewGastronomia',
            exclude: ['id'],
          }),
        },
      },
    })
    gastronomia: Omit<Gastronomia, 'id'>,
  ): Promise<Gastronomia> {
    return this.gastronomiaRepository.create(gastronomia);
  }

  @get('/gastronomias/count', {
    responses: {
      '200': {
        description: 'Gastronomia model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Gastronomia) where?: Where<Gastronomia>,
  ): Promise<Count> {
    return this.gastronomiaRepository.count(where);
  }

  @get('/gastronomias', {
    responses: {
      '200': {
        description: 'Array of Gastronomia model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Gastronomia, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Gastronomia) filter?: Filter<Gastronomia>,
  ): Promise<Gastronomia[]> {
    return this.gastronomiaRepository.find(filter);
  }

  @patch('/gastronomias', {
    responses: {
      '200': {
        description: 'Gastronomia PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gastronomia, {partial: true}),
        },
      },
    })
    gastronomia: Gastronomia,
    @param.where(Gastronomia) where?: Where<Gastronomia>,
  ): Promise<Count> {
    return this.gastronomiaRepository.updateAll(gastronomia, where);
  }

  @get('/gastronomias/{id}', {
    responses: {
      '200': {
        description: 'Gastronomia model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Gastronomia, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Gastronomia, {exclude: 'where'}) filter?: FilterExcludingWhere<Gastronomia>
  ): Promise<Gastronomia> {
    return this.gastronomiaRepository.findById(id, filter);
  }

  @patch('/gastronomias/{id}', {
    responses: {
      '204': {
        description: 'Gastronomia PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gastronomia, {partial: true}),
        },
      },
    })
    gastronomia: Gastronomia,
  ): Promise<void> {
    await this.gastronomiaRepository.updateById(id, gastronomia);
  }

  @put('/gastronomias/{id}', {
    responses: {
      '204': {
        description: 'Gastronomia PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() gastronomia: Gastronomia,
  ): Promise<void> {
    await this.gastronomiaRepository.replaceById(id, gastronomia);
  }

  @del('/gastronomias/{id}', {
    responses: {
      '204': {
        description: 'Gastronomia DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.gastronomiaRepository.deleteById(id);
  }
}
