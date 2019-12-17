const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server', //docker-compose's service name
    port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits ' + visits);
        client.set(visits, parseInt(visits) + 1);
    })
})

App.listen(8081, () => {
    console.log("listening 8081");
})