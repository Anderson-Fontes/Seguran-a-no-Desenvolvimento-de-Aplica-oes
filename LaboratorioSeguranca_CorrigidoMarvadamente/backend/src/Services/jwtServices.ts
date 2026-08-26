import jwt from "jsonwebtoken";
import { RetornoPayload } from "../Tipos/retornoPayload_CORRIGIDOMARVADAMENTE";

export default function ValidarToken(token: string): RetornoPayload | null {
    try {
        const decoded = jwt.verify(token, (global as any).segredoJwt) as RetornoPayload;
        return {
            id: decoded.id,
            tipo: decoded.tipo,
            email: decoded.email,
            nome: decoded.nome
        };
    } catch (error) {
        return null;
    }
}


