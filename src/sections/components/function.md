# React Components As Functions

## Stateless Components
### Stateless Component, Pass Args
```jsx
import React from "react";
export const One = props => (
    <div>{props.mastodon}</div>
);

```


## Stateless Component, Deconstruct Props In Args


```jsx
import React,{Fragment} from "react";
export const Two = ({mastodon}) => {
    return (
        <Fragment>
            <div>{mastodon}</div>
        </Fragment>
    )
};

```

## Stateless Component, Deconstruct Props In Args

```jsx
import React,{Fragment} from "react";
export const Four = props => {
    const {
        mastodon,
        slayer
    } = props;
    return (
        <Fragment>
            <div>{mastodon}</div>
        </Fragment>
    )
};

```

## Controlled Component, Change Handler Passed In


```jsx
import React,{Fragment} from "react";
export const Two = ({value,onChange}) => {
    return (
        <Fragment>
            <input value={value} onChange={onChange} />
        </Fragment>
    )
};

```

## Components With State

## Component With State 

```jsx
import React,{Fragment,UseState} from "react";
import React,{Fragment} from "react";
export const Two = () => {
    const [value,setValue] = useState('');
    const onChange = event => setValue(event.target.value);
    return (
        <Fragment>
            <input value={value} onChange={onChange} />
        </Fragment>
    )
};

```


## Component With Initial Value

```jsx
import React,{Fragment,UseState} from "react";
import React,{Fragment} from "react";
export const Three = ({initialValue}) => {
    const [value,setValue] = useState(intialValue);
    const onChange = event => setValue(event.target.value);
    return (
        <Fragment>
            <input value={value} onChange={onChange} />
        </Fragment>
    )
};

```

## Component With Complex State Object 

```jsx
import React,{Fragment,UseState} from "react";
import React,{Fragment} from "react";
export const Four = () => {
    const [values,setValue] = useState({
        pants: 5,
        shirts: 7
    );
    const onChange = event => setValue({
            ...values,
            [event.target.name]: event.target.value
            
    );
    return (
        <Fragment>
            <input value={value.pants} onChange={()} type="number" name="pants" />
            <input value={value.shirts} onChange={setValue} type="number" name="shirts" />
        </Fragment>
    )
};

```






