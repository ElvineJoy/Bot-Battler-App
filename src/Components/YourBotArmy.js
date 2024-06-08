import React from 'react'
import Bot from './Bot'

function YourBotArmy({bots,onRemoveBot}) {
  const myArmylist = bots.map((bot) => (
    <Bot key={bot.id} bot={bot} onClickBot={onRemoveBot}/>
  ))
  return (
    <div className="container mx-auto p-3">
    <div class="w-full bg-white border border-red-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h1 class="text-center text-5xl font-extrabold dark:text-white">YOUR BOT ARMY <span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">HERE</span></h1>
        <div className=" my-11 ml-4 mr-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        
        {myArmylist}
        
        </div>
          </div>     
      </div>
  )
}

export default YourBotArmy