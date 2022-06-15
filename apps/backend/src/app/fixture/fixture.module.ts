import { Module } from "@nestjs/common";
import { FixtureService } from "./fixture.service";
import { FixtureController } from "./fixture.controller";
import { PrismaModule } from "../../prisma/prisma.module";

@Module({
  controllers: [FixtureController],
  providers: [FixtureService],
  imports: [PrismaModule],
})
export class FixtureModule {}
