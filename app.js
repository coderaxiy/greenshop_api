require('dotenv').config();
const http = require('http')
const cors = require('cors')
const { getPlants, addPlant, removePlant, getPlant, checkServer } = require('./controllers/PlantsController')
const { addCategory, getCategories } = require('./controllers/CategoryController')
const Router = require('./middlewares/RouteHandler')
cors({origin: '*'})
const router = new Router()

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }
    router.request(req, res);
})

router.get('/', checkServer)
// \\ GET // \\
router.get('/v1/plants', getPlants)
router.get('/v1/plant/:id', getPlant)
router.get('/v1/categories', getCategories)
// \\ GET // \\

// \\ DELETE // \\
router.delete('/v1/delete/plant/:id', removePlant)
// \\ DELETE // \\

// \\ POST // \\
router.post('/v1/plants', addPlant)
router.post('/v1/category', addCategory)
// \\ POST // \\


server.listen(process.env.NODE_DOCKER_PORT, () => {
    console.log('Server is running')
})

