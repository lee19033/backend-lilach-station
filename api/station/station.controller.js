import { logger } from '../../services/logger.service.js'
import { stationService } from './station.service.js'


export async function getStations(req, res) {
	try {
		const filterBy = {
			txt: req.query.txt || '',
		}
		const stations = await stationService.query(filterBy)
		res.json(stations)
	} catch (err) {
		logger.error('Failed to get stations', err)
		res.status(400).send({ err: 'Failed to get stations' })
	}
}


export async function getStationById(req, res) {
	try {
		const stationId = req.params.id
		const station = await stationService.getById(stationId)
		res.json(station)
	} catch (err) {
		logger.error('Failed to get station', err)
		res.status(400).send({ err: 'Failed to get station' })
	}
}


export async function addStation(req, res) {
	const { loggedinUser, body: station } = req


	try {
		//car.owner = loggedinUser
		const addedStation = await stationService.add(station)
		res.json(addedStation)
	} catch (err) {
		logger.error('Failed to add station', err)
		res.status(400).send({ err: 'Failed to add station' })
	}
}


export async function updateStation(req, res) {
	const { loggedinUser, body: station } = req
    //const { _id: userId, isAdmin } = loggedinUser


    /*if(!isAdmin && car.owner._id !== userId) {
        res.status(403).send('Not your car...')
        return
    }*/


	try {
		const updatedStation = await stationService.update(station)
		res.json(updatedStation)
	} catch (err) {
		logger.error('Failed to update station', err)
		res.status(400).send({ err: 'Failed to update station' })
	}
}

/*
export async function removeCar(req, res) {
	try {
		const carId = req.params.id
		const removedId = await carService.remove(carId)


		res.send(removedId)
	} catch (err) {
		logger.error('Failed to remove car', err)
		res.status(400).send({ err: 'Failed to remove car' })
	}
}


export async function addCarMsg(req, res) {
	const { loggedinUser } = req


	try {
		const carId = req.params.id
		const msg = {
			txt: req.body.txt,
			by: loggedinUser,
		}
		const savedMsg = await carService.addCarMsg(carId, msg)
		res.json(savedMsg)
	} catch (err) {
		logger.error('Failed to update car', err)
		res.status(400).send({ err: 'Failed to update car' })
	}
}


export async function removeCarMsg(req, res) {
	try {
		const { id: carId, msgId } = req.params


		const removedId = await carService.removeCarMsg(carId, msgId)
		res.send(removedId)
	} catch (err) {
		logger.error('Failed to remove car msg', err)
		res.status(400).send({ err: 'Failed to remove car msg' })
	}
}*/
