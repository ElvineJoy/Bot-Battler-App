import React from 'react'

function Bot({bot, onAddButtonClick}) {

  function handleClick (){
    onAddButtonClick(bot)
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
      <img src={bot.avatar_url} alt={bot.name} className="rounded-t-lg w-full" />
      <div className="p-5 flex flex-col flex-grow">
        <div>
          <h2 className="tracking-tighter leading-10 text-2xl font-bold text-gray-900 dark:text-white">
            {bot.name}
          </h2>
          <p className="text-sm tracking-tight leading-none font-semibold text-gray-700 dark:text-gray-400 mb-1">
            Class: {bot.bot_class}
          </p>
          <p className="text-sm font-semibold leading-none tracking-tight text-gray-700 dark:text-gray-400 mb-1">
            Damage: {bot.damage}
          </p>
          <p className="text-sm font-semibold leading-none tracking-tight text-gray-700 dark:text-gray-400 mb-1">
            Health: {bot.health}
          </p>
        </div>
        <div className=" mt-5 justify-end space-x-2">
          <button className=" mx-1.5 tracking-tight text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            Delete
          </button>
          <button onClick={handleClick} className="mx-0.5 tracking-tight text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Add to my Army
          </button>
        </div>
      </div>
    </div>
  );
}


export default Bot