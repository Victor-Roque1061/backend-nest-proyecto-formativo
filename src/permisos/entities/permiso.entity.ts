import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Rol } from '../../roles/entities/role.entity';
import { Modulo } from '../../modulos/entities/modulo.entity';

@Entity('permisos')
export class Permiso {
  @PrimaryGeneratedColumn()
  id_permiso: number;

  @Column()
  nombre: string;

  @Column({ length: 100 })
  codigo_nombre: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @CreateDateColumn()
  fecha_creacion: Date;

  @ManyToOne(() => Modulo, modulo => modulo.permisos)
  modulo_id: Modulo;

  @ManyToOne(() => Rol, rol => rol.permisos)
  rol_id: Rol;
}
