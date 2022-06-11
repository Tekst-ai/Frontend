import moment from "moment";
import 'moment/locale/nl-be';

export const last7Days = () => {
    var result = [];
    for (var i=0; i<7; i++) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        moment().locale('nl-be')
        const formattedDate = moment(d).format('D MMMM');
        result.push(formattedDate);
    }

    return result;
}

export const FormatDate = (date: string) => {
    moment().locale('nl-be')
    const formattedDate = moment(date).fromNow();
    return formattedDate;
}