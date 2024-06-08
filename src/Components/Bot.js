import React from 'react'

function Bot({bot}) {

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img src={bot.avatar_url} alt={bot.name} className="rounded-t-lg w-full" />
      <div class="p-5">
        <h2 class="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{bot.name}</h2>
        <p class="mb-0 font-semibold tracking-tighter text-gray-700 dark:text-gray-400 ">Class: {bot.bot_class}</p>
        <p class="mb-0 font-semibold tracking-tighter text-gray-700 dark:text-gray-400">Damage: {bot.damage}</p>
        <p class="mb-0 font-semibold tracking-tighter text-gray-700 dark:text-gray-400">Health: {bot.health}</p>
    </div>
    <div div className="mt-auto text-right">
          <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-1.5 mb-1.5">
            Add to my Army
          </button>
          </div>        
</div>

  )
}

export default Bot