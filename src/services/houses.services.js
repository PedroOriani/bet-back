import { conflictError } from "../errors/conflict";
import { notFoundError } from "../errors/notFound";
import housesRepositories from "../repositories/houses.repositories"

async function create (name){
    const house = await housesRepositories.verifyHouse(name);

    if (house === 1) throw conflictError(name)

    return housesRepositories.create(name)
}

async function read () {
    const houses = await housesRepositories.read();

    if (houses.length === 0) throw notFoundError("Não existe nenhuma casa cadastrada");

    return houses;
}

const housesServices = {
    create,
    read
}

export default housesServices