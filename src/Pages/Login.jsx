import React,{useRef } from 'react';
import {Button,Form,Col,Row,InputGroup} from 'react-bootstrap';
import banner from '../Images/civit.png'
import CivitLogo from '../Images/CivitLogo.png'
import '../index.css';
import '../Assets/Global.css'
import Footer from '../Component/Footer'
import { useNavigate,Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import styles from './Login.module.css';


export default function Login() {
  const navigate =  useNavigate()
  function clksubmit() {
   if (document.getElementById('txtusername').value ==""){
alert("Please enter ueser name");
   }
   else if (document.getElementById('txtpassword').value==""){
    alert("Please enter password");
   }
   else{
   navigate('/Dashboard');
}
  };
  function clkReset() {
    document.getElementById('txtusername').value="";
    document.getElementById('txtpassword').value="";
   }


  return (
    <>
    <Row className='p-0 bannerBackground'>

         <Col lg='6' sm='12'>
     
         <img src={banner} className="banner"></img>
         </Col>
         <Col lg='1' sm='12'></Col>
         <Col Col lg='4' sm='12'>
          <br/>
          <h2 className='cardHeader'>Welcome to civit Infra.</h2>
          <div  className='p-3 box-shadow info-div'>
          
            <img src={CivitLogo} style={{marginLeft:'25%'}} className='mb-3'></img>
            <br/>
            <InputGroup className="p-2" >
        <InputGroup.Text id="inputGroup-sizing-default" className='' >
        <FaUser />
        </InputGroup.Text>
        <Form.Control
        id='txtusername'
        placeholder="enter user name..."
        />
      </InputGroup>
     <br/>
     <InputGroup className="p-2" >
        <InputGroup.Text id="inputGroup-sizing-default" className='' >
       <RiLockPasswordFill />
        </InputGroup.Text>
        <Form.Control
        id='txtpassword'
        placeholder="enter password..."
        />
      </InputGroup>
            <br/>
          <label className='col-8 text-primary' style={{textAlign:'left',cursor:'pointer'}}>Forgot passowrd?</label>
           <span className='col-4 text-primary' style={{textAlign:'right',cursor:'pointer'}}> <Link to={'/registration'} className={styles.anchors}>Register here</Link> </span>
         
            <br/>
            <Col Col lg='12' sm='12' style={{textAlign:'center'}}>
            <Button variant="outline-dark" onClick={clksubmit}>login</Button> &nbsp;
             <Button variant="outline-danger" onClick={clkReset}>clear</Button>
             </Col>
             <br/>
      </div>
      
         </Col>
         <Col lg='1' sm='12'></Col>
      
    </Row>
    <Footer/>

    </>
  )
}
