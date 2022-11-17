import {model, property, hasMany} from '@loopback/repository';
import {Empleado} from '.';
import {Empleado} from './empleado.model';

@model()
export class Directivo extends Empleado {
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
  categoria: number;

  @hasMany(() => Empleado)
  empleados: Empleado[];

  constructor(data?: Partial<Directivo>) {
    super(data);
  }
}

export interface DirectivoRelations {
  // describe navigational properties here
}

export type DirectivoWithRelations = Directivo & DirectivoRelations;
