import Header from "./Header";
import {Main,section} from "./Main";
import Footer from "./Footer";


function App() {
  return (
    <div>
      <Header/>
      
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
      <Footer/>
    </div>
  );
}

export default App;
