import sportRepositories from "../repositories/sports.repositories";

async function create (name){
    const sport = await sportRepositories.verifySport(name);
    if (sport === 1) return // RETORNAR ERRO DE CONFLICT

    return await sportRepositories.create(name);
}

async function read (){
    const sports = await sportRepositories.read();
    return sports;
}

const sportsServices = {
    create,
    read
}

export default sportsServices;