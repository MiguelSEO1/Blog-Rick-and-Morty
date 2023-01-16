import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/cardDetails.css";


export const CardDetails = () => {
	const params = useParams();
	const [ characterDetails, setCharacterDetails] = useState({});
	
	useEffect(() => {
		getDetails();
	},[])
	
	
	
	const getDetails = async () => {
		const response = await fetch("https://rickandmortyapi.com/api/character/" + params.id);
		const data = await response.json();
		setCharacterDetails(data);
	}
	
	
	return (
		<div class=" container" >
		   <div class=" card m-5 border border-0" >
               <div class=" row d-flex align-items-center ">
                 <div class="col-md-4">
			    <img src={characterDetails.image} class=" imagen img-fluid rounded-start" alt="..."/>
			     </div>
                 <div class="col-md-8 ">
      <             div class="card-body ">
                     <h1 class="card-title pb-3">{characterDetails.name}</h1>
                     <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                   </div>
                 </div>
               </div>
           </div>
		
		   <div class="h4 pb-2 mb-4 text-danger border-top border-danger ">
		   <div class=" row p-3 text-center row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
		      <div class=" col ">
		         <p class="card-title  fs-5">Name</p>	
		         <p class="card-title pb-1 fs-6">{characterDetails.name}</p>
		      </div>
		      <div class=" col ">
		         <p class="card-title fs-5">Status</p>	
		         <p class="card-title pb-1 fs-6">{characterDetails.status}</p>
		      </div>
		      <div class=" col ">
		         <p class="card-title  fs-5">Species</p>	
		         <p class="card-title pb-1 fs-6">{characterDetails.species}</p>		
		      </div>
		      <div class=" col ">
		         <p class="card-title  fs-5">Gender</p>	
		         <p class="card-title pb-1 fs-6">{characterDetails.gender}</p>		
		      </div>
		      <div class=" col ">
		         <p class="card-title  fs-5">Type</p>	
		         <p class="card-title pb-1 fs-6">{characterDetails.type}</p>
		      </div>
		   </div>
       </div>
	</div>
		
	);
};


