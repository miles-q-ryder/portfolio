import Image from "next/image";
import styles from '@/app/ui/projects/project.module.css';

export default function Hackathon24() {
	return (
		<div className={`${styles.box} ${styles.right}`}>
			<Image
				aria-hidden
				src={`${process.env.NEXT_PUBLIC_BASE_PATH}/projects/python-logo.png`}
				alt='Python Logo'
				width={256}
				height={254}
                className={styles.logo}
			/>
			<div>
				<h3 className={styles.title}>Hackathon Fall 2024</h3>
				<p className={styles.text}>
					As part of a four-person team, I participated in a fast-paced
					hackathon where we had just four hours to design and develop a fully
					functional student activity scheduler. Our team comprised freshmen
					engineering students with little coding experience and senior computer
					science students with years of experience; due to its diverse nature,
					I proposed that our team use Python. So, using Python and Google
					Colab, we developed our project featuring a login system, personalized
					data storage, a chat function that sent and received messages, and a
					calendar for managing events. As the team lead, I coordinated
					development efforts, ensured efficient time management, and presented
					our final product to the judges. Our ability to rapidly prototype and
					implement core functionalities earned us second place in the
					competition. <br />
					The hackathon was graciously hosted by the Sea Aggie Coding Club.
				</p>
			</div>
		</div>
	);
}
