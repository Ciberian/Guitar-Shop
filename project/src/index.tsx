import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorMessage from './components/system-components/error-message/error-message';
import HistoryRouter from './components/system-components/history-router/history-router';
import browserHistory from './browser-history';
import App from './components/system-components/app/app';
// import { checkAuthAction, fetchItemsAction } from './store/api-actions';
import { Provider } from 'react-redux';
import { store } from './store';

// store.dispatch(checkAuthAction());
// store.dispatch(fetchItemsAction());

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ErrorMessage />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);
