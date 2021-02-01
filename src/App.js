import "./App.css";
import Articles from "./components/Articles";
import User from "./components/User";

function App() {
    return (
        <div className='App'>
            <header className='navbar navbar-dark bg-primary'>
                <div className='container'>
                    <h1 className='navbar-brand m-0'>React Skeletons</h1>
                </div>
            </header>
            <div className='container content'>
                <Articles />
                <User />
            </div>
        </div>
    );
}

export default App;
