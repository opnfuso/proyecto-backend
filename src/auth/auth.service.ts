import { Injectable } from '@nestjs/common';
import { ManagementClient } from 'auth0';

@Injectable()
export class AuthService {
  async checkRole(query) {
    const management = new ManagementClient({
      domain: process.env.AUTH0_API_URL,
      token: process.env.AUTH0_API_TOKEN,
      audience: process.env.AUTH0_AUDIENCE,
    });

    const roles = await management.getUserRoles({ id: query.userId });
    let containsRole = false;

    roles.forEach((role) => {
      if (query.role === role.name) {
        containsRole = true;
      }
    });

    return { containsRole };
  }
}
