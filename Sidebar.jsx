import "./Sidebar.css"

import myImage from "./assets/Auto_GPT_Logo.png"
import { useContext, useEffect } from "react";
import {MyContext }from "./MyContext.jsx";

function Sidebar(){
     const {allThreads, setAllThreads, currThreadId}=useContext(MyContext);

     const getAllThreads = async ()=>{

      try {
           const response = await fetch("http://localhost:8080/api/thread");
           const res= await response.json();
           const filteredData = res.map(thread =>({threadId: thread.threadId, title:thread.title}))
           console.log(filteredData);
           setAllThreads(filteredData);
           
           
      }catch(err) {
        console.log(err);
        
      }
     };

     useEffect( () => {
      getAllThreads();
     }, [currThreadId])




    return (



<section className="sidebar">


   <button>
    <img className="logo" src={myImage} alt="logo" />

    <span><i className="fa-solid fa-pen-to-square"></i></span>
</button>  



    <ul className="history">
        {
          allThreads?.map((thread, idx) => (
           < li key={idx}>{thread.title}</li>

          ))
        }
    </ul>


  <div className="sign">
    <p> © By Khushi & Srestha  &hearts;</p>
  </div>

</section>  
 )
}

export default Sidebar;
