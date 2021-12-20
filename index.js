function shout(string) {
    return string.toUpperCase();
  }

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    const isLowercase = string.toLowerCase();
    const isUppercase = string.toUpperCase();
    const dinner = "Let's have dinner together!";

    if (string === isLowercase) {
        return "I can't hear you!"
    } else if (string === isUppercase) {
        return "YES INDEED!"
    } else if (string === dinner) {
        return "I would love to!"
    }
}