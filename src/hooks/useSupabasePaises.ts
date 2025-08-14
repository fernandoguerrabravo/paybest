import { useEffect, useState } from "react";

export function useSupabasePais() {
  const [paises, setPaises] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("/api/supabase-paises")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPaises(data.data);
          setError(null);
        } else {
          setError(data.error || "Error desconocido");
        }
      })
      .catch(() => setError("Error de red"))
      .finally(() => setLoading(false));
  }, []);

  return { paises, loading, error };
}
