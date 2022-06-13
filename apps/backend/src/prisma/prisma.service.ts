import { PrismaClient } from "@prisma/client";
import {
  INestApplication,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from "@nestjs/common";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  enableShutdownHooks(app: INestApplication) {
    this.$on("beforeExit", () => {
      void (async () => {
        await app.close();
      })();
    });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
