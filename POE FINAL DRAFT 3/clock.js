"use strict";

const localDateElement = document.querySelector("#local-date");
const localTimeElement = document.querySelector("#local-time");

if (!localDateElement || !localTimeElement) {
    throw new Error("The local date and time display is missing from this page.");
}

const dateFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};
const timeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZoneName: "short"
};
let localDateFormatter = new Intl.DateTimeFormat(undefined, dateFormatOptions);
let localTimeFormatter = new Intl.DateTimeFormat(undefined, timeFormatOptions);
let detectedTimeZone = localDateFormatter.resolvedOptions().timeZone;

function updateLocalClock() {
    const now = new Date();
    const currentTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (currentTimeZone !== detectedTimeZone) {
        detectedTimeZone = currentTimeZone;
        localDateFormatter = new Intl.DateTimeFormat(undefined, dateFormatOptions);
        localTimeFormatter = new Intl.DateTimeFormat(undefined, timeFormatOptions);
    }

    localDateElement.textContent = localDateFormatter.format(now);
    localTimeElement.textContent = localTimeFormatter.format(now);
    localTimeElement.dateTime = now.toISOString();
}

updateLocalClock();
window.setInterval(updateLocalClock, 1000);
window.addEventListener("pageshow", updateLocalClock);
document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
        updateLocalClock();
    }
});
