
const axios = require('axios');
const {rszImags, message} = require('./utils.js');


URL='https://picsum.photos/v2/list?page=2&limit=22'

message();
rszImags(URL)

    