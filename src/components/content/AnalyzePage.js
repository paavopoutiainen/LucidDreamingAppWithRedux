import React from "react"
import DreamList from "../dreams/Dreamlist.js"

function AnalyzePage({dreams}){
    
  
    return (
      <div>
        <h1>Analyze</h1>
        <p>Here we will have some kind of way for selecting a specific dream 
          to be analyzed. And then the user will be asked relevant questions
          about their dream. For example he will be asked to write down all their 
          dream characters he met in the dream. These markups will also 
          be saved into a database in order to store relative data
          about dreamer's dreams for further analysis and practice.
        </p>
        <h5>Choose the dream you want to analyze</h5>

        <DreamList></DreamList>
        
       
      
      </div>
    )
  }

  export default AnalyzePage