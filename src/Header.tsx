import './App.css';
import { Link } from 'react-router-dom';
export default function Header() {
	return (
		<>
			<Link to={`/`}>
				<div className='w-full py-3 bg-slate-100 text-center cursor-pointer'>
					<h1 className='text-center text-gray-700 font-bold text-xl'>
						Hub QR Code Checker
					</h1>
				</div>
			</Link>
		</>
	);
}
