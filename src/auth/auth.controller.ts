import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
/**
 * Clase controlador de administradores que define las rutas del path 'administradores' en la url
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('check-role')
  async checkRole(@Query() query) {
    return this.authService.checkRole(query);
  }
}
