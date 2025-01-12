function printLoadingBar (percents) {
    const maxPercents = 100;

    function printLoadedMessage() {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }

    if (percents === maxPercents) {
        printLoadedMessage();
        return;
    }

    function printLoadedMessage (loadedPercents, percentCount, dotCount) {
        const loadingState = `${"%".repeat(percentCount)}${".".repeat(dotCount)}`;
        console.log(`${loadedPercents}% [${loadingState}]`);
        console.log("Still loading...");
    }
    
    const maxSymbols = 10;
    const percentSymbolCount = parseInt(maxPercents * (percents * 0.001));
    const dotsSymbolCount = maxSymbols - percentSymbolCount;

    printLoadedMessage(percents, percentSymbolCount, dotsSymbolCount);
}

printLoadingBar(50);