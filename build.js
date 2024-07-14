const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,

});

rl.question('Ingrese el nombre del archivo que quiere crear: ', (name) => {

  const layout = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${name}</title>
<link rel="stylesheet" href="../style.css"
</head>
<header><a href="../index.html">I only know that I don't know anything</a></header>
<body>
<div class="cont">
<h1>${name}</h1>
<span>fecha actual</span>
</div>



</body>
</html>`

  fs.writeFile(`posts/${name}.html`, layout,  (error) => {
    if (error) {
      throw error;
    }

    console.log(`El archivo ${name} ha sido creado!!`);
  });
  
  rl.close();
});

