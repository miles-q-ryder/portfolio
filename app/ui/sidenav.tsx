import NavLinks from '@/app/ui//nav-links';
import Link from 'next/link';

export default function SideNav() {
	return (
		<div className='flex h-full flex-col px-3 py-4 lg:px-2'>
			<Link
				className='mb-2 flex h-20 items-end justify-start rounded-md bg-cyan-500 p-4 lg:h-40'
				href='/'>
			</Link>
			<div className='flex grow flex-row justify-between space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2'>
				<NavLinks />
				<div className='hidden h-auto w-full grow rounded-md bg-cyan-100 lg:block'></div>
			</div>
		</div>
	);
}
