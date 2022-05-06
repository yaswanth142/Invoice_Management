
import Group from "../images/Group.png";
//import logo from "../images/logo.svg";
import "../styles/Navbar.css";


function Navbar() {
  return (

    <div>
       <div className="navbar">
        <div className="logo-flex">
          <div className="logo-item">
          <img src={Group} />
         </div>
        {/* <div className="logo-item"> 
           <img src={logo} />
        </div> */}
    </div>
    </div>
<br/>
<div className="hi">
</div>
<br/>
    </div>

    
   );
}


export default Navbar