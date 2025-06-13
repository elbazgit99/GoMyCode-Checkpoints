import React, { useState, useEffect } from 'react'; // Import useEffect

// CounterButton component - Designed to increment/decrement a count
const CounterButton = ({ currentCount, onIncrement, onDecrement }) => { // Renamed initialCount to currentCount for clarity of purpose
  // Bug 3 Fix: Removed localCount state. The component now receives and displays the currentCount prop
  // and relies solely on the onIncrement/onDecrement callbacks to update the global state.

  return (
    <div className="flex space-x-2 p-4 bg-blue-100 rounded-lg shadow-md">
      <button
        onClick={onDecrement} // Calls the parent's decrement handler
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
      >
        Decrement
      </button>
      <span className="text-xl font-semibold text-gray-800">Count: {currentCount}</span> {/* Displays the prop directly */}
      <button
        onClick={onIncrement} // Calls the parent's increment handler
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
      >
        Increment
      </button>
    </div>
  );
};

// CounterDisplay component - Displays the global count
const CounterDisplay = (props) => {
  const [displayCount, setDisplayCount] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => { // Using React.useEffect is correct, but imported useEffect is clearer
    // Bug 1 Fix: `displayCount` is now correctly updated from `props.count`.
    setDisplayCount(props.count);

    // Bug 4 Fix: The warning state is correctly reset when count becomes non-negative.
    if (props.count < 0) {
      setShowWarning(true);
    } else { // Removed `if (props.count >= 0 && showWarning)` and simplified to `else`
      setShowWarning(false); // Correctly hides the warning when count is non-negative
    }
  }, [props.count]); // Removed `showWarning` from dependency array as its update is now solely based on `props.count`

  return (
    <div className="text-center p-6 bg-gray-100 rounded-lg shadow-inner">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Current Global Count: {displayCount}</h2>
      {showWarning && (
        <p className="text-red-600 font-medium animate-pulse">Warning: Count is negative!</p>
      )}
    </div>
  );
};

// Item component - Displays a single item with name and quantity
const Item = ({ name, quantity }) => { // Bug 2 Fix: Changed prop name from `itemName` to `name` to match parent
  return (
    <li className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm mb-2">
      <span className="font-medium text-gray-700">{name}</span> {/* Now correctly displays 'name' prop */}
      <span className="text-sm text-gray-500">Qty: {quantity}</span>
    </li>
  );
};

// ItemList component - Contains a list of Item components
const ItemList = () => {
  const items = [
    { id: 1, name: 'Engine Part', quantity: 1 },
    { id: 2, name: 'Brake Pad', quantity: 4 },
    { id: 3, name: 'Headlight', quantity: 2 },
  ];

  return (
    <div className="p-4 bg-purple-100 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-semibold text-purple-800 mb-4">Inventory Items</h3>
      <ul>
        {items.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} />
        ))}
      </ul>
    </div>
  );
};


const App = () => {
  const [globalCount, setGlobalCount] = useState(10); // Initial global count

  const handleGlobalIncrement = () => {
    setGlobalCount(prevCount => prevCount + 1);
  };

  const handleGlobalDecrement = () => {
    setGlobalCount(prevCount => prevCount - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center p-4 font-sans antialiased">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-2xl space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          React Debugging Challenge
        </h1>

        {/* Counter Section */}
        <div className="border border-indigo-200 p-6 rounded-lg shadow-inner bg-indigo-50">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
            The Counter
          </h2>
          <CounterDisplay count={globalCount} />
          <CounterButton
            currentCount={globalCount} // Passing globalCount as currentCount
            onIncrement={handleGlobalIncrement}
            onDecrement={handleGlobalDecrement}
          />
        </div>

        {/* Item List Section */}
        <div className="border border-purple-200 p-6 rounded-lg shadow-inner bg-purple-50">
          <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
            The Item List
          </h2>
          <ItemList />
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
};

export default App;