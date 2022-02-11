import React, { Component } from 'react'
import{useTranslation,withTranslation,Trans} from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';
import './EnglishTab.css'
import AlignHorizontalRightIcon from '@mui/icons-material/AlignHorizontalRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import magnifying from './magnifying-glass.png'
import Paper from '@mui/material/Paper';
import PushPinIcon from '@mui/icons-material/PushPin';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import arrow from './right-drawn-arrow.png'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
  const ArabicTab= ()=>{
      const {t}= useTranslation();

 
    return (
    <div> 
    <div className="container mt-5 col-9 col-md-6  ">
          
    <h6>.في نطاق كل محافظة محكمة استئناف أو أكثر-</h6>
    <h6>.تتألف محكمة الاستئناف من ٣ قضاة: رئيس ومستشارين-</h6>
    <h6>.تتمثل النيابة العامـة أمام محكمة الاستئناف إمـا بالنائب العام الاستئنافي أو بأحـد المحامين العاميـن-</h6>
    </div>
    <div className='container mt-5  col-md-10'>
        
        <h4 className='bold'> <strong>:اختصاصها&nbsp;</strong><AlignHorizontalRightIcon/></h4>
        <br/>
        <h6 className='margin1'> تنظر محكمة الاستئناف في استئناف جميع الأحكام الصادرة عن القاضي المنفرد الجزائي في <strong>قضايا الجنح</strong>، شرط أن تكون قد فصلت في أساس النزاع. أما إذا لم تكن قد فصلت في أساس النزاع    &nbsp;<ArrowBackIcon/></h6>
        <h6 className='margin1'>. فلا يجوز استئنافها إلا مع الحكم النهائي</h6>
        <br/>
        <h6><strong> &nbsp;: استثناء على ذلك</strong></h6><br/>
        <h6 className='margin1' > يقبل إستئناف القرارات التي تفصل في دفع أو أكثـر مـن الدفوع الشكلية المنصوص عليها في المادة 	٧٣ مـن قانـون أصـول المحاكمات الجزائية  <ArrowBackIcon/>&nbsp;</h6>
        <h6 className='margin1'>لقرارات التي ينهي بها القاضي المنفرد الدعوى من دون أن يتعرض لموضوعها<ArrowBackIcon/>&nbsp;</h6>
        <h6 className='margin1'>القرارات الصادرة في قبول أو رد طلبات إخلاء السبيل<ArrowBackIcon/>&nbsp; </h6>
        </div>
        <div className='mt-5  col-md-20'>
        
        <img className='img' src={magnifying} alt="magnifying" />
       
        <Paper elevation={16}>
        <h6 >تنظر محكمة الاستئناف في استئناف الأحكام الصادرة عن القاضي المنفرد الجزائي في ا المخالفات، شرط أن تكون قد قضت ب</h6>
            </Paper>
            
        <div className='row'>
            <br/><br/>
            <div className='col'>
            <div className="circle1a">
            
  <small>الحبس أو التوقيف التكديري أو غرامة تزيد على الخمسمائة ألف ليرة لبنانية</small></div></div>
  <div className='col'>
  <div className="circle2a">
  <small>عقوبة إضافية أو فرعية أو تعويضات شخصية تزيد على الخمسمائة ألف ليرة لبنانية</small></div></div>
  <div className='col'>
  <div className="circle3a">
  <small>ردّ دفع من الدفوع المنصوص عليها في المادة 	٧٣ من قانون أصول المحاكمات الجزائية</small></div>
  </div>
  <div className='col'>
  <div className="circle4a">
  <small>عقوبة لمخالفة متلازمة مع جنحة</small></div>
  </div>
        </div>
        </div>

    <div className=' mt-5  col-md-10'>
    <h5 className='delay'>لمحكمة الاستئناف عند ممارستها مهامها أن تستمع إلى الشهود، تستجوب أطـراف الدعـوى، دعـوة شهود <PushPinIcon/></h5>
    </div>
    <h5 className='delay'>جـدد، تعيين خبيـر، الاستماع إلى أصحاب الخبرة وإجراء أي تحقيقات جديدة تراها مناسبة</h5>
    <div className='mt-5  col-md-20'>
    <h4 className='bold2'><strong>مهلة الاستئناف</strong></h4>
    <h6 className='judg'>الأحكام النهائية<BlurOnIcon/></h6>
    <br/>
    <div className='row'>
    <div className='col'>
    
    <div className='container'>
        <h6><strong>بالنسبة للمدعي والمدعى عليه والضامن والمسؤول بالمال، المهلة هي ١٠ يوما</strong></h6>
        <img className='arrow' src={arrow} alt="arrow" />
        <h6 className='text'>من تاريخ صدور الحكم إذا كان وجاهيا</h6>
        <h6 className='text'>من تاريخ تبليغه إذا كان بمثابة الوجاهي أو غيابيا</h6>

        
    </div>
    </div>
    <div className='col'>
    <div className='container1'>
        <h6><strong>بالنسبة للنائب العام الاستئنافي، المهلة هي شهرا</strong></h6>
        <img className='arrow' src={arrow} alt="arrow" />
        <h6 className='text'>من تاريخ صدور الحكم</h6>
        <br/><br/> 
    </div> 
    </div>
    <div className='col'>
    <div className='container2'>
        <h6><strong>بالنسبة للنائب العام الاستئنافي، المهلة هي شهران</strong></h6>
        <img className='arrow' src={arrow} alt="arrow" />
        <h6 className='text'>من تاريخ صدور الحكم</h6>
        <br/><br/> 
    </div>
    </div>
   </div>
    </div>
    <div className='mt-5  col-md-20'>
    <h6 className='judg'>قرار رد أو قبول الدفوع الواردة في المادة ٧ من قانون أصول المحاكمات الجزائية
<BlurOnIcon/></h6>
    <br/>
    <div className='row'>
    <div className='col'>
    <div className='container'>
        <h6><strong>بالنسبة للنيابة العامة، المهلة هي ٢٤ ساعة</strong></h6>
        <img className='arrow' src={arrow} alt="arrow" />
        <h6 className='text'>من تاريخ صدور القرار</h6>
        <br/><br/>
    </div>
    </div>
    <div className='col'>
    <div className='container3'>
        <h6><strong>بالنسبة للخصوم، المهلة هي  ٢٤ ساعة</strong></h6>
        <img className='arrow' src={arrow} alt="arrow" />
        <h6 className='text'>من تاريخ تبليغه للخصوم</h6>
        <br/><br/> 
    </div> 
    </div>
   </div>
    </div>
    <div className='mt-5  col-md-20'>
     <h6>يجب أن يقدم الاستئناف بواسطة محام<ArrowLeftIcon/></h6><br/>
     <h6 className='judg'>قرارت المحكمة الاستئنافية<BlurOnIcon/></h6><br/>
     <h6>فسخ الحكم المستأنف<ArrowBackIcon/></h6>
     <h6>تصديق الحكم المستأنف<ArrowBackIcon/></h6>
    </div>
    </div>
    
    
    )
  }


export default ArabicTab
