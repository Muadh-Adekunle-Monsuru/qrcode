import { useState, useEffect } from 'react';
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';
import supabase from './supabase';
import { useParams } from 'react-router-dom';

export default function NewDetails() {
	const [data, setData] = useState({
		studentId: '',
		firstName: '',
		secondName: '',
		cohort: '',
		debitStatus: '',
		debitAmount: '',
		age: '',
		email: '',
	});
	let { studentId } = useParams();
	const fetchData = async () => {
		try {
			let { data } = await supabase
				.from('students')
				.select()
				.eq('studentId', `${studentId}`);
			// console.log(data);
			setData(data[0]);
		} catch (e) {
			console.log('Error fetching data');
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className='grid min-h-screen gap-4 p-4 lg:gap-8'>
			<div className='grid gap-4'>
				<div className='rounded-lg overflow-hidden'>
					<div className='grid gap-2 p-4 h-full items-stretch'>
						<div className='flex items-center space-x-4'>
							<svg
								data-slot='icon'
								fill='none'
								stroke-width='1.5'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
								aria-hidden='true'
								className='w-12 h-12'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
								></path>
							</svg>
							<div className='space-y-1.5'>
								<h1 className='text-2xl font-bold'>
									{data.firstName} {data.secondName}
								</h1>
								<div className='flex items-center space-x-2 text-sm'>
									<span className='text-gray-500 dark:text-gray-400'>Age:</span>
									<span>{data.age}</span>
								</div>
							</div>
						</div>
						<div className='grid gap-1.5'>
							<div className='flex items-center space-x-2 text-sm'>
								<span className='text-gray-500 dark:text-gray-400'>Email:</span>
								<span>{data.email}</span>
							</div>
							<div className='flex items-center space-x-2 text-sm'>
								<span className='text-gray-500 dark:text-gray-400'>Phone:</span>
								<span>+1 (123) 456-7890</span>
							</div>
							<div className='flex items-center space-x-2 text-sm'>
								<span className='text-gray-500 dark:text-gray-400'>
									Cohort:
								</span>
								<span>{data.cohort}</span>
							</div>
							<div className='flex items-center space-x-2 text-sm'>
								<span className='text-gray-500 dark:text-gray-400'>
									Debt Status:
								</span>
								<span>{data.debitStatus}</span>
							</div>
							<div className='flex items-center space-x-2 text-sm'>
								<span className='text-gray-500 dark:text-gray-400'>
									Debt Amount:
								</span>
								<span>{data.debitAmount}</span>
							</div>
						</div>
					</div>
				</div>
				<Card>
					<CardHeader>
						<CardTitle className='text-sm'>Educational Background</CardTitle>
					</CardHeader>
					<CardContent className='grid gap-4 text-sm'>
						<div className='grid gap-0.5'>
							<span className='font-semibold'>Harvard University</span>
							<span>Computer Science</span>
						</div>
						<div className='grid gap-0.5'>
							<span className='font-semibold'>Stanford University</span>
							<span>Business Administration</span>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className='text-sm'>Skills & Achievements</CardTitle>
					</CardHeader>
					<CardContent className='grid gap-4 text-sm'>
						<div className='grid gap-0.5'>
							<span className='font-semibold'>Programming Languages</span>
							<span>JavaScript, Python, Go</span>
						</div>
						<div className='grid gap-0.5'>
							<span className='font-semibold'>Certifications</span>
							<span>AWS Certified Solutions Architect, PMP</span>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

function HomeIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
			<polyline points='9 22 9 12 15 12 15 22' />
		</svg>
	);
}

function MoreHorizontalIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<circle cx='12' cy='12' r='1' />
			<circle cx='19' cy='12' r='1' />
			<circle cx='5' cy='12' r='1' />
		</svg>
	);
}
