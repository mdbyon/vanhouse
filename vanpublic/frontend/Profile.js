import React from 'react';


export const Profile=(props)=>{
  return(
    <div className="profile-container">
      <h1>{props.bio.name}</h1>
    </div>
  )
}