import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { PrismaModule } from "../../prisma/prisma.module";
import { UserModule } from "../user/user.module";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";
import { AuthController } from "./auth.controller";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";

@Module({
  imports: [
    UserModule,
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "60s" },
    }),
  ],
  providers: [AuthService, LocalStrategy, UserService, JwtService],
  controllers: [AuthController],
})
export class AuthModule {}
