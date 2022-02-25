import Input from '../Input'
import { Select,MenuItem,createTheme,ThemeProvider } from "@material-ui/core"
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {Container} from '../SkillModal/style'
import { FancyForm } from '../../Pages/Signin/style'
import {Buttons} from './style'


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

const EditModal = ({toggleEdit}) =>{

    const [module,setModule] = useState('Iniciante') //receber por props

    const updateValue = (e) =>{
        setModule(e.target.value)
    }

    const schema = yup.object().shape({
        name: yup.string().required('Esse campo é obrigatório'),
    })

    const {register, formState:{errors},handleSubmit} = useForm({
        resolver: yupResolver(schema),
        defaultValues : {
            name: "tecnologia" //receber pop props
        }
    })

    const submitForm = (data)=>{
        console.log(data)
    }

    return(
        <Container>
            <div className="header">
                <div>
                    <h3>Tecnologia Detalhes</h3>
                    <button onClick={toggleEdit}>X</button>
                </div>
            </div>
            <FancyForm onSubmit={handleSubmit(submitForm)}>
                <Input name="name" type="text" label="Nome" error={errors.name?.message} register={register} placeholder="Digite o nome da tecnologia"/>
                <ThemeProvider theme={theme}>
                    <div className="label">Selecionar status</div>
                        <Select value={module} onChange={updateValue} variant="outlined" className="select" color="primary" inputProps={{...register('level')}}>
                                <MenuItem value={'Iniciante'}>Iniciante</MenuItem>
                                <MenuItem value={'Intermediário'}>Intermediário</MenuItem>
                                <MenuItem value={'Avançado'}>Avançado</MenuItem>
                        </Select>
                </ThemeProvider>
                <Buttons>
                    <button type="submit" className="btn--save">Salvar Alterações</button>
                    <button className="btn--remove">Excluir</button>
                </Buttons>
            </FancyForm>
        </Container>
    )
}

export default EditModal