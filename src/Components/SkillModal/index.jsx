import Input from '../Input'
import { Select,MenuItem,createTheme,ThemeProvider } from "@material-ui/core"
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from '../Button'
import {Container} from './style'
import { FancyForm } from '../../Pages/Signin/style'


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

    const updateValue = (e) =>{
        setModule(e.target.value)
    }

    const schema = yup.object().shape({
        name: yup.string().required('Esse campo é obrigatório'),
    })

    const {register, formState:{errors},handleSubmit} = useForm({
        resolver: yupResolver(schema)
    })

    const submitForm = (data)=>{
        console.log(data)
    }

    return(
        <Container>
            <div className="header">
                <div>
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={toggleModal}>X</button>
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
                <Button type="submit">Cadastrar Tecnologia</Button>
            </FancyForm>
        </Container>
    )
}

export default SkillModal