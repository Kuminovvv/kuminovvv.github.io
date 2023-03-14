import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import React from 'react'

import {observer} from 'mobx-react-lite'
import routes from "../../../lib/routes";
import Home from "../Home/Home";
import Favourites from "../pages/Favourites/Favourites";


const Router = observer(() => {
    return (
        <HashRouter basename={routes.HOME}>
            <Switch>
                <Route exact path={routes.HOME} component={Home}/>
                <Route exact path={routes.FAVOURITES} component={Favourites}/>
                <Redirect from="*" to={routes.HOME}/>
            </Switch>
        </HashRouter>
    )
})

export default Router
