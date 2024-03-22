import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { redirect, Link } from 'react-router-dom';

export default function Body() {
	const [userInput, setUserInput] = useState('');
	const handleInput = (e) => {
		setUserInput(e.target.value);
	};
	let handleClick = () => {
		console.log('clicked');
		return redirect('/students/2');
	};
	return (
		<div className='w-full h-full'>
			<section className='w-full py-32 px-10 md:py-24 lg:py-32 xl:py-40'>
				<div className='container flex flex-col items-center justify-center px-4 space-y-4 md:px-6'>
					<div className='text-center'>
						<h1 className='text-5xl font-bold tracking-tighter sm:text-5xl'>
							Hub QR Code Checker
						</h1>
						<p className='max-w-[600px] text-gray-500 md:text-xl/none xl:text-2xl dark:text-gray-400'>
							Easily check your student status. Enter your student ID and click
							the button to get started.
						</p>
					</div>
					<div className='flex flex-col gap-2 w-full max-w-sm '>
						<Input
							placeholder='Enter your student ID'
							type='text'
							onChange={handleInput}
							value={userInput}
						/>
						<Button className='bg-slate-950 text-white' onClick={handleClick}>
							<Link to={`/students/${userInput}`}>Check Status</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
