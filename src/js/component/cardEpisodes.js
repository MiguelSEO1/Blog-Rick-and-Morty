import React, {useContext} from "react";
import episodeMortyImage from "../../img/episodesrickandMorty.jpg"
import "../../styles/Cards.css";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";


export const CardEpisodes = ({episode}) => {

  const {store, actions} = useContext(Context);

  return(

<div className="col">
		<div className="card border-2 border-success ">
            <img src={episodeMortyImage} class=" imag card-img-top" alt="..."/>
            <div class="card-body">
              <h5 className="card-title text-truncate pb-2">{episode.name}</h5>
              <ul class="list-group list-group-flush">
              <li class="list-group-item text-truncate">Air Date: {episode.air_date}</li>
              <li class="list-group-item">Episode: {episode.episode}</li>
              <li class="list-group-item">Characters: {episode.characters.length}</li>
              </ul>
              <div className="d-flex justify-content-between mt-2">
                <button type="button" className= {store.favorites.includes(episode.name) ? "btn btn-warning text-white" : "btn btn-outline-warning text-warning"} onClick={() => actions.setFavorites(episode.name)}>♥</button>

              <Link to = {"card-details-episodes/" + episode.id}>
              <button type="button" class="btn btn-primary">Details</button>
              </Link>              
             </div>
        </div>
        </div>
        </div>
  )

};



