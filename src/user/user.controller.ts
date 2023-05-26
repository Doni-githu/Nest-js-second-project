import { Controller, Get, Param, Post, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { FilesInterceptor } from "@nestjs/platform-express/multer"
import { diskStorage } from 'multer'


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    @UseInterceptors(FilesInterceptor('image', 1, {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                cb(null, `${file.originalname}${Date.now()}`)
            }
        })
    }))
    uploadFile(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
        return res.send({
            message: 'Cool'
        })
    }

    @Get(':path')
    returnPath(@Param('path') path2, @Res() res) {
        return res.sendFile(path2, { root: 'uploads' })
    }
}
