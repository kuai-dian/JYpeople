module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Category = require('../../models/Category')
    const Item = require('../../models/Item')
    const System = require('../../models/System')
    const config = require('../../plugins/config')

    router.post('/', async (req, res) => {
        console.log(req.body)
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    router.delete('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            'success': true
        })
    })
    router.get('/', async (req, res) => {
        const queryOptions = {}
        if (req.Model.modelName == 'Category') {
            queryOptions.populate = 'parent'
        }
        const model = await req.Model.find().setOptions(queryOptions).limit(10)
        res.send(model)
    })
    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })
    app.use('/admin/api/rest/:resource', async (req, res, next) => {
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)
        next()
    }, router)

    const MAO = require('multer-aliyun-oss');
    const multer = require('multer')
    const upload = multer({
        // dest: __dirname + '/../../uploads'
        storage: MAO({
            config: config.oss
        })
    })
    app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
        req.file.url = `${config.ossUrl}/${req.file.filename}`
        res.send(req.file)
    })
}