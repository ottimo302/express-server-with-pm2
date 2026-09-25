const express = require('express');

const app = express();

app.get('/', async function (req, res) {
  res.send('Hola!');
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
