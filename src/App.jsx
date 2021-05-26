import React from 'react';

import WithParameters from './components/basic/WithParameters';
import First from './components/basic/First';
import Fragment from './components/basic/Fragment';
import Random from './components/basic/Random';

export default () => (
    <div id="app">
        <h1>React fundamentals</h1>
        <Random min={1} max={200}/>
        <Fragment />
        <WithParameters 
            student="Breno"
            grade={ 9.4 }/>
        <First />
    </div>
);