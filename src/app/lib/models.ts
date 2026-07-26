import { getDBConnection } from "./db";

export async function getModels(search?: string, sortBy?: string) {
    const db = await getDBConnection();

    let sql = "SELECT * FROM models"
    const placeholders = []

    if (search) {
        sql += " WHERE (name LIKE ? OR description LIKE ?)";
        placeholders.push(`%${search}%`, `%${search}%`);
    }
    
    if (sortBy) {
        // const sortPlaceholder = [];
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
    try {
        return await db.all(sql, placeholders)
    }
    finally {
        await db.close();
    }
} 

export async function getModelsByCategorySlug(categorySlug:string, sortBy?:string) {
    const db = await getDBConnection();

    let sql = "SELECT * FROM models WHERE category = ?";
    const placeholders = [categorySlug];

    if (sortBy === "alpha") {
    sql += " ORDER BY name ASC";
    } else if (sortBy === "popular") {
    sql += " ORDER BY likes DESC";
    } else if (sortBy === "recent") {
    sql += " ORDER BY dateAdded DESC";
    }

    try {
        return await db.all(sql, placeholders);
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