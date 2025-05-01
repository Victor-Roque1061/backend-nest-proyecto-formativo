import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, Column } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Programa } from '../../programas/entities/programa.entity';

@Entity('fichas')
export class Ficha {
  @PrimaryGeneratedColumn()
  id_ficha: number;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @CreateDateColumn()
  fecha_creacion: Date;

  @UpdateDateColumn()
  fecha_modificacion: Date;

  @ManyToOne(() => Usuario, usuario => usuario.fichas)
  usuario_ficha_id: Usuario;

  @ManyToOne(() => Programa, programa => programa.fichas)
  programa_id: Programa;
}
