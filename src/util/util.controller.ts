/* eslint-disable prettier/prettier */
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { extname } from 'path';
@ApiTags('Subir Archivo')
@Controller('util')
export class UtilController {

    
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
          destination: './uploads'
          , filename: (req, file, cb) => {

            // Generating a 32 random chars long string
            const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
            //Calling the callback passing the random name generated with the original extension name
           // cb(null, `${randomName}${extname(file.originalname)}`)
            cb(null, `${randomName}-${file.originalname}`)
          }
        })
      }))
    @Post('file-upload')
    uploadFile(@UploadedFile() file: Express.Multer.File) {
       
        return {
            filename:file.filename,
          //  file: file.buffer.toString(),
          };

    }

}
