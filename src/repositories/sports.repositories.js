import { db } from "../database/database.connection"

async function verifySport (name) {
    const sports = await db.query(`SELECT * FROM sports WHERE name=$1;`, [name]);
    return sports.rowCount;
}

async function create (name) {
    return await db.query(`INSERT INTO sports (name) VALUES ($1);`, [name]);
}

async function read () {
    const sports = await db.query(`SELECT * FROM sports`);
    return sports.rows;
}

const sportRepositories = {
    verifySport,
    create,
    read
}

export default sportRepositories