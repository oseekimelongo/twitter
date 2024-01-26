import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons from './Buttons'
import Icons from './Icons';
import Iconsmedia from './Iconsmedia';
import Img from './Img'
import Img1 from './Img1'
import Img2 from './Img2'
import Img3 from './Img3'
import Img4 from './Img4'
import Img5 from './Img5'
import Img6 from './Img6'
import Img7 from './Img7'
import Iconverfied from './Iconverfied'
import Iconbas from './Iconbas'
import But from './But'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'


import Basp from './Basp'
import Navbar from './Navbar'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   

                  <Router>
                       
    <div className='debut'>
                <div>
                    <div className='sb'>
                         <div className='sc'>
                 <Routes>
                <Route path='/Explore' element={<Navbar/>} />
                 </Routes> 

                            <Navbar/>
             
                 <br />
                    <br />
                         <br />
                             <br />
                                 <br />
                                      <br />

                                 <div class="glob">
                                        <div class="sm">
                        
                                            <div>
                                               <Basp/>
                                             </div>
            
                                         </div>
                                 </div>
                       </div>
              </div>
            


</div>
   
 
    <div className="structure" >
              <div className="container"/>

        
                <h1 class="home">Home<Icons/></h1>
  
                        <div className="partie1">
                                <div className="text1">
                                      <Img/>   
                                 </div>
                         </div>
    
                                 <div class="partie2">
                                       <div class="text2">
                                          <Img1/>
                                 </div>
                        </div>
    <div class="partie3">
         <div class="text3">
              <Img2/> 
         </div>
    </div>

                         <div className="block">
                              <div className="partie4">
                                   <Img3/> 
                             </div>
                         </div>
       
    <div className="tweet4">
        <div className='tex4'>
        <Img4/> 
     </div>
    </div>

                              <div className="tweet4">
                                    <div className='tex4'>
                                       <Img5/> 
                                     </div>
                               </div>

    <div className="tweet4">
        <div className='tex4'>
        <Img6/> 
     </div>
    </div>

                                 <div className="tweet4">
                                        <div className='tex4'>
                                            <Img7/> 
                                         </div>
                                 </div>

                     
         </div>
 </div>

   
             
    </Router>
    </>
  )
}

export default App
