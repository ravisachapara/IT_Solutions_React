const CONSTANTS = {
    MENU_DATA: [
        {
            name: 'Home',
            to: "/",
            index: 0
        },
        {
            name: 'About_us',
            to: "/about_us",
            index: 1
        },
        {
            name: 'Services',
            index: 2,
            title: "Services",
            to: "submenu",
            subMenu: [
                {
                    name: 'Software',
                    to: '/software-services',
                },
                {
                    name: 'Hardware',
                    to: '/hardware-services',
                }
            ]
        },
        {
            name: 'Portfolio',
            to: "/portfolio",
            index: 3
        },
        // {
        //   name: 'Testimonials',
        //   to: "/testimonials",
        //   index: 4
        // },
        {
            name: 'Contact Us',
            to: "/contact_us",
            index: 5
        },
    ],

    SLIDER_DATA: [
        {
            Name: "Hardware",
            Details: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            Name: "Software jjsdhjshds kjsdhk",
            Details: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        }
    ],

    HOME_PAGE: {
        PART_1: {
            Heading: "One Step Hardware & Software Solution",
            Heading_Details: "Vision Infotech is the ideal solution for all types of offshore development requirements. We are a dependable software outsourcing company in India since we have an export base that specializes in all popular technologies and has a desire to learn and expand exponentially in light of new developments. We are strong, reliable, and uphold work ethic in everything we do, from offshore talent hiring in management and development to mobile app development; front-end development to core web development. We have Dedicated developers of all technology so we provide the best software development services.",
            Service_Data: [
                {
                    image: "/images/S1.jpg",
                    heading: "Custom Software Development",
                    details: "Our team of highly experienced developers brings you custom software development solutions tailored to your business’ specific vision and requirements.",
                },
                {
                    image: "/images/S2.jpg",
                    heading: "Web Application Development",
                    details: "You need a powerful, immersive, easy-to-use, and visually stunning website to get leads, retain them, and convert them into loyal customers. We deal with the latest and most popular web...",
                },
                {
                    image: "/images/S3.jpg",
                    heading: "Mobile App Development",
                    details: "Given how Android and iOS are the two most popular and widely used mobile platforms, creating and using an app for these platforms is mandatory to reach out to your audience.",
                },
                // {
                //     image: "/images/S4.jpg",
                //     heading: "SaaS Development",
                //     details: "Software as a service (SaaS) is one of the more popular business models due to its massive Return on Investment (ROI). Businesses of all sizes, across various industries, use this business model to grow.",
                // },
                {
                    image: "/images/S5.jpg",
                    heading: "eCommerce Development",
                    details: "We can help you unlock the potential of eCommerce and equip your business with a robust eCommerce website with the best features on the market.web developers who can create custom eCommerce web...",
                },
                {
                    image: "/images/S6.jpg",
                    heading: "Payment Gateway Integration",
                    details: "Giving your customers a seamless experience overall, from start to check out is vital. This includes payments. Payment gateways are crucial to making it easy for the customer to make payments instantly.",
                },
                {
                    image: "/images/S1.jpg",
                    heading: "Server Intention",
                    details: "Our team of highly experienced developers brings you custom Server Sntegration tailored to your business’ specific vision and requirements.",
                },
                {
                    image: "/images/S2.jpg",
                    heading: "Network Intention",
                    details: "You need a powerful, immersive, easy-to-use, and visually stunning website to get leads, retain them, and convert them into loyal customers. We deal with the latest and most popular web...",
                },
                {
                    image: "/images/S3.jpg",
                    heading: "Data Recovery",
                    details: "Given how Android and iOS are the two most popular and widely used mobile platforms, creating and using an app for these platforms is mandatory to reach out to your audience.",
                },
            ]
        },
        PART_2: {
            Heading: "Build Better Business Software With Vision Infotech",
            Heading_Details: "If you want to grow as a business in the best and fastest possible way, you need a premium software development solution that you can count on.",
            Service_Data: [
                {
                    Count: 190,
                    Name: "Completed Projects",
                    Details: "We have over 258 projects under our belt that we’ve completed for very satisfied clients."
                },
                {
                    Count: 5,
                    Name: "Running Projects",
                    Details: "We are currently working on over 45 projects of various types. Our team has enough bandwidth to handle multiple projects simultaneously."
                },
                {
                    Count: 63,
                    Name: "Clients",
                    Details: "We have over 78 clients across many sectors. We work with multiple businesses of different types and sizes."
                },
            ]
        },
        PART_3: {
            Heading: "Why Choose Us?",
            Heading_Details: "Software outsourcing is becoming incredibly popular. Many companies rely on trainees and interns in order to produce cost-effective software at a rapid pace. Hiring a specific human resource for a single project that you may or may not receive in the future appears to be a waste of money. Furthermore, if you know that you can get a module produced for a lesser price in another country without sacrificing quality or time, it is not a sensible idea to do so. For firms looking to save costs and focus on core business tasks, software outsourcing is a far better and smarter solution.",
            Service_Data: [
                {
                    Img: "/images/w_c.jpg",
                    Name: "Hire Dedicated Developers",
                    Details: "You get exclusive access to highly experienced developers who can craft solutions according to your requirements. This means web, app, eCommerce, custom software developers, and many more."
                },
                {
                    Img: "/images/w_c.jpg",
                    Name: "Dedicated Software Development Teams",
                    Details: "We have dedicated teams that cater to all your requirements, including web development, full-stack development, eCommerce development, and other services."
                },
                {
                    Img: "/images/w_c.jpg",
                    Name: "Timely Delivery",
                    Details: "We believe in delivering solutions as quickly and efficiently as we possibly can. You can expect us to craft solutions based on your requirements and deliver them in the stipulated time frame."
                },
            ]
        },
        PART_4: {
            SEC_DATA: [
                {
                    Id: "first",
                    Img: "/images/T1.jpg",
                    Name: "Technology Competence",
                    Details: "Our competence in various technologies empowers us to deliver scalable and robust applications, and that too, at competitive prices. Our developers continuously stay engrossed to learn new technology products and meet the ever-changing demands of our customers."
                },
                {
                    Id: "second",
                    Img: "/images/T3.jpg",
                    Name: "Ideas Paired With Passion",
                    Details: "We work tirelessly to bring fresh ideas to the table every time. Our expertise in the domain and industry enables us to provide uncomplicated business solutions. At Vision Infotech, we aim at delivering ideas that lead to client success and satisfaction."
                },
                {
                    Id: "third",
                    Img: "/images/T2.jpg",
                    Name: "Agile Development",
                    Details: "We are known for deploying the best practices and methods using agile development. Our client-centric approach ensures that we deliver superior results on time, within budget, and as promised."
                },
            ]
        },
        PART_5: {
            Heading: "Software Development Technologies",
            Heading_Details: "We make it a priority to update ourselves with the latest technologies and frameworks on the market for frontend, backend development and mobility.",
            SEC_DATA: [
                {
                    Id: "first",
                    Name: "Frontend",
                    Main_Data: [
                        {
                            image: "/images/language-images/Wordpress.png",
                            name: "Wordpress",
                            path: "/services/wordpress",
                        },
                        {
                            image: "/images/language-images/ajax.jpg",
                            name: "Ajax",
                            path: "/services/ajax",
                        },
                        {
                            image: "/images/language-images/bootstrap.png",
                            name: "Bootstrap",
                            path: "/services/bootstrap"
                        },
                        {
                            image: "/images/language-images/React.png",
                            name: "React",
                            path: "/services/react"
                        },
                        {
                            image: "/images/language-images/vue.png",
                            name: "Vue JS",
                            path: "/services/vue"
                        },
                        {
                            image: "/images/language-images/anguler.png",
                            name: "Angular",
                            path: "/services/anguler"
                        }
                    ]
                },
                {
                    Id: "second",
                    Name: "Backend",
                    Main_Data: [
                        {
                            image: "/images/language-images/NET.png",
                            name: ".NET",
                            path: "/services/net"
                        },
                        {
                            image: "/images/language-images/mysql.png",
                            name: "MY SQL",
                            path: "/services/mysql"
                        },
                        {
                            image: "/images/language-images/Wordpress.png",
                            name: "Wordpress",
                            path: "/services/wordpress"
                        },
                        {
                            image: "/images/language-images/mongodb.png",
                            name: "Mongo DB",
                            path: "/services/mongodb"
                        },
                        {
                            image: "/images/language-images/mssql.svg",
                            name: "MS SQL",
                            path: "/services/mssql"
                        }
                    ]
                },
                {
                    Id: "third",
                    Name: "Mobility",
                    Main_Data: [
                        {
                            image: "/images/language-images/ios.png",
                            name: "iOS",
                            path: "/services/iOS"
                        },
                        {
                            image: "/images/language-images/flutter.png",
                            name: "Flutter",
                            path: "/services/Flutter"
                        },
                        {
                            image: "/images/language-images/android.png",
                            name: "Android",
                            path: "/services/Android"
                        }
                    ]
                }
            ]
        },
        PART_6: {
            Heading: "FAQs Related To Software Development",
            Heading_Details: "Take a look at some of the most commonly asked questions we receive.",
            SEC_DATA: [
                {
                    Event_Key: 0,
                    Question: "1. What should I look for in a software application development company?",
                    Ans_p: "You should look out for the services the company offers, their dedicated teams, the overall experience they have, and the projects they have taken up and completed. Also, check if they have been recognized and awarded for their performance.",
                    Ans_LI: []
                },
                {
                    Event_Key: 1,
                    Question: "2. What do we do as a software development company?",
                    Ans_p: " We come up with custom solutions based on the business’ requirements.",
                    Ans_LI: ["We create programs with multiple functions that help potential customers", ">We create solutions for specific problems"]
                },
                {
                    Event_Key: 2,
                    Question: "3. How to choose a software development services company?",
                    Ans_p: "Choose the right software development services company based on:",
                    Ans_LI: ["Company reviews", "The company’s portfolio"]
                },
                {
                    Event_Key: 3,
                    Question: "4. What are the software development services provided by our software development company?",
                    Ans_p: "We provide web, frontend, backend, app, eCommerce, custom software, full-stack, and SaaS development solutions.",
                    Ans_LI: []
                },
                {
                    Event_Key: 4,
                    Question: "5. What are the types of software development?",
                    Ans_p: "The different types of software development:",
                    Ans_LI: ["Web Development", "Data Science Solutions", "Mobile App Development", "Back-end Development", "Cloud Computing", "API Development"]
                },
                {
                    Event_Key: 5,
                    Question: "6. What is the most important step to develop custom software?",
                    Ans_p: "To develop custom software, you need to find the right team of developers who understand what you want the software to do. This means they need to be aware of your business processes and business vision before they implement the right features.",
                    Ans_LI: []
                },
                {
                    Event_Key: 6,
                    Question: "7. What software development tools do you use to develop apps and software?",
                    Ans_p: " We use many tools for development, including GitHub, Trello, BitBucket, Jira, etc",
                    Ans_LI: []
                },
                {
                    Event_Key: 7,
                    Question: "8. What are the software development life cycle phases?",
                    Ans_p: "Software Development Life Cycle is made up of seven different phases, which are as follows:",
                    Ans_LI: ["Planning", "Analysis", "Design", "Development", "Testing", "Deployment", "Support and Maintenance"]
                }
            ]
        }
    },

    ABOUT_US: {
        Slider_Heading: "About us",
        Slider_Heading_Details: "Vision Infotech is the one-stop destination that addresses all your technological needs to scale and grow your business.<br />Our mission is simple – YOUR GROWTH.",
        PART_1: {
            Heading: "Our Vision",
            Heading_Details: "To accelerate your business’s growth with a wide variety of technology solutions. Yes, your growth is our vision. Established in 2012, Vision Infotech is unifying its business domain expertise, technical proficiency, and vast knowledge of the latest industrial developments to create a future-ready business for you."
        },
        PART_2: {
            Heading: "Our Mission",
            Heading_Details: "To accelerate your business’s growth with a wide variety of technology solutions. Yes, your growth is our vision. Established in 2012, Vision Infotech is unifying its business domain expertise, technical proficiency, and vast knowledge of the latest industrial developments to create a future-ready business for you.",
            Question: "When you partner with Vision Infotech, you can expect:",
            Ans_LI: ["The right frame of project management efforts", "A client-centric approach to build the best products", "A high degree of security throughout the projects"]
        },
        PART_3: {
            Heading: "Our Values",
            Heading_Details: "We are a dominating IT solutions provider company that has catered to hundreds of clients, and we believe our values keep them bringing more business.",
            SEC_DATA: [
                {
                    img: "/images/A_V_1.jpg",
                    title: "Respect",
                    details: "We strive to show deep respect for employees inside and outside our company and for the clients with whom we collaborate. We respect the user’s voice, too!"
                },
                {
                    img: "/images/A_V_2.jpg",
                    title: "Exceptional value",
                    details: "Vision Infotech focuses on delivering exceptional value to its customers using our knowledge and consultative approach. Our purpose is simple - DELIVER WOW."
                },
                {
                    img: "/images/A_V_3.jpg",
                    title: "Authenticity",
                    details: "We value authenticity and its connection to our mission. This helps our clients trust us and employees to inspire each other and make work more meaningful."
                },
                {
                    img: "/images/A_V_4.jpg",
                    title: "Leadership",
                    details: "Our creative leaders inspire growth and innovation through learning. We have a passion for progress, and thus, we achieve success by celebrating the success of others."
                },
                {
                    img: "/images/A_V_5.jpg",
                    title: "Quest for perfection",
                    details: "We chase perfection in every work we take at hand and thrive to catch excellence. With an uncompromising focus on the deliverables, we achieve excellence together."
                },
                {
                    img: "/images/A_V_6.jpg",
                    title: "Personal Approach",
                    details: "We’re growing not for ourselves but for everyone associated with us. We work in an environment that fosters personal development and infuses professional growth."
                }
            ]
        }
    },

    SERVICE_DATA: {
        SOFTWARE: {
            Slider_Heading: "Software Services",
            Slider_Heading_Details: "Vision Infotech is the one-stop destination that addresses all your technological needs to scale and grow your business.Our mission is simple – YOUR GROWTH.",
            PART_1: {
                Heading: "Software Services",
                Heading_Details: "We make it a priority to update ourselves with the latest technologies and frameworks on the market for frontend, backend development and mobility."
            },
            PART_2: [
                {
                    Id: "first",
                    Name: "Frontend",
                    SEC_DATA: [
                        {
                            image: "/images/language-images/Wordpress.png",
                            name: "Wordpress",
                            path: "/services/wordpress"
                        },
                        {
                            image: "/images/language-images/ajax.jpg",
                            name: "Ajax",
                            path: "/services/ajax"
                        },
                        {
                            image: "/images/language-images/bootstrap.png",
                            name: "Bootstrap",
                            path: "/services/bootstrap"
                        },
                        {
                            image: "/images/language-images/React.png",
                            name: "React",
                            path: "/services/react"
                        },
                        {
                            image: "/images/language-images/vue.png",
                            name: "Vue JS",
                            path: "/services/vue"
                        },
                        {
                            image: "/images/language-images/anguler.png",
                            name: "Angular",
                            path: "/services/anguler"
                        }
                    ]
                },
                {
                    Id: "second",
                    Name: "Frontend",
                    SEC_DATA: [{
                        image: "/images/language-images/NET.png",
                        name: ".NET",
                        path: "/services/net"
                    },
                    {
                        image: "/images/language-images/mysql.png",
                        name: "MY SQL",
                        path: "/services/MySQL"
                    },
                    {
                        image: "/images/language-images/Wordpress.png",
                        name: "Wordpress",
                        path: "/services/wordpress"
                    },
                    {
                        image: "/images/language-images/mongodb.png",
                        name: "Mongo DB",
                        path: "/services/MongoDB"
                    },
                    {
                        image: "/images/language-images/mssql.svg",
                        name: "MS SQL",
                        path: "/services/MsSQL"
                    }]
                },
                {
                    Id: "third",
                    Name: "Mobility",
                    SEC_DATA: [{
                        image: "/images/language-images/ios.png",
                        name: "IOS",
                        path: "/services/iOS"
                    },
                    {
                        image: "/images/language-images/flutter.png",
                        name: "Flutter",
                        path: "/services/Flutter"
                    },
                    {
                        image: "/images/language-images/android.png",
                        name: "Android",
                        path: "/services/Android"
                    }]
                }
            ]
        },
        HARDWARE: {
            Slider_Heading: "Hardware Services",
            Slider_Heading_Details: "Vision Infotech is the one-stop destination that addresses all your technological needs to scale and grow your business.Our mission is simple – YOUR GROWTH.",
            PART_1: {
                Heading: "Hardware Services",
                Heading_Details: "We make it a priority to update ourselves with the latest technologies and frameworks on the market for frontend, backend development and mobility."
            },
            PART_2: [
                {
                    Id: "first",
                    Name: "HardWare",
                    SEC_DATA: [
                        {
                            image: "/images/language-images/Wordpress.png",
                            name: "Server Intention",
                            path: "/services/NetworkIntention"
                        },
                        {
                            image: "/images/language-images/ajax.jpg",
                            name: "Network Intention",
                            path: "/services/ServerIntention"
                        },
                        {
                            image: "/images/language-images/bootstrap.png",
                            name: "Data Recovery",
                            path: "/services/DataRecovery"
                        }
                    ]
                }
            ]
        }
    },

    CONTACT_US: {
        Slider_Heading: "Contact Us",
        Slider_Heading_Details: "We’re committed to serving you with the best possible IT solutions",
        PART_1: {
            Heading: "We’re here to help",
            Heading_Details: "Got an idea? Want to transform it into a reality? We’ve got you covered!"
        },
        PART_2: [
            {
                Img: "/images/heade-office.jpg",
                Heading: "Head Office",
                Details: "Unit A4, Livingston Court, 55 Peel Road, Harrow London"
            },
            {
                Img: "/images/phone-call.jpg",
                Heading: "Call Us",
                Details: "+44 23562 56323"
            },
            {
                Img: "/images/email.jpg",
                Heading: "Mail Us",
                value: "array",
                Details: ["hr@micro.com", "sales@micro.com"]
            }
        ]
    },

    SERVICE_PAGES: {
        Wordpress: {
            card_Data: [
                {
                    title: "WordPress Integration & Customization",
                    details: "We are a friendly squad of WordPress enthusiasts who keep their nails sharpened with the latest features, upgrades, and integration, as well as years of domain experience."
                },
                {
                    title: "Enterprise WordPress Development",
                    details: "We offer end-to-end WordPress high-performance and flexible Enterprise CMS Development Services relating to corporate web portals and e-commerce cases."
                },
                {
                    title: "WordPress Support & Maintenance",
                    details: "As a world-class WordPress development company, we are here to assist you with seamless support and maintenance with our resilient and reasonable products."
                },
                {
                    title: "WordPress CMS Development",
                    details: "We build feature-rich content management systems using WordPress. Our years of experience allow us to create flawless custom CMS websites."
                },
                {
                    title: "WordPress eCommerce Solution",
                    details: "We create a tailored eCommerce website for your business. We also integrate necessary plugins and features to build a functional eCommerce website that will give a robust online presence."
                },
                {
                    title: "WordPress Migration Service",
                    details: "We manage the entire migration process, from coding to content, of your existing website to WordPress with zero downtime, allowing you to take advantage of all advanced functionality."
                },
            ],
            language_Name: "WordPress",
            h_1: "Extend your reach with innovation",
            d_1: "We deliver world-class WordPress web development services to enterprises, small businesses, government organizations, and startups who want to create customized WordPress websites or plan to migrate their existing website. To keep you ahead of the competition, Vision Infotech creates interactive and professional websites focused on the client’s specifications and ideology.",
            h_2: "What We Do?",
            d_2: "Scaling business to new heights with MS SQL Database Development Services.",
        },
        AJEX: {
            card_Data: [
                {
                    title: "Analysis",
                    details: "When you hire our AJAX developer, we seek to learn about your target audience as well as your company goals and then take it from there."
                },
                {
                    title: "Planning",
                    details: "Hire our top AJAX developers who analyze and assess the project requirements before executing the design."
                },
                {
                    title: "Prototype",
                    details: "Our AJAX developer will build a wireframe with resources and mock-ups as planned."
                },
                {
                    title: "Development",
                    details: "On approval of the prototype, your handpicked AJAX developer gets to work on shaping the product."
                },
                {
                    title: "Test and Launch",
                    details: "We ensure that the application is optimized and bug-free before launching."
                },
            ],
            language_Name : "Ajex",
            h_1 : "Implement AJAX in your Dream Website",
            d_1 : "Vision Infotech is a well-known AJAX web development company specializing in developing web applications, user-friendly interfaces, and fully immersive AJAX solutions. We use AJAX programming to share data between servers and upgrade parts of a website without having to reload the whole tab. Yes, it is achievable using only AJAX technology. We, at Vision Infotech, have comprehensive experience in many AJAX web programming technologies, allowing us to provide authentic, reliable, and robust AJAX web application services for any kind of website.",
            h_2 : "What We Do?",
            d_2 : "Comprehensive AJAX Development Process.",
        },
        ANDROID: {
            card_Data: [
                {
                    title: "Analysis",
                    details: "WWe start by understanding the Android app architecture and requirements, and then we customize to the needs of each organization. This will provide us with a good view of the prerequisite as well as the fundamental concept behind it."
                },
                {
                    title: "Wireframing & Designing",
                    details: "Our expert team of Android Developers ensures that they understand the app prototyping process, before starting the wireframing process. Then we take to develop and finish the app design in a reliable manner."
                },
                {
                    title: "Development",
                    details: "We understand the purpose of designing each and everything inside an Android app before preparing the Wireframe template. In the next stage, we built the API Integration for your mobile app development."
                },
                {
                    title: "QA Testing Process",
                    details: "Our Mobile App Tester knows the MVC Architecture and does three levels of Android app checking. We also run real-time checks on Android applications that have been certified by the app store. When errors are found, they are fixed immediately and without further notice."
                },
                {
                    title: "Deployment",
                    details: "Finally, we review the app's real-time efficiency and then validate its accessibility, functionality, and reliability. If any glitches or problems are found, they are fixed prior to launch."
                },
            ],
            language_Name : "Android",
            h_1 : "Adopt a Streamlined Approach with Our Android Developers",
            d_1 : "Vision Infotech, a leading Android Software Development Services company in India. We have extensive experience in developing apps that meet industry standards and result in multiple downloads. We always have a solution for a real-world challenge, so any sort of specification can be fulfilled by our devoted team of professionals.",
            h_2 : "Android App Development Process",
            d_2 : "The following steps will help you understand our Android app development life cycle.",
        },
        ANGULER: {
            card_Data: [
                {
                    title: "WordPress Integration & Customization",
                    details: "We are a friendly squad of WordPress enthusiasts who keep their nails sharpened with the latest features, upgrades, and integration, as well as years of domain experience."
                },
                {
                    title: "Enterprise WordPress Development",
                    details: "We offer end-to-end WordPress high-performance and flexible Enterprise CMS Development Services relating to corporate web portals and e-commerce cases."
                },
                {
                    title: "WordPress Support & Maintenance",
                    details: "As a world-class WordPress development company, we are here to assist you with seamless support and maintenance with our resilient and reasonable products."
                },
                {
                    title: "WordPress CMS Development",
                    details: "We build feature-rich content management systems using WordPress. Our years of experience allow us to create flawless custom CMS websites."
                },
                {
                    title: "WordPress eCommerce Solution",
                    details: "We create a tailored eCommerce website for your business. We also integrate necessary plugins and features to build a functional eCommerce website that will give a robust online presence."
                },
                {
                    title: "WordPress Migration Service",
                    details: "We manage the entire migration process, from coding to content, of your existing website to WordPress with zero downtime, allowing you to take advantage of all advanced functionality."
                },
            ],
            language_Name : "Anguler",
            h_1 : "Extend your reach with innovation",
            d_1 : "We deliver world-class WordPress web development services to enterprises, small businesses, government organizations, and startups who want to create customized WordPress websites or plan to migrate their existing website. To keep you ahead of the competition, Vision Infotech creates interactive and professional websites focused on the client’s specifications and ideology.",
            h_2 : "What We Do?",
            d_2 : "Scaling business to new heights with MS SQL Database Development Services.",
        },
        BOOTSTRAP: {
            card_Data: [
                {
                    title: "Analysis",
                    details: "When you hire our Bootstrap developer, we seek to learn about your target audience as well as your company goals and then take it from there."
                },
                {
                    title: "Planning",
                    details: "Hire our top Bootstrap developers who analyze and assess the project requirements before executing the design."
                },
                {
                    title: "Prototype",
                    details: "Our Bootstrap developer will build a wireframe with resources and mock-ups as planned."
                },
                {
                    title: "Development",
                    details: "On approval of the prototype, your handpicked Bootstrap developer gets to work on shaping the product."
                },
                {
                    title: "Test and Launch",
                    details: "We ensure that the application is optimized and bug-free before launching."
                },
            ],
            language_Name : "Bootstrap",
            h_1 : "Turn your Start-ups into Brands with Our Bootstrap Developers",
            d_1 : "Our Bootstrap Developers have considerable experience developing a wide variety of projects using the Bootstrap Framework. Using the Bootstrap Framework, we build browser-compatible, high-quality, pixel-perfect, completely responsive, and SEO-standardized templates. Our Bootstrap Programmers have completed several projects using Bootstrap with diverse styles of designs and clients from all over the world. As a successful company, we have tailored our services to the requirements of the customers.",
            h_2 : "What We Do?",
            d_2 : "Comprehensive Bootstrap Development Process",
        },
        FLUTTR: {
            card_Data: [
                {
                    title: "Discover",
                    details: "We brainstorm ideas to achieve game-changing outcomes for your Flutter app development. We understand your vision, and our mission is to provide you with the best Flutter mobile app solution possible."
                },
                {
                    title: "Design",
                    details: "We are committed to developing world-class Flutter applications that have an outstanding user interface. We create a number of wireframes, draft a program architecture, and quickly prototype the solution based on the selected mockups."
                },
                {
                    title: "Develop",
                    details: "Our Flutter app developers use their years of experience and best development practices to provide the app with a competitive edge."
                },
                {
                    title: "Testing",
                    details: "Our developers put the app into rigorous testing against a set of metrics. We also provide regular product upgrades and maintenance after the launch to ensure that you attract as many end customers as possible."
                },
                {
                    title: "Deployment",
                    details: "Finally, we review the real-time efficiency of the app and validate its accessibility, functionality, and reliability."
                },
            ],
            language_Name : "Flutter",
            h_1 : "Transform your Business with Our Flutter Developers",
            d_1 : "Flutter App Developers in India are well-known over the world for their hard work in app creation. Vision Infotech is one of the leading software companies in the region for meeting the needs of skilled Flutter App Developers worldwide, whether remotely or onsite, at the best possible pricing.Vision Infotech is an excellent choice when you need to hire a Flutter developer. As a well-known Flutter app development team, we use this classic cross-platform architecture to create robust Android and iOS apps that help you scale new heights in your market. Hire our handpicked Flutter developers to expand the scope of your application based on the needs of your client.",
            h_2 : "Flutter Development Process",
            d_2 : "The following steps will help you understand our Flutter app development.",
        },
        IOS: {
            card_Data: [
                {
                    title: "Discover",
                    details: "We brainstorm ideas to achieve game-changing outcomes for your iOS app development. We understand your vision, and our mission is to provide you with the best iOS mobile app solution possible."
                },
                {
                    title: "Design",
                    details: "We are committed to developing world-class iOS applications that have an outstanding user interface. We create a number of wireframes, draft a program architecture, and quickly prototype the solution based on the selected mockups."
                },
                {
                    title: "Develop",
                    details: "Our iOS app developers use their years of experience and best development practices to provide the app with a competitive edge."
                },
                {
                    title: "QA Testing Process",
                    details: "Our QA engineers put the app into rigorous testing against a set of metrics. We also provide regular product upgrades and maintenance after the launch to ensure that you attract as many end customers as possible."
                },
                {
                    title: "Deployment",
                    details: "Finally, we review the real-time efficiency of the app and validate its accessibility, functionality, and reliability."
                },
            ],
            language_Name : "iOS",
            h_1 : "Empower your Business with Custom iOS Applicatio",
            d_1 : "Vision Infotech is a leading iOS application development company that provides you with extremely talented iOS developers. We produce feature-rich and fast-loading iOS applications based on the most recent iOS SDK technologies. Hire an iOS app developer from us to get world-class iOS app creation at competitive prices. We use an agile planning approach and a quality lifecycle for every iOS application developed.",
            h_2 : "iOS Development Process",
            d_2 : "The following steps will help you understand our iOS app development.",
        },
        MONGODB: {
            card_Data: [
                {
                    title: "Performance Optimization",
                    details: "We are a leading MongoDB development company, and our team evaluates data mining from websites using MongoDB development, including languages like Visual Studio and C#."
                },
                {
                    title: "Restful API Development",
                    details: "Our team develops RESTful API frameworks, servers, and interfaces that enable languages like Ruby, Node.js, AngularJS, HTML, and Python to communicate with, write to, and read from MongoDB files."
                },
                {
                    title: "Big Data Efficiency",
                    details: "It can be difficult for MySQL to process data in a big data project. As a top MongoDB development company, our team understands that MongoDB Development is a quick, effective method to gather data across multiple websites."
                },
                {
                    title: "MEAN Stack Development",
                    details: "Our full-stack JavaScript MEAN developers use MongoDB as a NoSQL database solution. MongoDB is dynamic and grows alongside any JavaScript project."
                },
                {
                    title: "Database Model",
                    details: "By preserving data access, validation rules, and indexing capabilities, our developers use MongoDB to store and combine data for any structure."
                },
            ],
            language_Name : "MongoDB",
            h_1 : "Leverage the Power of MongoDB to Build Modern Applications",
            d_1 : "As the leading mobile app development company, we, at Vision Infotech, have attained that market value through hard work and professionalism. Our developer team is capable of research, UX, UI programmers, and scripting, allowing them to manage the project on their own. Our extensive experience with MongoDB means that we build completely usable solutions. Consequently, our expert MongoDB database developer can provide an exceptional market solution and support you in developing groundbreaking products for your company.",
            h_2 : "What We Do?",
            d_2 : "We offer MongoDB database development services that help you meet any kind of business goal.",
        },
        MSSQL: {
            card_Data: [
                {
                    title: "Custom Database Design",
                    details: "Vision Infotech provides the best service with custom database tools for computing devices, websites, and smartphone apps."
                },
                {
                    title: "Database Design & Development",
                    details: "Vision Infotech takes pride in providing a comprehensive collection of database management services tailored to your business requirements."
                },
                {
                    title: "Database Architecture Design",
                    details: "Vision Infotech will build your database solutions that meet the needs of your business."
                },
                {
                    title: "Administration & Support",
                    details: "With our DBA support program, we have helped multiple organizations in lowering support costs as well as improving overall efficiency and availability."
                },
                {
                    title: "SQL/T-SQL Programming",
                    details: "We also do query tuning and optimization. This is made possible by our extensive understanding and use of the standard ANSI SQL language and also complex Transact-SQL (T-SQL) constructs."
                },
            ],
            language_Name : "MS SQL",
            h_1 : "Upgrade Your Business Online with Our MS SQL Database Development Services",
            d_1 : "Vision Infotech, one of the leading Microsoft SQL Server Development Companies in India, has SQL Server Developers with unrivaled experience in various areas of Microsoft SQL Server Development, including SQL Server Database Development, SQL Server Web Development, and SQL Server Application Development. If you are a start-up, small company, or a large corporation, you can rely on our team of highly qualified SQL Server Developers to provide you with the best in industry Microsoft SQL Server Development Services depending on customer database specifications.",
            h_2 : "What We Do?",
            d_2 : "Scaling business to new heights with MS SQL Database Development Services.",
        },
        MYSQL: {
            card_Data: [
                {
                    title: "API Integration",
                    details: "By integrating APIs that bridge between multiple web applications, our developers provide PHP-based solutions through REST and SOAP. We build custom APIs as well as embed third-party APIs into the current frameworks. To decode info, our developers use JSON, SOAP, XML, and REST API integrations."
                },
                {
                    title: "Custom PHP Development",
                    details: "We build dynamic and efficient PHP solutions that provide you with fast, secure, and scalable services to expand your business."
                },
                {
                    title: "PHP Framework Customization",
                    details: "We configure third-party PHP frameworks such as CodeIgniter, Zend, Laravel, Symfony, and others to build ready-to-use functionality for applications. Open-source frameworks and PHP-based frameworks are ideal for personalized web-based applications."
                },
                {
                    title: "Maintenance and Optimization",
                    details: "Our expert PHP developers optimize the application computing capability and load time. Our PHP web development services integrate technology and business ideas to make the website more user-friendly."
                },
            ],
            language_Name : "MY SQL",
            h_1 : "Build Dynamic Database Applications with Our MySQL Developers",
            d_1 : "Our technical quality in PHP front-end, eCommerce solutions, and online applications, combined with agile development processes, has enabled us to provide a wide range of PHP-related services. When you hire PHP developers in India, we can provide you with some tricky solutions. Hire top PHP developers who will follow PHP best practices for your e-commerce platform to ensure a seamless client buying experience. Hire professional PHP developers in India from Vision Infotech who are skilled not only in designing custom PHP apps but also in integrating and upgrading existing applications to PHP. Hiring a dedicated PHP developer requires considering not only the candidate’s in-depth knowledge of PHP but also a number of additional factors, as stated below.Our backend experts’ capacity to provide PHP app development projects according to precise client needs is the pinnacle of our services. As a leading software company, we make certain to assign the most experienced PHP developers to each project. Our PHP developers are well-versed in the PHP framework and use it to create fantastic, unique online solutions for our clients.Vision Infotech is a leading MySQL software company in India with extensive experience managing and maintaining databases for companies of all sizes, including start-ups, enterprises, and entrepreneurs. Our expert team has deep knowledge in managing and handling the database of businesses. We build innovative digital solutions to satisfy our clients’ specific business needs and address their challenges. Our strategies allow our clients to stay on top of their game while still revolutionizing the industry.",
            h_2 : "MySQL Development Process",
            d_2 : "We provide MySQL web development processes that are scalable in high-complexity environments and help you meet any kind of business goal.",
        },
        NET: {
            card_Data: [
                {
                    title: "Product Customization",
                    details: "We are proficient in delivering tailored applications after proper research of your market, your products and services, and your business goals."
                },
                {
                    title: ".NET Desktop Application Development",
                    details: "With best practices and sophisticated support systems, We create highly scalable .NET applications for desktops across many industries."
                },
                {
                    title: ".NET Mobile Application Development",
                    details: "We develop highly efficient mobile applications for your business using the latest trends. We also help you migrate apps while retaining key functionalities."
                },
                {
                    title: ".NET Integration Services",
                    details: "We ensure the seamless working of the .NET application with other systems by integrating them to provide an end-to-end user experience."
                },
                {
                    title: "Application Performance tuning",
                    details: "We help you to enhance the features of the applications to improve the capabilities with current industry trends."
                },
                {
                    title: "Maintenance and Support",
                    details: "We provide 24X7 support services to keep the applications running without any lags"
                },
            ],
            language_Name : ".NET",
            h_1 : "Your Top Source of .Net Developers to Build Scalable Softwares",
            d_1 : "Are you looking for certified remote .NET developers who are willing to work within your project budget? For global clients, our first-time-right offshore .NET developers create powerful, secure, and scalable web solutions at competitive pricing. Hire .NET developers in India from Vision Infotech on an hourly or full-time (dedicated monthly) basis and Get engaging, inventive, and user-friendly web app solutions for your business needs. Hire .NET developers in India for the best and most satisfying results. They have a team of software programmers, app developers, and web coders who are all experts in their field. We provide .NET solutions with the scalability and compatibility capabilities to quickly respond to today’s complex computing world. We have advanced technologies for web-based applications, enterprise software, and distributed apps with an emphasis on stability, accessibility, and usability.",
            h_2 : "What We Do?",
            d_2 : "Many believe the Microsoft.NET platform to be the best coding language since it allows developers to not only create strong business solutions but also to modify the codes to a large level. The best aspect of hiring dedicated .NET developers in India is that they are skilled at creating safe, robust, scalable, and engaging web apps. They can assist you in making use of the.NET platform’s superior scalability and integration capabilities. You will get not only the greatest resources but also a cost-effective solution when you hire a professional team of .NET software developers to put together your project. As a result, having quality-focused engineers on your team can save you both time and money.",
        },
        REACTLEN: {
            card_Data: [
                {
                    title: "Enterprise React Web Apps",
                    details: "Our React.js team develops web applications that are secure, scalable, and reliable for large-scale enterprises."
                },
                {
                    title: "React.js Component Development",
                    details: "Enterprises with a large number of web apps can take advantage of our React.js component development services to quickly build world-class applications."
                },
                {
                    title: "Interactive UI Development",
                    details: "We develop interactive and user-friendly business applications by leveraging the power of robust React.js libraries."
                },
                {
                    title: "Migration & Integration Services",
                    details: "Our React.js developers will help you in integrating the existing web applications and frameworks with React.js."
                },
                {
                    title: "Custom Web App Development",
                    details: "Vision Infotech team provides quick deployment of React.js development projects as well as continuous support for existing projects."
                },
                {
                    title: "React.js Consulting",
                    details: "Our React.js development team provides technology consulting to identify the right solution for your business needs."
                },

            ],
            language_Name : "React",
            h_1 : "Leverage React.js to Delight your Users",
            d_1 : "Vision Infotech has always been at the forefront of technology innovation, providing high-quality solutions to its customers. Our in-house team is filled with highly talented and tech-savvy React.js developers as well as industry experts who collaborate to build best-in-class React.js applications and solutions. We also believe in the versatility of combining the React.js framework with others such as backbone.js and angular.js.",
            h_2 : "What We Do?",
            d_2 : "Our front-end React.js developers have extensive expertise utilizing ReactJS’s unique capabilities, such as code reusability and faster rendering, to create highly scalable and performance-oriented web apps. Hire ReactJS developers from Vision Infotech to get top-notch ReactJS solutions, such as the ones shown below. Our React.js developers combine the power of TypeScript with the strong frontend framework React.js, making it much easier for developers to work, resulting in faster app development at lower costs and higher efficiency. Hire our expert React.js developers to integrate it with TypeScript for more readable, easy-to-understand code, greater support for JSX, and existing React projects, among other benefits.We design and develop highly functional Angular web and mobile apps that are exceptional in terms of adaptability, scalability, stability, and security.",
        },
        VUE: {
            card_Data: [
                {
                    title: "Custom Application",
                    details: "Get customized Vue.js web development services from planning to development depending on your business needs."
                },
                {
                    title: "Single Page Application",
                    details: "When it comes to designing SPAs, Vue.js is the most common application. It ensures responsiveness and efficiency."
                },
                {
                    title: "Vue.js Consultation",
                    details: "We offer highly efficient and effective solutions for start-ups and enterprises in the B2B and B2C markets by using the Vue.js framework."
                },
                {
                    title: "Migration To Vue.js",
                    details: "We make it possible for our customers to move from the old framework to Vue.js in a meticulous manner."
                },
                {
                    title: "Support & Maintenance",
                    details: "Our support and maintenance team has vast experience in handling Vue.js web applications."
                },
                {
                    title: "Third-Party Integration With Vue.js",
                    details: "Our team of dedicated Vue.js developers will help you incorporate Vue.js into the third-party-developed web application."
                },
            ],
            language_Name : "Vue JS",
            h_1 : "Dominate Your Market With Captivating Visual Experience",
            d_1 : "Vision Infotech is well-recognized for Vue.js development and services. We have built some of the best appealing interfaces for our customers including real and complex applications using the Vue.js platform. Our Vue.js team of developers integrates user-centric design, usability practice, and software functionality to provide an outstanding experience to enterprises and small businesses.",
            h_2 : "What We Do?",
            d_2 : "We build powerful front-ends, real-time applications, and single-page apps with Vue.js.",
        },
        SERVER_INTENTION: {
            card_Data: [
                {
                    title: "Custom Application",
                    details: "Get customized Vue.js web development services from planning to development depending on your business needs."
                },
                {
                    title: "Single Page Application",
                    details: "When it comes to designing SPAs, Vue.js is the most common application. It ensures responsiveness and efficiency."
                },
                {
                    title: "Vue.js Consultation",
                    details: "We offer highly efficient and effective solutions for start-ups and enterprises in the B2B and B2C markets by using the Vue.js framework."
                },
                {
                    title: "Migration To Vue.js",
                    details: "We make it possible for our customers to move from the old framework to Vue.js in a meticulous manner."
                },
                {
                    title: "Support & Maintenance",
                    details: "Our support and maintenance team has vast experience in handling Vue.js web applications."
                },
                {
                    title: "Third-Party Integration With Vue.js",
                    details: "Our team of dedicated Vue.js developers will help you incorporate Vue.js into the third-party-developed web application."
                },
            ],
            language_Name : "Server Intention",
            h_1 : "Dominate Your Market With Captivating Visual Experience",
            d_1 : "Vision Infotech is well-recognized for Vue.js development and services. We have built some of the best appealing interfaces for our customers including real and complex applications using the Vue.js platform. Our Vue.js team of developers integrates user-centric design, usability practice, and software functionality to provide an outstanding experience to enterprises and small businesses.",
            h_2 : "What We Do?",
            d_2 : "We build powerful front-ends, real-time applications, and single-page apps with Vue.js.",
        },
        NETWORK_INTENTION: {
            card_Data: [
                {
                    title: "Custom Application",
                    details: "Get customized Vue.js web development services from planning to development depending on your business needs."
                },
                {
                    title: "Single Page Application",
                    details: "When it comes to designing SPAs, Vue.js is the most common application. It ensures responsiveness and efficiency."
                },
                {
                    title: "Vue.js Consultation",
                    details: "We offer highly efficient and effective solutions for start-ups and enterprises in the B2B and B2C markets by using the Vue.js framework."
                },
                {
                    title: "Migration To Vue.js",
                    details: "We make it possible for our customers to move from the old framework to Vue.js in a meticulous manner."
                },
                {
                    title: "Support & Maintenance",
                    details: "Our support and maintenance team has vast experience in handling Vue.js web applications."
                },
                {
                    title: "Third-Party Integration With Vue.js",
                    details: "Our team of dedicated Vue.js developers will help you incorporate Vue.js into the third-party-developed web application."
                },
            ],
            language_Name : "Network Intention",
            h_1 : "Dominate Your Market With Captivating Visual Experience",
            d_1 : "Vision Infotech is well-recognized for Vue.js development and services. We have built some of the best appealing interfaces for our customers including real and complex applications using the Vue.js platform. Our Vue.js team of developers integrates user-centric design, usability practice, and software functionality to provide an outstanding experience to enterprises and small businesses.",
            h_2 : "What We Do?",
            d_2 : "We build powerful front-ends, real-time applications, and single-page apps with Vue.js.",
        },
        DATA_RECOVERY: {
            card_Data: [
                {
                    title: "Custom Application",
                    details: "Get customized Vue.js web development services from planning to development depending on your business needs."
                },
                {
                    title: "Single Page Application",
                    details: "When it comes to designing SPAs, Vue.js is the most common application. It ensures responsiveness and efficiency."
                },
                {
                    title: "Vue.js Consultation",
                    details: "We offer highly efficient and effective solutions for start-ups and enterprises in the B2B and B2C markets by using the Vue.js framework."
                },
                {
                    title: "Migration To Vue.js",
                    details: "We make it possible for our customers to move from the old framework to Vue.js in a meticulous manner."
                },
                {
                    title: "Support & Maintenance",
                    details: "Our support and maintenance team has vast experience in handling Vue.js web applications."
                },
                {
                    title: "Third-Party Integration With Vue.js",
                    details: "Our team of dedicated Vue.js developers will help you incorporate Vue.js into the third-party-developed web application."
                },
            ],
            language_Name : "Data Recovery",
            h_1 : "Dominate Your Market With Captivating Visual Experience",
            d_1 : "Vision Infotech is well-recognized for Vue.js development and services. We have built some of the best appealing interfaces for our customers including real and complex applications using the Vue.js platform. Our Vue.js team of developers integrates user-centric design, usability practice, and software functionality to provide an outstanding experience to enterprises and small businesses.",
            h_2 : "What We Do?",
            d_2 : "We build powerful front-ends, real-time applications, and single-page apps with Vue.js.",
        },

    }
}


export default CONSTANTS;