export default function Contact() {
	return (
		<div id='contact' className='pt-10 mt-20 mb-70'>
			<h2 className='md:text-3xl text-2xl text-center font-bold'>Contact</h2>
			<div className=' flex text-gray-800 gap-5 p-20 items-center justify-center mb-50 text-lg flex-col md:flex-row max-w-screen'>
				<a
					href='mailto:milesq.ryder@gmail.com'
					className='border-b-2 border-cyan-600'>
					milesq.ryder@gmail.com
				</a>
				<div className='hidden md:flex'>||</div>
				<a
					href='https://www.linkedin.com/in/miles-ryder'
					target='_blank'
					className='border-b-2 border-cyan-600'>
					LinkedIn
				</a>
				<div className='hidden md:flex'>||</div>
				<a
					href='https://github.com/miles-q-ryder'
					target='_blank'
					className='border-b-2 border-cyan-600'>
					Github
				</a>
			</div>
		</div>
	);
}
