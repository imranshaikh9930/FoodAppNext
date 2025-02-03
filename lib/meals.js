import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs"
import path from "node:path";
const db = sql("meals.db")// db name

export async function getMeals (){

    await new Promise((res)=>setTimeout(res,2000))
    // throw new Error("Failed To Fetch");
    return db.prepare("SELECT * FROM meals").all() // get all meals from sqllite db using all() command
}


export function getMeal(slug){

    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug)
}

export async function saveMeals(meal) {
    try {
      // Generate slug and sanitize instructions
      meal.slug = slugify(meal.title, { lower: true });
      meal.instructions = xss(meal.instructions);
  
      // Determine the image extension and file name
      const extension = path.extname(meal.image.name);
      const fileName = `${meal.slug}${extension}`;
      const filePath = path.join("public", "images", fileName);
  
      // Write the image to the file system
      const bufferedImage = Buffer.from(await meal.image.arrayBuffer());
      await fs.promises.writeFile(filePath, bufferedImage);
  
      // Update the meal image path
      meal.image = `/images/${fileName}`;
  
      // Insert the meal into the database
      await db.prepare(
        `
        INSERT INTO meals 
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
          @title,
          @summary,
          @instructions,
          @creator,
          @creator_email,
          @image,
          @slug
        )
        `
      ).run(meal);
    } catch (error) {
      console.error("Error saving meal:", error);
      throw new Error("Failed to save meal");
    }
  }