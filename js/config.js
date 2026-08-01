/*==================================================
    CHUN & DAM
    Wedding Invitation Website
    POINT C
    VERSION V10
==================================================*/

const WEDDING={

    /*==================================================
        EVENT
    ==================================================*/

    event:{

        bride:"CHUN",

        groom:"DAM",

        dateDisplay:"17 • 10 • 2026",

        weddingDate:"2026-10-17T11:30:00"

    },


    /*==================================================
        SEO
    ==================================================*/

    seo:{

        title:"CHUN & DAM | Wedding Invitation",

        description:"Wedding Invitation of Chun & Dam",

        keywords:[
            "Wedding",
            "Wedding Invitation",
            "CHUN",
            "DAM",
            "17 October 2026"
        ],

        image:"images/cover.jpg",

        favicon:"images/favicon.png"

    },
    /*==================================================
        OPENING
    ==================================================*/

    opening:{

        background:"images/cover.jpg",

        overlay:0.45,

        title:"WEDDING INVITATION",

        showCoupleNames:true,

        showDate:true,

        heading:`Một ngày đặc biệt,
một khoảnh khắc đáng nhớ`,

        message:`Chúng tôi rất hạnh phúc
khi được chia sẻ niềm vui này
cùng bạn`,

        family:`Gia đình hai bên
trân trọng kính mời`,

        buttonText:"MỞ THIỆP"

    },



        /*==================================================
        HERO
    ==================================================*/

    hero:{

        quote:"Together is a beautiful place to be",

        showDivider:true

    },



        /*==================================================
        COUPLE
    ==================================================*/

    couple:{

        title:"CÔ DÂU & CHÚ RỂ",

        subtitle:"Hôm nay chúng mình hạnh phúc vì có bạn ở đây.",

        bride:{

            role:"CÔ DÂU",

            name:"CHUN",

            image:"images/bride.jpg"

        },

        groom:{

            role:"CHÚ RỂ",

            name:"DAM",

            image:"images/groom.jpg"

        }

    },



    /*==================================================
        MUSIC
    ==================================================*/

    music:{

        src:"music/wedding.mp3",

        autoplay:true,

        loop:true,

        volume:0.35,

        showButton:true,

        buttonPosition:"right"

    },
      /*==================================================
        COUNTDOWN
    ==================================================*/

    countdown:{

        show:true,

        title:"Chỉ còn",

        subtitle:"là đến ngày chúng mình về chung một nhà"

    },



    /*==================================================
        TIMELINE
    ==================================================*/

    timeline:{

        title:"LỊCH TRÌNH HÔN LỄ",

        style:"curve",

        sections:[

            {

                side:"NHÀ TRAI",

                icon:"ring",

                events:[

                    {

                        title:"LỄ THÀNH HÔN",

                        time:"",

                        weekday:"",

                        solarDate:"",

                        lunarDate:""

                    },

                    {

                        title:"TIỆC NHÀ TRAI",

                        time:"",

                        weekday:"",

                        solarDate:"",

                        lunarDate:""

                    }

                ]

            },

            {

                side:"NHÀ GÁI",

                icon:"flower",

                events:[

                    {

                        title:"LỄ VU QUY",

                        time:"",

                        weekday:"",

                        solarDate:"",

                        lunarDate:""

                    },

                    {

                        title:"TIỆC NHÀ GÁI",

                        time:"",

                        weekday:"",

                        solarDate:"",

                        lunarDate:""

                    }

                ]

            }

        ]

    },



    
            /*==================================================
        LOCATION
    ==================================================*/

    location:{

        title:"ĐỊA ĐIỂM",

        subtitle:"Rất mong được đón tiếp bạn.",

        locations:[

            {

                side:"NHÀ TRAI",

                icon:"ring",

                venue:"",

                address:"",

                mapEmbed:"",

                mapLink:""

            },

            {

                side:"NHÀ GÁI",

                icon:"flower",

                venue:"",

                address:"",

                mapEmbed:"",

                mapLink:""

            }

        ]

    },

            /*==================================================
        RSVP
    ==================================================*/

    rsvp:{

        title:"XÁC NHẬN THAM DỰ",

        subtitle:"Sự phản hồi của bạn sẽ giúp chúng mình chuẩn bị chu đáo hơn.",

        deadline:"01/10/2026",

        name:{

            label:"Họ và tên",

            placeholder:"Nhập họ và tên của bạn",

            required:true

        },

        attendance:{

            label:"Bạn sẽ tham dự chứ?",

            options:[

                {

                    id:"attending",

                    text:"💚 Mình sẽ tham dự"

                },

                {

                    id:"not-attending",

                    text:"🤍 Xin lỗi, mình bận mất rồi"

                }

            ]

        },

        guestCount:{

            label:"Số lượng khách tham dự",

            default:1,

            min:1,

            max:5,

            showOnlyWhenAttending:true,

            stepper:true,

            minusButton:"−",

            plusButton:"+"

        },

        submitButton:"GỬI PHẢN HỒI"
       successMessage:"Cảm ơn bạn đã phản hồi ❤️",

       errorMessage:"Đã có lỗi xảy ra. Vui lòng thử lại."  

    },



        /*==================================================
        GIFT
    ==================================================*/

    gift:{

        title:"MỪNG CƯỚI",

        subtitle:"Sự hiện diện của bạn đã là món quà quý giá nhất dành cho chúng mình.\nNếu muốn gửi thêm một chút yêu thương, bạn có thể quét mã QR bên dưới ❤️",

        show:true,

        bride:{

            title:"Mừng cưới cô dâu",

            bank:"",

            accountName:"",

            accountNumber:"",

            qr:"images/qr-bride.png"

        },

        groom:{

            title:"Mừng cưới chú rể",

            bank:"",

            accountName:"",

            accountNumber:"",

            qr:"images/qr-groom.png"

        }

    },



    
        /*==================================================
        WEDDING WISHES
    ==================================================*/

    wishes:{

        title:"LỜI CHÚC",

        subtitle:"Những lời chúc thân thương sẽ là món quà quý giá nhất dành cho chúng mình ❤️",

        placeholder:"Viết lời chúc của bạn tại đây...",

        submitButton:"GỬI LỜI CHÚC",

        emptyMessage:"Hãy là người đầu tiên gửi lời chúc ❤️",

        maxLength:300

    },



/*==================================================
        GALLERY
    ==================================================*/

    gallery:{

        title:"KHOẢNH KHẮC",

        subtitle:"Những hình ảnh nhỏ ghi lại hành trình của chúng mình.",

        layout:"masonry",

        columnsMobile:2,

        columnsDesktop:4,

        images:[

            {
                image:"images/gallery/01.jpg",
                alt:"Gallery 01"
            },

            {
                image:"images/gallery/02.jpg",
                alt:"Gallery 02"
            },

            {
                image:"images/gallery/03.jpg",
                alt:"Gallery 03"
            },

            {
                image:"images/gallery/04.jpg",
                alt:"Gallery 04"
            },

            {
                image:"images/gallery/05.jpg",
                alt:"Gallery 05"
            },

            {
                image:"images/gallery/06.jpg",
                alt:"Gallery 06"
            },

            {
                image:"images/gallery/07.jpg",
                alt:"Gallery 07"
            },

            {
                image:"images/gallery/08.jpg",
                alt:"Gallery 08"
            }

        ]

    },



    /*==================================================
        FOOTER
    ==================================================*/

    footer:{

        thanks:"Cảm ơn bạn đã dành thời gian chia vui cùng chúng mình.",

        copyright:"© 2026 CHUN & DAM"

    },



    /*==================================================
        EFFECTS
    ==================================================*/

    effects:{

        petals:{

            enable:true,

            quantity:18,

            speed:1,

            wind:0.3

        },



        opening:{

            fadeDuration:1200

        },



        scroll:{

            enable:true,

            duration:700

        }

    },



    /*==================================================
        THEME
    ==================================================*/

    theme:{

        primary:"#879C82",

        secondary:"#FAFAF7",

        accent:"#C8A96A",

        text:"#444444",

        white:"#FFFFFF",

        overlay:"rgba(0,0,0,.45)",

        radius:24,

        maxWidth:480

    },



    /*==================================================
        FONT
    ==================================================*/

    font:{

        heading:"Cormorant Garamond",

        body:"Be Vietnam Pro"

    }

};
