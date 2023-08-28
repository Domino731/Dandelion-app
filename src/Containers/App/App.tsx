import Sidebar from './Sidebar/index';
import './App.css'
import Chat from './Chat/index';


// import {Button, ThemeProvider} from "@mui/material";
// import {Theme} from "../../styles";
// import {Provider} from 'react-redux';
// import store from "../../redux/store.ts";

function App() {
    return (
    <div className='app'>

        <Sidebar />

        <Chat />
    </div>
    );
}

export default App
