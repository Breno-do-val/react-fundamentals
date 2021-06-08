import './App.css';

import React from 'react';

import Card from './layout/Card';
import WithParameters from './components/basic/WithParameters';
import Family from './components/basic/Family';
import FamilyMember from './components/basic/FamilyMember';
import First from './components/basic/First';
import Fragment from './components/basic/Fragment';
import ListStudents from './components/repetition/listStudents';
import Random from './components/basic/Random';

export default () => (
    <div id="app" className="App">
        <h1>React fundamentals</h1>

        <div className="Cards">
            <Card title="#06 - Repetition" color="#FF4C65">
                <ListStudents />
            </Card>
            <Card title="#05 - Components with children" color="#CBB">
                <Family surname="Silva">
                    <FamilyMember name="Peter" />
                    <FamilyMember name="Ann" />
                    <FamilyMember name="Gustavo" />
                </Family>
            </Card>

            <Card title="#04 - Random number" color="#080">
                <Random min={1} max={200}/>
            </Card>

            <Card title="#03 - Fragment" color="#F2B200">
                <Fragment />
            </Card>

            <Card title="#02 - With Parameters">
                <WithParameters 
                    student="Breno"
                    grade={ 9.4 }/>
            </Card>

            <Card title="#01 - First Component" color="#A1A2A0">
                <First />
            </Card>
        </div>
    </div>
);