import { Injectable } from "@nestjs/common";
import { CreateAssociationDto } from "./dto/create-association.dto";
import { UpdateAssociationDto } from "./dto/update-association.dto";
import { PrismaService } from "../../prisma/prisma.service";
import password from "../../utils/password";

@Injectable()
export class AssociationService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createAssociationDto: CreateAssociationDto) {
    const data = { ...createAssociationDto["data"], password: "test" };
    data.password = password.encryptPassword(data.password);
    console.log("PAssword : ", data.password);
    try {
      const res = await this.prismaService.association.create({
        data,
      });
      return res;
    } catch (e) {}
  }

  findAll() {
    return `This action returns all association`;
  }

  findOne(id: number) {
    return `This action returns a #${id} association`;
  }

  update(id: number, updateAssociationDto: UpdateAssociationDto) {
    return `This action updates a #${id} association`;
  }

  remove(id: number) {
    return `This action removes a #${id} association`;
  }
}
