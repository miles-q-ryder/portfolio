import styles from '@/app/ui/aboutme/aboutme.module.css';

export default function Interests() {
	return (
		<div className={styles.block}>
			<h3 className={styles.header}>Interests</h3>
			<ul className={styles.card}>
				<li className={styles.interest}>Web Development</li>
				<li className={styles.interest}>Machine Learning</li>
				<li className={styles.interest}>Robotics</li>
			</ul>
		</div>
	);
}
