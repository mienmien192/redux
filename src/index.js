import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './components/Redux/redux/store';
//import {ListContextTheme} from './components/hook/ListContextTheme'
//import ListContext from './components/studentApp2/ListContext'
ReactDOM.render(
    
    <React.StrictMode >
        <Provider store = {store}>
         <App />
         </Provider>
    </React.StrictMode>,
      
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

{/* <React.StrictMode >
<ListContext> 
 <App />
</ListContext>
</React.StrictMode>, */}