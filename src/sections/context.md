# React Context - TL;DR



## Imports
```jsx
//Import React and the context creator and the hooks we need.
import React, { useContext, useState, createContext } from "react";
//Also React DOM
import ReactDOM from "react-dom";
```

## The Context Object

The function `React.createContext()` creates context objects we can use to share state between components.

```js
const DataContext = createContext({});
```

This returns a `<Provider />` and `<Consumer>`. Providers manage state, consumers subscribe to, dipsplay and change state. Providers are responsible for state, not its presentation. Consumers are responsible for the presentation and interface represented by state, they are not responsible for state. Providers provide state and buisness logic for state.

```js
const {
  Provider,
  Consumer
} = DataConext;
```

### Creating A Provider
This component provides data to the app. The layout of the app is passed in with the "children" prop.

```jsx
/**
 * Wraps the app in a common layout with data provided
 */
const Layout = props => {
  //Manage state using useState API
  // useReducer is likely a better choice for complex state objects
  // SEE: https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks
  const [data, setData] = useState({
    title: "The Title",
    description: "Description"
  });
  return (
    <DataContext.Provider
      value={{
        data,
        setData
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

### Consuming The Data
> [useContext hook documentation](https://reactjs.org/docs/hooks-reference.html#usecontext)

#### Displaying Data From Context
```jsx
/**
 * This component shows the current values
 */
const Display = () => {
  //Get the current state from useContex hook
  const { data } = useContext(DataContext);
  return (
    <ul>
      <li>{data.title}</li>
      <li>{data.description}</li>
    </ul>
  );
};

#### Editting Data From Context
Data and the setter for the data is passed down to the component via context.

```jsx
/**
 * This component had form fields for editting the data held in the context
 */
const Edit = () => {
  //Get the current state and state updater from the useContex hook
  const { data, setData } = useContext(DataContext);

  /**
   * Change handler
   *
   * Doing this merge of data here is not ideal.
   * useReducer() or custom hook with state update functions would be better
   */
  const onChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <div>
        <label htmlFor="title">title</label>
        <input value={data.title} onChange={onChange} id="title" name="title" />
      </div>
      <div>
        <label htmlFor="description">description</label>
        <input
          value={data.description}
          id="description"
          name="description"
          onChange={onChange}
        />
      </div>
    </div>
  );
};
```

### Using The Components Inside Of Provider
`<Layout />` provides all neccasary props to its children becuse we are using context.

```jsx
/**
 * Look, no props!
 */
const App = () => (
  <Layout>
    <Display />
    <Edit />
  </Layout>
);
```

### Mount app
Nothing new here.

```jsx
/**
 * Step 7 - Mount the app!
 */
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Recommended Reading
### Basic
* https://daveceddia.com/usecontext-hook/
  - If you don't actually know how context works, read this post first.
* https://reactjs.org/docs/context.html
  - The docs
* https://stackoverflow.com/a/54772882/1469799
  - The example code here is based on this answer.

### Less Basic
* https://kentcdodds.com/blog/how-to-use-react-context-effectively
* https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks
