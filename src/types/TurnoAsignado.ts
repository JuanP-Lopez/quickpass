export interface TurnoAsignado {
    idSlot: number;
    idEvento: number;
    evento: string;
    descripcionEvento: string;
    fecha: string;
    horaInicio: string;
    horaFinal: string;
    idUsuario: number;
    nombreUsuario: string;
    apellidoUsuario: string;
    correo: string;
    estado: string;
}