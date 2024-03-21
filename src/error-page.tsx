import { useRouteError } from 'react-router-dom';
import './App.css';
export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div
			id='error-page'
			className='w-full h-screen flex flex-col items-center justify-center '
		>
			<h1 className='font-bold'>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{JSON.stringify(error)}</i>
			</p>
		</div>
	);
}
