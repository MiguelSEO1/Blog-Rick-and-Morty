import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import locationMortyImage from "../../img/locationrickandMorty.jpg"
import "../../styles/cardDetails.css";


export const CardDetailsLocations = () => {
	const params = useParams();
	const [ locationDetails, setLocationDetails] = useState({});
	
	useEffect(() => {
		getDetailsLocations();
	},[])
	
	
	
	const getDetailsLocations = async () => {
		const response = await fetch("https://rickandmortyapi.com/api/location/" + params.id);
		const data = await response.json();
		setLocationDetails(data);
	}
	
	
	
	
	
	
	return (
		<div class=" container" >
		<div class=" card m-5 border border-0" >
            <div class=" row d-flex align-items-center ">
              <div class="col-md-4">
              <img src={locationMortyImage} class=" imagen img-fluid rounded-start" alt="..."/>
			  </div>
              <div class="col-md-8 ">
      <          div class="card-body">
                  <h1 class="card-title pb-3">{locationDetails.name}</h1>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
              </div>
            </div>
        </div>
		<div class="h4 pb-2 mb-4 text-danger border-top border-danger ">
		<div class=" row p-3 text-center row row-cols-2 row-cols-sm-2 row-cols-md-3">
		<div class=" col ">
		<p class="card-title  fs-5">Name</p>	
		<p class="card-title pb-1 fs-6">{locationDetails.name}</p>
		</div>
		<div class=" col ">
		<p class="card-title fs-5">Dimension</p>	
		<p class="card-title pb-1 fs-6">{locationDetails.dimension}</p>
		
		</div>
		<div class=" col ">
		<p class="card-title  fs-5">Type</p>	
		<p class="card-title pb-1 fs-6">{locationDetails.type}</p>
		
		</div>

		</div>
</div>
		</div>
		
	);
};