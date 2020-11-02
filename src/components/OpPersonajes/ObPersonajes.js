import React,{useState} from 'react'
import "../components.css";
import {gql, useQuery} from '@apollo/client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
//arrow-alt-circle-right


const PERSONS = gql`

 query($page:Int){
    characters(page:$page){
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

const ObPersonajes = () => {

    const [page, setPage] = useState(1)    

    //var page=1;

        const {loading, error,data,refetch } = useQuery(PERSONS,{
            variables:{page},
            //pollInterval: 500, Actualiza el cache con los datos mas nuevos, cada cierto tiempo
        });
    

    console.log(data)


    if (loading) return null;
    if (error) return `Error! ${error}`; 

    return (
        
        <div className="container">
             {/* <button onClick={() => refetch(setPage(page+1))}>Refetch!</button>  */}
            <div className="container mt-3 ">
                <div className="row">
                    <button className="btn btn-block col" onClick={() => refetch(setPage(page-1))} style={{color:"red", fontSize:20, fontWeight: 1000}}><FontAwesomeIcon icon={faArrowAltCircleLeft} color="red" className="mt-1" fixedWidth  /> Atras</button>
                    <button className="btn btn-block col" onClick={() => refetch(setPage(page+1))}  style={{color:"red", fontSize:20, fontWeight: 1000}}>Siguiente <FontAwesomeIcon icon={faArrowAltCircleRight} color="red" className="mt-1" fixedWidth  /> </button>
                </div>
            </div>
            <div className="row mt-3">
                {
                    data.characters.results.map(({id,name,status,species,gender,image,location})=>(
                        <div className="col-6" id={id}>
                            <div className="card mb-3 d-block w-100" style={{maxWidth: '550px'}}>
                                <div className="row no-gutters">
                                <div className="col-md-6">
                                    <img src={image} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-6">
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
                    ))
                }
            </div>
            <div className="container mt-3">
                <div className="row">
                    <button className="btn btn-block col" onClick={() => refetch(setPage(page-1))} style={{color:"red", fontSize:20, fontWeight: 1000}}><FontAwesomeIcon icon={faArrowAltCircleLeft} color="red" className="mt-1" fixedWidth  /> Atras</button>
                    <button className="btn btn-block col" onClick={() => refetch(setPage(page+1))}  style={{color:"red", fontSize:20, fontWeight: 1000}}>Siguiente <FontAwesomeIcon icon={faArrowAltCircleRight} color="red" className="mt-1" fixedWidth  /> </button>
                </div>
            </div>
        </div>
    )
}

export default ObPersonajes
