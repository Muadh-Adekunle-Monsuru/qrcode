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
			<div className='grid w-full h-1/2  p-10'>
				<div>Student ID: {data.studentId}</div>
				<div>First Name: {data.firstName}</div>
				<div>Second Name: {data.secondName}</div>
				<div>Cohort: {data.cohort}</div>
				<div>Debt Status: {data.debitStatus}</div>
				<div>Debt Amount: {data.debitAmount}</div>
			</div>
		</>
	);
}
