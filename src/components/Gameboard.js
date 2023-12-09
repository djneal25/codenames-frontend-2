import React, { Component } from 'react'

export default class gameboard extends Component {

  render() {

   const cards = new Array(25).fill(null); // Creates an array with 25 items

    return (
      <div>
         <div class="gameboard-header">
            <div class="gameboard-header-inner">
               <h1>Profile Name</h1>
               <h1>Turn</h1>
               <h1>Guesses Left</h1>
            </div>
         </div>
         <div class="gameboard-body">
            <div class="gameboard-screen">
               <div class="clue top-margin">
                  <h1>Clue Given Here</h1>
               </div>
               <div className="card-grid top-margin">
                  {cards.map((_, index) => (   
                     <div key={index} className="card" style={{ backgroundColor: (index+1) % 2 === 0 ? '#70fbff' : (index+1) === 11 ? 'white':'#a60c0c' }}>Card {index + 1}</div>
                  ))}
               </div>
            </div>         
         </div>
         <div class="gameboard-footer">
            <div class="gameboard-footer-inner ">
               <div class="gameboard-footer-textarea">
                  <h3 class="margin-left">Clue:</h3>
               </div>
            </div>
         </div>
      </div>
    )
  }
}



