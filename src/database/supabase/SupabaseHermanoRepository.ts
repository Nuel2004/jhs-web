import { supabaseClient } from './Client';
import { HermanoRepository, RegistroDatos } from '../repositories/HermanoRepository';

export class SupabaseHermanoRepository implements HermanoRepository {

    async registrar(datos: RegistroDatos): Promise<{ success: boolean; error?: string }> {
        try {
            // 1. Crear el usuario en el sistema de Auth de Supabase
            const { data: authData, error: authError } = await supabaseClient.auth.signUp({
                email: datos.email,
                password: datos.password || '',
            });

            if (authError) throw authError;
            if (!authData.user) throw new Error("No se pudo crear el usuario de autenticación.");

            // Determinamos el rol y el estado basados en su elección en la UI
            const rolAsignado = datos.quiere_ser_hermano ? 'hermano' : 'registrado';
            const estadoAsignado = datos.quiere_ser_hermano ? 'pendiente_pago' : 'no_aplica';

            // 2. Insertar los datos personales en la tabla 'hermanos'
            const { error: dbError } = await supabaseClient
                .from('hermanos')
                .insert([
                    {
                        auth_id: authData.user.id,
                        email: datos.email,
                        nombre: datos.nombre,
                        apellidos: datos.apellidos,
                        genero: datos.genero,
                        direccion: datos.direccion,
                        fecha_nacimiento: datos.fecha_nacimiento,
                        telefono: datos.telefono,
                        rol: rolAsignado,
                        estado: estadoAsignado
                    }
                ]);

            if (dbError) {
                // En un caso real avanzado, si falla la BD, podrías revertir el alta de Auth
                throw dbError;
            }

            return { success: true };
        } catch (error: any) {
            console.error("Error en SupabaseHermanoRepository:", error.message);
            return { success: false, error: error.message };
        }
    }

    async obtenerPorAuthId(authId: string) {
        const { data, error } = await supabaseClient
            .from('hermanos')
            .select('*')
            .eq('auth_id', authId)
            .single();

        if (error) throw error;
        return data;
    }
}