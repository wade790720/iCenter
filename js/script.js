// 首頁
var tabHome = $('.tab-bars .bar.home')
var reservation = $(".home-page .reservation");
var apply = $(".home-page .apply");

// 頁面
var homePage = $('.home-page')
var applyPage = $('.apply-page')
var recruitPage = $('.recruit-page')
var recruitPage01 = $('.recruit-page01')
var recruitPage02 = $('.recruit-page02')
var recruitPage03 = $('.recruit-page03')

tabHome.on("click", () => {
    homePage.show();
    applyPage.hide();
    recruitPage.hide();
    recruitPage01.hide();
})

apply.on("click", () => {
    history.pushState({
        page: 'apply'
    }, "page", "index.html");
    applyPage.show();
    homePage.hide();
});

// 申請頁 - 選單
var recruit = $('.apply-page .recruit')

recruit.on('click', () => {
    applyPage.hide();
    recruitPage.show();
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
