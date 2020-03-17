$(document).ready(function () {

    // Globals
    var calendar;

    // Elements
    var $calendarPrevBtn =    $(".js-calendar-prev");
    var $calendarForwBtn =    $(".js-calendar-forward");
    var $calendarNowBtn =     $(".js-calendar-now");
    var $calendarDisplayBtn = $(".js-calendar-display");

    var init = function () {

        calendar = new tui.Calendar('#calendar', {
            defaultView: 'week',
            taskView: false,
            useCreationPopup: true,
            useDetailPopup: true
            
        });

        calendar.createSchedules([
            {
                id: '1',
                calendarId: '1',
                title: 'Legs workout',
                category: 'time',
                dueDateClass: '',
                start: '2020-03-12T16:30:00+09:00',
                end: '2020-03-12T18:30:00+09:00',
                body: 'I want to eat some pineapples lol'
            },
            {
                id: '2',
                calendarId: '1',
                title: 'Back workout',
                category: 'time',
                dueDateClass: '',
                start: '2020-03-12T19:30:00+09:00',
                end: '2020-03-12T20:31:00+09:00',
                body: 'I will merk off the zombies from lakeshire',
                isReadOnly: true    // schedule is read-only
            }
        ]);

        BindElements();
    };

    var BindElements = function () {

        $calendarPrevBtn.unbind();
        $calendarPrevBtn.bind("click", function () {

            calendar.prev();

        });

        $calendarForwBtn.unbind();
        $calendarForwBtn.bind("click", function () {

            calendar.next();

        });

        $calendarNowBtn.unbind();
        $calendarNowBtn.bind("click", function () {

            calendar.today();

        });

        $calendarDisplayBtn.unbind();
        $calendarDisplayBtn.bind("change", function (e) {

            var $newCalendarViewType = $(this).find(":selected");

            var newCalendarViewType = $newCalendarViewType.val();
            
            calendar.changeView(newCalendarViewType, true);

            if (newCalendarViewType === "week")

                $calendarNowBtn.text("This week");

            else if (newCalendarViewType === "month")

                $calendarNowBtn.text("This month");

        });

    };

    init();

});