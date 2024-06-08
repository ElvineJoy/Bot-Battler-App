import React from 'react'
import Bot from './Bot';

function BotCollection({bots, onAddBot}) {
   
    const botsList = bots.map((bot) =>(
        <Bot 
        key = {bot.id}
        bot = {bot}
        onClickBot = {onAddBot}
        />
    ))

  return (
    <div className="container mx-auto p-4">
      <div class="w-full bg-white border border-grey-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h1 class="mb-4 text-4xl text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">CHOOSE YOUR BOTS...</span></h1>
      <div className="my-11 ml-4 mr-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        
       {botsList}
      </div> 
      </div>
    </div>
      
  )
};

export default BotCollection