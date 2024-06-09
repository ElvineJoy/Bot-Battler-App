import React, { useState, useEffect } from 'react';
import SortBar from './SortBar';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';

function BodyContainer() {
  const [bots, setBots] = useState([]);
  const [myArmy, setMyArmy] = useState([]);
  const [sortedBy, setSortedBy] = useState("Health")
  const [filterBy, setFilteredBy] = useState("Support")
 
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

  // Deleting bot completely from front end and backend
  
  function handleDeleteBot(botToDelete) {
    fetch(`http://localhost:8001/bots/${botToDelete.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        setBots((bots) => bots.filter((bot) => bot.id !== botToDelete.id));
        setMyArmy((myArmy) => myArmy.filter((bot) => bot.id !== botToDelete.id));
      });
    }

  // sorting
  const sortedBots = (bots) => {
    switch (sortedBy) {
      case 'armor':
        return [...bots].sort((botA, botB) => botA.name.localeCompare(botB.name));
      case 'damage':
        return [...bots].sort((botA, botB) => botB.damage - botA.damage); // Sorting by damage in descending order
      case 'health':
        return [...bots].sort((botA, botB) => botB.health - botA.health); // Sorting by health in descending order
      default:
        return bots;
    }
  };

// filtering
  const filteredBots = (bots) => {
    if (!filterBy) return bots
    return bots.filter((bot) => bot.bot_class === filterBy);
  };

  const botsToBeDiaplayed = filteredBots(sortedBots(bots));

  return (
    <div>
      <YourBotArmy bots={myArmy} onRemoveBot={handleRemoveFromArmy} onDeleteBot={handleDeleteBot}/>
      <SortBar  sortedBy={sortedBy} filterBy={filterBy} onChangeFilter={setFilteredBy} onChangeSort={setSortedBy}/>
      <BotCollection bots={botsToBeDiaplayed} onAddBot={handleAddBotToArmy} myArmy={myArmy}/>
    </div>
  )
}

export default BodyContainer