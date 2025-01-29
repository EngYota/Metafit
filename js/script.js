function startCounting(elementId, start = 1, end = 1000, interval = 1000) {
    let current = start;

    const counterElement = document.getElementById(elementId);

    const intervalId = setInterval(() => {
        counterElement.textContent =  " +" + current ;
        if (current >= end) {
            clearInterval(intervalId);
        } else {
            current++;
        }
    }, interval);
}

// Call the function for the four counters
startCounting('counter1', 1, 23, 30);
startCounting('counter2', 1, 15, 30);
startCounting('counter3', 1, 117, 10);
startCounting('counter4', 1, 328, 10);
