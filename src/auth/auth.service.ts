import { Injectable } from '@nestjs/common';
import { ManagementClient } from 'auth0';

@Injectable()
export class AuthService {
  async checkRole(query) {
    const management = new ManagementClient({
      domain: process.env.AUTH0_API_URL,
      token: process.env.AUTH0_API_TOKEN,
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
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
