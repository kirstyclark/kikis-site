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
import VibesTest from '../../components/Vibes/VibesTest';
import Alphabetised from '../../components/Projects/TopTwenty/Alphabetised';
// import SearchResults from '../../components/SearchResults';
import Home from '../../components/Home';
import KikiMorning from '../../components/Projects/KikiMorning/KikiMorning';

const Routes = (props) => {

    const {setCurrentPlay} = props;

    return (
        <>
            <Router>
                <Switch>
                <Route path='/radiokiki' >
                    <RadioKiki setCurrentPlay={setCurrentPlay} />
                </Route>
                <Route path='/canyoufeelit' >
                    <CanYouFeelIt setCurrentPlay={setCurrentPlay} />
                </Route>
                <Route path='/easylikeakikimorning' >
                    <KikiMorning setCurrentPlay={setCurrentPlay} />
                </Route>
                <Route path='/toptwenty' >
                    <TopTwenty />
                </Route>
                <Route path='/topalphabetised' >
                    <Alphabetised />
                </Route>
                <Route path='/archive' >
                    <Archive />
                </Route>
                <Route path='/vibes' >
                    <VibesTest />
                </Route>
                {/* <Route path='/searchresults' >
                    <SearchResults currentPlay={currentPlay} search={search}/>
                </Route> */}
                <Route path='/' >
                    <Home />
                </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routes