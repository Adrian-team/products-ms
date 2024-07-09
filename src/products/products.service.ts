import {
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaClient } from '@prisma/client';
import { PaginationDto } from 'src/common';

@Injectable()
export class ProductsService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('ProductsService');

  async onModuleInit() {
    await this.$connect();
    this.logger.log('💫💫💫 DataBase connected 💫💫💫');
  }
  create(createProductDto: CreateProductDto) {
    return this.product.create({ data: createProductDto });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const totalPages = await this.product.count({
      where: { available: true },
    });
    const currentPage = page;
    const lastPage = Math.ceil(totalPages / limit);
    const data = await this.product.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: { available: true },
    });

    return {
      data,
      currentPage,
      totalPages,
      lastPage,
    };
  }

  async findOne(id: number) {
    const product = await this.product.findFirst({
      where: { id, available: true },
    });
    if (!product) {
      throw new NotFoundException('Something bad happened', {
        cause: new Error(),
        description: 'Product not found',
      });
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id: __, ...data } = updateProductDto;

    await this.findOne(id);

    return this.product.update({
      where: { id },
      data: data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    // return this.product.delete({
    //   where: { id },
    // });
    return this.product.update({
      where: { id },
      data: {
        available: false,
      },
    });
  }
}
