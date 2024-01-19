import { useState } from "react"

function appp() {

const [pers, setPers] = useState([''])
const [per, setPer] = useState()

        const handleClick = () => {
            setPer([pers, ...pers])

    }

        return (
            
        <>
        <ul>
            {
                per.map( function (pp) {
                    return <li>{pp}</li>
                })
            }
        </ul>

        $(document).ready(function(){
  $('#number').click(function(){ /*1*/
    var nombre=$('#number').text(); /*2*/
    var nombreplus1=parseInt(nombre)+1; /*3*/
     $('#number').html(nombreplus1); /*4*/
  });
});

        </>
        )
 }
    export default appp