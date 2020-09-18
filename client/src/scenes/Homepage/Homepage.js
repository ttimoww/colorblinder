import React, { useState } from 'react';
import { Link, Switch, Route , useHistory} from 'react-router-dom';
import './Homepage.scss';

const Homepage = () => {

    return(
        <div className="Homepage">
            <div className="Homepage__container">

                    <Route exact path="/">
                        <HomepageMenu />
                    </Route>
                    <Route path="/create">
                        <CreateGame />
                    </Route>
                    <Route path="/join">
                        <JoinGame />
                    </Route>
            </div>
        </div>
    )
}

const HomepageMenu = () => {
    const history = useHistory();
    return (
        <div className="HomepageMenu">
            <div className="HomepageMenu__create HomepageMenu__item" onClick={() => history.push('/create')}>
                <span>Create Game</span>
            </div>
            <div className="HomepageMenu__join HomepageMenu__item" onClick={() => history.push('/join')}>
                <span>Join Game</span>
            </div>
        </div>
    )
}



const CreateGame = () => {
    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="CreateGame">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Name"/>
                <button type="submit" id="joinbutton">Create</button>
            </form>
            <BackButton />
        </div>
    )
}

const JoinGame = () => {
    const [input, setInput] = useState({
        name: '',
        gameId: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="CreateGame">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={e => setInput({...input, name: e.target.value})} />
                <input type="text" placeholder="Game ID" onChange={e => setInput({...input, gameId: e.target.value})} />
                <button type="submit" id="createbutton">Create</button>
            </form>
            <BackButton />
        </div>
    )
}

const BackButton = () => {
    const history = useHistory();
    return (
        <div className="BackButton">
            <span onClick={() => history.push('/')}>Back</span>
        </div>
    )
}
export default Homepage;