// 首頁
var tabHome = $('.tab-bars .bar.home')
var reservation = $(".home-page .reservation");
var points = $(".home-page .points");
var apply = $(".home-page .apply");

// 頁面
var homePage = $('.home-page')
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
var agentPage = $('.agent-page')
var agentPage01 = $('.agent-page01')
var cleanPage = $('.clean-page')
var cleanPage01 = $('.clean-page01')

tabHome.on("click", () => {
    homePage.show();
    $('.page').hide()
})

points.on("click", () => {
    pointsPage.show();
    homePage.hide();
});

apply.on("click", () => {
    applyPage.show();
    homePage.hide();
});

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