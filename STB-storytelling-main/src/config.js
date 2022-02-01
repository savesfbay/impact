var config = {
    style: 'mapbox://styles/savesfbay/ckyewr83k06lp14p6e0qsds2u', //make style in studio
    accessToken: 'pk.eyJ1Ijoic2F2ZXNmYmF5IiwiYSI6ImNrbjViZXI4NjAybDIydW0xcng1NHNhZWYifQ.pM2ajcKiAeYTPfUUsfu-bQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Save The Bay',
    subtitle: 'Impact',
    byline: '',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'founding-feature',
            alignment: 'center',
            hidden: false,
            title: 'Save The Bay Founding, 1961',
            image: 'images/Founders.jpg',
            description: 'In the early 1960s three East Bay women, Sylvia McLaughlin, Esther Guilck and Kay Kerr, were watching the shoreline of the Bay being destroyed. The Oakland Tribune had reported on a federal study showing the shallow parts of the Bay could be filled for development, leaving only a narrow river for navigation, illustrated with an image captioned "Bay or River?"',
            location: {
                center: [-122.33877, 37.76192],
                zoom: 9.24,
                pitch: 0.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'founding-short',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'images/Founding.jpg',
            description: 'They decided to take action, and gathered local Bay Area environmental leaders to ask who was going to save the Bay. When none volunteered, the women started the <i>Save San Francisco Bay Association</i> and quickly recruited friends to the cause. They attended city council meetings, opposed local plans to fill in the Bay they loved, and built public support to stop the filling.',
            location: {
                center: [-122.33877, 37.76192],
                zoom: 9.24,
                pitch: 0.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'bcbd-feature',
            alignment: 'center',
            hidden: false,
            title: 'Creating the San Francisco Bay Conservation and Development Commission, 1969',
            image: 'images/BCDC.jpeg',
            description: 'In 1965, Save The Bay led the campaign to pass a state law establishing a study commission to devise a plan for San Francisco Bay. Chaired by Sunset Magazine publisher Mel Lane with journalist Joe Bodovitz as its director, the commission held public hearings and enlisted experts on all aspects of the Bay’s needs and threats. The report recommended a permanent commission to regulate use of the Bay and its shoreline, limit filling, and increase public access and enjoyment. In 1969, the bill that created this Bay Conservation & Development Commission (BCDC) passed the legislature by one vote and was signed into law by Governor Reagan. It became the first coastal protection agency in the world and the model for California’s Coastal Commission and many others. <br> Today BCDC has 27 Commissioners, local elected officials and public members, who continue its mission. Through BCDC permits, ports, marinas, parks, wildlife refuges, and trails have been created and protected, increasing public access from only 6 miles to hundreds of miles over the last 50 years.  Learn more about BCDC here https://bcdc.ca.gov/history.html',
            location: {
                center: [-122.33877, 37.76192],
                zoom: 9.24,
                pitch: 0.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'suisun-short',
            alignment: 'right',
            hidden: false,
            title: 'Suisun Marsh Preservation Act, 1974',
            image: 'images/Suisun-Marsh.jpg',
            description: 'Secures passage of Suisun Marsh Preservation Act, the state’s first wetlands protection law. COPY NEEDED.',
            location: {
                center: [-122.04498, 38.19288],
                zoom: 9.65,
                pitch: 0.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'canal-short',
            alignment: 'left',
            hidden: false,
            title: 'Halted Peripheral Canal, 1982',
            image: 'images/',
            description: 'Stopped state from building Peripheral Canal to divert fresh water from Bay-Delta. COPY NEEDED.',
            location: {
                center: [-122.33877, 37.76192],
                zoom: 9.24,
                pitch: 0.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'valley-short',
            alignment: 'left',
            hidden: false,
            title: 'Central Valley Project Improvement Act, 1992',
            image: 'images/',
            description: 'Passed Central Valley Project Improvement Act to keep more water in Bay rivers. COPY NEEDED.',
            location: {
                center: [-122.33877, 37.76192],
                zoom: 9.24,
                pitch: 0.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'edu-feature',
            alignment: 'center',
            hidden: false,
            title: 'Launched Student Education Program, 1998',
            image: 'images/education-1.jpg',
            description: 'Save The Bay launched our popular Edcation Program in 1998! Our education programs have brought over 17,500 Bay Area students to the shoreline. In these education programs 35,290 native California plants have been planted, 70,000 pounds of weeds removed, and 8,810 pounds of trash removed from the shoreline.<br><br>In 2020, we expanded our Education Program online with our first set of virtual field trips and education videos called Outdoor Learning Online (OLO).  https://savesfbay.org/olo',
            location: {
                center: [-122.33877, 37.76192],
                zoom: 9.24,
                pitch: 0.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'sfo-feature',
            alignment: 'center',
            hidden: false,
            title: 'Stopped SFO Bay Fill Plan, 1999',
            image: 'images/sfo.jpg',
            description: 'From 1999-2002, Save The Bay led a successful campaign to stop San Francisco International Airport’s plan to fill in two square miles more of the Bay for reconfigured runways. Save The Bay was founded to protect the Bay from being filled and developed. Thanks to these and other victories, we created the opportunity for restoration of more than 10,000 acres of wetlands that had been diked off from the Bay, to benefit people and wildlife. ',
            location: {
                center: [-122.38472, 37.61964],
                zoom: 11.89,
                pitch: 0.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'resto-short',
            alignment: 'left',
            hidden: false,
            title: 'Created Volunteer Restoration Program, 2004',
            image: 'images/resto-volunteer-1.jpg',
            description: 'Created our community-based restoration program. COPY NEEDED, ADD STATS.',
            location: {
                center: [-122.33877, 37.76192],
                zoom: 9.24,
                pitch: 0.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'authority-feature',
            alignment: 'center',
            hidden: false,
            title: 'Established SF Bay Restoration Authority, 2008',
            image: 'images/',
            description: 'to raise public funding for marsh restoration; going to the ballot/electoral-political action -- echo of BCDC creation; alliance with business/labor; regional action on SLR. COPY NEEDED.',
            location: {
                center: [-122.33877, 37.76192],
                zoom: 9.24,
                pitch: 0.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'bag-feature',
            alignment: 'center',
            hidden: false,
            title: 'Bag Bans, Began in 2010',
            image: 'images/bag-ban.jpeg',
            description: 'In 2011, Save The Bay led a winning campaign to pass San Jose’s ordinance banning distribution of free plastic shopping bags! The ordinance was the toughest bag bans in California, and became the model for other bans in the Bay Area and eventually statewide.<br><br>Single use plastic is still a big component of trash that poisons the Bay today. Much of the plastic pollution flows into the Bay from city streets travels through storm drains unfiltered to creeks and the Bay.',
            location: {
                center: [-122.33877, 37.76192],
                zoom: 9.24,
                pitch: 0.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'salt-feature',
            alignment: 'center',
            hidden: false,
            title: 'Stopped Cargill Saltworks Project, Began in 2012',
            image: 'images/salt-pond.jpg',
            description: 'In 2006, Cargill retired the Redwood City Salt Ponds after more than 100 years of salt production and proposed to permanently fill 1,400+ acres of the Bay and build 12,000+ homes. Save The Bay launched "Don’t Pave My Bay" to show how this would destroy wildlife habitat, worsen traffic, threaten port jobs and endanger residents by building homes where sea level rise will cause flooding, rallying thousands of residents, elected officials, and State & Federal agencies.<br><br>By 2012, opposition to development led Redwood City to refuse permits for the project. Cargill redesigned the project, and developed a strategy to remove a major obstacle to development-the fact that the ponds are subject to regulation under the Clean Water Act.<br><br>Despite opposition from the Bay Area Congressional Delegation, in 2019 Trump’s EPA declared the Salt Ponds are not protected under the Clean Water Act, making development more likely. Together with SF Bay Keeper, Green Foothills and Citizens’ Committee to Complete the Refuge, Save The Bay filed a lawsuit against the EPA. The lawsuit sought to overturn the EPA’s ruling that the Salt Ponds are not protected under the Clean Water Act.<br><br>In 2020, a federal judge ruled that the Redwood City Salt Ponds are protected under the Clean Water Act. Cargill and Trump’s EPA appeal the ruling. The next year, the EPA threw out the Trump-era appeal and the Redwood City Salt Ponds are protected from development!',
            location: {
                center: [-122.18980, 37.50467],
                zoom: 11.02,
                pitch: 0.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'bayday-short',
            alignment: 'left',
            hidden: false,
            title: 'Launched Bay Day, 2015',
            image: 'images/bay-day.jpg',
            description: 'Created our community-based restoration program. COPY NEEDED, ADD STATS.',
            location: {
                center: [-122.33877, 37.76192],
                zoom: 9.24,
                pitch: 0.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'aa-feature',
            alignment: 'center',
            hidden: false,
            title: 'Passed Measure AA, 2016',
            image: 'images/measure-aa.jpeg',
            description: 'In 2016, after a decade of planning and campaigning by Save The Bay and a broad coalition of supporters, voters in all nine Bay Area counties approved Measure AA, a parcel tax to generate $500 million for Bay wetlands restoration. Over 20 years, these funds support tidal marsh projects that support endangered wildlife, protect shoreline communities against sea level rise and increase recreational access. Over $100 million has already been invested in these projects!',
            location: {
                center: [-122.33877, 37.76192],
                zoom: 9.24,
                pitch: 0.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
