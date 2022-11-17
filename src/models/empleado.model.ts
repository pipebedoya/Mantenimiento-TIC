import {model, property, belongsTo} from '@loopback/repository';
import {Persona} from '.';
import {Empresa} from './empresa.model';
import {Directivo} from './directivo.model';

@model()
export class Empleado extends Persona {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  sueldo_bruto: number;

  @belongsTo(() => Empresa)
  empresaId: string;

  @belongsTo(() => Directivo)
  directivoId: string;

  constructor(data?: Partial<Empleado>) {
    super(data);
  }
}

export interface EmpleadoRelations {
  // describe navigational properties here
}

export type EmpleadoWithRelations = Empleado & EmpleadoRelations;
