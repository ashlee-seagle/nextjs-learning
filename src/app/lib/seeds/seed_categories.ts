import { getDBConnection } from "../db";
import categories from "../data/categories.json";

async function seedCategories(){
  const db = await getDBConnection()
 
  //Create the categories table
  await db.exec(`  
    CREATE TABLE IF NOT EXISTS categories (  
        slug TEXT PRIMARY KEY,
        name TEXT NOT NULL
    );  
  `)

  //Prepare INSERT query
  const insertCategory = await db.prepare(`  
    INSERT OR REPLACE INTO categories (  
      slug,  
      name  
    ) VALUES (?, ?)  
  `)

  //loop through categories and run the INSERT query for each one
  for (const cat of categories) {  
    await insertCategory.run(  
      cat.slug,    
      cat.name  
    )  
  }

  await insertCategory.finalize()  
  await db.close()

  console.log("Categories table seeded")

}

seedCategories().catch((error) => {
	console.error("Seeding failed:", error)
}) 