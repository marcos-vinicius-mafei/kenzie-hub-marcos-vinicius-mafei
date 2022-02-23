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

const Selection = () =>{

    const [module,setModule] = useState(1)

    const updateValue = (e) =>{
        setModule(e.target.value)
    }

    return(
        <ThemeProvider theme={theme}>
            <Container>
                <div className="label">Selecionar módulo</div>
                <Select value={module} onChange={updateValue} variant="outlined" className="select" color="primary">
                            <MenuItem value={1}>Primeiro Módulo</MenuItem>
                            <MenuItem value={2}>Segundo Módulo</MenuItem>
                            <MenuItem value={3}>Terceiro Módulo</MenuItem>
                            <MenuItem value={4}>Quarto Módulo</MenuItem>
                            <MenuItem value={5}>Quinto Módulo</MenuItem>
                            <MenuItem value={6}>Sexto Módulo</MenuItem>
                </Select>
            </Container>
        </ThemeProvider>
    )
}

export default Selection