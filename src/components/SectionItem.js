import React from 'react';

const SectionItem = ({sectionItem}) => {
  return <div className='secItem'>
            <div className='secItemTitle'>
                <h4>{sectionItem.sectionItemTitle}</h4>
                <h4>|</h4>
                <h4>{sectionItem.sectionItemRole}</h4>
                <h4>|</h4>
                <h4>{sectionItem.sectionItemYears}</h4>
            </div> 
            <p>{sectionItem.sectionText}</p>     
        </div>;
};

export default SectionItem;
