import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { TipoSitio } from '../../tipo-sitios/entities/tipo-sitio.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Material } from '../../materiales/entities/materiale.entity';

@Entity('sitios')
export class Sitio {
  @PrimaryGeneratedColumn()
  id_sitio: number;

  @Column({ length: 100 })
  nombre_sitio: string;

  @Column('text')
  ubicacion: string;

  @Column('text')
  ficha_tecnica: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @CreateDateColumn()
  fecha_creacion: Date;

  @UpdateDateColumn()
  fecha_modificacion: Date;

  @ManyToOne(() => TipoSitio, tipo => tipo.sitios)
  tipo_sitio: TipoSitio;

  @ManyToOne(() => Usuario, usuario => usuario.sitios_encargados)
  persona_encargada: Usuario;

  @OneToMany(() => Material, material => material.sitio)
  materiales: Material[];
}
