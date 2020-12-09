// 首頁
var tabHome = $('.tab-bars .bar.home')
var reservation = $(".home-page .reservation");
var cost = $(".home-page .cost");
var points = $(".home-page .points");
var apply = $(".home-page .apply");
var navgationDrawer = $('.navgation-drawer')

// 頁面
var homePage = $('.home-page')
var reservationPage = $('.reservation-page')
var reservationPage01 = $('.reservation-page01')
var reservationPage02 = $('.reservation-page02')
var reservationPage03MeetingRoom = $('.reservation-page03.meeting-room')
var reservationPage03Gym = $('.reservation-page03.gym')
var reservationPage03Spa = $('.reservation-page03.spa')
var reservationPage04 = $('.reservation-page04')
var reservationPage05MeetingRoom = $('.reservation-page05.meeting-room')
var reservationPage05Gym = $('.reservation-page05.gym')
var reservationPage05Spa = $('.reservation-page05.spa')
var reservationPage06 = $('.reservation-page06')
var reservationPage07 = $('.reservation-page07')
var reservationPage08Other = $('.reservation-page08.other')
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
var rentHousePage = $('.rent-house-page')
var rentHousePage01 = $('.rent-house-page01')
var financingPage = $('.financing-page')
var financingPage01 = $('.financing-page01')
var insurancePage = $('.insurance-page')
var insurancePage01 = $('.insurance-page01')


tabHome.on("click", () => {
    homePage.show();
    $('.page').hide();
    reservationPage01.removeClass('meeting-room').removeClass('gym').removeClass('spa');
    reservationPage04.removeClass('meeting-room').removeClass('gym').removeClass('spa');
    reservationPage06.removeClass('meeting-room').removeClass('gym').removeClass('spa');
    reservationPage07.removeClass('meeting-room').removeClass('gym').removeClass('spa');
    reservationPage08Other.removeClass('gym').removeClass('spa');
})

$('.header-button .fa-bars').on('click', () => {
    navgationDrawer.show();
})

// 側邊欄Menu
navgationDrawer.find('.item.reservation').on('click', function () {
    if ($(this).find('.fas').hasClass('fa-chevron-down')) {
        $(this).find('.fas').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        $(this).addClass('active')
        $('.sub-item.reservation').show()
    } else {
        $(this).find('.fas').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $(this).removeClass('active')
        $('.sub-item.reservation').hide()
    }
})
navgationDrawer.find('.item.apply').on('click', function () {
    if ($(this).find('.fas').hasClass('fa-chevron-down')) {
        $(this).find('.fas').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        $(this).addClass('active')
        $('.sub-item.apply').show()
    } else {
        $(this).find('.fas').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $(this).removeClass('active')
        $('.sub-item.apply').hide()
    }
})
navgationDrawer.find('.item.info').on('click', function () {
    if ($(this).find('.fas').hasClass('fa-chevron-down')) {
        $(this).find('.fas').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        $(this).addClass('active')
        $('.sub-item.info').show()
    } else {
        $(this).find('.fas').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $(this).removeClass('active')
        $('.sub-item.info').hide()
    }
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
    reservationPage04.find('h2').text('會議空間預約');
    reservationPage06.find('h2').text('會議空間預約');
    reservationPage07.find('h2').text('會議空間預約');
    reservationPage07.find('.room').text('會議室');
    reservationPage01.addClass('meeting-room');
    reservationPage04.addClass('meeting-room');
    reservationPage06.addClass('meeting-room');
    reservationPage07.addClass('meeting-room');
})

reservationPage.find('.gym').on('click', () => {
    reservationPage.hide();
    reservationPage01.show()
    reservationPage01.find('h2').text('健身房預約');
    reservationPage04.find('h2').text('健身房預約');
    reservationPage06.find('h2').text('健身房預約');
    reservationPage07.find('h2').text('健身房預約');
    reservationPage07.find('.room').text('健身房');
    reservationPage08Other.find('h2').text('健身房預約');
    reservationPage01.addClass('gym');
    reservationPage04.addClass('gym');
    reservationPage06.addClass('gym');
    reservationPage07.addClass('gym');
    reservationPage08Other.addClass('gym');
})

reservationPage.find('.spa').on('click', () => {
    reservationPage.hide();
    reservationPage01.show()
    reservationPage01.find('h2').text('SPA預約');
    reservationPage04.find('h2').text('SPA預約');
    reservationPage06.find('h2').text('SPA預約');
    reservationPage07.find('h2').text('SPA預約');
    reservationPage07.find('.room').text('SPA');
    reservationPage08Other.find('h2').text('SPA預約');
    reservationPage01.addClass('spa');
    reservationPage04.addClass('spa');
    reservationPage06.addClass('spa');
    reservationPage07.addClass('spa');
    reservationPage08Other.addClass('spa');
})

