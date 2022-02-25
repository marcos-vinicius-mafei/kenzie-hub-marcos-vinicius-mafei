import { Container } from "./style"

const Card = ({name,level,onClick}) =>{
    return(
            <Container onClick={onClick}>
                <h3>{name}</h3>
                <h4>{level}</h4>
            </Container>
    )
}

export default Card