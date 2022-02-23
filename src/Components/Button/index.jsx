import {FancyButton} from './style'

const Button = ({children,...rest}) =>{
    return(
        <FancyButton {...rest}>{children}</FancyButton>
    )
}

export default Button