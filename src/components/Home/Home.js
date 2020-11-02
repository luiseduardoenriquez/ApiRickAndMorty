import React from 'react'
import "../components.css";
import HomeBody from './HomeBody'

const Home = () => {
    return (
       <div >

             <div className="fondoContainer">
                <div className="container">
                    <div className="Anuncio">
                        <div className="TextCenter">
                            <p style={{color:"red"}}>The Rick And Morty Hallowen</p>
                            <img src="./fondo.jpg" alt="fondo" className="fondo" />
                        </div>
                    </div>
                </div> 
             </div>

             <HomeBody/>
            
            

       </div>
       
       
       
    )
}

export default Home
