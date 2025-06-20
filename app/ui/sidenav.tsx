'use client';

import NavLinks from '@/app/ui//nav-links';
import Image from 'next/image';
import Link from 'next/link';
import MilesName from '@/public/milesq.ryder.png'
import MilesLogo from '@/public/Miles-blue.png'

export default function SideNav() {
	return (
		<div className='flex h-full flex-col px-3 py-4 lg:px-2'>
			<Link
				className='mb-2 flex h-20 items-end rounded-md logo-blue lg:h-40 overflow-hidden justify-center'
				href='/'>
				<Image
					src={MilesLogo}
					alt=''
					className={`hidden w-full self-center lg:block`}	
				/>
				<Image
					src={MilesName}
					alt=''
					className={`lg:hidden w-72 self-center `}
				/>
			</Link>
			<div className='flex grow flex-row justify-between space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2'>
				<NavLinks />
				<div className='hidden h-auto w-full grow rounded-md bg-cyan-100 lg:block'></div>
			</div>
			<style>{`
				.logo-blue {
					background-color: rgb(12, 193, 224);
				}
			`}</style>
		</div>
	);
}
