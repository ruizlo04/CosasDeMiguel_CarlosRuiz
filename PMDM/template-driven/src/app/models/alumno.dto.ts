export class StudentDto{
    constructor(
        public name: string,
        public apellido: string,
        public nif: string,
        public email: string,
        public sexo: string,
        public comoConocioPagina: string,
        public contrasenya: string,
        public curso: string,
        public age: number,
        public numero: string
    ){}
}