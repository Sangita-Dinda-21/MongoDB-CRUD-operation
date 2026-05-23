const mongoose = require('mongoose');
const Chat = require("./models/chat.js");
main().then(() => {
    console.log("connection successfulll");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchat = [
    {
    from:"sangita",
    to:"ankita",
    msg:"Hi , ankita!!",
    created_at: new Date()
    },
    {
    from:"ankita",
    to:"bindia",
    msg:"you are my best friend",
    created_at: new Date()
    },
    {
    from:"bindia",
    to:"urbashi",
    msg:"dont stop now",
    created_at: new Date()
    },
    {
    from:"sangita",
    to:"urbashi",
    msg:"i am so happy!",
    created_at: new Date()
    },
    {
    from:"sangita",
    to:"bindia",
    msg:"What happen ???",
    created_at: new Date()
    }
];

Chat.insertMany(allchat);