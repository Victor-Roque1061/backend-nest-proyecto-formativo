import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, Column } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { TipoMovimiento } from '../../tipos-movimientos/entities/tipos-movimiento.entity';

@Entity('movimientos')
export class Movimiento {
  @PrimaryGeneratedColumn()
  id_movimiento: number;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @CreateDateColumn()
  fecha_creacion: Date;

  @UpdateDateColumn()
  fecha_modificacion: Date;

  @ManyToOne(() => Usuario, usuario => usuario.movimientos)
  usuario_movimiento_id: Usuario;

  @ManyToOne(() => TipoMovimiento, tipo => tipo.movimientos)
  tipo_movimiento_id: TipoMovimiento;
}
