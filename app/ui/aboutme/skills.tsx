import styles from '@/app/ui/aboutme/aboutme.module.css';

export default function Skills() {
	return (
		<div className={styles.block}>
			<h3 className={styles.header}>Skills</h3>
			<ul className={styles.card}>
				<li className={styles.li}>
					Algorithms
					<div className={styles.bar}>
						<div className={`${styles.filled} w-3/4`}></div>
					</div>
				</li>
				<li className={styles.li}>
					Problem solving
					<div className={styles.bar}>
						<div className={`${styles.filled} w-11/12`}></div>
					</div>
				</li>
				<li className={styles.li}>
					Time Management
					<div className={styles.bar}>
						<div className={`${styles.filled} w-3/5`}></div>
					</div>
				</li>
				<li className={styles.li}>
					Collaboration
					<div className={styles.bar}>
						<div className={`${styles.filled} w-3/4`}></div>
					</div>
				</li>
				<li className={styles.li}>
					Adaptability
					<div className={styles.bar}>
						<div className={`${styles.filled} w-4/5`}></div>
					</div>
				</li>
			</ul>
		</div>
	);
}
