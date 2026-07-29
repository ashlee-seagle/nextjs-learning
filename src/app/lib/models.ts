import { getDBConnection } from "./db";

export async function getModels({search, sortBy, categorySlug, page, modelsPerPage}:{
    search?: string;
    sortBy?: string;
    categorySlug?: string;
    page:number;
    modelsPerPage:number;
}) {
    const db = await getDBConnection();
    let sql = "SELECT * FROM models"
    const placeholders = []

    if (search||categorySlug){
    const where = []
      if (search){
        where.push("(name LIKE ? OR description LIKE ?)")
        placeholders.push(`%${search}%`, `%${search}%`)
      }
      if (categorySlug){
        where.push("category=?")
        placeholders.push(categorySlug)
      }

      sql += " WHERE " + where.join(" AND ")
  }
    
    
    if (sortBy) {
        if (sortBy === 'alpha') {
            sql += " ORDER BY name ASC";
        }
        if (sortBy === 'popular') {
            sql += " ORDER BY likes DESC";
        }
        if (sortBy === 'recent') {
            sql += " ORDER BY dateAdded DESC";
        }
        
    }
    if (page && modelsPerPage){
    const offset = (page-1) * modelsPerPage
    sql += " LIMIT ? OFFSET ?"
    placeholders.push(modelsPerPage, offset)
  }
    try {
        return await db.all(sql, placeholders)
    }
    finally {
        await db.close();
    }
} 



export async function getModelById(id:number) {
    const db = await getDBConnection();
    try {
        return await db.get(`SELECT * FROM models WHERE id =?`, [id]);
    }
    finally {
        await db.close();
    }
    
}
export async function getModelCount({search, categorySlug}:{
  search?:string;
  categorySlug?:string;
}){
  const db = await getDBConnection()

  let sql = "SELECT COUNT(*) AS count FROM models"
  const placeholders = []
  const where = []

  if (search){
    where.push("(name LIKE ? OR description LIKE ?)")
    placeholders.push(`%${search}%`, `%${search}%`)
  }
  if (categorySlug){
    where.push("category=?")
    placeholders.push(categorySlug)
  }
  if (where.length > 0){
    sql += " WHERE " + where.join(" AND ")
  }

  try {
    const result = await db.get(sql, placeholders)
    return result.count
  } finally {
    await db.close()
  }
} 
