const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const conn = require("./config.js");
const userRouter = require("./routes/Users.js");
const app = express();

app.use('/api/user', userRouter);
app.use(express.json());
app.use(cors());

dotenv.config();
const port = process.env.PORT;
conn.connect((err) => {
    if (err)
        console.log("Error in connection..." + err);
    else
        app.listen(port, () => {
            console.log(`Server is running st port ${port}.`);
        });
});
