import React from "react";

import { useCharater } from "../hooks/useCharacter";
import "./Character.css";

export default function Character() {
  const { data, loading, error } = useCharater(5);
  
  if(error) return <div>something went wrong</div>

  if(loading) return <div>spinner</div>

  return ( <div className="Character">
     <img src={data.character.image} width={750} height={750} />
     <div className="Character-content">
       <h1>{data.character.name}</h1>
       <p>{data.character.gender}</p>
       <div className="Character-episode">
         {data.character.episode.map((episode) => {
           return (
             <div>
               {episode.name} - <b>{episode.episode}</b>
             </div>
           );
         })}
       </div>
     </div>
  </div>
  ); 
}



