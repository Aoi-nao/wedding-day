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

        quote:"Together is a beautiful place to be"

    },



    /*==================================================
        COUPLE
    ==================================================*/

    couple:{

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

        title:"LỊCH TRÌNH",

        sections:[

            {

                title:"LỄ THÀNH HÔN",

                events:[

                    {

                        time:"11:30",

                        title:"ĐÓN KHÁCH",

                        description:"Hân hạnh chào đón Quý khách."

                    },

                    {

                        time:"12:00",

                        title:"KHAI TIỆC",

                        description:"Buổi tiệc chính thức bắt đầu."

                    },

                    {

                        time:"13:00",

                        title:"NGHI THỨC",

                        description:"Cùng chứng kiến khoảnh khắc thiêng liêng của chúng mình."

                    },

                    {

                        time:"15:00",

                        title:"CHỤP ẢNH",

                        description:"Lưu giữ những kỷ niệm đẹp."

                    }

                ]

            }

        ]

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
        LOCATION
    ==================================================*/

    location:{

        title:"ĐỊA ĐIỂM",

        ceremony:{

            venue:"",

            address:"",

            mapEmbed:"",

            mapLink:""

        },

        parking:"",

        note:""

    },
      /*==================================================
        RSVP
    ==================================================*/

    rsvp:{

        title:"XÁC NHẬN THAM DỰ",

        subtitle:"Rất mong nhận được phản hồi từ bạn.",

        buttonText:"XÁC NHẬN",

        url:""

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
