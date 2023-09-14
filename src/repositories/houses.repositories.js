import { db } from "../database/database.connection";

async function verifyHouse(name){
    const house = await db.query(`SELECT * FROM houses WHERE name=$1;`, [name]);

    return house.rowCount
}

async function create(name){
    await db.query(`INSERT INTO houses (name) VALUES ($1);`, [name]);
}

async function read(){
    const houses = await db.query(`SELECT * FROM houses`);
    return houses.rows
}

const housesRepositories = {
    verifyHouse,
    create,
    read
}

export default housesRepositories;