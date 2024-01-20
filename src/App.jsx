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
import Menu_0 from './Menu_0'
import Menu_1 from './Menu_1'
import Menu_2 from './Menu_2'
import Menu_3 from './Menu_3'
import Menu_4 from './Menu_4'
import Menu_5 from './Menu_5'
import Menu_6 from './Menu_6'
import Menu_7 from './Menu_7'
import Menu_80 from './Menu_80'
import BpTwitte from './BpTwitte'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
<div>
<div className='sb'>
<div className='sc'>
<div>
                 <div>
                 <Menu_0/>
                 </div>

                  <div>
                 <Menu_80/>
                 </div>

                 <div>
                 <Menu_1/>
                 </div>

                 </div> 
                 <Menu_2/>
                 <div>
                 <Menu_3/>
                 </div>
                 <div>
                 <Menu_4/>
                 </div>
                 <div>
                 <Menu_5/>
                 </div>
                 <div>
                 <Menu_6/>
                 </div>
                 <div>
                 <Menu_7/>
                 </div>
          

                 <br />

               

                <BpTwitte/>

                

                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
</div>
</div>
</div>

   
    <div className='debut'>
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

   
             

    </>
  )
}

export default App
