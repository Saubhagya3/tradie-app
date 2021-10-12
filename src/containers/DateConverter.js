const months = ["January", "February", "March","April", "May", "June", "July", "August", "Septemper", "October", "November", "December"];

const FormattedDate = (date) => {
    let d = new Date(date),
        day = '' + d.getDate(),
        month = '' + months[(d.getMonth())],
        hour = '' + d.getHours(),
        minute = '' + d.getMinutes();
    
    if (month.length < 2) {
        month = '0' + month
    }

    if (day.length < 2) {
        day = '0' + day
    }

    if (hour.length < 2) {
        hour = '0' + hour
    }

    if (minute.length < 2) {
        minute = '0' + minute
    }

    if (hour > 12) {
        hour = hour - 12
        minute = minute + " pm"
    }else if(hour < 12){
        minute = minute + " am"
    }

    return (month + " " + day + " @ " + hour + ":" + minute);
}

export default FormattedDate
