async function create () {
    const { name } = req.body;

    await sportsControllers.create(name);

    res.sendStatus(201);
}

async function read () {
    const sports = await sportsControllers.read();
    
    res.send(sports);
}

const sportsControllers = {
    create,
    read
}

export default sportsControllers;