import {Redirect} from 'react-router-dom'
import Logo from './../../images/Logo.svg'
import {Container,List,Nav,Skills,Courtain} from './style'
import {GoPlus} from 'react-icons/go'
import Card from '../../Components/Card'
import { useState } from 'react'
import SkillModal from '../../Components/SkillModal'
import EditModal from '../../Components/EditModal'
import { useEffect } from 'react'
import api from '../../Services/API'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'


const Home = ({authenticated,setAuthenticated}) =>{

    const history = useHistory()

    const [modal,setModal] = useState(false)

    const [edit,setEdit]= useState(false)

    const [techs,setTechs]= useState([])

    const [current,setCurrent] = useState('')

    const [id] = useState(JSON.parse(localStorage.getItem('@KenziHub:id')) || '')

    const [user] = useState(JSON.parse(localStorage.getItem('@KenziHub:user')) ||  '')

    useEffect(()=>{
        api.get(`/users/${id}`)
        .then(res=>{
            setTechs(res.data.techs)
        })
    },[techs,id])

    const toggleEdit = () =>{
        setEdit(!edit)
    }

    const toggleModal = () =>{
        setModal(!modal)
    }

    const exit = () =>{
        localStorage.removeItem('@KenziHub:user')
        localStorage.removeItem('@KenziHub:token')
        setAuthenticated(false)
        history.push('/login')
    }

    const [app,setApp] = useState('')

    const [height,setHeight] = useState('')

    useEffect(()=>{
        setApp(document.querySelector('.App'))
        setHeight(app.clientHeight)
    },[height,app.clientHeight])

    if(!authenticated){
       return <Redirect to='/login'/>
    }

    return(
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration: 2}}
        >
            {(modal || edit) && <Courtain height={height}/>}
            <Container>
                {modal && <SkillModal toggleModal={toggleModal}/>}
                {edit && <EditModal toggleEdit={toggleEdit} current={current}/>}
                <Nav>
                    <figure>
                        <img src={Logo} alt="Kenzie Hub" />
                        <figcaption>Kenzie Hub Logo</figcaption>
                    </figure>
                    <button onClick={exit}>Sair</button>
                </Nav>
                <hr className="grey--line"/>
                    <div className="infos">
                        <h1>{`Olá, ${user.name}`}</h1>
                        <p>{user.course_module}</p>
                    </div>
                <hr className="grey--line"/>
                <Skills>
                    <div className="menu">
                        <h3>Tecnologias</h3>
                        <button onClick={toggleModal}><GoPlus color="#fff" style={{width:'10.72px'}}/></button>
                    </div>
                    <List>
                    {techs.length >0?<ul>
                            {techs.map(tech=><li key={tech.id}><Card name={tech.title} level={tech.status} onClick={()=>{toggleEdit()
                            setCurrent(tech)}}/></li>)}
                        </ul>:  <div className="empty">
                                    <h3>Suas Techs aparecerão aqui</h3>
                                    <p>{'Tente adicionar algumas :)'}</p>
                                </div>}
                    </List>
                </Skills>
            </Container>
        </motion.div>
    )
}

export default Home