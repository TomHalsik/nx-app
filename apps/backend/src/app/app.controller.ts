import { Controller, Request, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { LocalAuthGuard } from "./auth/local-auth.gard";

@Controller()
export class AppController {
  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Request() req) {
    console.log("REQ:", req);
    return req.user;
  }
}
