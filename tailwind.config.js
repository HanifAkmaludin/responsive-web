module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            spacing: {
                card: "calc(50% - 22px);",
                "card-mobile": "calc(50% - 11px)",
                "col-2-members": "calc(50% - 30px)",
                "col-2-news": "calc(50% - 25px)",
                "col-2-footer": "calc(100% / 2 - 81.5px)",
                "col-3-members": "calc(100% / 3 - 20px)",
                "col-3-news-lg": "calc(100% / 3 - 40px)",
                "col-3-news-xl": "calc(100% / 3 - 50px)",
                "col-4": "calc(25% - 25px)",
            },
            padding: {
                card: "42px 18px 40px 44px",
                "card-community": "40px 65px 44px 40px",
                "card-community-mobile": "40px",
            },
            colors: {
                primary: "#217BF4",
                secondary: "#656464",
                title: "#0A093D",
                h3: "#2F2C4A",
            },
            boxShadow: {
                btn: "0px 7px 22px -6px rgba(33, 123, 244, 0.34)",
                card: "0px 26px 49px rgba(146, 165, 184, 0.14);",
                "card-blue": "0px 10px 22px -2px rgba(109, 171, 255, 0.36);",
                "card-red": " 0px 8px 22px -2px rgba(248, 87, 94, 0.3);",
                "card-orange": "0px 10px 22px -2px rgba(250, 186, 84, 0.3);",
                "card-community":
                    "14px 22px 52px -12px rgba(127, 127, 127, 0.13);",
                "card-members": "0px 34px 68px rgba(116, 115, 128, 0.1);",
            },
            backgroundImage: {
                hero: "linear-gradient(311.76deg, #D4E7FE -15.24%, #FFFFFF 78.85%);",
                bullet: "url('../assets/img/bullet.png');",
                community:
                    "linear-gradient(0deg, rgba(241, 246, 253, 0) 1.63%, #F1F6FD 20.5%, #F1F6FD 58.57%, #FFFFFF 100%);",
                "card-blue":
                    "linear-gradient(154.49deg, #5CA1FE 6.61%, #217BF4 89.72%);",
                "card-red":
                    "linear-gradient(154.49deg, #FF858A 6.61%, #F04148 89.72%);",
                "card-orange":
                    "linear-gradient(154.49deg, #FFD085 6.61%, #FFAF2E 89.72%);",
            },
        },
        container: {
            screens: {
                sm: "530px",
                md: "658px",
                lg: "914px",
                xl: "1170px",
            },
            center: "true",
        },
    },
    plugins: [],
};
