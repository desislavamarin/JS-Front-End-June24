function roadRadar(speed, area) {

    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;

    let difference;
    let status;

    switch (area) {
        case "motorway":

            if (speed > motorwayLimit) {
                difference = speed - motorwayLimit;
                if (difference <= 20) {
                    status = "speeding";
                } else if (difference <= 40) {
                    status = "excessive speeding";
                } else {
                    status = "reckless driving";
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
            }

            break;
        case "interstate":

            if (speed > interstateLimit) {
                difference = speed - interstateLimit;
                if (difference <= 20) {
                    status = "speeding";
                } else if (difference <= 40) {
                    status = "excessive speeding";
                } else {
                    status = "reckless driving";
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
            }

            break;
        case "residential":

            if (speed > residentialLimit) {
                difference = speed - residentialLimit;
                if (difference <= 20) {
                    status = "speeding";
                } else if (difference <= 40) {
                    status = "excessive speeding";
                } else {
                    status = "reckless driving";
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
            }

            break;
        case "city":

            if (speed > cityLimit) {
                difference = speed - cityLimit;
                if (difference <= 20) {
                    status = "speeding";
                } else if (difference <= 40) {
                    status = "excessive speeding";
                } else {
                    status = "reckless driving";
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
            }

            break;
    }
}