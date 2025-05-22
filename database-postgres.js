import { randomUUID } from "node:crypto"
import { sql } from './db.js'

export class DatabasePostgres {
    async list(search) {
        let videos

        if (search) {
            videos = await sql`select * from videos where title ilike ${'%' + search + '%'}`
        } else {
            videos = await sql`select * from videos`
        }
        
        return videos
    }

    async create(video) {  
        const videoId = randomUUID()
        const { title, description, link, thumbnail, duration } = video

        await sql`insert into videos (id, title, description, link, thumbnail, duration) VALUES (${videoId}, ${title}, ${description}, ${link}, ${thumbnail}, ${duration})`       
    }

    async update(id, video) {
        const { title, description, link, thumbnail, duration } = video

        await sql`update videos set title = ${title}, description = ${description}, link = ${link}, thumbnail = ${thumbnail}, duration = ${duration} WHERE id = ${id}`

    }

    async delete(id) {
        await sql`delete from videos where id = ${id}`

    }


}