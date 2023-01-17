import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";



export const CardCharacters = ({character}) => {

const {store, actions} = useContext(Context);

return(
  
<div className="col">
		<div className=" card border-2 border-success" style={{width: "18rem"}} >
            <img src={character.image} class=" card-img-top" alt="..."/>
            <div class="card-body">
              <h5 className="card-title text-truncate">{character.name}</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Status: {character.status}</li>
                <li class="list-group-item">Specie: {character.species}</li>
                <li class="list-group-item">Gender: {character.gender}</li>
              </ul>
              <div className="d-flex justify-content-between mt-2">
                <button type="button" className= {store.favorites.includes(character.name) ? "btn btn-warning text-white" : "btn btn-outline-warning text-warning"} onClick={() => actions.setFavorites(character.name)}>♥</button>
                <Link to = {"card-details/" + character.id}>
                <button type="button" class="btn btn-primary ">Details</button>
              </Link>
              </div>
            </div>
        </div>
        </div>
     )

};

  