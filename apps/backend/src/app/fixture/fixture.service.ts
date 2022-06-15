import { Injectable } from "@nestjs/common";
import { CreateFixtureDto } from "./dto/create-fixture.dto";
import { UpdateFixtureDto } from "./dto/update-fixture.dto";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class FixtureService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createFixtureDto: CreateFixtureDto) {
    return "This action adds a new fixture";
  }

  async findAll() {
    return await this.prismaService.fixture.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} fixture`;
  }

  async findAggregate() {
    return await this.prismaService.fixture.aggregate({
      _avg: {
        fthg: true,
      },
      _count: {
        fthg: true,
      },
      where: {
        home: {
          contains: "Paris",
        },
      },
      orderBy: {
        date: "desc",
      },
    });
  }

  update(id: number, updateFixtureDto: UpdateFixtureDto) {
    return `This action updates a #${id} fixture`;
  }

  remove(id: number) {
    return `This action removes a #${id} fixture`;
  }
}
