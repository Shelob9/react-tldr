import React from 'react';
import { Flex, Box } from 'rebass';
import {
    Title,
    Text,
    Divider,
    Container,
} from '../components';
import {nav, typeCheckingSections} from "../nav";
import {Menu} from "../Menu";
console.log(nav);

export default props => (
    <Container>
        <Title>Type Checking</Title>
        <Text>Articles About Type Checking</Text>
        <Divider />
        <Menu nav={typeCheckingSections} dark={true} />
    </Container>
);
