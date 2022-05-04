const mongoose = require('mongoose');

mongoose
	.connect('mongodb+srv://DODO26:azerty06@cluster0.6hn51.mongodb.net/test', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('Connected to mongoDB !'))
	.catch((err) => console.log('Failed to connect to mongoDB !', err));
