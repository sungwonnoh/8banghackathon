const fs = require('fs');

const filePath = 'TEXT.txt';
let newContent = 'a';
fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
        console.error('파일을 읽을 수 없습니다:', err);
        return;
    }
    let arr = data.split('-_-_-\n')
    let input ="1.";
    let i
    for(i=0;i<arr.length;i++){
        if (arr[i] === `${input}`){
            let = before_sen = arr.slice(0,i+1);
            let = after_sen = arr.slice(i+2,arr.length);
            let = call_sen = "1"
            let arr1 = []
            arr1[0] = before_sen.join("-_-_-\n")
            arr1[1] = call_sen
            arr1[2] = after_sen.join("-_-_-\n")
            newContent = arr1.join("-_-_-\n")
        }
    }
    console.log(newContent)
    fs.writeFile(filePath, newContent, function (err) {
      if (err) {
        console.error('파일을 쓸 수 없습니다:', err);
        return;
      }
    });
});



