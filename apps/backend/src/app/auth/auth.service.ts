import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import passwordUtil from "../../utils/password";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    return user && passwordUtil.checkPassword(password, user.password)
      ? this.login(user)
      : null;
  }

  async login(user: any) {
    console.log("login");
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
