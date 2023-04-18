import { Header } from "./Components/Header/Header";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import "./App.css";
import "./global.css";
import { Tasks } from "./Components/Tasks/Tasks";

function App() {
    return (
        <>
            <Header />
            <div className="app">
                <div className="searchBar">
                    <SearchBar />
                </div>
                <div className="tasks">
                    <Tasks />
                </div>
            </div>
        </>
    );
}

export default App;
