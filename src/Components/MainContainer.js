import React from 'react';
import BotContainer from './BotContainer';
import SortBar from './SortBar';
import YourBotArmy from './YourBotArmy';

function MainContainer() {
  return (
    <div>
         <YourBotArmy />
         <SortBar />
         <BotContainer />
    </div>
  )
}

export default MainContainer