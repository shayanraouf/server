import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

// const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <dive>
                    <Header /> 
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                </dive>
            </BrowserRouter>
        </div>
    );
};

export default App;