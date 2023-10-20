import db from './connectDb.js'

const coll = db.collection('pets')

export function getAllPets(req, res){
    coll.get()
    .then(collection =>{
        const pets = collection.docs.map(doc =>({ id: doc.id, ...doc.data }))
        res.send(pets)
    })
    .catch(err => res.status(500).send ({ message: err.message }))
}

export function addPet(req, res){
    const newPet = req.body
    coll.add(newPet)
    .then(() => res.status(201).send({ message: "Success" }))
    .catch(err => res.status(500).send({ message: err.message}))
}