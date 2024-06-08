import React from 'react'

function Bot({bot}) {

  return (
<div class=" w-2/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img src={bot.avatar_url} alt={bot.name} />
    <div class="p-5">
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">My name is:{bot.name}</h2>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">Class: {bot.bot_class}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Damage: {bot.damage}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Health: {bot.health}</p>
    
            <button class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to my Army</button>
       
    </div>
</div>

  )
}

export default Bot