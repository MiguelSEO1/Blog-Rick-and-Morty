import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";
import RickandMortyImage from "../../img/RickandMorty.png";


export const Navbar = () => {

const {actions, store} = useContext(Context);

	return (
		
		<nav className="navbar navbar-light bg-light p-3 px-5">
			<Link to="/">
			<img src={RickandMortyImage} alt="RickAndMorty" width="45" height="35"/>			
			</Link>
			<div class="dropdown">
              <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
					{store.favorites.length > 0 ? store.favorites.map((favorite, i)=>{
							return <li key={i} className="dropdown-item text-primary fw-bolder">{favorite} <p onClick={()=>actions.setFavorites(favorite)}>🗑</p></li>
					}) :  <li className="dropdown-item text-center " >EMPTY</li>}
				</ul>
            </div>            
		</nav>
	);
};
