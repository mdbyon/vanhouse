import React from 'react'
import {Profile} from "./Profile";
import {JeffWarnerBio} from "./constants/profileConstants";

export const JeffWarner =()=>{
  return (
    <Profile linkToPic={'./img/jeff.jpeg'} bio={JeffWarnerBio}
    />
  )
}