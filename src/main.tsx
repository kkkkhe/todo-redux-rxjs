import ReactDOM from 'react-dom/client'
import App from './app/App'
import './app/App'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './app/index.css'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <App />
    </Provider>
)
