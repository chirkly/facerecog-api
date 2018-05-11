const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: 'e2fcc7fee949496a9f29dcff626b977b'
});

const handleApiCall = (req, res) => {
	app.models
	.predict(Clarifai.FACE_DETECT_MODEL,req.body.input)
	.then(data => {
		res.json(data);
	})
	.catch(err => res/status(400).json('unable to work with api'))
}

module.exports = {
	handleApiCall
}