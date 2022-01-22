import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/catalog"><Catalog /></Route>
                <Route path="/"><Home /></Route>
            </Switch>
        </BrowserRouter>
    );
}
