import Header from "./Header";
import Footer from "./Footer";
import Secmain from "./Secmain";
import '../handlers/font.handler.js';


const sectionList = [
  {
     id: 1,
     sectionTitle: "EXPERIENCE",
     sectionIcon:['fab' , 'microsoft'],
     isSectionItem: true,
     isSkill: false,
     sectionItems: [
         {
             sectionItemTitle: "ASP.NET 5",
             sectionItemRole: "TEAM LEADER",
             sectionItemYears: "2020-2021",
             sectionText: "Explain the job that you have done and the results that you have got!"
         },
         {
             sectionItemTitle: "ASP.NET 3.0",
             sectionItemRole: "TEAM LEADER",
             sectionItemYears: "2019-2020",
             sectionText: "Explain the job that you have done and the results that you have got!"
         },
         {
             sectionItemTitle: "ASP.NET 2.0",
             sectionItemRole: "TEAM LEADER",
             sectionItemYears: "2018-2019",
             sectionText: "Explain the job that you have done and the results that you have got!"
         }
     ]
  },
  {
      id: 2,
      sectionTitle: "FORMATION",
      sectionIcon: ['fas','book-open'],
      isSectionItem: true,
      isSkill: false,
      sectionItems: [
         {
             sectionItemTitle: "DEGREE",
             sectionItemRole: "UNIVERSITY",
             sectionItemYears: "2017-2018",
             sectionText: "Explain the formation 's specificities: your degree, options, ..."
         },
         {
             sectionItemTitle: "DEGREE",
             sectionItemRole: "UNIVERSITY",
             sectionItemYears: "2016-2017",
             sectionText: "Explain the formation 's specificities: your degree, options, ..."
         },
         {
             sectionItemTitle: "DEGREE",
             sectionItemRole: "UNIVERSITY",
             sectionItemYears: "2015-2016",
             sectionText: "Explain the formation 's specificities: your degree, options, ..."
         }
     ]
  },
  {
      id: 3,
      sectionTitle:"HOBBIES",
      sectionIcon:"",
      isSectionItem: false,
      isSkill: false,
      sectionText:"Explain the job that you have done and the resiltes that you have got!"
  },
  {
      id: 4,
      sectionTitle:"PROFILE",
      sectionIcon:"",
      isSectionItem: false,
      isSkill: false,
      sectionText:"Explain the job that you have done and the resiltes that you have got!"   
  },
  {
      id: 5,
      sectionTitle:"SKILL",
      sectionIcon:"",
      isSectionItem: false,
      isSkill: true,
      skills:[
          {
              skillTitle: "Web",
              skillSrats: 8
          },
          {
              skillTitle: "UI/UX Desing",
              skillSrats: 8
          },
          {
              skillTitle: "ASP.NET CORE",
              skillSrats: 8
          },
          {
              skillTitle: "MS SQL",
              skillSrats: 8
          },
          {
              skillTitle: "Github",
              skillSrats: 8
          }
      ]
  },
  {
      id: 6,
      sectionTitle:"PERSONALITY",
      sectionIcon:"",
      isSectionItem: false,
      isSkill: true,
      skills:[
          {
              skillTitle: "Reactive",
              skillSrats: 8
          },
          {
              skillTitle: "Ambitious",
              skillSrats: 8
          },
          {
              skillTitle: "ASP.NET CORE",
              skillSrats: 8
          },
          {
              skillTitle: "Crative",
              skillSrats: 8
          },
          {
              skillTitle: "Reliable",
              skillSrats: 8
          }
      ]
  },
  {
      id: 7,
      sectionTitle:"LANGUAGES",
      sectionIcon:"",
      isSectionItem: false,
      isSkill: true,
      skills:[
          {
              skillTitle: "Hebrow",
              skillSrats: 8
          },
          {
              skillTitle: "English",
              skillSrats: 8
          },
          {
              skillTitle: "Franch",
              skillSrats: 8
          }
      ]
  }
]


function App() {
  return (
    <div>
      <Header/>
      <Secmain sections={sectionList}/>
      <Footer/>
    </div>
  );
}

export default App;
