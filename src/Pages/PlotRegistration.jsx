import React, { useState } from 'react'
import TopBar from '../Component/TopBar'
import {Button,Form,Col,Row,Card,Breadcrumb,ListGroup,Badge,InputGroup} from 'react-bootstrap';
import { TiHomeOutline } from "react-icons/ti";
import PlotContactInfo from '../Component/PlotRegistration/PlotContactInfo';
import { ContextHook } from '../Context/ContextHook'
import PropertyDetail from '../Component/PlotRegistration/PropertyDetail';
import PlotSummary from '../Component/PlotRegistration/PlotSummary';



export default function PlotRegistration() {

    const [currentStep, setCurrentStep] = useState(1);
    const [plotData, setPlotData] = useState([]);

    function showStep(s)
    {
        switch(s)
        {
            case 1 : 
            return <PropertyDetail/>
            case 2 : 
            return <PlotContactInfo/>
            case 3 :
              return <PlotSummary/>
        }
    }

  return (
   <>
   <ContextHook.Provider value={{currentStep,setCurrentStep,plotData,setPlotData}}>
   <TopBar/>
   <div className='p-4'>
       <Row className='mt-3'>
       <Breadcrumb>
      <Breadcrumb.Item><TiHomeOutline /></Breadcrumb.Item>
      <Breadcrumb.Item >New Plot Registration</Breadcrumb.Item>
    </Breadcrumb>
    </Row>
    </div>
   {showStep(currentStep)}
   </ContextHook.Provider>
   </>
  )
}
