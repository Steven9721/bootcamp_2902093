import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampController } from './bootcamp.controller';
import { CoursesController } from './courses.controller';
import { UsersController } from './users.controller';
import { ReviewsController } from './reviews.controller';


@Module({
  imports: [],
  controllers: [AppController, BootcampController, CoursesController, UsersController, ReviewsController],
  providers: [AppService],
})
export class AppModule {}
