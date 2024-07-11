import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./account.page.module.css";
import { AccountFormComponent } from "./components/account-form.component";

export const AccountPage: React.FC = () => {
  return (
    <>
      <AppLayout>
        <div className={classes.root}>
          <div className={classes.headerContainer}>
            <h1>Cuenta Bancaria</h1>
          </div>
          <div className={classes.sectionContainer}>
            <AccountFormComponent />
          </div>
        </div>
      </AppLayout >
    </>
  )
};
