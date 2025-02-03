import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "../components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community.',
};
  const Meals = async()=>{
    const meals =  await getMeals();

    return <MealsGrid meals={meals}/>
  }
 const Mealspage = () => {


  return (
    <>
    <header className={classes.header}>
        <h1>Delicious meals , created</h1>

        <span className={classes.highlight}>by you</span>
        <p>
          Choose your favorite recipe and cook it yourself and fun
        </p>
        <p className={classes.cta}>

        <Link href="/meals/share">Share Your Favorite</Link>
        </p>
    </header>
    <main className={classes.main}>
          <Suspense fallback={<p className={classes.loading}>Meals Loading ...</p>}>

          <Meals/>
          </Suspense>
    </main>
    </>
  )
}

export default Mealspage