import React from 'react';
import { Flex, Box } from 'rebass';
import {
    Title,
    Text,
    Divider,
    Container,
} from '../components';
import {typeCheckingSections} from "../nav";
import {Menu} from "../Menu";


export default props => (
    <Container>
        <Title>Type Checking</Title>
        <Text>Articles About Type Checking</Text>
        <Divider />
        <Menu nav={typeCheckingSections} />
    </Container>
);
