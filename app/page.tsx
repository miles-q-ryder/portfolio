import Sections from './ui/sections';

export default function Home() {
	return (
		<div className='items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
				<h1 className='self-center text-4xl text-teal-950'>
					Miles Q. Ryder
				</h1>
				{/* Write something personal */}
				<div className='text-center w-10/12 border-2 border-cyan-600 p-5 rounded-3xl self-center bg-cyan-100 shadow-xl shadow-cyan-600'>
					<p>
						Howdy, I'm a senior at Texas A&M University, based out of Galveston,
						pursuing a bachelor's degree in computer science. As a software
						developer, I enjoy tackling complex problems and creating practical,
						user-focused solutions. I'm especially interested in web and app
						development, and I'm always looking for opportunities to grow and
						apply my skills. Below you can explore some of my recent projects
						that showcase my work and problem-solving approach. If you'd like to
						connect or have any questions, my contact information is provided at
						the bottom of the page.
					</p>
				</div>
				<Sections />
			</main>
			<footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-xs text-gray-500'>
				<span>Made by Miles Ryder © 2025</span>
			</footer>
		</div>
	);
}
