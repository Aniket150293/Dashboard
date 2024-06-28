const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const users = [
    { username: 'admin', password: 'CrackJack' },
    { username: 'Hrishikesh', password: 'hrishi@rsm' }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        res.json({ success: true, redirectUrl: '/dashboard.html' });
    } else {
        res.json({ success: false });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