// 預約頁 - 收尋頁
reservationPage01.find('.back-section .fa-chevron-left').on('click', () => {
    reservationPage01.hide();
    reservationPage.show();
    reservationPage01.removeClass('meeting-room').removeClass('gym').removeClass('spa');
    reservationPage04.removeClass('meeting-room').removeClass('gym').removeClass('spa');
    reservationPage06.removeClass('meeting-room').removeClass('gym').removeClass('spa');
    reservationPage07.removeClass('meeting-room').removeClass('gym').removeClass('spa');
    reservationPage08Other.removeClass('gym').removeClass('spa');
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
        reservationPage03MeetingRoom.show();
        reservationPage03MeetingRoom.find('.single-item').get(0).slick.setPosition()
    }
    if (reservationPage01.hasClass('gym')) {
        reservationPage03Gym.show();
        reservationPage03Gym.find('.single-item').get(0).slick.setPosition()
    }
    if (reservationPage01.hasClass('spa')) {
        reservationPage03Spa.show();
        reservationPage03Spa.find('.single-item').get(0).slick.setPosition()
    }
})

// 預約頁 - 邀請人員頁
reservationPage02.find('.back-section .fa-chevron-left').on('click', () => {
    reservationPage02.hide();
    reservationPage01.show();
})

reservationPage02.find('.back').on('click', () => {
    reservationPage02.hide();
    reservationPage01.show();
})

// 預約頁 - 收尋結果/會議室
reservationPage03MeetingRoom.find('.back-section .fa-chevron-left').on('click', () => {
    reservationPage03MeetingRoom.hide();
    reservationPage01.show();
})

reservationPage03MeetingRoom.find('.back').on('click', () => {
    reservationPage03MeetingRoom.hide();
    reservationPage01.show();
})

reservationPage03MeetingRoom.find('.check-calendar').on('click', () => {
    reservationPage03MeetingRoom.hide();
    initReservationPage04MeetingRoom();
})

reservationPage03MeetingRoom.find('.container .block').map(function () {
    var block = $(this)

    block.find('.header .fas').on('click', function () {
        if ($(this).hasClass('fa-chevron-down')) {
            $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            block.addClass('open')
            reservationPage03MeetingRoom.find('.single-item').get(0).slick.setPosition()
        } else {
            $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            block.removeClass('open')
        }
    })
})

// 預約頁 - 收尋結果/健身房
reservationPage03Gym.find('.back-section .fa-chevron-left').on('click', () => {
    reservationPage03Gym.hide();
    reservationPage01.show();
})

reservationPage03Gym.find('.back').on('click', () => {
    reservationPage03Gym.hide();
    reservationPage01.show();
})

reservationPage03Gym.find('.check-calendar').on('click', () => {
    reservationPage03Gym.hide();
    initReservationPage04MeetingRoom();
})

// 預約頁 - 收尋結果/SPA
reservationPage03Spa.find('.back-section .fa-chevron-left').on('click', () => {
    reservationPage03Spa.hide();
    reservationPage01.show();
})

reservationPage03Spa.find('.back').on('click', () => {
    reservationPage03Spa.hide();
    reservationPage01.show();
})

reservationPage03Spa.find('.check-calendar').on('click', () => {
    reservationPage03Spa.hide();
    initReservationPage04MeetingRoom();
})

// 預約頁 - 預約日期
reservationPage04.find('.back-section .fa-chevron-left').on('click', () => {
    if (reservationPage04.hasClass('meeting-room')) {
        reservationPage04.hide();
        reservationPage03MeetingRoom.show();
        reservationPage05MeetingRoom.find('.single-item').get(0).slick.setPosition();
    }

    if (reservationPage04.hasClass('gym')) {
        reservationPage04.hide();
        reservationPage03Gym.show();
        reservationPage05Gym.find('.single-item').get(0).slick.setPosition();
    }

    if (reservationPage04.hasClass('spa')) {
        reservationPage04.hide();
        reservationPage03Spa.show();
        reservationPage05Spa.find('.single-item').get(0).slick.setPosition();
    }
})

reservationPage04.find('.submit').on('click', () => {
    if (reservationPage04.hasClass('meeting-room')) {
        reservationPage04.hide();
        reservationPage05MeetingRoom.show();
        reservationPage05MeetingRoom.find('.single-item').get(0).slick.setPosition()
    }

    if (reservationPage04.hasClass('gym')) {
        reservationPage04.hide();
        reservationPage05Gym.show();
        reservationPage05Gym.find('.single-item').get(0).slick.setPosition()
    }

    if (reservationPage04.hasClass('spa')) {
        reservationPage04.hide();
        reservationPage05Spa.show();
        reservationPage05Spa.find('.single-item').get(0).slick.setPosition()
    }
})

