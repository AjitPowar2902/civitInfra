import React from 'react'
import TopBar from './TopBar';
import {Button,Form,Col,Row,Card,Breadcrumb,ListGroup,Badge} from 'react-bootstrap';
import { TiHomeOutline } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


export default function Dashboard() {
 const navigate = useNavigate();
  const handleRegisterPlot = () =>
  {
navigate('/plotregistration');
  }

  return (
    <>
       <TopBar/>
         

      <div className='p-4'>
       <Row className='mt-3'>
       <Breadcrumb>
      <Breadcrumb.Item><TiHomeOutline /></Breadcrumb.Item>
      <Breadcrumb.Item >Ghatkopar sector 32</Breadcrumb.Item>
    </Breadcrumb>
        <div className='pr-3 pl-3' style={{backgroundColor:"#f3f2ff",height:'200px'}} lg='12' sm='12' xs='12'>
        <h6 className='mb-3'>Plot Details</h6>
        <Row>
        <Col>
        <label className="text-secondary">Application no.</label><br/>
        <label >swc/236/20240720/12345</label>
        </Col>
        <Col>
        <label  className="text-secondary">Plot no.</label><br/>
        <label >X-2345</label>
        </Col>
        <Col>
        <label className="text-secondary">Industrial Area</label><br/>
        <label>GHatkopar</label>
        </Col>
        <Col>
        <label className="text-secondary">Applicany name</label><br/>
        <label>Anurag Jain</label>
        </Col>
        <Col>
        <label className="text-secondary">E maail</label><br/>
        <label>xyz@gmail.com</label>
        </Col>
        </Row>
        </div>
       <div style={{marginTop:'-80px'}}>
        <Row>
        <Col className='pr-3 pl-3' lg='2' sm='12' xs='12'>
       <Card >
       <Card.Body  className='pb-0'>
        <Card.Title className='p-0' style={{fontSize:'2rem'}}>77</Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Text style={{fontSize:'1rem'}} className='fw-bold'>Total Files</Card.Text>
      </Card.Body>
    </Card>
    </Col>
        <Col className='pr-3 pl-3' lg='2' sm='12' xs='12'>
       <Card >
       <Card.Body className='pb-0' >
        <Card.Title className=' p-0' style={{fontSize:'2rem'}}>08</Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Text style={{fontSize:'1rem'}} className='fw-bold'>Approved</Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col className='pr-3 pl-3' lg='2' sm='12'>
       <Card  >
       <Card.Body  className='pb-0'>
        <Card.Title style={{fontSize:'2rem'}}>12</Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Text style={{fontSize:'1rem'}} className='fw-bold'>Rejected</Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col className='pr-3 pl-3' lg='2' sm='12'>
       <Card >
       <Card.Body  className='pb-0'>
        <Card.Title style={{fontSize:'2rem'}}>5</Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Text style={{fontSize:'1rem'}} className='fw-bold'>Objected</Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col className='pr-3 pl-3' lg='2' sm='12'>
       <Card >
       <Card.Body  className='pb-0'>
        <Card.Title style={{fontSize:'2rem'}}>32</Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Text style={{fontSize:'1rem'}} className='fw-bold'>Inprocess</Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col className='pr-3 pl-3' lg='2' sm='12'>
       <Card >
       <Card.Body  className='pb-0'>
        <Card.Title style={{fontSize:'2rem'}}>20</Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Text style={{fontSize:'1rem'}} className='fw-bold'>Not Submited</Card.Text>
      </Card.Body>
    </Card>
    
    </Col>
    </Row>
    </div>


  <div className='p-0 mt-4'  lg='12' sm='12' xs='12'>
   
  <Row>
    <Col style={{paddingLeft:'0px'}} lg='6' sm='12'>
    <h5>Pending Action</h5>
       <ListGroup as="ol">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Upload authority letter</div>
          Ghatkopar sector 32
        </div>
        <FaArrowRight />
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Enter Company details</div>
          Ghatkopar sector 32
        </div>
        <FaArrowRight />
      </ListGroup.Item>

    </ListGroup>
   
    </Col>
    <Col style={{paddingLeft:'0px'}} lg='6' sm='12'>
    <h5>Suggested Action</h5>
       <ListGroup as="ol">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold"> Application for mortgage consent</div>
         Pune
        </div>
        <FaArrowRight />
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Grant of exection of time limit for obtaining OC</div>
          Pune
        </div>
        <FaArrowRight />
      </ListGroup.Item>
  
    </ListGroup>
   
    </Col>
    </Row>
    </div>
    <Row className='mt-5'>
        
    <Col lg='3' sm='12'>
    <label className='fw-bold'>My Plots</label>
    </Col>
    <Col lg='3' sm='12'>
    <Form.Control  type="text" placeholder="Serch for plot" />
    </Col>
    <Col lg='3' sm='12'>
    <Form.Select aria-label="Filter by IA">
      <option>Filter by IA</option>
      <option value="1">Puen</option>
      <option value="2">Pimpri</option>
      <option value="3">Mumbai</option>
    </Form.Select>
    </Col>
    <Col lg='3' sm='12'>
    <Button variant="outline-primary" style={{width:'100%'}} onClick={handleRegisterPlot}>Register a plot</Button> &nbsp;
    </Col>



    <Col>
   
<table class="table  table-hover">
  <thead class="table-primary">
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Plot Name</th>
      <th scope="col">IA Name</th>
      <th scope="col">Approved</th>
      <th scope="col">Rejected</th>
      <th scope="col">Inprocess</th>
      <th scope="col">Not Submited</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Gjhatkopar</td>
      <td>Pune</td>
      <td>3</td>
      <td>4</td>
      <td>10</td>
      <td>5</td>
    </tr>
    <tr>
    <th scope="row">2</th>
    <td>Banner</td>
      <td>Pimpri</td>
      <td>5</td>
      <td>4</td>
      <td>15</td>
      <td>5</td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Pune</td>
      <td>Pune</td>
      <td>3</td>
      <td>4</td>
      <td>3</td>
      <td>10</td>
    </tr>
  </tbody>
</table>
</Col>
    </Row>
    </Row>
    </div>
    </>
  )
}
