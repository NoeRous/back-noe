import { Controller } from '@nestjs/common';
import { PostulationTestService } from 'src/services/postulation_test/postulation_test.service';

@Controller('postulation-test')
export class PostulationTestController {

    constructor(private postulationTestService:PostulationTestService){}




}
