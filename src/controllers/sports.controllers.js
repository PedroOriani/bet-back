import httpStatus from "http-status";

async function create () {
    const { name } = req.body;

    await sportsControllers.create(name);

    res.sendStatus(httpStatus.CREATED);
}

async function read () {
    const sports = await sportsControllers.read();
    
    res.status(httpStatus.OK).send(sports);
}

const sportsControllers = {
    create,
    read
}

export default sportsControllers;