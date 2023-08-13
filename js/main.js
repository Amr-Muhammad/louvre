//! Navbar 

$('ul li a').click(function () {
    let section = $(this).attr('href');
    let sectionTop = $(section).offset().top
    $('html,body').animate({ scrollTop: sectionTop }, { duration: 1000, queue: false })
})


$('li').click(function () {
    $('li').not($(this)).removeClass('active')
    $(this).addClass('active')
})


//! leftSideBar 


if (localStorage.getItem('color') != null) {
    let mainColorStorage = JSON.parse(localStorage.getItem('color'))
    $(':root').css("--mainColor", mainColorStorage)
}

if (localStorage.getItem('img') != null) {
    let mainBgSrc = JSON.parse(localStorage.getItem('img'))
    $('.bgLayer').css('background-image', `url(${mainBgSrc})`)
}

$('.open').click(function () {

    if ($('#leftSideBar').width() == 0) {
        $('#leftSideBar').animate({ width: "15%" }, 1000)
    }
    else {
        $('#leftSideBar').animate({ width: "0%" }, 1000)
    }

})


$('.colors').click(function () {
    let color = $(this).css('background-color')
    localStorage.setItem('color', JSON.stringify(color))

    $(':root').css("--mainColor", color)
})


$('.imgs').click(function () {
    let imgSrc = $(this).attr('src')
    localStorage.setItem('img', JSON.stringify(imgSrc))

    $('.bgLayer').css('background-image', `url(${imgSrc})`)
})







//! Bands !//
// $('.bandName').click(function () {
//     $('.brownBg').not($(this)).removeAttr('style')
//     $(this).siblings().slideToggle(1000)
// })



$('.bandName').click(function () {

    $(this).next().slideToggle()
    $('.brownBg').not($(this).next()).slideUp()
})



//! Counter
function dateCounter() {

    let todayDate = new Date()
    let commingDate = new Date('2024-07-28')
    let diff, daysLeft, daysFloor, hoursLeft, hoursFloor, minutesLeft, minutesFloor, secondsLeft

    diff = commingDate - todayDate
    daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    daysFloor = (diff / 1000 / 60 / 60 / 24) - daysLeft  //! elrqm elksr elmtb2y mn el days

    hoursLeft = Math.floor(daysFloor * 24)
    hoursFloor = (daysFloor * 24) - hoursLeft            //! elrqm elksr elmtb2y mn el hours

    minutesLeft = Math.floor(hoursFloor * 60)
    minutesFloor = (hoursFloor * 60) - minutesLeft       //! elrqm elksr elmtb2y mn el minutes

    secondsLeft = Math.floor(minutesFloor * 60)

    $('#days').html(daysLeft)
    $('#hours').html(hoursLeft)
    $('#minutes').html(minutesLeft)
    $('#seconds').html(secondsLeft)

}

setInterval(dateCounter, 1000)

//! Contact

$('textarea').keyup(function () {
    let messageLength = $('textarea').val().length
    let x = 100 - messageLength
    $('#userMessageSpan').html(x)
    if (x < 0) {
        $('#errorMessage').css('display', 'block')
        $('#userMessageParagraph').css('display', 'none')
    }
    else{
        $('#errorMessage').css('display', 'none')
        $('#userMessageParagraph').css('display', 'inline')

    }
})