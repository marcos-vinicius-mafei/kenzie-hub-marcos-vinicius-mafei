import Logo from '../../images/Logo.svg'
import Input from '../../Components/Input'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from '../../Components/Button'
import {Container,Modal} from './style'
import {FancyForm} from '../Signin/style'

const Login = () => {

    const schema = yup.object().shape({
        email: yup.string().required('Esse campo é obrigatório').email('Email inválido'),
        password: yup.string().required('Esse campo é obrigatório')
    })

    const {register, formState:{errors},handleSubmit} = useForm({
        resolver: yupResolver(schema)
    })

    const submitForm = (data)=>{
        console.log(data)
    }

    return (
        <Container>
            <figure>
                <img src={Logo} alt="Kenzie Hub Logo"/>
                <figcaption>Kenzie Hub Logo</figcaption>
            </figure>
            <Modal>
                <h3>Login</h3>
                <FancyForm onSubmit={handleSubmit(submitForm)}>
                    <Input label="Email" type="text" placeholder="Digite aqui seu email" register={register} name="email" error={errors.email?.message}/>
                    <Input label="Senha" placeholder="Digite aqui sua senha" register={register} name="password" type="password" error={errors.password?.message} icon/>
                    <Button>Entrar</Button>
                </FancyForm>
                <div className="signin">
                    <p>Ainda não possui uma conta?</p>
                    <Button>Cadastre-se</Button>
                </div>
            </Modal>
        </Container>
    )
}

export default Login