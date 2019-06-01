
# Testing With React
This is slightly out of date. I am starting to prefer [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro).

## Snapshot Testing With Jest

```jsx
import React, {Fragment} from 'react';
import renderer from 'react-test-renderer';
import { CalderaNotice } from './CalderaNotice';

describe('CalderaNotice', () => {
	it('Matches snapshot with Success message', () => {
		const component = renderer.create(
			<CalderaNotice isError={false}>
				Good Things!
			</CalderaNotice>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Matches snapshot with error message', () => {
		const component = renderer.create(
			<CalderaNotice isError={true}>
				Bad Things!
			</CalderaNotice>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
});

```

## Simulating DOM Events With Enzyme
* https://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html
* https://jestjs.io/docs/en/mock-functions#using-a-mock-function

### Simulating Events With Enzyme
```js
const component = shallow(
    <select />
);
const event = {target: {value: 2}};
component.find( 'select' ).simulate( 'change', event );
```
### Click Event
```js
const component = shallow(
    <input />
);
component.find( 'input' ).simulate( 'click' );
```

## Testing  Events With Enzyme and Jest
* https://jestjs.io/docs/en/mock-functions

```js
import { shallow } from 'enzyme';

describe( 'Something', () => {
	let onChange;
	beforeEach( () => {
		//Reset mocks
		onChange= jest.fn();
	});

	it( 'Changes calls change handler', () => {
		const component = shallow(
			<input
				onChange={onChange}
			/>
		);
		//Find input and simulate change
		component.find( 'input' ).simulate( 'change' );
		//check mock callback was called once
		expect(onChange.mock.calls.length).toBe(1);
	});

	it( 'Calls change handler with value', () => {
		const component = shallow(
			<select
				onChange={onChange}
			>
				<option value={1}key={1}>1</option>
				<option value={2} key={2}>2</option>
			</select>
		);
		const expectedValue = 2;
		//Find select and simulate change
		const event = {target: {value: expectedValue}};
		component.find( 'select' ).simulate( 'change', event );
		//check mock callback was called with the right value
		expect(onChange.mock.calls[0][0]).toBe(expectedValue);
	});
});


```

### There Can Only Be One
You can not call `simulate()` on multiple nodes. Use `first()`.

* https://airbnb.io/enzyme/docs/api/ReactWrapper/first.html

```js
	it( 'Changes calls change handler of radio field', () =>  {
		const component = mount(<Field
			field={radioField} onChange={onChange} onBlur={onBlur}
		/>);

		component.find( 'input' ).first().simulate( 'change' );
		expect(onChange.mock.calls.length).toBe(1);
	});
```
## Recommended Reading
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
* [Jest Cheatsheat](https://devhints.io/jest)
* https://reactjs.org/docs/test-renderer.html

### Articles By Me
* [Getting Started with React Unit Testing for WordPress Development](https://torquemag.io/2018/10/getting-started-with-react-unit-testing-for-wordpress-development/)
* [Testing Nested Components in a React App](https://torquemag.io/2018/11/testing-nested-components-in-a-react-app/)
* [Testing React Components with Enzyme](https://torquemag.io/2018/11/testing-react-components-with-enzyme/)
