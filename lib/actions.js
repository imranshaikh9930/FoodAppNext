"use server";

import { redirect } from "next/navigation";
import { saveMeals } from "./meals";

function isTextInvalid(text) {
  return text.trim("") === "" || !text;
}
export const shareMeals = async (prevState,formData) => {
  const meals = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isTextInvalid(meals.title) ||
    isTextInvalid(meals.summary) ||
    isTextInvalid(meals.instructions) ||
    isTextInvalid(meals.creator) ||
    isTextInvalid(meals.creator_email) ||
    !meals.creator_email.includes("@") ||
    !meals.image ||
    meals.image.size === 0
  ) {
    return {
        message:"Invalid Input"
    }
  }
  // console.log(meals);
  await saveMeals(meals);
  revalidatePath("/meals") // for  production 
  redirect("/meals");
};
