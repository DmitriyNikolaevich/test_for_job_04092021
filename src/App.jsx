import React from "react"
import s from "./App.module.scss"
import { Route, Switch } from "react-router"
import { DidntGetEmail } from "./Modules/DidntGetEmail"
import { EmailConfirmation } from "./Modules/EmailConfirmation"
import { EmailSent } from "./Modules/EmailSent"
import { Entrance } from "./Modules/Entrance"
import { ForgetPassword } from "./Modules/ForgetPassword"
import { Header } from "./Modules/Header"
import { Registration } from "./Modules/Registration"
import { Conditions } from "./Modules/Conditions"
import { ProfilePage } from "./Modules/ProfilePage"

export const App = () => {
  return (
    <div>
      <Header />
      <main>
      <Switch>
        <Route exact={true} path={'/'} render={() => <Entrance />} />
        <Route path={'/registration'} render={() => <Registration />} />
        <Route path={'/emailconfirmation'} render={() => <EmailConfirmation />} />
        <Route path={'/didntgetemail'} render={() => <DidntGetEmail />} />
        <Route path={'/forgetpassword'} render={() => <ForgetPassword />} />
        <Route path={'/emailsent/:from?'} render={() => <EmailSent />} />
        <Route path={'/conditions'} render={() => <Conditions />} />
        <Route path={'/profilepage'} render={() => <ProfilePage />} />
      </Switch>
      </main>
    </div>
  )
}
