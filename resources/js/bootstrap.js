import React,{ Component, Suspense }  from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

class App extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    render() {
        return (
            <HashRouter>
                <React.Suspense fallback={this.loading()}>
                    <Switch>
                        <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
                    </Switch>
                </React.Suspense>
            </HashRouter>
        );
    }
}



export default App;
