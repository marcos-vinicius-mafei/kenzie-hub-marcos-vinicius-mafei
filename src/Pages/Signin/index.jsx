import Input from "../../Components/Input"
import {Container,FancyForm,Modal,Nav} from './style'
import Selection from "../../Components/Select"
import Button from "../../Components/Button"
import Logo from '../../images/Logo.svg'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


const Signin = () => {

    const schema = yup.object().shape({
        name: yup.string().required('Esse campo é obrigatório'),
        email: yup.string().required('Esse campo é obrigatório').email('Email inválido'),
        password: yup.string().required('Esse campo é obrigatório').min(6,"Mín 6 dígitos"),
        confirm: yup.string().required('Esse campo é obrigatório').oneOf([yup.ref('password')],'Senhas diferentes')
    })

    const {register, formState:{errors},handleSubmit} = useForm({
        resolver: yupResolver(schema)
    })

    const submitForm = (data) =>{
        console.log(data)
    }

    return(
        <Container>
                <Nav>
                    <figure>
                        <img src={Logo} alt="Kenzie Hub"/>
                        <figcaption>Logo Kenzie Hub</figcaption>
                    </figure>
                    <button>Voltar</button>
                </Nav>
            <Modal>
                <div className="title">
                    <h3>Crie sua conta</h3>
                    <span><p>Rápido e grátis, vamos nessa</p></span>
                </div>
                <FancyForm onSubmit={handleSubmit(submitForm)}>
                    <Input label="Nome" type="text" placeholder="Digite aqui seu nome" register={register} name="name" error={errors.name?.message}/>
                    <Input label="Email" type="text" placeholder="Digite aqui seu email" register={register} name="email" error={errors.email?.message}/>
                    <Input label="Senha" placeholder="Digite aqui sua senha" register={register} name="password" type="password" error={errors.password?.message}/>
                    <Input label="Confirmar Senha" placeholder="Confirme aqui sua senha" register={register} name="confirm" type="password" error={errors.confirm?.message}/>
                    <Selection/>
                    <Button type="submit">Cadastrar</Button>
                </FancyForm>
            </Modal>
        </Container>
    )
}

export default Signin