import React from 'react';

let section=[
    {
        title:"EXPERIENCE",
        secTitle:"ASPNET 5 | TEAMLEADER | 2020-2021",
        content:"Explain the job that you have done and the resiltes that you have got!",
        secTitle:"ASPNET 5 | TEAMLEADER | 2020-2021",
        content:"Explain the job that you have done and the resiltes that you have got!",
        secTitle:"ASPNET 5 | TEAMLEADER | 2020-2021",
        content:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"FORMATION",
        secTitle:"ASPNET 5 | TEAMLEADER | 2020-2021",
        content:"Explain the job that you have done and the resiltes that you have got!",
        secTitle:"ASPNET 5 | TEAMLEADER | 2020-2021",
        content:"Explain the job that you have done and the resiltes that you have got!",
        secTitle:"ASPNET 5 | TEAMLEADER | 2020-2021",
        content:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"HOBBIES",
        secTitle:"ASPNET 5 | TEAMLEADER | 2020-2021",
        content:"Explain the job that you have done and the resiltes that you have got!",
        secTitle:"ASPNET 5 | TEAMLEADER | 2020-2021",
        content:"Explain the job that you have done and the resiltes that you have got!",
        secTitle:"ASPNET 5 | TEAMLEADER | 2020-2021",
        content:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"PROFILE",
        secTitle:"ASPNET 5 | TEAMLEADER | 2020-2021",
        content:"Explain the job that you have done and the resiltes that you have got!",
        secTitle:"ASPNET 5 | TEAMLEADER | 2020-2021",
        content:"Explain the job that you have done and the resiltes that you have got!",
        secTitle:"ASPNET 5 | TEAMLEADER | 2020-2021",
        content:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"SKILL",
        content:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"EXPERIENCE",
        content:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"LANGUAGES",
        content:"Explain the job that you have done and the resiltes that you have got!"
    }
]

const Main = (props) => {
  return <div className='main'>
     <h2>{props.title}</h2>
     <h3>{props.secTitle}</h3>
     <p>{props.content}</p>

  </div>;
};

export {Main,section};



<div  className="app">
{section.map((el,i)=>
  <Main
  key={i}
  title={el.title}
  secTitle={el.secTitle}
  content={el.content}
  />
  )}
  </div>

