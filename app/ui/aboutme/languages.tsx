import styles from '@/app/ui/aboutme/aboutme.module.css';

export default function Languages() {
	return (
		<div className={styles.block}>
			<h3 className={styles.header}>Languages</h3>
			<ul className={styles.card}>
				<li className={styles.li}>
					C++
					<div className={styles.bar}>
						<div className={`${styles.filled} w-10/12`}></div>
					</div>
				</li>
				<li className={styles.li}>
					Python
					<div className={styles.bar}>
						<div className={`${styles.filled} w-2/3`}></div>
					</div>
				</li>
				<li className={styles.li}>
					HTML/CSS
					<div className={styles.bar}>
						<div className={`${styles.filled} w-10/12`}></div>
					</div>
				</li>
				<li className={styles.li}>
					JavaScript
					<div className={styles.bar}>
						<div className={`${styles.filled} w-11/12`}></div>
					</div>
				</li>
				<li className={styles.li}>
					SQL
					<div className={styles.bar}>
						<div className={`${styles.filled} w-3/5`}></div>
					</div>
				</li>
			</ul>
		</div>
	);
}
