import React from 'react'
import Bot from './Bot'

function YourBotArmy({bots, onRemoveBot, onDeleteBot}) {
  const myArmylist = bots.map((bot) => (
    <Bot 
      key={bot.id} 
      bot={bot} 
      onClickBot={onRemoveBot} 
      onDeleteBot={() => onDeleteBot(bot)}
      isInArmy={true}
    />
  ))
  
return (
  <div className="container mx-auto p-3">
    <div className="w-full bg-white border border-red-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-center text-5xl font-extrabold dark:text-white">YOUR BOT ARMY CONSISTS OF ...</h1>
        <h6 className=" p-5 text-center text-base font-extrabold text-gray-900 dark:text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Instructions: choose your desired bots from our collection below and make your own army as desired.</span></h6>
        <div className=" my-11 ml-4 mr-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        
        {myArmylist}
        
      </div>
    </div>     
  </div>
  )
}

export default YourBotArmy