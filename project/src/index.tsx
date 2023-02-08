import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
// import { checkAuthAction, fetchItemsAction } from './store/api-actions';
import HistoryRouter from './components/system-components/history-router/history-router';
import ErrorMessage from './components/system-components/error-message/error-message';
import browserHistory from './browser-history';
import App from './components/system-components/app/app';

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
