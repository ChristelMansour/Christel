import React, { Component } from 'react'
import{useTranslation,withTranslation,Trans} from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';
import './EnglishTab.css'
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import magnifying from './magnifying-glass.png'
import Paper from '@mui/material/Paper';
import PushPinIcon from '@mui/icons-material/PushPin';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import arrow from './right-drawn-arrow.png'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

  const EnglishTab= ()=>{
      const {t}= useTranslation();

 
    return (
    <div> 
    <div className="container mt-5 col-9 col-md-6  ">
          
    <h6>- Within every governorate, there is one or more courts of appeal.</h6>
    <h6>- The Court of Appeal consists of 3 judges: a president and two consultants.</h6>
    <h6>- The public prosecution is represented before the Court of Appeal by the Appellate Public Prosecutor or an Attorney General.</h6>
    </div>
    <div className='container mt-5  col-md-10'>
        
        <h4 className='bold'><AlignHorizontalLeftIcon/> <strong>Their jurisdiction:</strong></h4>
        <br/>
        <h6 className='margin'><ArrowForwardIcon/>&nbsp; The Court of Appeal considers the appeal of all judgments issued by the Criminal Single Judge in the cases of misdemeanors, provided that they shall have been settled in the merits of the dispute.However, if they were not settled in the merits of the dispute, they shall be appealed with the final judgment only.</h6>
        <br/>
        <h6><strong> &nbsp;With the exception of</strong></h6><br/>
        <h6 className='margin' ><ArrowForwardIcon/>&nbsp; The appeal of decisions that settle one or more of the formal defenses stipulated in Article 73 of the Criminal Procedures Code shall be accepted</h6>
        <h6 className='margin'><ArrowForwardIcon/>&nbsp; Decisions by which the Single Judge terminates the lawsuit without addressing its subject matter.</h6>
        <h6 className='margin'><ArrowForwardIcon/>&nbsp; Decisions issued on accepting or revoking the release requests</h6>
        </div>
        <div className='mt-5  col-md-20'>
        
        <img className='img' src={magnifying} alt="magnifying" />
        
        <Paper elevation={16}>
        <h6 >The Court of Appeal considers the appeal of the judgments issued by the Criminal Single Judge in the cases of violations, provided that they shall be on:</h6>
            </Paper>
            
        <div className='row'>
            <br/><br/>
            <div className='col'>
            <div className="circle1">
            
  <small>Imprisonment, preventive detention or a fine of more than five hundred thousand Lebanese pounds</small></div></div>
  <div className='col'>
  <div className="circle2">
  <small>Additional or secondary penalty or personal compensations of more than five hundred thousand Lebanese pounds</small></div></div>
  <div className='col'>
  <div className="circle3">
  <small>Additional or secondary penalty or personal compensations of more than five hundred thousand Lebanese pounds</small></div>
  </div>
  <div className='col'>
  <div className="circle4">
  <small>Penalty for a violation correlative with a misdemeanor</small></div>
  </div>
        </div>
        </div>

    <div className=' mt-5  col-md-10'>
    <h5 className='delay'><PushPinIcon/>&nbsp;The Court of Appeal is entitled, when exercising its tasks, to listen to witnesses, interrogate 
the parties of the lawsuit, invite new witnesses, appoint an expert, listen to experts and carry 
out any new investigations it deems appropriate...</h5>
    </div>
    <div className=' mt-5  col-md-10'>
        
        <h4 className='bold1'><strong>Their jurisdiction:</strong></h4></div>
    <div className='mt-5  col-md-20'>
    
    <h6 className='judg'><BlurOnIcon/>Final judgments:</h6>
    <br/>
    <div className='row'>
    <div className='col'>
    
    <div className='container'>
        <h6><strong>With respect to the plaintiff, defendant, responsible for money, and guarantor, the delay is 15 days:</strong></h6>
        <img className='arrow' src={arrow} alt="arrow" />
        <h6 class='text'>As of the date of its issuance if it is made in presentia.As of the date of being noticed whether it is made in presentia or absentia.</h6>
    </div>
    </div>
    <div className='col'>
    <div className='container1'>
        <h6><strong>With respect to the Appellate Public Prosecutor, the delay is one month:</strong></h6>
        <img className='arrow' src={arrow} alt="arrow" />
        <h6 className='text'>As of the date of issuance of the judgment.</h6>
        <br/><br/> 
    </div> 
    </div>
    <div className='col'>
    <div className='container2'>
        <h6><strong>With respect to the Appellate Public Prosecution, the delay is two months:</strong></h6>
        <img className='arrow' src={arrow} alt="arrow" />
        <h6 className='text'>As of the date of issuance of the judgment.</h6>
        <br/><br/> 
    </div>
    </div>
   </div>
    </div>
    <div className='mt-5  col-md-20'>
    <h6 className='judg'><BlurOnIcon/>Decision on revoking or accepting the defenses stated in Article 73 of the Criminal Procedures Code</h6>
    <br/>
    <div className='row'>
    <div className='col'>
    <div className='container'>
        <h6><strong>With respect to the Public Prosecution, the delay is 24 hours:</strong></h6>
        <img className='arrow' src={arrow} alt="arrow" />
        <h6 className='text'>As of the date of issuance of the decision.</h6>
        <br/><br/>
    </div>
    </div>
    <div className='col'>
    <div className='container3'>
        <h6><strong>With respect to the opponents, the delay is 24 hours:</strong></h6>
        <img className='arrow' src={arrow} alt="arrow" />
        <h6 className='text'>As of the date of notifying the opponents of the same.</h6>
        <br/><br/> 
    </div> 
    </div>
   </div>
    </div>
    <div className='mt-5  col-md-20'>
     <h6><ArrowLeftIcon/>The appeal shall be submitted through a lawyer.</h6><br/>
     <h6 className='judg'><BlurOnIcon/>Decisions of the Court of Appeal:</h6><br/>
     <h6><ArrowForwardIcon/>Dissolution of the appealed judgment.</h6>
     <h6><ArrowForwardIcon/>Legalization of the appealed judgment</h6>
    </div>
    </div>
    
    
    )
  }


export default EnglishTab

