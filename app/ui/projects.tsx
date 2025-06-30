import Image, { StaticImageData } from 'next/image';
import LogoTetris from '@/public/projects/tetris-logo2.png';
import LogoMgNext from '@/public/projects/micro-g-next-logo(1).png';
import LogoRacket from '@/public/projects/racket-logo2.png';
import LogoPython from '@/public/projects/python-logo.png';
import styles from '@/app/ui/project.module.css';

function Logo(src: StaticImageData, alt: string, style?: string) {
	return (
		<Image
			aria-hidden
			src={src}
			alt={alt}
			className={`${styles.logo} ${style}`}
		/>
	);
}

export default function Projects() {
	return (
		<div id='projects' className='flex flex-col pt-10 gap-5'>
			<h2 className='md:text-2xl text-xl text-center font-semibold'>
				Projects
			</h2>

			{/* -------- Tetris Fall 2024 -------- */}
			<div className={`${styles.box} ${styles.left}`}>
				{Logo(LogoTetris, 'Tetris Logo', 'p-1.5 md:pr-5')}
				<div>
					<h3 className={styles.title}>Tetris Upgrade</h3>
					<p className={styles.text}>
						For this project, I modified a classic Tetris game written in Ruby,
						adding three new block shapes to enhance gameplay. I also
						implemented two cheat commands that, while decreasing the score,
						allowed players to drop a single block or clear the bottom row while
						correctly shifting the rest of the grid using the Tk graphics
						library. Furthermore, I completed these modifications in under two
						weeks, showcasing my ability to quickly understand and extend
						existing code.
					</p>
				</div>
			</div>

			{/* -------- Racket MUPL Fall 2024 -------- */}
			<div className={`${styles.box} ${styles.right}`}>
				{Logo(LogoRacket, 'Racket Logo', 'p-1.5 md:pl-5')}
				<div>
					<h3 className={styles.title}>MUPL Interpreter</h3>
					<p className={styles.text}>
						I developed an interpreter in Racket for a Made-Up Programming
						Language (MUPL). This interpreter supported fundamental operations
						like addition, pair creation, variable definition, and function
						definition and execution. It also handled closures and recursive
						functions, enabling the implementation of higher-order functions
						such as filter, map, and fold. By designing and building this
						interpreter, I deepened my understanding of programming language
						concepts, functional programming, and how interpreters process and
						execute code.
					</p>
				</div>
			</div>

			{/* -------- MicroG NeXt Sep '24 - June '25 -------- */}
			<div className={`${styles.box} ${styles.left}`}>
				{Logo(LogoMgNext, 'MicroG NeXt Logo', 'md:pr-5')}
				<div>
					<h3 className={styles.title}>NASA Micro-g NExT</h3>
					<p className={styles.text}>
						I was part of a team that developed a portable, self-contained
						system for detecting and decoding Emergency Locator Transmitter
						(ELT) signals. The design integrates an ADALM-PLUTO software-defined
						radio and a Raspberry Pi 5, enabling real-time signal processing and
						data storage. The system autonomously detects, buffers, and decodes
						signals, providing immediate alerts or storing raw data for further
						analysis. This project was aimed to enhance search-and-rescue
						operations by improving accessibility and efficiency in emergency
						signal detection. This project was one of the Micro-g NExT 2024-2025
						challenges.
					</p>
				</div>
			</div>

			{/* -------- Hackathon Fall 2024 -------- */}
			<div className={`${styles.box} ${styles.right}`}>
				{Logo(LogoPython, 'Python Logo', 'p-1.5 md:pl-5')}
				<div>
					<h3 className={styles.title}>Hackathon Fall 2024</h3>
					<p className={styles.text}>
						As part of a four-person team, I participated in a fast-paced
						hackathon, hosted by the Sea Aggie Coding Club, where we had four
						hours to design and develop a fully functional student activity
						scheduler. Our team, comprised freshmen engineering students with
						little coding experience and senior computer science students with
						two to three years of experience. Due to its diverse nature, I
						proposed that our team use Python. Using Python and Google Colab, we
						developed our project featuring a login system, personalized data
						storage, a chat function that sent and received messages, and a
						calendar for managing events. As the team lead, I coordinated
						development efforts, ensured efficient time management, and
						presented our final product to the judges. Our ability to rapidly
						prototype and implement core functionalities earned us second place
						in the competition.
					</p>
				</div>
			</div>
		</div>
	);
}
