"use client";
import { useState } from "react";
import { LoginBody, LoginResponse, LoginResponseSchema } from "@/lib/usuarios/types";

export default function LoginPage() {
    const [form, setForm] = useState<LoginBody>({ email: "", password: "" });
    const [error, setError] = useState<string | null>(null);

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);

        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const json = await res.json();
        const parsed = LoginResponseSchema.safeParse(json);
        if (!parsed.success) {
            setError("Respuesta inesperada del servidor");
            return;
        }

        const data: LoginResponse = parsed.data;
        if ("error" in data) {
            setError(data.error);
            return;
        }

        // Redirección según rol
        if (data.role === "RECEPTION") window.location.href = "/reception";
        else if (data.role === "SPECIALIST") window.location.href = "/specialist";
        else window.location.href = "/";
    }

    return (
        <main className="min-h-dvh flex items-center justify-center p-6">
            <form onSubmit={onSubmit} className="w-full max-w-sm space-y-4 bg-white p-6 rounded shadow">
                <h1 className="text-xl font-bold">Iniciar sesión</h1>
                <input
                    className="w-full border p-2 rounded"
                    placeholder="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                />
                <input
                    className="w-full border p-2 rounded"
                    type="password"
                    placeholder="contraseña"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                />
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <button className="w-full bg-black text-white rounded p-2">Ingresar</button>
            </form>
        </main>
    );
}