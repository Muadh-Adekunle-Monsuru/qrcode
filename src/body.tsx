import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
export default function Body() {
	return (
		<div className='flex flex-col justify-center items-center h-full'>
			<h1 className='text-5xl p-4'>Enter the ID:</h1>
			<div className='flex w-full max-w-sm items-center space-x-2'>
				<Input type='email' placeholder='id' />
				<Button type='submit' className='bg-zinc-950 text-white'>
					Search
				</Button>
			</div>
		</div>
	);
}
