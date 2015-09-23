import Ember from 'ember';
export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('contraction');
}
});
// var intervaltimes = "";
// var timelapsed = 0;
// var stopBit = 1;
// var min = 0;
// var sec = 0;

// function reset()
// {
//     intervaltimes = "";
//     timelapsed = 0;
//     stopBit = 1;
//     min = 0;
//     sec = 0;
//     document.getElementById("theButton").innerHTML = "Contraction Ended (start)";
//     document.getElementById("timer").innerHTML = "";
//     document.getElementById("timesLogged").innerHTML = "";
//      document.getElementById("decision").innerHTML = "";
// }

// function theButton()
// {
//     //stop
//     if(stopBit == 0)
//     {
//         stopBit = 1;
//         intervaltimes = intervaltimes + timelapsed + ",";

//         document.getElementById("theButton").innerHTML = "Contraction Ended (start)";
//       timelapsed = 0;
//         checkInterval();
//     }
//     //start
//     else
//     {
//         stopBit = 0;
//         document.getElementById("theButton").innerHTML = "Contraction Began (stop)";
//       go();
//     }
// }
// function go()
// {
//     if (stopBit == 0)
//     {
//         timelapsed = timelapsed + 1;

//         min = Math.floor(timelapsed / 60);
//         sec = timelapsed - (min * 60);

//         document.getElementById("timer").innerHTML = "Min: " + min + " Sec: " + sec;
//         min = 0;
//         sec = 0;
//     }
// }
// function checkInterval()
// {
//     var intervaltimesArray = intervaltimes.split(",");
//     var threshHold = 0;

//     var compareTime = 0;
//     var timesBetween = "";
//     var timesBetweenArray;

//     var hospital = "yes";

//     for (i = 0; i < intervaltimesArray.length; i++)
//     {
//         if(intervaltimesArray[i] != "")
//         {
//             if(compareTime == 0)
//             {
//                 compareTime = intervaltimesArray[i];
//             }
//             else
//             {
//                 timesBetween = timesBetween + "" + Math.abs(compareTime - intervaltimesArray[i]) + ",";

//                 compareTime = intervaltimesArray[i];
//                 threshHold = threshHold + 1;
//             }
//         }
//     }

//     timesBetweenArray = timesBetween.split(",");
//     if(threshHold > 0)
//     {
//       document.getElementById("timesLogged").innerHTML = "Times Logged Between Contractions:";
//     }
//     for (x = 0; x < timesBetweenArray.length; x++)
//     {
//         if(timesBetweenArray[x] != "")
//         {
//             min = Math.floor(timesBetweenArray[x] / 60);
//             sec = timesBetweenArray[x] - (min * 60);
//             document.getElementById("timesLogged").innerHTML = document.getElementById("timesLogged").innerHTML + "<BR />" + "Min: " + min + " Sec: " + sec;
//             if(min >= 5)
//             {
//                 hospital = "no";
//             }
//             min = 0;
//             sec = 0;
//         }
//     }

//     if(threshHold >= 3)
//     {
//         if(hospital == "no")
//         {
//             document.getElementById("decision").innerHTML = "Don't go to the hospital yet";
//         }
//         else
//         {
//             document.getElementById("decision").innerHTML = "Go to the hospital";
//         }
//     }
//     if(hospital == "no")
//     {
//         document.getElementById("decision").innerHTML = "Don't go to the hospital yet";
//     }

// }

// window.setInterval(go, 1000);

