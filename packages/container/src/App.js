import React from 'react';
import { mount } from 'marketing/MarketingApp';

import MarketingApp from './components/MarketingApp'

console.log('mount 2', mount)

export default () => {
    return <div>
    <h1>Container Hi there!</h1>
    <MarketingApp />
    </div>
}