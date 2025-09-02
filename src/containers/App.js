import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
    const [ robots, setRobots ] = useState([]);
    const [ searchfield, setSearchfield ] = useState('');
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             robots: [],
//             searchfield: ''
//         }
//     }

//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(users => this.setState({robots: users}))
//     }
    const callAPI = () => {
        return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots({users})
    );}

    useEffect( () => {
        callAPI()
        .then(() => console.log(robots));
    });

    const onSearchChange = (event) => {
        setSearchfield(event.target.value) 
    };

    // const {robots, searchfield } = this.state;  
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    
}

export default App