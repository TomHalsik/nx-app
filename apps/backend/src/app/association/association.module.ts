import { Module } from "@nestjs/common";
import { AssociationService } from "./association.service";
import { AssociationController } from "./association.controller";
import { PrismaModule } from "../../prisma/prisma.module";

@Module({
  controllers: [AssociationController],
  providers: [AssociationService],
  imports: [PrismaModule],
})
export class AssociationModule {}
