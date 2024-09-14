import express from 'express'

//import { requireAuth } from '../../middlewares/requireAuth.middleware.js'
import { log } from '../../middlewares/logger.middleware.js'
import { getStations, getStationById, updateStation, addStation } from './station.controller.js'


const router = express.Router()


// We can add a middleware for the entire router:
// router.use(requireAuth)


router.get('/', log, getStations)
router.get('/:id', log, getStationById)
router.post('/', log, addStation)
router.put('/:id', log, updateStation)
//router.delete('/:id', requireAuth, removeCar)
// router.delete('/:id', requireAuth, requireAdmin, removeCar)


/*router.post('/:id/msg', requireAuth, addCarMsg)
router.delete('/:id/msg/:msgId', requireAuth, removeCarMsg)*/


export const stationRoutes = router
