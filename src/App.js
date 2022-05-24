import './App.css';
import GetDates from './components/GetDates';
import Navigation from './components/Navigation';
import GetParties from './components/GetParties';
import GetStyle from './components/GetStyle';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App" >
  <Navigation/>
   
     <div className="module-cntr">
   
     <GetParties/>
     <GetDates/> 
     <GetStyle/>
   
   </div>
   
    
</div>
  );
}
export default App;
