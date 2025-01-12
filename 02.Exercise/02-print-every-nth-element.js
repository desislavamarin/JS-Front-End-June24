function printElement (arr, nNumber) {
    const resultArr = [];
    arr.forEach((element, index) => {
        if (index % nNumber === 0) {
            resultArr.push(element);
        }
    });
    return resultArr;
}