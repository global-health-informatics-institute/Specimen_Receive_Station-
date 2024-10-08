$(document).ready(function() {
    function fetchSummaryData() {
        $.ajax({
            url: "/summary_content",
            method: "GET",
            success: function(data) {
                $("#summaryRegisteredTotal").text(data.summaryRegisteredTotal);
                $("#summaryReceivedTotal").text(data.summaryReceivedTotal);
                $("#summaryInProgressTotal").text(data.summaryInProgressTotal);
                $("#summaryPendingAuthTotal").text(data.summaryPendingAuthTotal);
                $("#summaryCompleteTotal").text(data.summaryCompleteTotal);
                $("#summaryRejectedTotal").text(data.summaryRejectedTotal);
            }
        });
    }

    fetchSummaryData();
    setInterval(fetchSummaryData, 1300); 
});


$(document).ready(function() {
    function fetchTestContent1() {
        $.ajax({
            url: "/test_content1",
            method: "GET",
            success: function(data) {
                $("#received1").text(data.received1);
                $("#inProgress1").text(data.inProgress1);
                $("#pendingAuth1").text(data.pendingAuth1);
                $("#complete1").text(data.complete1);
            }
        });
    }

    fetchTestContent1();
    setInterval(fetchTestContent1, 1300); 
});


$(document).ready(function() {
    function fetchTestContent2() {
        $.ajax({
            url: "/test_content2",
            method: "GET",
            success: function(data) {
                $("#received2").text(data.received2);
                $("#inProgress2").text(data.inProgress2);
                $("#pendingAuth2").text(data.pendingAuth2);
                $("#complete2").text(data.complete2);
            }
        });
    }
    fetchTestContent2();
    setInterval(fetchTestContent2, 1300); 
});


$(document).ready(function() {
    function fetchTestContent3() {
        $.ajax({
            url: "/test_content3",
            method: "GET",
            success: function(data) {
                $("#received3").text(data.received3);
                $("#inProgress3").text(data.inProgress3);
                $("#pendingAuth3").text(data.pendingAuth3);
                $("#complete3").text(data.complete3);
            }
        });
    }

    fetchTestContent3();
    setInterval(fetchTestContent3, 1300); 
});


$(document).ready(function() {
    function fetchTestContent4() {
        $.ajax({
            url: "/test_content4",
            method: "GET",
            success: function(data) {
                $("#received4").text(data.received4);
                $("#inProgress4").text(data.inProgress4);
                $("#pendingAuth4").text(data.pendingAuth4);
                $("#complete4").text(data.complete4);
            }
        });
    }
    fetchTestContent4();
    setInterval(fetchTestContent4, 1300); 
});




$(document).ready(function() {
    function fetchWeeklyContent() {
        $.ajax({
            url: "/weekly_content",
            method: "GET",
            success: function(data) {
                $("#weeklyRegistered").text(data.weeklyRegistered);
                $("#weeklyRecieved").text(data.weeklyRecieved);
                $("#weeklyProgress").text(data.weeklyProgress);
                $("#weeklyComplete").text(data.weeklyComplete);
                $("#weeklyRejected").text(data.weeklyRejected);
            }
        });
    }
    fetchWeeklyContent();
    setInterval(fetchWeeklyContent, 1300);
});

$(document).ready(function() {
    function fetchMonthlyContent() {
        $.ajax({
            url: "/monthly_content",
            method: "GET",
            success: function(data) {
                $("#monthlyRegistered").text(data.monthlyRegistered);
                $("#monthlyRecieved").text(data.monthlyRecieved);
                $("#monthlyProgress").text(data.monthlyProgress);
                $("#monthlyComplete").text(data.monthlyComplete);
                $("#monthlyRejected").text(data.monthlyRejected);
            }
        });
    }

    fetchMonthlyContent();
    setInterval(fetchMonthlyContent, 1300); 
});



$(document).ready(function() {
    function fetchTatCurrent() {
        $.ajax({
            url: "/tat_current",
            method: "GET",
            success: function(data) {
                $("#current1").text(data.current1);
                $("#current2").text(data.current2);
                $("#current3").text(data.current3);
                $("#current4").text(data.current4);
            }
        });
    }

    fetchTatCurrent();
    setInterval(fetchTatCurrent, 1300); 
});


$(document).ready(function() {
    function fetchTatAverage() {
        $.ajax({
            url: "/tat_average",
            method: "GET",
            success: function(data) {
                $("#average1").text(data.average1);
                $("#average2").text(data.average2);
                $("#average3").text(data.average3);
                $("#average4").text(data.average4);
            }
        });
    }

    fetchTatAverage();
    setInterval(fetchTatAverage, 1300); 
});


