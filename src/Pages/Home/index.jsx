import {Redirect} from 'react-router-dom'

const Home = ({authenticated}) =>{

    if(!authenticated){
       return <Redirect to='/login'/>
    }

    return(
        <div>
            oi
        </div>
    )
}

export default Home