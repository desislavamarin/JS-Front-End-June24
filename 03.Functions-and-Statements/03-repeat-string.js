function repeatString(string, count) {

    let output = "";
    while (count > 0) {
        output += string;
        count--;
    }

    console.log(output);
}