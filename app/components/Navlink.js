"use client"
import { usePathname } from "next/navigation"
import Link from "next/link";
import classes from "./Navlink.module.css";
 // directives
 
const Navlink = ({href,children}) => {
   const path  = usePathname()
  return (
    <Link
    href={href}
    className={path.startsWith(href) ? `${classes.active} ${classes.link}`:undefined}
    >
        {children}
    </Link>
  )
}

export default Navlink