import React from 'react';

import Card from './layout/Card';
import WithParameters from './components/basic/WithParameters';
import First from './components/basic/First';
import Fragment from './components/basic/Fragment';
import Random from './components/basic/Random';

export default () => (
    <div id="app">
        <h1>React fundamentals</h1>

        <Card title="#04 - Random number">
            <Random min={1} max={200}/>
        </Card>

        <Card title="#03 - Fragment">
            <Fragment />
        </Card>

        <Card title="#02 - With Parameters">
            <WithParameters 
                student="Breno"
                grade={ 9.4 }/>
        </Card>

        <Card title="#01 - First Component">
            <First />
        </Card>
    </div>
);