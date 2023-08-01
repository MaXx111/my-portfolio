import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import './App.css'
import { setupStore } from './appStore'
import { MainPage } from '../pages/mainPage'

const appStore = setupStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ReduxProvider store={appStore}>
      <MainPage />
    </ReduxProvider>
)