const fs = require('fs')

fs.open('data1.txt', 'a+', (err, fd) => {
    console.log(fd);
  //fd is our file descriptor
})