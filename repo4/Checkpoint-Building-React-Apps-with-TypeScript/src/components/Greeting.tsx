import React from 'react';

// Step 1: Define an interface for the component's props.
interface GreetingProps {
  name: string;
}

// Step 2: Using the defined interface with the functional component.
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;

/*
Description of Changes:

1.  **`interface GreetingProps { name: string; }`**:
    * An interface `GreetingProps` is defined. This is a TypeScript-specific construct used to describe the shape of an object.
    * It declares that any object conforming to `GreetingProps` *must* have a property named `name` which is of type `string`.

2.  **`const Greeting: React.FC<GreetingProps> = ({ name }) => { ... };`**:
    * The `Greeting` functional component is explicitly typed using `React.FC` (Functional Component) generic type.
    * `React.FC<GreetingProps>` tells TypeScript that `Greeting` is a React Functional Component whose props will conform to the `GreetingProps` interface.
    * Alternatively, you could directly destructure the props and type them: `const Greeting = ({ name }: GreetingProps) => { ... };`. Both approaches achieve type safety for props.
*/
