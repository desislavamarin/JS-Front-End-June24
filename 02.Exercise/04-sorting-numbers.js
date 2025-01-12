function sortingNumbers(arr) {

    const sortedArr = arr.sort((a,b) => a - b);
    const outputArr = new Array(sortedArr.length).fill(0).map((initValue, index) => {
        const isEven = index % 2 === 0;
        const smallNumberIndex = index / 2;
        const bigNumberIndex = sortedArr.length - Math.ceil(index / 2);

        return isEven ? sortedArr[smallNumberIndex] : sortedArr[bigNumberIndex];
    });

    return (outputArr);
}