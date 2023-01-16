import React from "react";
import episodeMortyImage from "../../img/episodesrickandMorty.jpg"
import "../../styles/Cards.css";
import { Link } from "react-router-dom";


export const CardEpisodes = ({episode}) => (
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
              <Link to = {"card-details-episodes/" + episode.id}>
              <button type="button" class="btn btn-primary mt-2">Details</button>
              </Link>
            </div>
        </div>
        </div>
);


