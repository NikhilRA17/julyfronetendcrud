import React,{useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from '../components/List';
import config from "../config";
import axios from 'axios';

const Home = () => {
    const [state,setState]=useState([]);
    const [isDeleted,setIsDeleted]=useState(false);

    const callApi=()=>{
        console.log("Api Called")
        axios.get(`${config.URL}/`).then(response=>{
           // console.log(response.data);
            setState(response.data);
        }).catch(err=>{
            console.log(err);
        })

    }

    const DeleteItem=(id)=>{
        // Will make delete api call
        axios.delete(`${config.URL}/delete/${id}`).then(response=>{
             console.log(response.data);
             setIsDeleted(!isDeleted);
            
         }).catch(err=>{
             console.log(err);
         })


    }

    useEffect(()=>{
    
        callApi();

    },[isDeleted])

  


  return (
    <Container>
        <Row>
        <Col>
            <List data={state} DeleteItem={DeleteItem}/>
        
        </Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  )
}

export default Home