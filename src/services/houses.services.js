import housesRepositories from "../repositories/houses.repositories"

async function create (name){
    const house = await housesRepositories.verifyHouse(name);

    if (house === 1) return //COLOCAR ERRO AKI

    return housesRepositories.create(name)
}

async function read () {
    return await housesRepositories.read()
}

const housesServices = {
    create,
    read
}

export default housesServices