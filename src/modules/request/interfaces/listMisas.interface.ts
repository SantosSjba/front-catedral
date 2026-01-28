export interface Misa {
    idmisa: number;
    idtipomisa: number;
    titulo: string;
    fechacelebracion: string;
    horainicio: string;
    horafin: string;
    estado: boolean;
    idusuariocreacion: number;
    idusuariomodificacion: any;
    fechacreacion: string;
    fechamodificacion: any;
    tipomisa: Tipomisa;
    usuario_creador: UsuarioCreador;
}

export interface Tipomisa {
    nombre: string;
    precio: number;
}

export interface UsuarioCreador {
    correo: string;
    nombre: string;
}