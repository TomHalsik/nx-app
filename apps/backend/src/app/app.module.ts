import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { FixtureModule } from "./fixture/fixture.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [FixtureModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
