// 首頁
var tabHome = $('.tab-bars .bar.home')
var reservation = $(".home-page .reservation");
var cost = $(".home-page .cost");
var points = $(".home-page .points");
var apply = $(".home-page .apply");

// 頁面
var homePage = $('.home-page')
var reservationPage = $('.reservation-page')
var reservationPage01 = $('.reservation-page01')
var reservationPage02 = $('.reservation-page02')
var reservationPageMeetingRoom = $('.reservation-page03.meeting-room')
var reservationPageGym = $('.reservation-page03.gym')
var reservationPageSpa = $('.reservation-page03.spa')
var reservationPage04MeetingRoom = $('.reservation-page04.meeting-room')
var costPage = $('.cost-page')
var costPage01 = $('.cost-page01')
var pointsPage = $('.points-page')
var pointsPage01 = $('.points-page01')
var pointsPage02 = $('.points-page02')
var applyPage = $('.apply-page')
var recruitPage = $('.recruit-page')
var recruitPage01 = $('.recruit-page01')
var recruitPage02 = $('.recruit-page02')
var recruitPage03 = $('.recruit-page03')
var networkPage = $('.network-page')
var networkPage01 = $('.network-page01')
var repairPage = $('.repair-page')
var repairPage01 = $('.repair-page01')
var agentPage = $('.agent-page')
var agentPage01 = $('.agent-page01')
var cleanPage = $('.clean-page')
var cleanPage01 = $('.clean-page01')

tabHome.on("click", () => {
    homePage.show();
    $('.page').hide();
    reservationPage01.removeClass('meeting-room').removeClass('gym').removeClass('spa');
})

reservation.on("click", () => {
    reservationPage.show();
    homePage.hide();
});

cost.on("click", () => {
    costPage.show();
    homePage.hide();
});

points.on("click", () => {
    pointsPage.show();
    homePage.hide();
});

apply.on("click", () => {
    applyPage.show();
    homePage.hide();
});

// 預約頁
reservationPage.find('.meeting-room').on('click', () => {
    reservationPage.hide();
    reservationPage01.show();
    reservationPage01.find('h2').text('會議空間預約');
    reservationPage01.addClass('meeting-room')
})

reservationPage.find('.gym').on('click', () => {
    reservationPage.hide();
    reservationPage01.show()
    reservationPage01.find('h2').text('健身房預約');
    reservationPage01.addClass('gym')
})

reservationPage.find('.spa').on('click', () => {
    reservationPage.hide();
    reservationPage01.show()
    reservationPage01.find('h2').text('SPA預約');
    reservationPage01.addClass('spa')
})

reservationPage01.find('.back-section .fa-chevron-left').on('click', () => {
    reservationPage01.hide();
    reservationPage.show();
    reservationPage01.removeClass('meeting-room').removeClass('gym').removeClass('spa')
})

reservationPage01.find('.join').on('click', () => {
    reservationPage01.hide();
    reservationPage02.show();
    if (reservationPage01.hasClass('meeting-room')) {
        reservationPage02.find('.input-field').show();
    } else {
        reservationPage02.find('.input-field').hide();
    }
})

reservationPage01.find('.search').on('click', () => {
    reservationPage01.hide();

    if (reservationPage01.hasClass('meeting-room')) {
        reservationPageMeetingRoom.show();
    }
    if (reservationPage01.hasClass('gym')) {
        reservationPageGym.show();
        reservationPageGym.find('.single-item').get(0).slick.setPosition()
    }
    if (reservationPage01.hasClass('spa')) {
        reservationPageSpa.show();
        reservationPageSpa.find('.single-item').get(0).slick.setPosition()
    }
})

reservationPage02.find('.back-section .fa-chevron-left').on('click', () => {
    reservationPage02.hide();
    reservationPage01.show();
})

reservationPage02.find('.back').on('click', () => {
    reservationPage02.hide();
    reservationPage01.show();
})

reservationPageMeetingRoom.find('.back-section .fa-chevron-left').on('click', () => {
    reservationPageMeetingRoom.hide();
    reservationPage01.show();
})

reservationPageMeetingRoom.find('.submit').on('click', () => {
    reservationPageMeetingRoom.hide();
    reservationPage04MeetingRoom.show();
})

reservationPageGym.find('.back-section .fa-chevron-left').on('click', () => {
    reservationPageGym.hide();
    reservationPage01.show();
})

reservationPageSpa.find('.back-section .fa-chevron-left').on('click', () => {
    reservationPageSpa.hide();
    reservationPage01.show();
})

var blockList = reservationPageMeetingRoom.find('.container .block')

blockList.map(function () {
    var block = $(this)

    block.find('.header .fas').on('click', function () {
        if ($(this).hasClass('fa-chevron-down')) {
            $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            block.addClass('open')
            reservationPageMeetingRoom.find('.single-item').get(0).slick.setPosition()
        } else {
            $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            block.removeClass('open')
        }
    })
})

$(function () {
    $('.single-item').slick({
        autoplay: true,
        dots: true,
        infinite: true,
    });
})

// 費用頁
costPage.find('.details').on('click', () => {
    costPage.hide();
    costPage01.show()
})

