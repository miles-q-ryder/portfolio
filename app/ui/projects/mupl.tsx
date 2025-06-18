import Image from 'next/image';
import styles from '@/app/ui/projects/project.module.css';

export default function MUPLProject() {
	return (
		<div className={`${styles.box} ${styles.right}`}>
			<Image
				aria-hidden
				src={'/projects/racket-logo.png'}
				alt='Racket Logo'
				width={256}
				height={267}
                className={styles.logo}
			/>
			<div>
				<h3 className={styles.title}>MUPL Interpreter</h3>
				<p className={styles.text}>
					I developed an interpreter in Racket for a Made-Up Programming
					Language (MUPL). This interpreter supported fundamental operations
					like addition, pair creation, variable definition, and function
					definition and execution. It also handled closures and recursive
					functions, enabling the implementation of higher-order functions such
					as filter, map, and fold. By designing and building this interpreter,
					I deepened my understanding of programming language concepts,
					functional programming, and how interpreters process and execute code.
				</p>
			</div>
		</div>
	);
}
