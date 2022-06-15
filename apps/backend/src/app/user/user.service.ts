import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import password from "../../utils/password";

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const data = { ...createUserDto["data"] };
    data.password = password.encryptPassword(data.password);
    data.email = data.email.toLowerCase();
    let res;
    try {
      res = await this.prismaService.user.create({ data });
    } catch (e) {}
    return res;
  }

  async findByEmail(email: any) {
    return await this.prismaService.user.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
