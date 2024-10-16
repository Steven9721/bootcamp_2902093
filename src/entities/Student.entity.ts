export class Student{

    constructor(id, nom:string, edad:number, c:string){
        this.identificacion = id;
        this.nombre = nom;
        this.edad = edad;
        this.ciudad = c;
    }

    identificacion: number;
    nombre: string;
    edad: number;
    ciudad: string;
}
