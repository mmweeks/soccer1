import React from 'react';
import App from '../App';
import { storiesOf } from '@storybook/react';
import Header from './header';
import Card from './card';

storiesOf('App', module)
    .add('Header', () => <Header></Header>)
    .add('Card', () => <Card></Card>)
    .add('Card with Metadata', () => <Card-Metadata></Card-Metadata>)
    .add('Rating Scale', () => <App><div>Rating Scale</div></App>)
    .add('Definition List', () => <App><div>Definition List</div></App>)
    .add('Oval Thing', () => <App><div>Oval Thing</div></App>)
