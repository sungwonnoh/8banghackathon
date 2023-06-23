function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = () => {
      reject(reader.error);
    };

    reader.readAsText(file);
  });
}

// 파일 읽기
function READER() {
  return fetch("TEXT.txt") // 파일의 경로 또는 URL을 적절하게 수정해야 합니다.
    .then(response => response.blob())
    .then(blob => {
      const file = new File([blob], "TEXT.txt");

      return readFile(file)
        .then(fileContent => {
          // 파일 내용을 처리하는 로직을 여기에 작성합니다.
          
          return fileContent;
        })
        .catch(error => {
          console.error("파일을 읽는 동안 오류가 발생했습니다:", error);
          throw error;
        });
    })
    .catch(error => {
      console.error("파일을 가져오는 동안 오류가 발생했습니다:", error);
      throw error;
    });
}


console.log(123)

/*

READER()
  .then(fileContent => {
    return fileContent;
  })
  .catch(error => {
    console.error("전체적인 처리 중 오류가 발생했습니다:", error);
  });

*/
