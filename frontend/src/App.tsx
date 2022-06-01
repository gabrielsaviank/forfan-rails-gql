import React from 'react';
import './App.css';

import Users from './components/Users';
import User from "./components/User";

class App extends React.Component {
    state = {
        selectedUser: null
    };

    selectUser = (user: any) => {
        this.setState({ selectedUser: user });
    };

    render () {
        // FIX ME
        return (
            <div className="container mx-auto px-4">
                {this.state.selectedUser ?
                    <User user={this.state.selectedUser} selectUser={this.selectUser} /> :
                    <Users selectUser={this.selectUser} />}
            </div>
        )
    }
};

export default App;
