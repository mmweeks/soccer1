import React from 'react';
import App from '../App';
import { storiesOf } from '@storybook/react';

storiesOf('App', module)
    .add('Header with title', () => <App><div>Title</div></App>)
