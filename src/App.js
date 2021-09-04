import React from "react"
import { Route, Switch } from "react-router"
import { DidntGetEmail } from "./Modules/DidntGetEmail"
import { EmailConfirmation } from "./Modules/EmailConfirmation"
import { EmailSent } from "./Modules/EmailSent"
import { Entrance } from "./Modules/Entrance"
import { ForgetPassword } from "./Modules/ForgetPassword"
import { Header } from "./Modules/Header"
import { Registration } from "./Modules/Registration"

export const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path={'/'} render={() => <Entrance />} />
        <Route path={'/registration'} render={() => <Registration />} />
        <Route path={'/emailconfirmation'} render={() => <EmailConfirmation />} />
        <Route path={'/didntgetemail'} render={() => <DidntGetEmail />} />
        <Route path={'/forgetpassword'} render={() => <ForgetPassword />} />
        <Route path={'/emailsent'} render={() => <EmailSent />} />
      </Switch>
    </div>
  )
}
