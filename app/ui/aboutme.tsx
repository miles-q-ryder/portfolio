import styles from '@/app/ui/aboutme.module.css';

export default function AboutMe() {
	return (
		<div id='aboutme' className='pt-10 text-center mb-10 max-w-full'>
			<h2 className='text-2xl m-5 font-semibold'>About Me</h2>
			<div className='grid md:grid-cols-2 '>
				{/* -------- Languages --------- */}
				<div className={styles.block}>
					<h3 className={styles.header}>Languages</h3>
					<ul className={`flex-col ${styles.card}`}>
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

				{/* -------- Skills -------- */}
				<div className={styles.block}>
					<h3 className={styles.header}>Skills</h3>
					<ul className={`flex-col ${styles.card}`}>
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
			</div>

			{/* --------- Interests --------- */}
			<div className={styles.block}>
				<h3 className={styles.header}>Interests</h3>
				<ul className={`flex-col ${styles.card} sm:flex-row`}>
					<li className={styles.interest}>Web Development</li>
					<li className={styles.interest}>Machine Learning</li>
					<li className={styles.interest}>Robotics</li>
				</ul>
			</div>
		</div>
	);
}
