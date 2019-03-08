const jwt = require('jsonwebtoken');
const axios = require('axios');

// Admin API key goes here
const key = 'YOUR_ADMIN_API_KEY';

// Split the key into ID and SECRET
const [id, secret] = key.split(':');

// Create the token (including decoding secret)
const token = jwt.sign({}, Buffer.from(secret, 'hex'), {
    keyid: id,
    algorithm: 'HS256',
    expiresIn: '5m',
    audience: `/v2/admin/`
});

// Make an authenticated request
const url = 'http://localhost:2368/ghost/api/v2/admin/posts/?limit=1';
const headers = { Authorization: `Ghost ${token}` };
axios.get(url, { headers })
    .then(response => console.log(response))
    .catch(error => console.error(error));
