import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import styles from "@/app/components/styles/main-header.module.css";
import MainBackground from "@/app/components/main-header/main-header-background";
import NavLink from "@/app/components/main-header/nav-link";

const MainHeader = () => {
	return (
		<>
			<MainBackground />
			<header className={styles.header}>
				<Link
					href="/"
					className={styles.logo}
				>
					<Image
						src={logoImg}
						alt="A plate with food on it"
						priority
					/>
					NextLevel Food
				</Link>
				<nav className={styles.nav}>
					<ul>
						<li>
							<NavLink href="/meals">Browse Meals</NavLink>
						</li>
						<li>
							<NavLink href="/community">Foodies Community</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};
export default MainHeader;
