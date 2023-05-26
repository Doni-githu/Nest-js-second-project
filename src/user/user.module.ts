import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from "@nestjs/mongoose"
import { User, UserSchema } from './user.schema';
import { MulterModule } from "@nestjs/platform-express/multer/multer.module"
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MulterModule.register({
      dest: './uploads'
    }),],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule { }
