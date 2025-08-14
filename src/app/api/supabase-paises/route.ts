import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(req: NextRequest) {
  const { data, error } = await supabase.from('paises').select('*');
  if (error) {
    console.error("Supabase error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
  if (!data || data.length === 0) {
    console.warn("No se encontraron datos en la tabla 'paises'");
  }
  return NextResponse.json({ success: true, data });
}
