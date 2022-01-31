import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Section from './Section';


const Secmain = ({sections}) => {
  return <div className='sec'>
      {sections.map(section=>
        <Section key={section.id} section={section}/>
        )}


  </div>;
};

export default Secmain;
