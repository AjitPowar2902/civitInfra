import React from 'react'
import {Col, Row} from 'react-bootstrap';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
export default function Footer() {
  return (
    < >
    <Row>
    <Col lg='2'className='p-2'>
        
    <FaFacebookSquare style={{fontSize:'30px',color:'#2828ff'}} title='click to open civit facebook page' /> 
     <FaSquareXTwitter style={{fontSize:'30px'}} title='click to open civit X page'/> 
     <FaInstagramSquare style={{fontSize:'30px',color:'#ff244a'}}  title='click to open civit instagram page' />
    <FaSquareWhatsapp style={{fontSize:'30px',color:'#008b11'}}  title='click to open civit WhatsApp chat'/>
    <FaSquareYoutube style={{fontSize:'30px',color:'red'}}  title='click to open civit you tube page'/>
    </Col>
        <Col lg='8' style={{textAlign:'center'}} className='p-2'>
        <b>©Copyright 2024-25 civit Infra</b>
        </Col>
        <Col lg='2' style={{textAlign:'center'}} className='p-2'>
        <div id="watermark">Designed By Anurag/Amar</div>
        </Col>
    </Row>
      
    </>
  )
}
