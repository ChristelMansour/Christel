import React, {Component} from "react";
import {Link} from "react-router-dom";
import {useTranslation , withTranslation,Trans} from "react-i18next"
import i18next from "i18next"


 
const Header=()=>{
  const{i18n , t}=useTranslation('common');
const handleLanguageChange =(e) =>{
  i18n.changeLanguage(e.target.value)
}

return(
 <div> 
   <nav className="navbar navbar-dark bg-info"
    text-decoration= "none" >
  <Link classname='link'  to="/">Criminal Court of Appeal</Link>
  <Link  classname='link'value='ar'  to="/Arabic">محكمة الاستئناف الجزائية</Link>
  
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <select className="nav-link bg-info border-0"value={(localStorage.getItem("i18nextLng"))} onChange={handleLanguageChange}>
        <option to="/EnglishTab" value ="en">English</option>
          <option to="/ArabicTab" value ="ar">Arabic</option>
         
        </select>
      
      </li>
    </ul>

  </div>
</nav>
</div>
);
};
export default Header;