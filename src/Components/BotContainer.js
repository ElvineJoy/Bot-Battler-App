import React, { useEffect, useState} from 'react'
import Bot from './Bot';

function BotContainer() {
    const [bots, setBots] = useState([]);
   
    // getting the bots from the API using fetch
    useEffect(() => {
        fetch("http://localhost:8001/bots")
        .then(r => r.json())
        .then(bots => {
            setBots(bots)}) 
    }, []);
    // console.log(bots) 

    const botsList = bots.map((bot) =>(
        <Bot 
        key = {bot.id}
        bot = {bot}
        />
    ))

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {botsList}
      </div>
    </div>
      
  )
}

export default BotContainer