import { notFoundError } from "../errors/notFound.js";
import betsRepositories from "../repositories/bets.repositories.js";

async function create (houseId, sportId, value, returnValue, description) {
    return await betsRepositories.create(houseId, sportId, value, returnValue, description);
}

async function read () {
    const bets = await betsRepositories.read();
    return bets;
}

async function findByHouse (houseId) {
    const bets = await betsRepositories.findByHouse(houseId);

    if (bets.length === 0) throw notFoundError("Sem apostas nessa casa");

    return bets;
}

async function findBySport (sportId) {
    const bets = await betsRepositories.findBySport(sportId);

    if (bets.length === 0) throw notFoundError("Sem apostas nesse esporte");

    return bets;
}

async function findById(id) {
    const bet = await betsRepositories.findById(id);

    if (!bet) throw notFoundError("Aposta não encontrada");

    return bet;
}

async function update (houseId, sportId, value, returnValue, description, id) {
    return await betsRepositories.update(houseId, sportId, value, returnValue, description, id);
}

async function deleteBet (id) {
    return await betsRepositories.deleteBet(id);
}

const betsServices = {
    create,
    read,
    findByHouse,
    findBySport,
    findById,
    update,
    deleteBet
}

export default betsServices;