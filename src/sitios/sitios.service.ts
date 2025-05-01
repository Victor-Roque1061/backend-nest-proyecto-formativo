import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sitio } from './entities/sitio.entity';
import { TipoSitio } from 'src/tipo-sitios/entities/tipo-sitio.entity'; // Asegúrate de importar correctamente TipoSitio
import { Usuario } from 'src/usuarios/entities/usuario.entity';// Asegúrate de importar correctamente Usuario
import { CreateSitioDto } from './dto/create-sitio.dto';
import { UpdateSitioDto } from './dto/update-sitio.dto';

@Injectable()
export class SitioService {
  constructor(
    @InjectRepository(Sitio)
    private readonly sitioRepo: Repository<Sitio>,

    @InjectRepository(TipoSitio)
    private readonly tipoSitioRepo: Repository<TipoSitio>,  // Repositorio de TipoSitio

    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,  // Repositorio de Usuario (si aplica)
  ) {}

  async create(dto: CreateSitioDto): Promise<Sitio> {
    
    // Buscar la entidad TipoSitio y Usuario por sus IDs
    const tipoSitio = await this.tipoSitioRepo.findOneBy({ id_tipo_sitio: dto.tipo_sitio });
    if (!tipoSitio) {
      throw new NotFoundException(`TipoSitio con ID ${dto.tipo_sitio} no encontrado`);
    }

    const personaEncargada = await this.usuarioRepo.findOneBy({ id_usuario: dto.persona_encargada });
    if (!personaEncargada) {
      throw new NotFoundException(`Usuario con ID ${dto.persona_encargada} no encontrado`);
    }

    // Crear el nuevo Sitio, asignando las entidades completas a las relaciones
    const nuevo = this.sitioRepo.create({
      ...dto,
      tipo_sitio: tipoSitio,  // Asignamos el objeto TipoSitio completo
      persona_encargada: personaEncargada,  // Asignamos el objeto Usuario completo
    });

    return this.sitioRepo.save(nuevo);
  }

  async findAll(): Promise<Sitio[]> {
    return this.sitioRepo.find();
  }

  async findOne(id: number): Promise<Sitio> {
    const sitio = await this.sitioRepo.findOneBy({ id_sitio: id });
    if (!sitio) {
      throw new NotFoundException(`Sitio con ID ${id} no encontrado`);
    }
    return sitio;
  }

  async update(id: number, dto: UpdateSitioDto): Promise<Sitio> {
    const sitio = await this.findOne(id);
    const actualizado = Object.assign(sitio, dto);
    return this.sitioRepo.save(actualizado);
  }

  async remove(id: number): Promise<void> {
    const result = await this.sitioRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Sitio con ID ${id} no encontrado`);
    }
  }
}
