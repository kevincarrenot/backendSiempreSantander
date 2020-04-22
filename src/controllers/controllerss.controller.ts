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
import {Modelss} from '../models';
import {ModelssRepository} from '../repositories';

export class ControllerssController {
  constructor(
    @repository(ModelssRepository)
    public modelssRepository : ModelssRepository,
  ) {}

  @post('/modelsses', {
    responses: {
      '200': {
        description: 'Modelss model instance',
        content: {'application/json': {schema: getModelSchemaRef(Modelss)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Modelss, {
            title: 'NewModelss',
            exclude: ['id'],
          }),
        },
      },
    })
    modelss: Omit<Modelss, 'id'>,
  ): Promise<Modelss> {
    return this.modelssRepository.create(modelss);
  }

  @get('/modelsses/count', {
    responses: {
      '200': {
        description: 'Modelss model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Modelss) where?: Where<Modelss>,
  ): Promise<Count> {
    return this.modelssRepository.count(where);
  }

  @get('/modelsses', {
    responses: {
      '200': {
        description: 'Array of Modelss model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Modelss, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Modelss) filter?: Filter<Modelss>,
  ): Promise<Modelss[]> {
    return this.modelssRepository.find(filter);
  }

  @patch('/modelsses', {
    responses: {
      '200': {
        description: 'Modelss PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Modelss, {partial: true}),
        },
      },
    })
    modelss: Modelss,
    @param.where(Modelss) where?: Where<Modelss>,
  ): Promise<Count> {
    return this.modelssRepository.updateAll(modelss, where);
  }

  @get('/modelsses/{id}', {
    responses: {
      '200': {
        description: 'Modelss model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Modelss, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Modelss, {exclude: 'where'}) filter?: FilterExcludingWhere<Modelss>
  ): Promise<Modelss> {
    return this.modelssRepository.findById(id, filter);
  }

  @patch('/modelsses/{id}', {
    responses: {
      '204': {
        description: 'Modelss PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Modelss, {partial: true}),
        },
      },
    })
    modelss: Modelss,
  ): Promise<void> {
    await this.modelssRepository.updateById(id, modelss);
  }

  @put('/modelsses/{id}', {
    responses: {
      '204': {
        description: 'Modelss PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() modelss: Modelss,
  ): Promise<void> {
    await this.modelssRepository.replaceById(id, modelss);
  }

  @del('/modelsses/{id}', {
    responses: {
      '204': {
        description: 'Modelss DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.modelssRepository.deleteById(id);
  }
}
