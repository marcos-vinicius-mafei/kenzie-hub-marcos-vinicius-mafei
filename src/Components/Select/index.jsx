import { Select,MenuItem,createTheme,ThemeProvider } from "@material-ui/core"
import {useState} from 'react'
import {Container} from './style'


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

const Selection = ({register}) =>{

    const [module,setModule] = useState('Primeiro módulo (Introdução ao Frontend)')

    const updateValue = (e) =>{
        setModule(e.target.value)
    }

    return(
        <ThemeProvider theme={theme}>
            <Container>
                <div className="label">Selecionar módulo</div>
                <Select value={module} onChange={updateValue} variant="outlined" className="select" color="primary" inputProps={{...register('modulo')}}>
                            <MenuItem value={'Primeiro módulo (Introdução ao Frontend)'}>Primeiro Módulo</MenuItem>
                            <MenuItem value={'Segundo módulo (Frontend Avançado)'}>Segundo Módulo</MenuItem>
                            <MenuItem value={'Terceiro módulo (Introdução ao Backend)'}>Terceiro Módulo</MenuItem>
                            <MenuItem value={'Quarto módulo (Backend Avançado)'}>Quarto Módulo</MenuItem>
                            <MenuItem value={'Quinto módulo (Backend Avançado pt.2)'}>Quinto Módulo</MenuItem>
                            <MenuItem value={'Sexto módulo (Trilha de empregabilidade)'}>Sexto Módulo</MenuItem>
                </Select>
            </Container>
        </ThemeProvider>
    )
}

export default Selection