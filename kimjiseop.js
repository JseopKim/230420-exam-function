function exampleOne(first, second, dataType) {
  if(typeof(first) !== dataType && typeof(second) !== dataType) {
    return new Error(`매개변수 first와 second는 모두 ${dataType}타입이어야 합니다.`);
  }
}

function arrayLengthEven(array) {
  if(array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isExampleTwo(first, second) {
  // exampleOne합수를 호출하여 타입검사를 따로 합니다.
  // 타입검사에 실패하면 에러를 발생시켜 함수를 실행하지 않도록 합니다.
  exampleOne(first, second);

  let booleanResult;

  if(first < second) {
    booleanResult = true;
  } else {
    booleanResult - false;
  }

  if(typeof(booleanResult) === 'boolean') {
    return booleanResult;
  } else {
    return new Error('조건식이 boolean이 아니어서 return하지 못했습니다.');
  }
}

let basicData = [4, 6, 23, 5, 94, 35, 44, 66];

function exampleThree(array, functionOne, functionTwo) {
  //매개변수로 들어오는 함수 두 개는 모두 데이터타입이 함수여야 한다.
  //매개변수로 들어오는 array의 모든 원소는 숫자여야 한다.
  //매개변수 array의 배열 길이는 짝수여야 한다. 홀수라면 10을 추가하여 짝수로 만든다. --> arrayLengthEven();
  exampleOne(functionOne, functionTwo, 'function');
  for(i in basicData) {
    if(typeof(basicData[i]) !== 'number') {
      return new Error('원소 중 숫자가 아닌 값이 있습니다.')
    }
  }

  if(arrayLengthEven(array) === false) {
    array.push(10);
  }
  
  let arrayResult = [];
  //매개변수 array는 배열의 순서 한 쌍의 값의 크기를 비교하여 
  //비교한 작은 값은 arrayResult의 원소배열의 0번째
  //큰 값은 arrayResult의 원소배열의 1번째에 넣어준다. --> isexampleTwo()
    for(let i = 0; i < (array.length / 2); i++) {
      if(isExampleTwo(array[i * 2], array[(i * 2) + 1]) === true) {
        arrayResult.push([array[i * 2], array[(i * 2) + 1]]);
      } else {
        arrayResult.push([array[(i * 2) + 1], array[i * 2]]);
      }
    }

  return arrayResult;
}

// console.log(basicData);
console.log(exampleThree(basicData, exampleOne, isExampleTwo));

// 생각보다 논리를 요구하는 문제라서 생각을 하면서 재미를 느꼈습니다.
// 조금 더 다듬어야 할 부분이 있으면 피드백 주시면 감사합니다.