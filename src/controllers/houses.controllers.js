import httpStatus from "http-status";
import housesServices from "../services/houses.services"

async function create (req, res){
    const { name } = req.body

    await housesServices.create(name);

    res.sendStatus(httpStatus.CREATED);
}

async function read (req, res){
    const houses = await housesServices.read();

    res.status(httpStatus.OK).send(houses)
}

const housesControllers = {
    create,
    read
}

export default housesControllers;