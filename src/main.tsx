import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ErrorPage from './error-page';
import Body from './body.tsx';
import NewDetails from './newhome.tsx';
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Body />,
			},
			{
				path: 'students/:studentId',
				element: <NewDetails />,
			},
			{
				path: 'newstudents/:studentId',
				element: <NewDetails />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
