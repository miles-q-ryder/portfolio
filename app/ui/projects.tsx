import Hackathon24 from './projects/hackathon24';
import MicroGNextPrject from './projects/micrognext';
import MUPLProject from './projects/mupl';
import TetrisProject from './projects/tetris';

export default function Projects() {
	return (
		<div id='projects' className='flex flex-col pt-10 gap-5'>
			<h2 className='md:text-2xl text-xl text-center font-semibold'>Projects</h2>
			<TetrisProject />
			<MUPLProject />
			<MicroGNextPrject />
			<Hackathon24 />
		</div>
	);
}
