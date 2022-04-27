const createMood = async (req, res) => {
    res.send('create a mood')
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