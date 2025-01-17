import styles from "./Logo.module.css";

export default function Logo() {
	return (
		<div className={styles.container}>
			<span className={styles.title}>AirQ</span>
			<span className={styles.slogan}>"Your Air, Your Awareness"</span>
		</div>
	);
}
