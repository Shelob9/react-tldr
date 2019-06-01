import React from 'react';
import { Flex, Box } from 'rebass';
import {
    Title,
    Divider,
    Container,
} from './components';
import {sections} from "./nav";
import {Menu} from "./Menu";


export default props => (
    <Container>
        <Title>All Sections</Title>
        <Divider />
        <Menu nav={sections} dark={true}/>
    </Container>
);
