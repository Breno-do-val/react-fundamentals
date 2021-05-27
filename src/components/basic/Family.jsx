import React from 'react';
import FamilyMember from './FamilyMember';

export default props => {

    return (
        <>
            <FamilyMember name="Peter" surname={props.surname}/>
            <FamilyMember name="Ann" { ...props } />
            <FamilyMember name="Gustavo" surname="Silva"/>
        </>
    );
}