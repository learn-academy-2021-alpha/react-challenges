import logo from './logo.svg';
import './App.css';
import RollTheDice from "./components/diceRoller";

class App extends Component {
  constructor(){
    super();
    this.state = {
      diceRoll: ['1' ,'2' ,'3' ,'4' ,'5' ,'6'] ,
      currentRoll: 0
    }
  }
  rollingDice = () => {
    let throwDice = Math.floor(Math.random() * this.state.diceRoll.length)
    this.setState({ currentRoll: throwDice })
  };
}

render() {
  return(
    <div className="App">
    roll the dice!
    {
      this.state.diceRoll[this.state.currentRoll.map(diceRoll, index) => {
        return < RollTheDice number = {diceRoll}
                            key = {index}
                            diceAction = {this.rollingDice}/>
      }]
    }
    </div>
    );
  }
}
export default App

//create a function that will display an array of 6 random numbers and spit out those numbers
//create an array of numbers 1-6 and spits one out ranoml
//two child classes that that will inherits props for parents
