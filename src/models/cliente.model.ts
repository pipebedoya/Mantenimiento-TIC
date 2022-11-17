import {model, property, belongsTo} from '@loopback/repository';
import {Persona} from '.';
import {Empresa} from './empresa.model';

@model()
export class Cliente extends Persona {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @belongsTo(() => Empresa)
  empresaId: string;

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
