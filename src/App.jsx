import './App.css';

import React from 'react';

import Card from './layout/Card';
import WithParameters from './components/basic/WithParameters';
import Family from './components/basic/Family';
import FamilyMember from './components/basic/FamilyMember';
import First from './components/basic/First';
import Fragment from './components/basic/Fragment';
import ListStudents from './components/repetition/ListStudents';
import Random from './components/basic/Random';
import ListProducts from './components/repetition/ListProducts';
import EvenOrOdd from './components/conditional/EvenOrOdd';
import UserInfo from './components/conditional/UserInfo';
import DirectFather from './components/communication/DirectFather';
import IndirectFather from './components/communication/IndirectFather';

export default () => (
    <div id="app" className="App">
        <h1>React fundamentals</h1>

        <div className="Cards">

            <Card title="#10 - Indirect Communication" color="#8BAD39">
                <IndirectFather />
            </Card>

            <Card title="#09 - DIrect Communication" color="#B3A2D4">
                <DirectFather />
            </Card>

            <Card title="#08 - Conditional Rendering" color="#A3C2D4">
                <EvenOrOdd number={20}/>
                <EvenOrOdd number={17}/>
                <UserInfo user={{ name: 'Breno' }}/>
                <UserInfo />
            </Card>

            <Card title="#07 - 2° Repetition" color="#F3C2D4">
                <ListProducts />
            </Card>

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