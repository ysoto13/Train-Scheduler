$(document).ready(function() {
    console.log("ready!")

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCPGm4_0j3pWqbT8uISmIJO4jESE9UL0IQ",
    authDomain: "train-scheduler-c28ae.firebaseapp.com",
    databaseURL: "https://train-scheduler-c28ae.firebaseio.com",
    projectId: "train-scheduler-c28ae",
    storageBucket: "train-scheduler-c28ae.appspot.com",
    messagingSenderId: "841403943147",
    appId: "1:841403943147:web:e8194e720ff3103d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var databse = firebase.database();


var trainNames;
var trainDestinations;
var trainFrequencies;
var firstTrain;
var trainsNextArrival;
var trainsMinutesAway;

$("#add-train").on("click", function (event) {

    event.preventDefault(event);

    trainNames = $("#name-input").val().trim().
    trainDestinations = $("#destination-input").val().trim().
    trainFrequencies = $("#frequency-input").val().trim().
    firstTrain = $("#time-input").val().trim().

    console.log(trainNames);
    console.log(trainDestinations);
    console.log(trainFrequencies);
    console.log(firstTrain);

    database.ref().push({
        dataTrainNames: trainNames,
        dataTrainDestinations: trainDestinations,
        dataTrainFrequencies: trainFrequencies,
        dataFirstTrain: firstTrain,
        dataNextArrival= trainsNextArrival,
        dataMinutesArrival= trainsMinutesAway
    });


    alert("Train Added");

    $("#name-input").text("");
    $("#destination-input").text("");
    $("#frequency-input").text("");
    $("#time-input").text("");

    database.ref().on("child_added", function (databaseData) {

        console.log(databaseData).val()

        var tnName = databaseData.val().dataTrainNames;
        var tnDestinations = databaseData.val().dataTrainDestinations;
        var tnFrequencies = databaseData.val().dataTrainFrequencies;
        var tnFirstTrain = databaseData.val().dataFirstTrain;
        var tnNextArrival = databaseData.val().dataFirstTrain;
        var tnMinutesAway = databaseData.val().dataFirstTrain;


        var frequency = 5;

        var firstTime = "06:00";

        var firstTimeChange = moment(firstTime, "HH:mm").subtract(1, "years");
        console.log(firstTimeChange);

        var TimeCurrently = moment();
        console.log("CURRENT TIME: " + moment(TimeCurrently).format("hh:mm"));

        var differentTime = moment().different(moment(firstTimeChange), "minutes");
        console.log("DIFFERENCE IN TIME: " + differentTime);

        var tmRemainder = differentTime % frequency;
        console.log(tmRemainder);

        var tmMinutesUntilTrain = frequency - tmRemainder;
        console.log("MINUTES UNTIL TRAIN: " + tmMinutesUntilTrain);

        var nextTrain = moment().add(tmMinutesUntilTrain, "minutes");
        console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));



        var tr = $("<tr");
        var tdNames = $("<td>").text(tnName);
        var tdDestinations = $("<td>").text(tnDestinations);
        var tdFrequencies = $("<td>").text(tnFrequencies);
        var tdFirstTrain = $("<td>").text(tnFirstTrain);
        var tdNextArrival = $("<td>").text(tnNextArrival);
        var tdMinutesAway = $("<td>").text(tnMinutesAway);

        tr.append(tdNames, tdDestinations, tdFrequencies, tdFirstTrain, tdNextArrival, tdMinutesAway);

        td.append(tdNames, tdDestinations, tdFrequencies, tdFirstTrain, tdNextArrival, tdMinutesAway);

        $("#card-body").append.tr


    });
});
});