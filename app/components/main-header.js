import Link from "next/link";
import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css";
import Image from "next/image" // use for image optimization on Browser 
import Navlink from "./Navlink";
export default function MainHeader(){   

    // console.log(classes);

    return (
        <header className={classes.header}>
        <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="food Logo" priority/>
        NextLevel Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Navlink href="/meals">Browse Meals</Navlink>
                    {/* <Link href='/meals'>Meals</Link> */}
                </li>
                <li>
                <Navlink href="/community">Community</Navlink>
                    {/* <Link href='/community'>Community</Link> */}
                </li>
               
            </ul>
        </nav>

        </header>
    )
} 