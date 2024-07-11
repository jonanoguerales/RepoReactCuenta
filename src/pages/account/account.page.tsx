import { AppLayout } from "@/layouts";
import React, { useRef } from "react";
import classes from "./account.page.module.css";
import { saveAccount } from "./api";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const AccountPage: React.FC = () => {

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
  console.log(handleGuardarUsuario);
  return (
    <>
      <AppLayout>
        <div className={classes.root}>
          <div className={classes.headerContainer}>
            <h1>Cuenta Bancaria</h1>
          </div>
          <div className={classes.sectionContainer}>
            <form className={classes.form} onSubmit={handleGuardarUsuario}>
              <div>
                <label>Tipo de cuenta:</label>
                <select ref={accountTypeRef}>
                  <option value="Seleccionar">Seleccionar</option>
                  <option value="Gastos mes">Gastos mes</option>
                  <option value="Compartir">Compartir</option>
                  <option value="Ahorro">Ahorro</option>
                </select>
              </div>
              <div>
                <label>Alias:</label>
                <input type="text" ref={aliasRef} />
              </div>
              <button type="submit">Guardar</button>
            </form>
          </div>
        </div>
      </AppLayout >
    </>
  )
};
