import Iconbas from './Iconbas'

function Tweet (props){
    return (
        <>
<div className="img">
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAwSj-ji9_7FMplNiYJFcSm-AM773Q54R3Uw&usqp=CAU"} />
          </div>

          <div>
                    <h4> 
                            The news york times
                    </h4>

                        <p>
                                    Cette région s'étend sur quatre États (New York, 
                                    New Jersey, Connecticut, Pennsylvanie) et quelque 
                                    17 400 km2 . Sa population est de 18,8 millions
                                     d'h abitants ...
                         </p><Iconbas/>
          </div>

        </>

        
      
    )
}

export default Tweet;