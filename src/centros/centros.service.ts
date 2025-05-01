import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCentroDto } from './dto/create-centro.dto';
import { UpdateCentroDto } from './dto/update-centro.dto';
import { Centro } from './entities/centro.entity';
import { Municipio } from '../municipios/entities/municipio.entity'; // Importa la entidad Municipio

@Injectable()
export class CentrosService {
  constructor(
    @InjectRepository(Centro)
    private readonly centroRepository: Repository<Centro>,
  ) {}

  async create(createCentroDto: CreateCentroDto) {
    const { municipioId, ...rest } = createCentroDto;

    const municipio = municipioId
      ? await this.centroRepository.manager.findOne(Municipio, { where: { id_municipio: municipioId } })
      : null;

    if (municipioId && !municipio) {
      throw new NotFoundException(`Municipio with ID ${municipioId} not found`);
    }

    const centro = this.centroRepository.create({
      ...rest,
      ...(municipio && { municipio }),
    });

    return await this.centroRepository.save(centro);
  }

  async findAll() {
    return await this.centroRepository.find({
      relations: ['municipio', 'sedes'],
    });
  }

  async findOne(id: number) {
    const centro = await this.centroRepository.findOne({
      where: { id_centro: id },
      relations: ['municipio', 'sedes'],
    });
    
    if (!centro) {
      throw new NotFoundException(`Centro with ID ${id} not found`);
    }
    
    return centro;
  }

  async update(id: number, updateCentroDto: UpdateCentroDto) {
    const centro = await this.findOne(id);
    
    Object.assign(centro, updateCentroDto);
    return await this.centroRepository.save(centro);
  }

  async remove(id: number) {
    const centro = await this.findOne(id);
    return await this.centroRepository.remove(centro);
  }
}
