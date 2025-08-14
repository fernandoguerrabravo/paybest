// hooks/useUsuarios.ts
import { useEffect, useState } from 'react';

export default function useTransacciones() {
  const [transacciones, setTransacciones] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransacciones = async () => {
      try {
        const res = await fetch('/api/transacciones');
        const respuesta = await res.json();
        setTransacciones(respuesta.data);
      } catch (err) {
        setError('Error al obtener usuarios');
      } finally {
        setLoading(false);
      }
    };

    fetchTransacciones();
  }, []);

  return { transacciones, loading, error };
}
