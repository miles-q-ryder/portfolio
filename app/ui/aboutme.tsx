import Interests from './aboutme/interests';
import Languages from './aboutme/languages';
import Skills from './aboutme/skills';

export default function AboutMe() {
	return (
		<div id='aboutme' className='pt-10 text-center mb-10 max-w-full'>
			<h2 className='text-2xl m-5 font-semibold'>About Me</h2>
			<div className='grid md:grid-cols-3 '>
				<Languages />
				<Skills />
				<Interests />
			</div>
		</div>
	);
}
