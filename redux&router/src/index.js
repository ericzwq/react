import ReactDom from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {BrowserRouter} from "react-router-dom";
import thunk from 'redux-thunk'
import reducer from "./redux/reducers";

const store = createStore(reducer, applyMiddleware(thunk))
ReactDom.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,
  document.getElementById('root'))

// setTimeout(()=>ReactDom.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,
//   document.getElementById('root')),10000)
