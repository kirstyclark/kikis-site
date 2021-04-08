import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
   } from 'react-router-dom';
import RadioKiki from '../../components/Projects/RadioKiki';
import CanYouFeelIt from '../../components/Projects/CanYouFeelIt';
import TopTwenty from '../../components/Projects/TopTwenty';
import Archive from '../../components/Projects/Archive';
import Vibes from '../../components/Vibes';
import Home from '../../components/Home';

const Routes = (props) => {

    const {shows} = props;

    return (
        <>
        <Router>
            <Switch>
            <Route path='/radiokiki' >
                <RadioKiki />
            </Route>
            <Route path='/canyoufeelit' >
                <CanYouFeelIt />
            </Route>
            <Route path='/toptwenty' >
                <TopTwenty />
            </Route>
            <Route path='/archive' >
                <Archive />
            </Route>
            <Route path='/vibes' >
                <Vibes />
            </Route>
            <Route path='/' >
                <Home />
            </Route>
            </Switch>
        </Router>
        </>
    )
}

export default Routes