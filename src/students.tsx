import { useState, useEffect } from 'react';
import supabase from './supabase';
import { useParams } from 'react-router-dom';

export default function Student() {
	const [data, setData] = useState({
		studentId: '',
		firstName: '',
		secondName: '',
		cohort: '',
		debitStatus: '',
		debitAmount: '',
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
		<>
			<div className='grid w-full h-1/2  p-10 text-xl'>
				<div>
					<span className='font-bold'>Student ID:</span> {data.studentId}
				</div>
				<div>
					<span className='font-bold'>First Name:</span>
					{data.firstName}
				</div>
				<div>
					<span className='font-bold'>Second Name:</span> {data.secondName}
				</div>
				<div>
					<span className='font-bold'>Cohort:</span> {data.cohort}
				</div>
				<div>
					<span className='font-bold'>Debt Status:</span> {data.debitStatus}
				</div>
				<div>
					<span className='font-bold'>Debt Amount:</span> {data.debitAmount}
				</div>
			</div>
		</>
	);
}
