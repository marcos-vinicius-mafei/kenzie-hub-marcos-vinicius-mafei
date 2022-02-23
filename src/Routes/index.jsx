import {Route,Switch} from 'react-router-dom'
import Home from '../Pages/Home' 
import Login from '../Pages/Login'
import Signin from '../Pages/Signin'

const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Signin/>
            </Route>
        </Switch>
    )
}


export default Routes