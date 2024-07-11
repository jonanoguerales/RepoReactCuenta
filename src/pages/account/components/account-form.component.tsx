import { useRef } from "react";
import classes from "./account-form.component.module.css";
import { useNavigate } from "react-router-dom";
import { saveAccount } from "../api";
import { appRoutes } from "@/core/router";
export const AccountFormComponent = () => {

    const accountTypeRef = useRef<HTMLSelectElement>(null);
    const aliasRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleGuardarUsuario = (e: React.FormEvent) => {
        e.preventDefault();
        const accountType = accountTypeRef.current?.value ?? "";
        const alias = aliasRef.current?.value ?? "";
        saveAccount({ type: accountType, name: alias });
        navigate(appRoutes.accountList);
    }

    return (
        <form className={classes.form} onSubmit={handleGuardarUsuario}>
            <div>
                <label>Tipo de cuenta:</label>
                <select ref={accountTypeRef}>
                    <option value="">Seleccionar</option>
                    <option value="1">Gastos mes</option>
                    <option value="2">Compartir</option>
                    <option value="3">Ahorro</option>
                </select>
            </div>
            <div>
                <label>Alias:</label>
                <input type="text" ref={aliasRef} />
            </div>
            <button type="submit">Guardar</button>
        </form>

    )
}