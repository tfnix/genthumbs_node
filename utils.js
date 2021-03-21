const axios = require('axios');
const path = require('path');
const fs = require('fs')
const sharp = require('sharp');



const message = () =>  {
  console.log('Downloading and resizng images')
}


module.exports = {

  rszImags: async (URL) => {
      
      const dir = './download'

      if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
      }    


      response = await axios.get(URL)
      response.data.forEach(async image => {      
        const fileName = path.basename(image.download_url);       
        response = await axios.get(image.download_url, {responseType: "arraybuffer"} ) 
        sharp(response.data).resize({ width: 200, height: 199 }).toFormat('jpeg').jpeg({ quality: 76 }).toFile(dir + '/' + fileName  + '.jpg') 
      })
    },  
    
  message: message

};

