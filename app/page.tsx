import Sections from './ui/sections';

export default function Home() {
	return (
		<div className='items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
				<h1 className='self-center text-4xl'>Miles Q. Ryder</h1>
				<Sections />
			</main>
			<footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-xs text-gray-500'>
				<span>Made by Miles Ryder © 2025</span>
			</footer>
		</div>
	);
}
