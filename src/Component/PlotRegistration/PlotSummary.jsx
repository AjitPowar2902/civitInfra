import React, { useContext } from 'react';
import {Button,Form,Col,Row,Card,Breadcrumb,ListGroup,Badge,InputGroup} from 'react-bootstrap';
import { ContextHook } from '../../Context/ContextHook';
import { TiHomeOutline } from "react-icons/ti";
import { MdOutlineModeEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import '../../Assets/Global.css'
import styles from './PlotSummary.module.css'


export default function PlotSummary() {

  const {currentStep,setCurrentStep,plotData,setPlotData} = useContext(ContextHook);
  const navigate = useNavigate();
  const handleSubmit =()=>
  {

    const userConfirmed = window.confirm('Are you sure you want to submit?');
    if (userConfirmed) {
      console.log(plotData);
    navigate('/Dashboard');
    } else {
      
      console.log('Delete action canceled');
    }


   
  }
  const handleproperty = ()=>
  {
    setCurrentStep(1);
  }
  const handleUnitContact = ()=>
  {
    setCurrentStep(2);
  }
  return (
    <>
 


 <div className="container shadow-lg p-3 headerradius"  >
        <div className="d-flex justify-content-between align-items-center" >
          <div>
            
            <span style={{fontSize:'24px'}}>Form Summary</span>&nbsp;&nbsp;&nbsp;<br/>
            <span  style={{fontSize:'12px'}}>Application for new plot registration</span>
          </div> <br />

         
          
        </div>
        </div>
        <div className="container shadow-lg p-3 mb-5 bg-body formradius" >
        <br />
        <div className="d-flex align-items-center mb-3">
          <h5 className={`mb-0 me-3 ${styles.summaryHeader}`}>Property Details</h5>
          <hr className="flex-grow-1" />
          &nbsp; &nbsp;
          <a onClick={handleproperty} style={{cursor:'pointer'}}>Edit</a> &nbsp; 
          <MdOutlineModeEdit />
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4">
              <p   className={styles.summarylabel}>District of Present Unit</p>
              <p className="value">
              {plotData.district ? plotData.district : 'NA'}
              </p>
            </div>
            <div className="col-md-4">
              <p className={styles.summarylabel}> Industrial Area of Present Unit </p>
              <p className="value">
              {plotData.prtUnit ? plotData.prtUnit : 'NA'}
              </p>
            </div>
            <div className="col-md-4">
              <p className={styles.summarylabel}> Property Form </p>
              <p className="value">
              {plotData.propertyforms ? plotData.propertyforms : 'NA'}
              </p>
            </div>
          </div>


          <div className="row">
            <div className="col-md-4">
              <p className={styles.summarylabel}> Type of Property </p>
              <p className="value">
              {plotData.propertytype ? plotData.propertytype : 'NA'}
              </p>
            </div>
            <div className="col-md-4">
              <p className={styles.summarylabel}>Present Property Number</p>
              <p className="value">
              {plotData.presentpropertyno ? plotData.presentpropertyno : 'NA'}
              </p>
            </div>
            <div className="col-md-4">
              <p className={styles.summarylabel}>Plot area in m2</p>
              <p className="value">
              {plotData.plotarea ? plotData.plotarea : 'NA'}
              </p>
            </div>
          </div>
          </div>
          <br/>
          <br/>

          <div className="d-flex align-items-center mb-3">
          <h5 className={`mb-0 me-3 ${styles.summaryHeader}`}>Plot or Unit Contact Information</h5>
          <hr className="flex-grow-1" />
          &nbsp; &nbsp;
          <a onClick={handleUnitContact} style={{cursor:'pointer'}}>Edit</a> &nbsp; 
          <MdOutlineModeEdit />
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4">
              <p className={styles.summarylabel}>Telephone Number</p>
              <p className="value">
              {plotData.phonenumber ? plotData.phonenumber : 'NA'}
              </p>
            </div>
            <div className="col-md-4">
              <p className={styles.summarylabel}>Fax</p>
              <p className="value">
              {plotData.fax ? plotData.fax : 'NA'}
              </p>
            </div>
            <div className="col-md-4">
              <p className={styles.summarylabel}>Email ID</p>
              <p className="value">
              {plotData.email ? plotData.email : 'NA'}
              </p>
            </div>
          </div>


          <div className="row">
            <div className="col-md-4">
              <p className={styles.summarylabel}>Type of Industry/Activity</p>
              <p className="value">
              {plotData.industrytype ? plotData.industrytype : 'NA'}
              </p>
            </div>
            <div className="col-md-4">
            <p className={styles.summarylabel}>EMI Acknowledgement Number </p>
              <p className="value">
              {plotData.eminumber ? plotData.eminumber : 'NA'}
              </p>
            </div>
            <div className="col-md-4">
              
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <p className={styles.summarylabel}>Description of Selected Activity</p>
              <p className="value">
              {plotData.description ? plotData.description : 'NA'}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              
            </div>
            <div className="col-md-4">
               
            </div>
            <div className="col-md-4">
              
            </div>
          </div>
          <div className="row">
          <div className="col-md-12 button-container">
            <button class="button-print"  >Print</button>
            <button class="button-submit" onClick={handleSubmit} >Submit Form</button>
            </div>
            </div>
          </div>
          </div>
    </>
  )
}
