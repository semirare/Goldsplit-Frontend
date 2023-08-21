export const timeToSeconds = (time) => {
    //accepts a string in the format HH:mm:ss.SSS or mm:ss.SSS and returns as just ss:SSS
    time = time.split(':')
    if (time.length === 2) {
        return +time[0] * 60 + +time[1];
    }
    else {
        return +time[0] * 3600 + +time[1] * 60 + +time[2]; 
    }
};

export const msToTime = (ms) => {
    if (ms < 10) {
        return '00.00';
    }
    var milliseconds = parseInt(ms % 1000),
        seconds = parseInt((ms / 1000) % 60),
        minutes = parseInt((ms / (1000 * 60)) % 60),
        hours = parseInt((ms / (1000 * 60 * 60)) % 24);

    // if milliseconds in < 10 pad with a trailing 0
    milliseconds = (milliseconds < 10) ? milliseconds + "0" : milliseconds
    if (milliseconds >= 100) {
        //if milliseconds is > 100 round it to the nearest 10
        milliseconds = Math.round(milliseconds / 10) * 10;
        if (milliseconds === 1000) {
            //if rounding to the nearest 10 brought us to 1000, add a second
            //and set milliseconds to 00
            seconds += 1;
            milliseconds = "00";
        }
        else {
            //if rounding did not bring us to 1000, keep just the first 2 chars
            milliseconds = milliseconds.toString().slice(0, 2);
        }
    }

    if (hours > 0) {
        //pad minutes and seconds with leading 0 if less than 10
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }
    else if (minutes > 0) {
        //pad seconds with leading 0 if less than 10
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        return `${minutes}:${seconds}.${milliseconds}`;
    }
    else {
        return `${seconds}.${milliseconds}`;
    }
}