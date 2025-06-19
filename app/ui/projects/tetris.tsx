import Image from 'next/image';
import styles from '@/app/ui/projects/project.module.css';

export default function TetrisProject() {
	return (
		<div className={`${styles.box} ${styles.left}`}>
			<Image
				aria-hidden
				src={'/projects/tetris-logo.png'}
				alt='Tetris Logo'
				width={320}
				height={320}
                className={styles.logo}
			/>
			<div>
				<h3 className={styles.title}>Tetris Upgrade</h3>
				<p className={styles.text}>
					For this project, I modified a classic Tetris game written in Ruby,
					adding three new block shapes to enhance gameplay. I also implemented
					two cheat commands that, while decreasing the score, allowed players
					to drop a single block or clear the bottom row while correctly
					shifting the rest of the grid using the Tk graphics library. Further
					more, I completed these modifications in under two weeks, showcasing
					my ability to quickly understand and extend existing code.
				</p>
			</div>
		</div>
	);
}
