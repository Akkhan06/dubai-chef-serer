const express = require('express')
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3000;

const card = require("./data/card.json")
const detailsData = require("./data/details.json")

