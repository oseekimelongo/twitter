import Iconbas from './Iconbas'
function Img1 (props){
    return (
        <>

          <div className="img">
           <img src="data:image/png;base64,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" alt="" srcset=""/> 
         
          </div>

         <div>
          <h3> CNN:</h3>
                  <p>CNN est un gryudydyttoupe emblématique du Hip-Hop bruxellois. 
                        Il est apparu à une époque où les activistes
                        étaient plutôt rares à 
                        Bruxelles, le Hip-Hop était loin de la
                        place qu’il occupe aujourd’hui. " Le grou
                        pe CNN est né tout au début des années 90, dans le 
                        courant de 1991, explique Rival membre fondateur
                        du groupe bruxellois. Mon idée, c’était de créer
                        un groupe autour de ma bande de potes, on était 
                        une bande de gamin, on taguait partout ! On avait besoin d’une 
                        bannière à nous, c’est pour ça que j’ai 
                        créé CNN. On était déchaîné, </p> <Iconbas/>
</div>
        </>

        
      
    )
}

export default Img1;