### Gerando thumbnails com Nodejs


*Exemplo Basico de geracao de thumbails com Node e Sharpjs*


```
const axios = require('axios');
const path = require('path');
const sharp = require('sharp');

```

A funcao rszImags()
```
    rszImags: async (URL) => {

      // Le o endpoint
      response = await axios.get(URL)

      // response é um array com o endereco(url) das images
      response.data.forEach(async image => {        
            
        // Le a imagem proprimante e salva em um buffer. Isso evita salvar localmente  - com fs.write
        response = await axios.get(image.download_url, {responseType: "arraybuffer"} ) 

        // Redimensiona 
        sharp(response.data).resize({ width: 200, height: 199 }).toFormat('jpeg').jpeg({ quality: 76 }).toFile('download/' + fileName )  

      })

```
<br>
Aqui o resultado da compressao
<br><br>

```
/download$ !ls

ls 34* -lh
-rw-r--r-- 1 usr group  27K Mar 21 09:05 3456
-rw-r--r-- 1 usr group 5.6K Mar 21 09:04 3456.jpg


```
<br>

Sharpjs é bem performatica. Uns resultados podem ser vistos aqui<br>
https://sharp.pixelplumbing.com/performance
<br>


**Referencias:**<br>
https://sharp.pixelplumbing.com/api-output<br>

Vlw.






