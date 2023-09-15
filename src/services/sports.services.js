import { conflictError } from "../errors/conflict";
import { notFoundError } from "../errors/notFound";
import sportRepositories from "../repositories/sports.repositories";

async function create (name){
    const sport = await sportRepositories.verifySport(name);
    if (sport === 1) throw conflictError(name)

    return await sportRepositories.create(name);
}

async function read (){
    const sports = await sportRepositories.read();

    if (sports.length === 0) throw notFoundError("Nenhum esporte foi cadastrado")

    return sports;
}

const sportsServices = {
    create,
    read
}

export default sportsServices;