export type Genero = 'Mujer' | 'Hombre' | 'Otro';

export interface RegistroDatos {
    email: string;
    password?: string;
    nombre: string;
    apellidos: string;
    genero: Genero;
    direccion: string;
    fecha_nacimiento: string;
    telefono: string;
    quiere_ser_hermano: boolean;
}

export interface HermanoRepository {
    /** Registra un nuevo perfil en Supabase Auth y en la tabla 'hermanos' */
    registrar(datos: RegistroDatos): Promise<{ success: boolean; error?: string }>;

    /** Obtiene los datos de un usuario por su ID de autenticación */
    obtenerPorAuthId(authId: string): Promise<any>;
}