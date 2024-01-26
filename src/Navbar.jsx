
import Menu_0 from './Menu_0'
import Menu_1 from './Menu_1'
import Menu_2 from './Menu_2'
import Menu_3 from './Menu_3'
import Menu_4 from './Menu_4'
import Menu_5 from './Menu_5'
import Menu_6 from './Menu_6'
import Menu_7 from './Menu_7'
import Menu_8 from './Menu_8'


import BpTwitte from './BpTwitte'
import { Link } from 'react-router-dom'



export default function Navbar() {
    return (
        <>
             <div className='navbar'>
                 <div>
                 <Menu_0/>
                 </div>

                  <div>
                  <Link to="/Home"><Menu_8/></Link>
                 </div>

                 <div>
                    
                 <Link to="/Explore"><Menu_1/></Link>
                 </div>

                 </div> 
                 <Link to="/Notifications"><Menu_2/></Link>
                 <div>
                 <Link to="/Messages"><Menu_3/></Link>
                 </div>
                 <div>
                 <Link to="/Bookmarks"><Menu_4/></Link>
                 </div>
                 <div>
                 <Link to="/Listes"><Menu_5/></Link>
                 </div>
                 <div>
                 <Link to="mon_profil"><Menu_6/></Link>
                 </div>
                 <div>
                 <Link to="/More"><Menu_7/></Link>
                 </div> 
<br />
                 <BpTwitte/>

                 
          
        </>
    )
}