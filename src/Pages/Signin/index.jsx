import Input from "../../Components/Input"
import {Container,FancyForm,Modal,Nav} from './style'
import Selection from "../../Components/Select"
import Button from "../../Components/Button"
import Logo from '../../images/Logo.svg'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import api from '../../Services/API'
import {toast} from 'react-toastify'
import {Redirect, useHistory} from 'react-router-dom'


const Signin = ({authenticated}) => {

    const schema = yup.object().shape({
        name: yup.string().required('Esse campo é obrigatório'),
        email: yup.string().required('Esse campo é obrigatório').email('Email inválido'),
        password: yup.string().required('Esse campo é obrigatório').min(6,"Mín 6 dígitos"),
        confirm: yup.string().required('Esse campo é obrigatório').oneOf([yup.ref('password')],'Senhas diferentes')
    })

    const {register, formState:{errors},handleSubmit} = useForm({
        resolver: yupResolver(schema)
    })

    const history = useHistory()

    const submitForm = ({name,email,password,modulo}) =>{
        const newData = {
            name:name,
            email:email,
            password:password,
            course_module:modulo,
            bio:name,
            contact:email,
        }
        api.post('/users',newData)
        .then((_)=>{
            toast.success('Conta criada com sucesso!',{
            theme:'dark'
            })
            history.push('/login')
        })
        .catch((err) =>toast.error('Ops! Algo deu errado',{
            theme:'dark'
        }))
    }

    if(authenticated){
        return <Redirect to='/'/>
    }

    return(
        <Container>
                <Nav>
                    <figure>
                        <img src={Logo} alt="Kenzie Hub"/>
                        <figcaption>Logo Kenzie Hub</figcaption>
                    </figure>
                    <button onClick={()=>history.push('/login')}>Voltar</button>
                </Nav>
            <Modal>
                <div className="title">
                    <h3>Crie sua conta</h3>
                    <span><p>Rápido e grátis, vamos nessa</p></span>
                </div>
                <FancyForm onSubmit={handleSubmit(submitForm)}>
                    <Input label="Nome" type="text" placeholder="Digite aqui seu nome" register={register} name="name" error={errors.name?.message}/>
                    <Input label="Email" type="text" placeholder="Digite aqui seu email" register={register} name="email" error={errors.email?.message}/>
                    <Input label="Senha" placeholder="Digite aqui sua senha" register={register} name="password" type="password" error={errors.password?.message} icon/>
                    <Input label="Confirmar Senha" placeholder="Confirme aqui sua senha" register={register} name="confirm" type="password" error={errors.confirm?.message} icon/>
                    <Selection register={register}/>
                    <Button type="submit">Cadastrar</Button>
                </FancyForm>
            </Modal>
        </Container>
    )
}

export default Signin