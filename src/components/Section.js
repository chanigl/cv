import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionItem from './SectionItem';
import Skill from './Skill';
import '../handlers/font.handler'

const Section = ({section}) => {
  return <div className='part'>
            <span className='parTitle'>
                <span className='titleIcon'>
                    <FontAwesomeIcon icon={section.sectionIcon}/>
                </span>
                <h3>{section.sectionTitle}</h3>
            </span>
            {section.isSectionItem?
                section.sectionItems.map((sectionItem , index )=>
                    <SectionItem key={index} sectionItem={sectionItem}/>)
                    : <div className='secSkill'>
                        {!section.isSkill?
                        <div>{section.sectionText}</div>
                        : section.skills.map((skill, index)=>
                            <Skill key={index} skill={skill}/>
                        )
                        }
                    </div>
            }
        </div>;
};

export default Section;
