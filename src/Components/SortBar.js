import React from 'react'

function SortBar({filterBy, sortBy, onChangeSort,onChangeFilter }) {
  
  function handleSortChange (event) {
    onChangeSort(event.target.value)
  }

  function handleFilterChange (event) {
    onChangeFilter(event.target.value)
  }

  return (
    <div className="container mx-auto p-3">
      
      <div className="flex items-center space-x-4 border border-gray-200 rounded p-3 dark:border-gray-700">
        <strong className='text-xl font-semibold tracking-tighter'>Sort Bots By:</strong>
        {/* Health */}
        <div className="flex items-center">
          <input
            id="sort-health"
            type="radio"
            name="sort-options"
            value= "health"
            onChange={handleSortChange}
            checked={sortBy === "Health"}
            className="w-4 h-4 tex text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="sort-health"
            className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300">Health</label>
        </div>
        
        {/* Damage */}
        <div className="flex items-center">
          <input
            type="radio"
            name="sort-options"
            value= "Damage"
            checked={sortBy === "Damage"}
            onChange={handleSortChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300">Damage</label>
        </div>

        {/* Armor */}
        <div className="flex items-center">
          <input
            type="radio"
            name="sort-options"
            value="armor"
            checked={sortBy === "armor"}
            onChange={handleSortChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          <label className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300">Armor</label>
        </div>
        <label>
        <strong className='text-xl font-semibold tracking-tighter'>Filter By:</strong>
        <select onChange={handleFilterChange} value={filterBy}  className="border rounded p-1">
          <option value="Support">Support</option>
          <option value="Medic">Medic</option>
          <option value="Assault">Assault</option>
          <option value="Defender">Defender</option>
          <option value="Captain">Captain</option>
          <option value="Witch">Witch</option>
        </select>
      </label>
    </div>
      </div>
      
    
  );
}

export default SortBar;