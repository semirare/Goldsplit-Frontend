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