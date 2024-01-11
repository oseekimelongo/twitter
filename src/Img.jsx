import Iconsmedia from './Iconsmedia';
import Input from './Input'


function Img (props){
    return (
        <>
<div className="img">
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbNBk-bsgqdwsDYxA64Aw5Hp2GgohrG-hrg&usqp=CAU"} />
          </div>
          <div>
          <p>
          what's happennin
          </p>

<div className="iconebutt">
       
            <div id="butt"> <Iconsmedia/> 
            <Input butt="tweet"/>
            </div> 
            </div>
            </div>
            
        </>

        
      
    )
}

export default Img;

