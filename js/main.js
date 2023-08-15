$(document).ready(function () {

    $('.Loadingspinner').fadeOut(3000)

    $(window).on('beforeunload', () => {
        $(window).scrollTop(0, 0)
    })




    $(window).resize(function () {
        const mediaQuery = window.matchMedia('(min-width:1000px)')
        if (mediaQuery.matches) {
            $('ul').addClass('d-flex')
        }
        else {
            $('ul').removeClass('d-flex')
        }
    });


    checkWhichSectionNavbar()
    $(window).scroll(function () {

        checkWhichSectionNavbar()

    })


    //? another 2 ways
    // window.addEventListener('beforeunload', function () {
    //     this.scrollTo(0, 0)
    // })

    // window.onbeforeunload = function () {
    //     this.scrollTo(0, 0)
    // }
    //! ------------------------------------



    //! Navbar 


    $('ul li a').click(function () {
        let section = $(this).attr('href');
        let sectionTop = $(section).offset().top
        $('html,body').animate({ scrollTop: sectionTop }, { duration: 1000, queue: false })
    })

    $('#toggleNavbar').click(function () {

        $('ul').slideToggle(500, function () {

        })
        if ($('ul').height() <= 0) {

            $('ul').addClass('d-flex')
        }
        else {
            setTimeout(() => {
                $('ul').removeClass('d-flex')
            }, 500);
        }



    })

    //! ------------------------------------






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

        let leftSideBarLeft = Number(($('#leftSideBar').css('left')).replace('px', ""))
        if (leftSideBarLeft == 0) {
            $('#leftSideBar').animate({ left: `-${$("#leftSideBar").width() + 5}px` }, 500)
            setTimeout(() => {                                                  //? bstna el width y5ls 3shan asm7 attribute el style 3shan hover el css ysht8l
                $('#leftSideBar').removeAttr('style')
            }, 1000);
        }
        else {
            $('#leftSideBar').animate({ left: `0px` }, 500)
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

    //! ------------------------------------





    //!  Jewelry             5ateeeeeeeeeeer

    $('.jewlName').click(function () {
        let divState = ""

        $(this).next().slideToggle(() => {                   //? da mkansh call back kda, kan bra
            $('.brownBg').not($(this).next()).slideUp()
            $('.brownBg').siblings().not('h3').animate({ opacity: '0' })


            setTimeout(() => {                               //? 3shan a3ml delay ll code 3shan el div bta5od w2t 3shan tt7wl mn block l none
                divState = $(this).next().css('display')

                if (divState == "block") {                  //? 3shan lw el user ft7 w2fl

                    $(this).siblings().not('.brownBg', 'h3').animate({ opacity: '1' }, 1500)
                }
            }, 500);
        })
    })

    //! ------------------------------------






    //! Tour

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

    //! ------------------------------------







    //! Contact

    $('textarea').keyup(function () {
        let messageLength = $('textarea').val().length
        let x = 100 - messageLength
        $('#userMessageSpan').html(x)
        if (x < 0) {
            $('#errorMessage').css('display', 'block')
            $('#userMessageParagraph').css('display', 'none')
        }
        else {
            $('#errorMessage').css('display', 'none')
            $('#userMessageParagraph').css('display', 'inline')

        }
    })
    // !--------------------------------




    function checkWhichSectionNavbar() {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('li').removeClass('active')
            let Contact = $('li')[3]
            $(Contact).addClass('active');
        }

        //! Not Wroking
        else if ($(window).scrollTop() >= $('#contact').offset().top - 1) {
            $('li').removeClass('active')
            let Contact = $('li')[3]
            $(Contact).addClass('active');
        }
        else if ($(window).scrollTop() >= $('#tour').offset().top) {
            $('li').removeClass('active')
            let counter = $('li')[2]
            $(counter).addClass('active');
        }
        else if ($(window).scrollTop() >= $('#jewelry').offset().top) {
            $('li').removeClass('active')
            let jewelry = $('li')[1]
            $(jewelry).addClass('active');
        }
        else {
            $('li').removeClass('active')
            let home = $('li')[0]
            $(home).addClass('active');
        }

    }

})

