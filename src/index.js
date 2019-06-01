import React from 'react';
import { Flex, Box } from 'rebass';
import {
	Banner,
	Title,
	Text,
	Button,
	ButtonOutline,
	Container,
	Col,
	Link,
	LinkList,
	H2,
	H3,
	Divider,
	ExternalLink,
	CatLogo,
	theme
} from './components';
export { Root } from './components';

export const name = 'Home';

const github = 'https://github.com/shelob9/react-tldr';
const blog = 'https://joshpress.net';


export default props => (
	<Box
		css={{
			width: '100%',

		}}
	>
		<Banner>
			<Flex px={3} py={2}>
				<Box mx="auto" />
				<Link
					href="/sections"
					fontSize={1}
					px={3}
					py={2}
					light={true}
				>
					Start
				</Link>
			</Flex>
			<Flex
				mx="auto"
				px={3}
				py={5}
				flexWrap={'wrap'}
				alignItems="center"
				css={{
					maxWidth: '1024px',
					minHeight: '100vh',
				}}
			>
				<Box px={3} width={[1, null, 1 / 3, 1 / 3]}>
					<CatLogo size={96} />
					<Title mb={2} color={theme.colors.blue}> React TL;DR</Title>
					<Text mb={3}>Josh's React Cheat sheets and such</Text>
					<Button mr={3} href="/sections">
						Start
					</Button>
					<ButtonOutline href={github}>GitHub</ButtonOutline>
				</Box>
				<Box px={3} width={[1, null, 2 / 3, 2 / 3]}>
					<iframe
						src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=bw&l=auto&ds=false&dsyoff=0px&dsblur=68px&wc=false&wa=true&pv=0px&ph=0px&ln=true&fm=Droid%20Sans%20Mono&fs=18px&lh=133%25&si=false&es=2x&wm=false&code=import%2520React%252C%2520%257BuseState%252CFragment%257D%2520from%2520'react'%253B%250Aexport%2520cont%2520App%2520%253D%2520()%2520%253D%253E%2520%257B%250A%2520%2520const%2520%255Bvalue%252CsetValue%255D%2520%253D%2520useState('')%253B%250A%2520%2520return%2520(%250A%2520%2520%2520%2520%253CFragment%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520htmlFor%253D%2522somthing%2522%253ELabel%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520%250A%2520%2520%2520%2520%2509%2509%2509id%253D%2522something%2522%2520%250A%2520%2520%2520%2520%2509%2509%2509value%253D%257Bvalue%257D%2520%250A%2509%2509%2509%2509onChange%253D%257Be%2520%253D%253E%2520setValue(e.target.value)%2520%257D%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252FFragment%253E%250A%2520%2520)%253B%250A%257D%253B"
						style={{
							transform:'scale(0.7)',
							width:'1024px',
							height:'473px',
							border:0,
							overflow:'hidden',
						}}
						scrolling={'no'}
						sandbox="allow-scripts allow-same-origin">
					</iframe>

				</Box>
			</Flex>
		</Banner>
		<Container>
			<Divider />
			<Text fontSize={[ 3, 4 ]}>
				<H2>What Is This?</H2>
				This is a very short guide to React. It's main purpose is to remind me how stuff works and teach others how React works.
			</Text>
			<Divider />
			<Flex
				flexWrap='wrap'
				mx={-3}
			>
				<Col>
					<H3>This Is Probably Not A Great Way To Learn React</H3>
					<ExternalLink href={'https://codesandbox.io/s/new'} target={'_blank'}>Start A New React App</ExternalLink>
				</Col>
				<Col>
					<H3>People To Learn React From</H3>
					<LinkList
						items={ [

							{
								href: 'https://kentcdodds.com/',
								text: 'Kent C. Dobbs',
							},
							{
								href: 'https://reacttraining.com/workshops/',
								text: 'React Training',
							},
							{
								href: 'https://daveceddia.com/',
								text: 'Dave Ceddia',
							},
							{
								href: 'https://javascriptforwp.com/react-book/',
								text: 'Zac Gordon',
							},
							{
								href: 'https://overreacted.io/',
								text: 'Dan Abramov',
							},

						]}
					/>

				</Col>

			</Flex>
			<Divider />
		</Container>
	</Box>
);
