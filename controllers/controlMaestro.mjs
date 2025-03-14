async function getAll(req,res) {
    return res.status(200).json({"state":true,"data":null})
}

async function getById(req,res) {
    const { id } = req.params
    return res.status(200).json({"state":true,"data":id})
}

async function save(req,res) {
    const {id,name,age} = req.body

try {
    return res.status(200).json({"state":true,"data":{"id":id,"name":name,"age":age}})
}
catch (err) {
    return res.status(500).json({"state":false,"data":"Error al guardar"})
}
}

async function create(req,res) {
    const { id } = req.params
    const { name, age } = req.body
    return res.status(200).json({"state":true,"data":{"id":id,"name":name,"age":age}})
}

export { getAll, getById , save, create }