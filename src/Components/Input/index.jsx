import {Container} from './style'
import { MdVisibility,MdVisibilityOff } from "react-icons/md";
import {useState} from 'react'

const Input = ({icon,name,register,error,label,...rest}) =>{

    const [show,setShow] = useState(false)

    const toggleShow = () =>{
        setShow(!show)
    }

    return(
        <Container>
            <span>{label}</span>
           {icon? <input {...register(name)} {...rest} type={show? 'text' : 'password'}/> :  <input {...register(name)} {...rest} />} 
            {icon && <div className="btn-show-hide" onClick={toggleShow}>{show? <MdVisibility size={'19px'}/> : <MdVisibilityOff size={'19px'}/>}</div>}
            {error && <div>{error}</div>}
        </Container>
    )
}

export default Input