var initReservationPage04MeetingRoom = () => {
    var TYPE = {
        open: 0,
        close: 1,
        selected: 2,
        blocked: 3
    };
    var $schedules = reservationPage04.find('.schedules')
    var $scheduleList = $schedules.find('.schedule')
    var mainDate = dayjs()

    // 日曆重置
    var _reset = (date) => {
        var WEEKS = ['日', '一', '二', '三', '四', '五', '六']
        var _mainDate = dayjs(date)
        var _prevDate = dayjs(_mainDate).subtract(1, 'd')
        var _nextDate = dayjs(_mainDate).add(1, 'd')
        var schedules = {
            [_prevDate.format('YYYY/M/D')]: Array.from({
                length: 12
            }).map(() => Math.floor(Math.random() * 4)),
            [_mainDate.format('YYYY/M/D')]: Array.from({
                length: 12
            }).map(() => Math.floor(Math.random() * 4)),
            [_nextDate.format('YYYY/M/D')]: Array.from({
                length: 12
            }).map(() => Math.floor(Math.random() * 4)),
        }
        $scheduleList.map((sIndex, sTarget) => {
            var $schedule = $(sTarget)
            var [_date, _schedule] = Object.entries(schedules)[sIndex]
            $schedule.find('.date').text(`${_date}(${WEEKS[dayjs(_date).day()]})`)
            $schedule.find('.button').map((bIndex, bTarget) => {
                var $button = $(bTarget)
                var _type = Object.keys(TYPE)[_schedule[bIndex]];
                $button.attr('class', `button ${_type}`);
            })
        })
    }

    // 日曆行為
    var _execute = {
        prev: () => {
            mainDate = dayjs(mainDate).subtract(1, 'd')
            _reset(mainDate)
        },
        next: () => {
            mainDate = dayjs(mainDate).add(1, 'd')
            _reset(mainDate)
        },
        open: ($target) => $target.attr('class', 'button selected'),
        selected: ($target) => $target.attr('class', 'button open'),
    }

    // 操作日曆
    $schedules.not('.click').on('click', '.button', (e) => {
        var $button = $(e.currentTarget);
        var [dom, type] = $button.attr('class').split(' ');
        if (dom === 'button') {
            if (['close', 'blocked'].some(_type => _type === type)) return;
            _execute[type]($button);
        }
    }).addClass('click')

    reservationPage04.show()
    _reset(mainDate)
}

$(function () {
    $('.single-item').slick({
        autoplay: true,
        dots: true,
        infinite: true,
    });
})

// 預約頁 - 確認頁
reservationPage05MeetingRoom.find('.back-section .fa-chevron-left').on('click', () => {
    reservationPage05MeetingRoom.hide();
    reservationPage04.show();
})

reservationPage05MeetingRoom.find('.submit').on('click', () => {
    reservationPage05MeetingRoom.hide();
    reservationPage06.show();
})

reservationPage05MeetingRoom.find('.back').on('click', () => {
    reservationPage05MeetingRoom.hide();
    reservationPage04.show();
})

reservationPage05Gym.find('.back-section .fa-chevron-left').on('click', () => {
    reservationPage05Gym.hide();
    reservationPage04.show();
})

reservationPage05Gym.find('.submit').on('click', () => {
    reservationPage05Gym.hide();
    reservationPage06.show();
})

reservationPage05Gym.find('.back').on('click', () => {
    reservationPage05Gym.hide();
    reservationPage04.show();
})

reservationPage05Spa.find('.back-section .fa-chevron-left').on('click', () => {
    reservationPage05Spa.hide();
    reservationPage04.show();
})

reservationPage05Spa.find('.submit').on('click', () => {
    reservationPage05Spa.hide();
    reservationPage06.show();
})

reservationPage05Spa.find('.back').on('click', () => {
    reservationPage05Spa.hide();
    reservationPage04.show();
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
var rentHouse = $('.apply-page .menu .rent-house')
var financing = $('.apply-page .menu .financing')
var insurance = $('.apply-page .menu .insurance')

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

rentHouse.on('click', () => {
    applyPage.hide();
    rentHousePage.show();
})

financing.on('click', () => {
    applyPage.hide();
    financingPage.show();
})

insurance.on('click', () => {
    applyPage.hide();
    insurancePage.show();
})

// 申請頁 - 寬帶網路
networkPage.find('.back-section .fa-chevron-left').on('click', () => {
    networkPage.hide();
    applyPage.show();
})

networkPage.find('.submit').on('click', () => {
    networkPage.hide();
    networkPage01.show();
})

networkPage.find('.back').on('click', () => {
    networkPage.hide();
    applyPage.show();
})

networkPage01.find('.back').on('click', () => {
    networkPage.show();
    networkPage01.hide();
})

// 申請頁 - 辦公室清潔
cleanPage.find('.submit').on('click', () => {
    cleanPage.hide();
    cleanPage01.show();
})

// 申請頁 - 修繕
repairPage.find('.submit').on('click', () => {
    repairPage.hide();
    repairPage01.show();
})

// 申請頁 - 商務代辦
agentPage.find('.submit').on('click', () => {
    agentPage.hide();
    agentPage01.show();
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

// 申請頁 - 租屋
rentHousePage.find('.submit').on('click', () => {
    rentHousePage.hide();
    rentHousePage01.show();
})

// 申請頁 - 資金融通
financingPage.find('.submit').on('click', () => {
    financingPage.hide();
    financingPage01.show();
})

// 申請頁 - 保險
insurancePage.find('.submit').on('click', () => {
    insurancePage.hide();
    insurancePage01.show();
})