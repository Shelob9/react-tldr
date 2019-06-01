import React, {Fragment} from 'react'
import {
    Head,
    Link as GoLink,
    StyleProvider,
} from 'mdx-go'
import {Box, Flex} from 'rebass'
import Sidepane from 'sidepane'
import {nav} from './nav';
import {Menu} from "./Menu";

const white = '#C4CAD2';
const green = '#949EB0';
const darkgreen = '#504935';
const black = '#1E2010';
const lightgray = '#949EB0';
const blue = '#4C7CAC';

const gradient = `
linear-gradient(
  150deg,
  transparent 90%,
  rgba(0, 191, 0, 0.25) 90%,
  rgba(0, 191, 0, 0.25) 95%,
  rgba(0, 191, 0, 0.5) 95%
)
`


export const theme = {
    colors: {
        white,
        lightgray,
        black,
        blue,
        green,
        darkgreen,
    },
    code: {
        color: darkgreen
    },
    pre: {
        // color: darkgreen
    }
}


const PageLayout = props => props.location.pathname === '/'
    ? props.children
    : (
        <Flex>
            <Sidepane
                bg={theme.colors.darkgreen}>
                <Box px={3} py={3}>
                    <GoLink href='/'>
                        <CatLogo size={48} width={128}/>
                    </GoLink>
                </Box>
                <Menu nav={nav}/>

                <Box py={4}/>
            </Sidepane>
            <Box width={1}>
                <Container maxWidth='768px' py={5}>
                    {props.children}
                </Container>
            </Box>
        </Flex>
    )

export const Root = props =>
    <React.Fragment>
        <Head>
            <title>React TL;DR</title>
            <meta name='description' content='Short Summaries Of How React Works'/>
            <meta name='twitter:card' content='summary_large_image'/>
            <meta name='twitter:site' content='@josh412'/>
            <meta name='twitter:title' content='React TL;DR'/>
            <meta name='twitter:description'
                  content='React, less prose, more codes.'/>
            <meta name='twitter:image' content='https://jxnblk.com/mdx-go/card.png'/>
        </Head>
        <StyleProvider color={theme.lightgray}>
            <PageLayout {...props} />
        </StyleProvider>
    </React.Fragment>


function linkColorProp(props) {
    return props.hasOwnProperty('light') ? theme.colors.white : theme.colors.black;
}

function linkStyle(props){
    return {
        display: 'inline-block',
        color: linkColorProp(props),
        textDecoration: 'none',
        underline: `1px solid ${theme.colors.lightgray}`,
        fontWeight: 600,
        '&:hover': {
            color: theme.colors.blue
        }
    }

};

export const Link = props =>
    <Box
        {...props}
        as={GoLink}
        style={linkStyle(props)}
    />
export const CatLogo = props =>{
    const height = props.height? props.height : props.size? props.size : 36;
    const width= props.width? props.width : props.size? props.size : 36;

    return (
        <Box
            {...props}
            as={'img'}
            src={`https://placekitten.com/${width}/${height}`}

        />

    )
};


export const ExternalLink = props =>
    <Box
        {...props}
        as={'a'}
        href={props.href}
        style={linkStyle(props)}

    >
        {props.children}
    </Box>

export const Banner = props =>
    <Box
        {...props}
        color={theme.colors.white}
        bg={theme.colors.black}
        css={{
            display: 'flex',
            backgroundSize: 'cover',
            backgroundImage: gradient
        }}
    />

export const Title = props =>
    <Box
        {...props}
        as='h1'
        m={0}
        fontSize={[6, 7]}
        style={{
            fontWeight: 600,
            color: props.color ? props.color : 'inherit'
        }}
    />

export const H2 = props =>
    <Box
        {...props}
        as='h2'
        m={0}
        fontSize={[5, 6]}
        css={{
            fontWeight: 500
        }}
    />

export const H3 = props =>
    <Box
        {...props}
        as='h3'
        m={0}
        fontSize={[2, 4]}
        css={{
            fontWeight: 300
        }}
    />


export const LinkList = props => {
    const {items} = props;
    return (
        <Box
            {...props}
            as='ul'
            m={0}
        >
            {items.map(item => (
                <Box
                    as='li'
                    key={item.href}
                    m={0}
                >
                    <ExternalLink
                        href={item.href}
                        m={0}
                    >
                        {item.text}
                    </ExternalLink>
                </Box>
            ))}
        </Box>
    );
}


export const Text = props =>
    <Box
        as='p'
        m={0}
        {...props}
        css={{
            fontWeight: 600
        }}
    />


export const Button = props =>
    <Box
        as={GoLink}
        px={4}
        py={3}
        fontSize={2}
        color={black}
        bg={blue}
        {...props}
        css={{
            display: 'inline-block',
            fontWeight: 600,
            textDecoration: 'none',
            borderRadius: '2px',
            ...props.css
        }}
    />

export const ButtonOutline = props =>
    <Button
        {...props}
        color={green}
        bg='transparent'
        css={{
            boxShadow: 'inset 0 0 0 2px'
        }}
    />

export const Container = ({maxWidth, ...props}) =>
    <Box
        {...props}
        mx='auto'
        px={4}
        css={{
            maxWidth
        }}
    />
Container.defaultProps = {
    maxWidth: '1024px'
}

export const Col = props =>
    <Box
        {...props}
        px={3}
        py={3}
        width={[1, 1 / 2,]}
    />


export const Pre = props =>
    <Box
        {...props}
        as='pre'
        color={green}
        fontSize={2}
        css={{
            fontFamily: 'Menlo, monospace',
        }}
    />

export const Divider = props =>
    <Box
        {...props}
        as='hr'
        my={5}
        width={128}
        ml={0}
        bg={green}
        css={{
            border: 0,
            height: '4px'
        }}
    />
