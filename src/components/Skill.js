import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../handlers/font.handler.js'

const initSkilList=(starSkill)=>{
    let arr=[]
    for (let i=0; i<starSkill; i++){
        arr.push({id:i , type:'fas'})
    }
    for (let i=starSkill; i<10; i++){
        arr.push({id:i, type: 'far'})
    }
    return arr;
}

const Skill = ({skill}) => {
    const skilList= initSkilList(skill.starSkill)
  return (<div className="secSkill">
            <div>{skill.skillTitle}</div>
            <div className="stars">
                {skilList.map(skillItem=>
                    <div key={skillItem.id}>
                    <FontAwesomeIcon icon={['fas', 'circle']}/>
                </div>
                    )}
            </div>
        </div>);
};

export default Skill;
