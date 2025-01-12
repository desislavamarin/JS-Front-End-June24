function arrayRotation (inputArr, rotations) {
    const actualRotation = rotations % inputArr.length;
    
    const leftSide = inputArr.slice(0, actualRotation);
    const rightSide = inputArr.slice(actualRotation);
    const resultArr = rightSide.concat(leftSide);

    console.log(resultArr.join(" "));
}