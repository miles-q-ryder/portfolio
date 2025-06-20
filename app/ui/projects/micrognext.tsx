import styles from '@/app/ui/projects/project.module.css';

export default function MicroGNextPrject() {
	return (
		<div className={`${styles.box} ${styles.left}`}>
			<img
				aria-hidden
				src={`/projects/micro-g-next-logo(1).png`}
				alt='MicroG NeXt Logo'
				width={256}
				height={245}
                className={styles.logo}
			/>
			<div>
				<h3 className={styles.title}>NASA Micro-g NExT</h3>
				<p className={styles.text}>
					I was part of a team that is developing a portable, self-contained
					system for detecting and decoding Emergency Locator Transmitter (ELT)
					signals. The design integrates an ADALM-PLUTO software-defined radio
					and a Raspberry Pi 5, enabling real-time signal processing and data
					storage. The system autonomously detects, buffers, and decodes
					signals, providing immediate alerts or storing raw data for further
					analysis. This project was aimed to enhance search-and-rescue
					operations by improving accessibility and efficiency in emergency
					signal detection. This project was one of the Micro-g NExT 24-25
					challenges.
				</p>
			</div>
		</div>
	);
}
