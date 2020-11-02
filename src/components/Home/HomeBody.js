import React from 'react'
import "../components.css";
import {gql, useQuery} from '@apollo/client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';



const CARRUSEL_PERSON = gql`

{
    characters(page:1) {
      info{
        pages
        next
          count
        prev
      },
      
      results {
        id
        name
        status
        species
        gender
        image
        location{
            name
        }
      }
    }
  }
  
  

`;

const Home = () => {

    const {loading, error,data} = useQuery(CARRUSEL_PERSON);
    //console.log(data)

    if(loading) return <p>Cargando mensajes...</p>
    if(error) {<p>Hubo un error...</p>} 

    return (
       <div className="">

             <div className="container">

                    <div id="carouselExampleControls" className="carousel slide mt-5 colorCard" data-ride="carousel">
                        <div className="carousel-inner">


                            <div  className="carousel-item mt-3 active" >
                                <div className="col d-flex justify-content-center ">
                                    <div className="card mb-3 d-block w-100" style={{maxWidth: '740px'}}>
                                        <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img src="./rick1.png" className="card-img" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                            <h5 className="card-title ctsize">My List</h5>
                                            <p className="card-text TmDescriptionCard">Estas Preparado para esto</p>
                                            <p className="card-text TmDescriptionCard">Autor: Luis Eduardo Angulo Enriquez</p>
                                            <p className="card-text TmDescriptionCard"><small className="text-muted">EL REY, Practicando con otros APIS, Consumiendolos y refrescando la mente con lo aprendido, todo se puede si te lo propones y eres constante, que nunca se te olvide eso</small></p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {
                                data.characters.results.map(({id,name,status,species,gender,image,location})=>(
                                <div  className="carousel-item mt-3 " id={id} >
                                    <div className="col d-flex justify-content-center ">
                                        <div className="card mb-3 d-block w-100" style={{maxWidth: '740px'}}>
                                            <div className="row no-gutters">
                                            <div className="col-md-4">
                                                <img src={image} className="card-img" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                <h5 className="card-title ctsize">{name}</h5>
                                                <div className="row container">
                                                {
                                                    status === "Alive" ?
                                                    <FontAwesomeIcon icon={faCircle} color="green" className="mt-1" fixedWidth  />
                                                    :
                                                    status=== "Dead" ?
                                                    <FontAwesomeIcon icon={faCircle} color="red" className="mt-1" fixedWidth  />
                                                    :
                                                    <FontAwesomeIcon icon={faCircle} color="gray" className="mt-1" fixedWidth  />

                                                }
                                                    <p className="card-text TmDescriptionCard"> {status} -</p>
                                                    <p className="card-text TmDescriptionCard">{species}</p>
                                                </div>
                                                <p>Location:</p>
                                                <p className="card-text TmDescriptionCardFixed">{location.name}</p>
                                                <p>Genero:</p>
                                                <p className="card-text TmDescriptionCardFixed">{gender}</p>
                                                
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))
                            }
                        </div>

                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                        </a>

                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon bg-dark " aria-hidden="true" />
                        <span className="sr-only" >Next</span>
                        </a>
                    </div>
            </div> 
       </div>
    )
}

export default Home