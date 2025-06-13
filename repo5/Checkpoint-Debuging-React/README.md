#Debugging Notes & Resolutions
Developing the Lafiray.ma frontend presented a few crucial debugging challenges, which I effectively resolved using React Developer Tools.

#Key Resolutions
Compilation Error Fixed: The project wouldn't start due to incorrect JSX comment syntax. I adjusted the comment to the proper {/* ... */} format, allowing the application to compile.

#Global Counter Synchronization: The main "Current Global Count" wasn't updating. Using React DevTools, I found the display component wasn't syncing its internal state with the received prop. I corrected the useEffect logic to ensure this update.

#Missing Item Names: Item names were absent from the list. DevTools revealed a prop name mismatch between the parent (ItemList) and child (Item) components. I fixed this by harmonizing the prop names.

#Button Counter Behavior: The increment/decrement buttons had their own local state, which didn't affect the global count. I refactored the CounterButton component to receive the count as a prop and updated the global state purely through callbacks.

#Persistent Negative Warning: A warning message remained visible even after the count returned to positive. The useEffect logic for resetting the warning state was refined to ensure it disappeared correctly.

#These debugging steps significantly deepened my understanding of React's data flow, state management, and the invaluable assistance of developer tools.