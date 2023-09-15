import { db } from "../database/database.connection.js";

async function create (houseId, sportId, value, returnValue, description) {
    return await db.query(`
        INSERT INTO
            bets
            ("houseId", "sportId", value, "returnValue", description)
        VALUES
            ($1, $2, $3, $4, $5)
    ;`, [houseId, sportId, value, returnValue, description]);
}

async function read () {
    const bets = await db.query(`SELECT * FROM bets;`);
    return bets.rows;
}

async function findByHouse (houseId) {
    const bets = await db.query(`SELECT * FROM bets WHERE "houseId"=$1;`, [houseId]);
    return bets.rows;
}

async function findBySport (sportId) {
    const bets = await db.query(`SELECT * FROM bets WHERE "sportId"=$1;`, [sportId]);
    return bets.rows;
}

async function findById (id) {
    const bet = await db.query(`SELECT * FROM bets WHERE id=$1;`, [id])
    return bet.rows[0];
}

async function update (houseId, sportId, value, returnValue, description, id) {
    await db.query(`
        UPDATE bets
        SET
            houseId=$1,
            sportId=$2,
            value=$3,
            returnValue=$4,
            description=$5
        WHERE id=$6
    ;`, [houseId, sportId, value, returnValue, description, id]);
}

async function deleteBet (id) {
    return await db.query(`DELETE FROM bets WHERE id=$1;`, [id]);
}

const betsRepositories = {
    create,
    read,
    findByHouse,
    findBySport,
    findById,
    update,
    deleteBet
}

export default betsRepositories;