import httpStatus from "http-status";
import betsServices from "../services/bets.services.js";
import { incompleteDataError } from "../errors/incompleteData.js";

async function create (req, res) {

    const { houseId, sportId, value, returnValue, description } = req.body;

    if (!houseId || !sportId || !value || !returnValue || !description) throw incompleteDataError();

    await betsServices.create(houseId, sportId, value, returnValue, description);

    res.sendStatus(httpStatus.CREATED);
}

async function read (req, res) {

    const bets = await betsServices.read();

    res.status(httpStatus.OK).send(bets);
}

async function findByHouse (req, res) {

    const { id } = req.params;

    const bets = await betsServices.findByHouse(id);

    res.status(httpStatus.OK).send(bets);
}

async function findBySport (req, res) {

    const { id } = req.params;

    const bets = await betsServices.findBySport(id);

    res.status(httpStatus.OK).send(bets);
}

async function findById(req, res) {

    const { id } = req.params;

    const bet = await betsServices.findById(id);

    res.status(httpStatus.OK).send(bet)
}

async function update (req, res) {

    const { houseId, sportId, value, returnValue, description } = req.body;
    const { id } = req.params;

    if (!houseId || !sportId || !value || !returnValue || !description) throw incompleteDataError();

    await betsServices.update(houseId, sportId, value, returnValue, description, id);

    res.sendStatus(httpStatus.OK)
}

async function deleteBet (req, res) {

    const { id } = req.params;

    await betsServices.deleteBet(id);

    res.sendStatus(httpStatus.OK)
}

const betsControllers = {
    create,
    read,
    findByHouse,
    findBySport,
    findById,
    update,
    deleteBet
}

export default betsControllers;