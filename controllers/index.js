const {v4 : uuidv4} = require('uuid')
const url = require('../model')
const user = require('../model/user')
const shortId = require('shortid')

async function getAll(req,res){
    const urls = await url.find({})
    res.json(urls)
}
async function getUrl(req,res){
    const entry = await url.findOneAndUpdate({short : req.params.url},{$push : {history : Date.now()}})
    res.redirect(entry.original)
}
async function getAnalytics(req,res){
    const result = await url.findOne({short : req.params.url})
    res.json({
        clicked : result.history.length,
        time : result.history
    })
}
async function createNew(req,res){
    const result = await url.create({
        short : shortId(),
        original : req.body.url,
        history : [],   
        name : req.body.name
    })
    res.json(result)
}

async function getS(req,res){
    res.render('index')
}
async function createUser(req,res){
    const {name, email, password} = req.body
    await user.create({
        name,
        email,
        password
    })
    res.render('index')
}
async function getSign(req,res){
    res.render('sign')
}
async function login(req,res){
    res.render('login')
}
async function authenticate(req,res){
    const {email, password} = req.body
    const person = await user.findOne({
        email,
        password
    })
    console.log(person)
    if(!person)
        res.redirect('/user/sign')
    else res.redirect('/home')
}

module.exports = {
    getAll,
    getUrl,
    getAnalytics,
    createNew,
    getS,
    getSign,
    createUser,
    login,
    authenticate,
}