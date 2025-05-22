import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS videos`.then (() =>{
//     console.log('Tabela apagada!')
// })

sql`
    CREATE TABLE videos (
    id          TEXT PRIMARY KEY,
    title       TEXT,
    description TEXT,
    link        VARCHAR(255),
    thumbnail   VARCHAR(255),
    duration    INTEGER
    );
`.then(() => {
    console.log('Tabela criada!')
})