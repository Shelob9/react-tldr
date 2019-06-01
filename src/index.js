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
	Pre,
	Divider,
} from './components';
import Logo from './logo';

export { Root } from './components';

export const name = 'Home';

const github = 'https://github.com/shelob9/react-tldr';
const blog = 'https://joshpress.net';

const intro = (
	<span>
		MDX Go is built with the idea of{' '}
		<Link href={blog} color="#0a0">
			Progressive Documentation
		</Link>{' '}
		in mind, intended to be used anywhere as a dev server, prototyping tool,
		or simple static site generator. By embracing the MDX file format, the
		docs you create with MDX Go can easily be used in other tools. Start
		your docs with MDX Go, and migrated to tools like Next.js and Gatsby
		when needed. You can even keep MDX Go around to use as a dev tool
		outside of other React applications.
	</span>
);

export default props => (
	<Box>
		<Banner>
			<Flex px={3} py={2}>
				<Box mx="auto" />
				<Link
					href="/sections/zero"
					fontSize={1}
					px={3}
					py={2}
					color="#0d0"
				>
					Start
				</Link>
				<Link href={github} fontSize={1} px={3} py={2} color="#0d0">
					GitHub
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
					<Logo size={96} />
					<Title mb={2}>React TL;DR</Title>
					<Text mb={3}>Josh's React Cheat sheets and such</Text>
					<Button mr={3} href="/docs">
						Docs
					</Button>
					<ButtonOutline href={github}>GitHub</ButtonOutline>
				</Box>
				<Box px={3} width={[1, null, 2 / 3, 2 / 3]}>
					<video
						src="https://s3.amazonaws.com/jxnblk/mdx-go-24.mp4"
						loop
						muted
						autoPlay
						playsInline
						style={{
							maxWidth: '100%',
							borderRadius: 16,
							marginTop: 32,
						}}
					/>
				</Box>
			</Flex>
		</Banner>
	</Box>
);
