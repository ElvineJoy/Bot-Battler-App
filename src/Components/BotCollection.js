import React from 'react'
import Bot from './Bot';

function BotCollection({bots, onAddBot}) {
   
    const botsList = bots.map((bot) =>(
        <Bot 
        key = {bot.id}
        bot = {bot}
        onAddButtonClick = {onAddBot}
        />
    ))

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {botsList}
      </div>
    </div>
      
  )
};

export default BotCollection