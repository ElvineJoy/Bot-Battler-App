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
    <div>
        <ul>{botsList}</ul>
    </div>
  )
}

export default BotContainer