import {Container} from './style'

const Input = ({name,register,error,label,...rest}) =>{
    return(
        <Container>
            <span>{label}</span>
            <input {...register(name)} {...rest}/>
            {error && <div>{error}</div>}
        </Container>
    )
}

export default Input