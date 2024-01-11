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
        </>
        )
 }
    export default appp