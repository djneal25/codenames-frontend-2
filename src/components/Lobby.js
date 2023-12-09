import React, { Component } from 'react'

export default class Lobby extends Component {
  render() {
   let players = ['Ryan','Liao','Jalen','harris','Ryan','Liao','Jalen','harris']

    return (
      <div>
         <div class="gameboard-header">
            <div class="gameboard-header-inner">
               <h1>Profile Name</h1>
               <h1>Turn</h1>
               <h1>Guesses Left</h1>
            </div>
         </div>
         <div className='gameboard-body'>
            <div className='lobby'>
               <div className='lobby-players'>
                  <div className='lobby-players-inner'>
                     {players.map((player, index) => (   
                        <div key={index} className='player'><h1>{player}</h1></div>
                     ))}
                  </div>
               </div>
               <div className='lobby-button-container'>
                  <div className='lobby-button-container-inner'>
                     <div className='lobby-button'><h2>Join</h2></div>
                     <div className='lobby-button'><h2>Start</h2></div>
                     <div className='lobby-button'><h2>Leave</h2></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
  }
}

