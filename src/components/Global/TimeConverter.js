var moment = require("moment-jalaali");

export function contractDatepickerToServer(date) {
    return date.slice(0, -3);
}

export function serverTimeToDatepickerWithoutTime (time) {
    let shamsi = moment(time, 'YYYY-MM-DD HH:mm:ss').format('jYYYY/jMM/jDD')
    return shamsi;
}

export function serverTimeToDatepickerWithTime (time) {
    let shamsi = moment(time, 'YYYY-MM-DD HH:mm:ss').format('jYYYY/jMM/jDD HH:mm:ss')
    return shamsi;
}

export function serverTimeToJalaliOnlyYear (time) {
    let shamsi = moment(time, 'YYYY-MM-DD HH:mm:ss').format('jYYYY')
    return shamsi;
}
export function getNowToServer(){
    let day=new Date().getDate();
    let month=new Date().getMonth()+1;
    let year=new Date().getFullYear();
    let time=year+"-"+month+"-"+day;
    // let coverted = moment(time, 'YYYY-MM-DD').format('YYYY/MM/DD')
    return time;
}
