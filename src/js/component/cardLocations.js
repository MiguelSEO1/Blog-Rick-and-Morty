import React, {useContext} from "react";
import locationMortyImage from "../../img/locationrickandMorty.jpg"
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";



export const CardLocations = ({location}) => {

const {store, actions} = useContext(Context);

return(
  
<div className="col">
	<div className="card border-2 border-success   ">
            <img src={locationMortyImage} class=" imag card-img-top" alt="..."/>
            <div class="card-body">
            
              <h5 className="card-title text-truncate">{location.name}</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Tipe: {location.type}</li>
                <li class="list-group-item text-truncate">Dimensión: {location.dimension}</li>
                <li class="list-group-item">Residents: {location.residents.length}</li>
              </ul>
              <div className="d-flex justify-content-between mt-2">
                <button type="button" className= {store.favorites.includes(location.name) ? "btn btn-warning text-white" : "btn btn-outline-warning text-warning"} onClick={() => actions.setFavorites(location.name)}>♥</button>

              <Link to = {"card-details-locations/" + location.id}>
              <button type="button" class="btn btn-primary">Details</button>
              </Link>              
             </div>
             </div>
            
        </div>
        </div>
   )

};
