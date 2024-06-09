import React from 'react'

function Bot({bot, onClickBot, onDeleteBot, isInArmy}) {

  function handleClick (){
    onClickBot(bot)
  };

  return (
    <div onClick={handleClick}  className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
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
          <p className="text-sm font-semibold leading-none tracking-tight text-gray-700 dark:text-gray-400 mb-1">
            Armor: {bot.armor}
          </p>
          {isInArmy && <button onClick={onDeleteBot} className="text-red-500">x</button>}
        </div>
      </div>
    </div>
  );
}


export default Bot