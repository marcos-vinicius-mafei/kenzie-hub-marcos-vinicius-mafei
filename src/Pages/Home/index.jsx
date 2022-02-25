import {Redirect} from 'react-router-dom'
import Logo from './../../images/Logo.svg'
import {Container,List,Nav,Skills} from './style'
import {GoPlus} from 'react-icons/go'
import Card from '../../Components/Card'
import { useState } from 'react'
import SkillModal from '../../Components/SkillModal'
import EditModal from '../../Components/EditModal'


const Home = ({authenticated}) =>{


    const [modal,setModal] = useState(false)

    const [edit,setEdit]= useState(false)

    const toggleEdit = () =>{
        setEdit(!edit)
    }

    const toggleModal = () =>{
        setModal(!modal)
    }

    if(!authenticated){
       return <Redirect to='/login'/>
    }

    return(
        <Container>
            <Nav>
                <figure>
                    <img src={Logo} alt="Kenzie Hub" />
                    <figcaption>Kenzie Hub Logo</figcaption>
                </figure>
                <button>Sair</button>
            </Nav>
            {modal && <SkillModal toggleModal={toggleModal}/>}
            {edit && <EditModal toggleEdit={toggleEdit}/>}
            <hr className="grey--line"/>
                <div className="infos">
                    <h1>Olá, Samuel Leão</h1>
                    <p>Primeiro módulo (Introdução ao Frontend)</p>
                </div>
            <hr className="grey--line"/>
            <Skills>
                <div className="menu">
                    <h3>Tecnologias</h3>
                    <button onClick={toggleModal}><GoPlus color="#fff" style={{width:'10.72px'}}/></button>
                </div>
                <List>
                    <ul>
                        <li><Card name="React" level="Intermediário" onClick={toggleEdit}/></li>
                    </ul>
                </List>
            </Skills>
        </Container>
    )
}

export default Home