// 點數頁
pointsPage.find('.buy').on('click', () => {
    pointsPage.hide();
    pointsPage02.show()
})

pointsPage.find('.record').on('click', () => {
    pointsPage.hide();
    pointsPage01.show()
})

pointsPage01.find('.buy').on('click', () => {
    pointsPage01.hide();
    pointsPage02.show()
})

pointsPage01.find('.back').on('click', () => {
    pointsPage01.hide();
    pointsPage.show()
})

$(function () {
    pointsPage01.find('.calendar').pignoseCalendar({
        scheduleOptions: {
            colors: {
                event: '#95be50'
            }
        },
        schedules: [{
            name: 'event',
            date: '2020-11-25'
        }, {
            name: 'event',
            date: '2020-11-19'
        }, {
            name: 'event',
            date: '2020-11-05',
        }],
        select: function (date, context) {
            var $this = $(this);

            console.log($this);
        }
    });
    pointsPage01.find('.pignose-calendar-header .pignose-calendar-week-sun').text('S')
    pointsPage01.find('.pignose-calendar-header .pignose-calendar-week-mon').text('M')
    pointsPage01.find('.pignose-calendar-header .pignose-calendar-week-tue').text('T')
    pointsPage01.find('.pignose-calendar-header .pignose-calendar-week-wed').text('W')
    pointsPage01.find('.pignose-calendar-header .pignose-calendar-week-thu').text('T')
    pointsPage01.find('.pignose-calendar-header .pignose-calendar-week-fri').text('F')
    pointsPage01.find('.pignose-calendar-header .pignose-calendar-week-sat').text('S')
});


// 申請頁 - 選單
var network = $('.apply-page .menu .network')
var clean = $('.apply-page .menu .clean')
var repair = $('.apply-page .menu .repair')
var agent = $('.apply-page .menu .agent')
var recruit = $('.apply-page .menu .recruit')

network.on('click', () => {
    applyPage.hide();
    networkPage.show();
})

clean.on('click', () => {
    applyPage.hide();
    cleanPage.show();
})

repair.on('click', () => {
    applyPage.hide();
    repairPage.show();
})

agent.on('click', () => {
    applyPage.hide();
    agentPage.show();
})

recruit.on('click', () => {
    applyPage.hide();
    recruitPage.show();
})

// 申請頁 - 寬帶網路
networkPage.find('.back-section .fa-chevron-left').on('click', () => {
    networkPage.hide();
    applyPage.show();
})

networkPage.find('.submit').on('click', () => {
    networkPage.hide();
    networkPage01.show()
})

networkPage.find('.back').on('click', () => {
    networkPage.hide();
    applyPage.show()
})

networkPage01.find('.back').on('click', () => {
    networkPage.show();
    networkPage01.hide()
})

// 申請頁 - 辦公室清潔
cleanPage.find('.submit').on('click', () => {
    cleanPage.hide();
    cleanPage01.show()
})

// 申請頁 - 修繕
repairPage.find('.submit').on('click', () => {
    repairPage.hide();
    repairPage01.show()
})

// 申請頁 - 商務代辦
agentPage.find('.submit').on('click', () => {
    agentPage.hide();
    agentPage01.show()
})

// 申請頁 - 招聘
var itemList = recruitPage.find('.container .item')
var addJobButton = recruitPage.find('.add-job-btn')
var subimtButton = recruitPage01.find('.sumit')
var reEditButton = recruitPage02.find('.re-edit')
var noButton = recruitPage03.find('.no')
itemList.map(function () {
    var item = $(this)
    item.find('.action .toggle .fas').on('click', function () {
        if ($(this).hasClass('fa-chevron-down')) {
            $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            item.find('.dropdown').show();
        } else {
            $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            item.find('.dropdown').hide();
        }
    })
    item.find('.action .edit').on('click', function () {
        item.find('.dropdown').show();
        item.find('.action .toggle .fas').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        $('.dropdown .text-area').find('textarea').attr("disabled", false)
    })
    item.find('.action .delete').on('click', function () {
        recruitPage.hide();
        recruitPage03.show();
    })
});

recruitPage.find('.back-section .fa-chevron-left').on('click', () => {
    recruitPage.hide();
    applyPage.show();
})

recruitPage01.find('.back-section .fa-chevron-left').on('click', () => {
    recruitPage01.hide();
    recruitPage.show();
})

recruitPage02.find('.back-section .fa-chevron-left').on('click', () => {
    recruitPage01.show();
    recruitPage02.hide();
})

recruitPage03.find('.back-section .fa-chevron-left').on('click', () => {
    recruitPage.show();
    recruitPage03.hide();
})

addJobButton.on('click', () => {
    recruitPage.hide();
    recruitPage01.show();
})

subimtButton.on('click', () => {
    recruitPage01.hide();
    recruitPage02.show();
})

reEditButton.on('click', () => {
    recruitPage01.show();
    recruitPage02.hide();
})

noButton.on('click', () => {
    recruitPage.show();
    recruitPage03.hide();
})

// homePage.hide();
// reservationPage04MeetingRoom.show();