import React from 'react'

function Bot({bot}) {
    
    

    
  return (
    <div className='card'>
        <div className='card-body'>
            <h1 className='bot-title'>My name is: {bot.name}</h1>
            <img src={bot.avatar_url} alt={bot.name} />
            <p className='bot-info'>Damage:{bot.damage}</p>
            <p className='bot-info'>Bot-Class: {bot.bot_class}</p>
            <p className='bot-info'>Health: {bot.health}</p>
            <p className='bot-info'>Catch-phrase: </p>

        </div>

    </div>
  )
}

export default Bot