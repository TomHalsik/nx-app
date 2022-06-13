import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AssociationModule } from "./association/association.module";

@Module({
  imports: [AssociationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
