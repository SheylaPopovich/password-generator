var datetime = $("#currentTime"); 
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$("#currentTime").ready(function(){
    update();
    setInterval(update, 1000);
}); 
 
