import housesServices from "../services/houses.services"

async function create (req, res){
    const { name } = req.body

    await housesServices.create(name);

    res.sendStatus(201)
}

async function read (req, res){
    const houses = await housesServices.read();

    res.send(houses)
}

const housesControllers = {
    create,
    read
}

export default housesControllers;