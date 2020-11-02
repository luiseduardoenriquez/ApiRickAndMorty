import React, { useState } from "react";
import "../components.css";
import { gql, useQuery } from "@apollo/client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
//arrow-alt-circle-right

const CAPITULOSID = gql`
  query($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      status
      species
      gender
      image
      episode {
        name
      }
    }
  }
`;

const ObSearch = () => {
  const [ids, setIds] = useState(1);

  const { loading, error, data, refetch } = useQuery(CAPITULOSID, {
    variables: { ids },
    //pollInterval: 500, Actualiza el cache con los datos mas nuevos, cada cierto tiempo
  });

  //console.log(data)

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      <div className="container mt-4">
        <div>
          <div>
            <div className="card card-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="flex-row align-items-center">
                  <p className="TmDescriptionCard" style={{fontSize: 30, fontWeight: 1000 }}>Filtro ID</p>
                  
                  <input className="form-control" type="text" id="inputsearch" placeholder="Ingrese cualquier ID del 1 al 671" />
                </div>

                <button
                  className="btn btn-block col"
                  onClick={() =>
                    refetch(
                      setIds(document.getElementById("inputsearch").value)
                    )
                  }
                  style={{  fontSize: 20, fontWeight: 1000 }}
                >
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    
                    className="mt-1"
                    fixedWidth
                  />{" "}
                  Consultar
                </button>
              </form>

              <div className="col mt-5">
                {data.charactersByIds.map(
                  ({ id, name, status, species, gender, image, episode }) => (
                    <div className="row">
                      <div
                        className="card mb-3 d-block w-100"
                        style={{ maxWidth: "1100px" }}
                        id={id}
                      >
                        <div className="row no-gutters">
                          <div className="col-md-6">
                            <img src={image} className="card-img" alt="..." />
                          </div>
                          <div className="col-md-6">
                            <div className="card-body">
                              <h5 className="card-title ctsize">{name}</h5>
                              <div className="row container">
                                {status === "Alive" ? (
                                  <FontAwesomeIcon
                                    icon={faCircle}
                                    color="green"
                                    className="mt-1"
                                    fixedWidth
                                  />
                                ) : status === "Dead" ? (
                                  <FontAwesomeIcon
                                    icon={faCircle}
                                    color="red"
                                    className="mt-1"
                                    fixedWidth
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    icon={faCircle}
                                    color="gray"
                                    className="mt-1"
                                    fixedWidth
                                  />
                                )}
                                <p className="card-text TmDescriptionCard">
                                  {" "}
                                  {status} -
                                </p>
                                <p className="card-text TmDescriptionCard">
                                  {species}
                                </p>
                              </div>

                              <p>Genero:</p>
                              <p className="card-text TmDescriptionCardFixed">
                                {gender}
                              </p>

                              <p className="card-text TmDescriptionCardFixed">
                                {episode.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObSearch;
