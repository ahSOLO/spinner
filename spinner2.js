const spinner = function(seconds) {
  const spinnerArr = ['|', '/', '-', '\\',]
  let spinTime = 200;
  let interval = 0;
  
  const intervalReturn = setInterval(() => {
    process.stdout.write("\r" + spinnerArr[++interval % 4]);
  }, spinTime);
  
  setTimeout(() => clearInterval(intervalReturn), seconds * 1000);
}

spinner(4);