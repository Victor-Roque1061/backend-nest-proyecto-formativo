import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity'; // Asegúrate de que esta entidad exista
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(Usuario)
    private readonly vendedorRepository: Repository<Usuario>,
    private readonly configService: ConfigService,
  ) {
    console.log('JWT_SECRET:', this.configService.get('JWT_SECRET'));
  }

  async login(email: string, contrasena: string) {
    const usuarios = await this.vendedorRepository.findOne({
      where: { email },
    });

    if (!usuarios) {
      return null;
    }

    // Si la contraseña no está hasheada, compararla directamente
    // En producción, deberías usar bcrypt.compare
    if (usuarios.contrasena !== contrasena) {
      return null;
    }

    return this.generarToken(usuarios);
  }

  async generarToken(usuarios: Usuario) {
    const payload = {
      sub: usuarios.email,
      username: usuarios.email,
    };

    return {
      access_token: this.jwtService.sign(payload),
      usuarios: {
        email: usuarios.email
      }
    };
  }
}


