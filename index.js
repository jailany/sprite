const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./source/client/components/Home/Home').default;
const template = require('./source/template/base').default;
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    const content = renderToString(<Home/>);
    const html = template(content);
    res.send(html);
});

app.listen(3000, () => {
    console.log("listening to the requests at port 3000.");
});
