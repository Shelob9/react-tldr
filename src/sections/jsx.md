# JSX
React is generally written with JSX. It doesn't have to be.

## It's HTML

This HTML:
```html
<div><p>Hi Roy</p></div>
```

Could be created with this function:

```jsx
const HiRoy = props => <div><p>Hi Roy</p></div>;
```

Or we could create an arbitrary system for saying hi to people:

```jsx
const HiSomone = props => <div><p>Hi {props.who}</p></div>;
```

## Conditional Rendering
* https://reactjs.org/docs/conditional-rendering.html#inline-if-else-with-conditional-operator

```jsx 
<div>
    {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
    ) : (
        <LoginButton onClick={this.handleLoginClick} />
    )}
</div>

```

## Recommended Reading
* [JSX Documentation](https://reactjs.org/docs/introducing-jsx.html)
* [Conditional Rendering Documentation](https://reactjs.org/docs/conditional-rendering.html)
