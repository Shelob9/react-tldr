import React from 'react';
import { Flex, Box } from 'rebass';
import {
    Title,
    Text,
    Divider,
    Container,
} from '../components';
import {componentsSection} from "../nav";
import {Menu} from "../Menu";


export default props => (
    <Container>
        <Title>React Components</Title>
        <Divider />
        <Menu nav={componentsSection} />
    </Container>
);
