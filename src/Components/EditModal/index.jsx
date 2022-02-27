import Input from '../Input'
import { Select,MenuItem,createTheme,ThemeProvider } from "@material-ui/core"
import {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {Container} from '../SkillModal/style'
import { FancyForm } from '../../Pages/Signin/style'
import {Buttons} from './style'
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

const EditModal = ({toggleEdit,current}) =>{

    const [status,setStatus] = useState(current.status)

    const [id,setId] = useState(current.id)

    const [token] = useState(JSON.parse(localStorage.getItem('@KenziHub:token')) || '')

    const [anime,setAnime] = useState('show 3s')

    useEffect(()=>{
        setId(current.id)
    },[id,current])

    const updateValue = (e) =>{
        setStatus(e.target.value)
    }

    const schema = yup.object().shape({
        title: yup.string().required('Esse campo é obrigatório'),
    })

    const {register, formState:{errors},handleSubmit} = useForm({
        resolver: yupResolver(schema),
        defaultValues : {
            title: current.title,
        }
    })

    const submitForm = (data)=>{
       api.put(`/users/techs/${id}`,data,{
           headers:{
               Authorization: `Bearer ${token}`
           }
       })
       .then(res=>{toast.success('Informações atualizadas',{
           theme:'dark'
       })
            setAnime('hide 3s')
            setTimeout(toggleEdit,1000)
       })
       .catch(err=>toast.error('Ops! Algo deu errado',{
           theme:'dark'
       }))
    }

    const deleteTech = () =>{
        api.delete(`/users/techs/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=>{toast.success('Tech excluída',{
            theme:'dark'
        })
            setAnime('hide 3s')
            setTimeout(toggleEdit,1000)
        })
        .catch(err=>toast.error('Ops! Algo deu errado',{
            theme:'dark'
        }))
    }

    return(
        <Container style={{ animation: anime}}>
            <div className="header">
                <div>
                    <h3>Tecnologia Detalhes</h3>
                    <button onClick={()=>{
                         setAnime('hide 3s')
                         setTimeout(toggleEdit,1000)
                           }}>X</button>
                </div>
            </div>
            <FancyForm onSubmit={handleSubmit(submitForm)}>
                <Input name="title" type="text" label="Nome" error={errors.name?.message} register={register} placeholder="Digite o nome da tecnologia" disabled/>
                <ThemeProvider theme={theme}>
                    <div className="label">Selecionar status</div>
                        <Select value={status} onChange={updateValue} variant="outlined" className="select" color="primary" inputProps={{...register('status')}}>
                                <MenuItem value={'Iniciante'}>Iniciante</MenuItem>
                                <MenuItem value={'Intermediário'}>Intermediário</MenuItem>
                                <MenuItem value={'Avançado'}>Avançado</MenuItem>
                        </Select>
                </ThemeProvider>
                <Buttons>
                    <button type="submit" className="btn--save">Salvar Alterações</button>
                    <button type="button" className="btn--remove" onClick={deleteTech}>Excluir</button>
                </Buttons>
            </FancyForm>
        </Container>
    )
}

export default EditModal