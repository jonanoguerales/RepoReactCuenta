import React from "react";
import classes from "./account-form.component.module.css";
import { useNavigate } from "react-router-dom";
import { saveAccount } from "../api";
import { appRoutes } from "@/core/router";
import { validateFormCuenta } from "../validations";
import { AccountError, AccountVM, createEmptyAccountError, createEmptyAccountVm } from "../account.vm";
export const AccountFormComponent = () => {
    const [account, setAccount] = React.useState<AccountVM>(createEmptyAccountVm());
    const [errors, setErrors] = React.useState<AccountError>(
        createEmptyAccountError()
    );
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formValidationResult = validateFormCuenta(account);
        setErrors(formValidationResult.errors);
        if (formValidationResult.succeeded) {
            saveAccount(account);
            navigate(appRoutes.accountList);
        }
    };

    const handleFieldChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        setAccount({ ...account, [e.target.name]: e.target.value });
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.sectionForm}>
                <div className={classes.sectionFormColumna1}>
                    <label>Tipo de cuenta:</label>
                    <label>Alias:</label>
                </div>
                <div className={classes.sectionFormColumna2}>
                    <div className={classes.selectType}>
                        <select name="type"
                            onChange={handleFieldChange}
                            value={account.type}>
                            <option value="">Seleccionar</option>
                            <option value="1">Cuenta Corriente</option>
                            <option value="2">Cuenta de Ahorro</option>
                            <option value="3">Cuenta de Nómina</option>
                        </select>
                        <p className={classes.error}>{errors.type}</p>
                    </div>
                    <div className={classes.inputName}>
                        <input
                            name="name"
                            onChange={handleFieldChange} />
                        <p className={classes.error}>{errors.name}</p>
                    </div>
                </div>
            </div>
            <button className={classes.button} type="submit">Guardar</button>
        </form>

    )
}