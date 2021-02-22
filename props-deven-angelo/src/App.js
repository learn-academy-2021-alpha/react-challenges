import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      diceRoll: ['1' ,'2' ,'3' ,'4' ,'5' ,'6'] , 
      currentRoll: 0
    }
  }
  rollingDice = () => {
    let throwDice = Math.floor(Math.random() * this.state.diceRoll.length)
    this.setState({ currentRoll: throwDice })
  }
}
  return (
    <div className="App">
      
    </div>
  );
}

export default App

//create a function that will display an array of 6 random numbers and spit out those numbers
//create an array of numbers 1-6 and spits one out ranoml
//two child classes that that will inherits props for parents