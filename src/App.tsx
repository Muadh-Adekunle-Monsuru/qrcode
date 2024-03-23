import './App.css';
import Header from './Header';
import { Outlet } from 'react-router-dom';
function App() {
	return (
		<div className='h-full'>
			<Header />
			<div className='h-[90%] bg-slate-200 w-full'>
				<Outlet />
			</div>
		</div>
	);
}

export default App;
