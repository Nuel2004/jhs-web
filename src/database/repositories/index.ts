import { SupabaseHermanoRepository } from '../supabase/SupabaseHermanoRepository';

// Instanciamos el repositorio concreto
export const hermanoRepository = new SupabaseHermanoRepository();

// Exportamos también los tipos para que los componentes puedan usarlos (como el enum Genero)
export * from './HermanoRepository';