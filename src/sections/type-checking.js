import React from 'react';
import { Flex, Box } from 'rebass';
import {
    Title,
    Text,
    Button,
    ButtonOutline,
    Container,
    Divider,
} from '../components';
import Logo from '../logo';
import {typeCheckingSections} from "../nav";
import {Menu} from "../Menu";




export default props => (
    <Container>
        <Title>Type Checking</Title>
        <Text>Articles About Type Checking</Text>
        <Menu nav={typeCheckingSections} />

    </Container>
);
