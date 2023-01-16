import React, {useContext, useEffect} from "react";
import { CardCharacters } from "../component/cardCharacters";
import { CardEpisodes } from "../component/cardEpisodes";
import { CardLocations } from "../component/cardLocations";
import { Context } from "../store/appContext";


export const Home = () => {

	const {store, actions} = useContext(Context);
	
	return (
	
	<div className=" text-center m-5 ">
		<div className="container">
		
		<h2 className=" pb-3  text-danger text-start fs-3 ">Characters</h2>
		<div className=" row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5  pt-1 pb-3 g-3">	
		{store.characters.map((character) => {
			console.log(character);
			return <CardCharacters key ={character.id} character={character}/>
		})}
		
		
		</div>
		<h2 className=" pt-4 pb-3 text-start  text-danger fs-3">Locations</h2>
		<div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 pt-1 pb-3 g-3">
		{store.locations.map((location) => {
			console.log(location);
			return <CardLocations key ={location.id} location={location}/>
		})}
		
		</div>
		<h2 className="pt-4 pb-3 text-start text-danger fs-3">Episodes</h2>
		<div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 pt-1 pb-3 g-3">
		{store.episodes.map((episode) => {
			console.log(episode);
			return <CardEpisodes key ={episode.id} episode={episode}/>
		})}
		
		</div>
		
		</div>
	</div>
)};
