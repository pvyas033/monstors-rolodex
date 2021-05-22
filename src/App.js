import "./App.css";
import { Component } from "react";
import { SearchBox } from "./components/search-box/search-box.component";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          monsters: json,
        })
      );
  }

  handleChange = (e) =>{
    this.setState({
     search: e.target.value
    })
  }

  render() {
    const {monsters, search} = this.state;
    const filteredMonster = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(search.toLowerCase())
    })
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox 
        placeholder="search monster"
        handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;
