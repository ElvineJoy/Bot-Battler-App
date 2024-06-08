import React, { useState, useEffect } from 'react';
import SortBar from './SortBar';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';

function BodyContainer() {
  const [bots, setBots] = useState([]);
  const [myArmy, setMyArmy] = useState([]);

  
   
  // getting the bots from the API using fetch
  useEffect(() => {
      fetch("http://localhost:8001/bots")
      .then(r => r.json())
      .then(bots => {
          setBots(bots)}) 
  }, []);

// adding the bot to yourArmy Component
  function handleAddBotToArmy(botToAdd) {
    const myBotArmy = myArmy.find(bot => 
      bot.id === botToAdd.id
    );
    if(!myBotArmy) {
      setMyArmy([...myArmy, botToAdd])
    } else {
      alert(`Bot ${botToAdd.name} is in your army, choose another bot!!`)
    }
  }

  // removing the bot from myArmy Component
  function handleRemoveFromArmy(botToRemove) {
    setMyArmy((myArmy) => 
      myArmy.filter((bot) => 
        bot.id !== botToRemove.id 
    ));
  }

  return (
    <div>
         <YourBotArmy bots={myArmy} onRemoveBot={handleRemoveFromArmy}/>
         <SortBar />
         <BotCollection bots={bots} onAddBot={handleAddBotToArmy}/>
    </div>
  )
}

export default BodyContainer