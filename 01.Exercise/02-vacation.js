function calculate (groupOfPeople, typeOfGroup, dayOfWeek) {

    const isFriday = dayOfWeek === "Friday";
    const isSaturday = dayOfWeek === "Saturday";
    const isSunday = dayOfWeek === "Sunday";

    const isStudentsGroup = typeOfGroup === "Students";
    const isBusinessGroup = typeOfGroup === "Business";
    const isRegularGroup = typeOfGroup === "Regular";

    let priceForSinglePerson = 0;

    if (isFriday) {
        if (isStudentsGroup) {
            priceForSinglePerson += 8.45;
        } else if (isBusinessGroup) {
            priceForSinglePerson += 10.90;
        } else if (isRegularGroup) {
            priceForSinglePerson += 15;
        }
    } else if (isSaturday) {
        if (isStudentsGroup) {
            priceForSinglePerson += 9.80;
        } else if (isBusinessGroup) {
            priceForSinglePerson += 15.60;
        } else if (isRegularGroup) {
            priceForSinglePerson += 20;
        }
    } else if (isSunday) {
        if (isStudentsGroup) {
            priceForSinglePerson += 10.46;
        } else if (isBusinessGroup) {
            priceForSinglePerson += 16;
        } else if (isRegularGroup) {
            priceForSinglePerson += 22.50;
        }
    }

    const totalSumWithoutDiscount = groupOfPeople * priceForSinglePerson;    

    const totalSumWithDiscount =
     isStudentsGroup && groupOfPeople >= 30
      ? totalSumWithoutDiscount * 0.85
      : isBusinessGroup && groupOfPeople >= 100
      ? (groupOfPeople - 10) * priceForSinglePerson
      : isRegularGroup && groupOfPeople >= 10 && groupOfPeople <= 20
      ? totalSumWithoutDiscount * 0.95
      : totalSumWithoutDiscount;

    
    console.log(`Total price: ${totalSumWithDiscount.toFixed(2)}`);
}