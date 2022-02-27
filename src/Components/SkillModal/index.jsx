import Input from '../Input'
import { Select,MenuItem,createTheme,ThemeProvider } from "@material-ui/core"
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from '../Button'
import {Container} from './style'
import { FancyForm } from '../../Pages/Signin/style'
import api from '../../Services/API'
import { toast } from 'react-toastify'


const theme = createTheme({
    palette:{
        primary:{
            main:'#fefefe',
        },
        secondary:{
            main:'#bb4949'
        }
    }
})

const SkillModal = ({toggleModal}) =>{

    const [module,setModule] = useState('Iniciante')

    const [token] = useState(JSON.parse(localStorage.getItem('@KenziHub:token')) || '')

    const updateValue = (e) =>{
        setModule(e.target.value)
    }

    const [anime,setAnime] = useState('show 3s')

    const schema = yup.object().shape({
        title: yup.string().required('Esse campo é obrigatório'),
    })

    const {register, formState:{errors},handleSubmit} = useForm({
        resolver: yupResolver(schema)
    })

    const submitForm = (data)=>{
        api.post('/users/techs',data,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then((_)=>{toast.success('Tech criada com sucesso',{
            theme: 'dark'
        })
            toggleModal()
        })
        .catch((err) => toast.error('Tech já existente',{
            theme:'dark'
        }))
    }

    return(
        <Container style={{ animation: anime}}>
            <div className="header">
                <div>
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={()=>{
                         setAnime('hide 3s')
                         setTimeout(toggleModal,1000)
                           }}>X</button>
                </div>
            </div>
            <FancyForm onSubmit={handleSubmit(submitForm)}>
                <Input name="title" type="text" label="Nome" error={errors.title?.message} register={register} placeholder="Digite o nome da tecnologia"/>
                <ThemeProvider theme={theme}>
                    <div className="label">Selecionar status</div>
                        <Select value={module} onChange={updateValue} variant="outlined" className="select" color="primary" inputProps={{...register('status')}}>
                                <MenuItem value={'Iniciante'}>Iniciante</MenuItem>
                                <MenuItem value={'Intermediário'}>Intermediário</MenuItem>
                                <MenuItem value={'Avançado'}>Avançado</MenuItem>
                        </Select>
                </ThemeProvider>
                <Button type="submit">Cadastrar Tecnologia</Button>
            </FancyForm>
        </Container>
    )
}

export default SkillModal