import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('bootcamp')
export class BootcampController {
    @Get()
    getAllBootcamps(): string{
        return "aqui se mostraran todos los bootcamps"
    }
    @Get()
    getBootcampById(@Param("id") id:string) :string{
        return `Aqui se va a mostrar el bootcamp con id ${id}`
    } 
    @Post()
    createBootcamp(): string{
        return `Aqui se crearan bootcamps`
    }
    @Put(":id")
    updateBootcamp(@Param("id") id: string) : string {
        return `Aqui se actualiza el bootcamp ${id}`
    }
    @Delete(":id")
    deleteBootcamp(@Param("id") id: string) :string {
        return `Aqui se borrara el bootcamp ${id}`
    }
}
