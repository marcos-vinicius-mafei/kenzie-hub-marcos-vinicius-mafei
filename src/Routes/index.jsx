import {Route,Switch} from 'react-router-dom'
import Home from '../Pages/Home' 
import Login from '../Pages/Login'
import Signin from '../Pages/Signin'
import { useState,useEffect } from 'react'
import {AnimatePresence} from 'framer-motion'

const Routes = () =>{

    const [authenticated,setAuthenticated] = useState(false)

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('@KenziHub:token'))

        if(token){
            setAuthenticated(true)
        }
    },[authenticated])

    return(
        <AnimatePresence>
            <Switch>
                <Route exact path="/">
                    <Home authenticated={authenticated} setAuthenticated={setAuthenticated}/>
                </Route>
                <Route path="/login">
                    <Login authenticated={authenticated} setAuthenticated={setAuthenticated}/>
                </Route>
                <Route path="/register">
                    <Signin authenticated={authenticated}/>
                </Route>
            </Switch>
        </AnimatePresence>
    )
}


export default Routes