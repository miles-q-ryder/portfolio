import styles from '@/app/ui/aboutme.module.css';

export default function Contact() {
	return (
		<div id='contact' className={`pt-10 mt-20 ${styles.contact}`}>
			<h2 className='md:text-3xl text-2xl text-center font-bold'>Contact</h2>
			<div className=' flex text-gray-800 gap-5 p-20 items-center justify-center text-lg flex-col md:flex-row w-full'>
				<a
					href='mailto:milesq.ryder@gmail.com'
					className='border-b-2 border-cyan-600'>
					MilesQ.Ryder@gmail.com
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
