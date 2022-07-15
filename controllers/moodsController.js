import Mood from '../models/Mood.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from '../errors/index.js'

const createMood = async (req, res) => {
    const { type , date } = req.body

    if (!type || ! date) {
        throw new BadRequestError('Please provide all values')
    }
    req.body.createdBy = req.user.userId
    const mood = await Mood.create(req.body)

    res.status(StatusCodes.CREATED).json({ mood })
}

const deleteMood = async (req, res) => {
    res.send('delete mood')
}
const getAllMoods = async (req, res) => {
    res.send('get all moods')
}
const updateMood = async (req, res) => {
    res.send('update a mood')
}
const showStats = async (req, res) => {
    res.send('show stats')
}

export { createMood, deleteMood, getAllMoods, updateMood, showStats }