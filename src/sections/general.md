
## Spread Props
Want to print an array of props, such as HTML attributes without having to unwrap each one?

```js
const attributes = {
	placeholder: 'roy',
	value: 'mike'
}

//Boring
<input value={attributes.value} placeholder={attributes.placeholder} />

//Better
<input {...attributes} />
```

