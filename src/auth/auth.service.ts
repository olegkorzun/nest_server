import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
const crypto = require('crypto');

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findUser(username);
    if (user) {
      const hash = crypto.pbkdf2Sync(password, user.salt, 10000, 512, 'sha512').toString('hex');
      if (user.hash === hash) {
        const { hash, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async login(user: any) {
    const payload = { userid: user._doc._id, username: user._doc.name,  role: user._doc.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}