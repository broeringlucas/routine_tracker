const error = async (err, req, res, next) => {
  console.log(err) 
  return res.status(500).json({ msg: 'Error, start again' })
}

module.exports = error