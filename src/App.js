import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
export default class App extends React.Component{

  constructor(){
    super()
    this.state={
      content:'Olá, meu nome é Marcos',
      searchField:'',
      monstersList:[]
    }
      // this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(result=>result.json()).then(resJson=>this.setState({monstersList:resJson})).catch(err=>{})
  }
  handleChange=(e)=>{
    this.setState({searchField:e})
  }
  render(){
    const {monstersList,searchField} = this.state
    const filteredList = monstersList.filter(element=>
      element.name.toLowerCase().includes(searchField.toLowerCase())
    )
    console.log('filtered list: ',filteredList)
    /*
            <input type='search' placeholder='Search here...' className='Input-component'
        onChange={e=>this.setState({searchField:e.target.value})}/>
    */
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox updateField={this.handleChange}/>
        <CardList list={filteredList}/>
      </div>
    );
  }
};
