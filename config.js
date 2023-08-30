var config = {
    style: 'mapbox://styles/savesfbay/ckyewr83k06lp14p6e0qsds2u', //make style in studio
    accessToken: 'pk.eyJ1Ijoic2F2ZXNmYmF5IiwiYSI6ImNra3JnamVwOTNkcW0zMnBkZDlxOXJjdmEifQ.XN_nfl_JbmkIyACF2wNX6Q',
    showMarkers: false,
    markerColor: '',
    theme: 'light',
    use3dTerrain: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'founding-feature',
            alignment: 'center',
            hidden: false,
            title: 'Founding Save The Bay',
            year: '1961',
            image: 'images/Founders.jpg',
            description: 'Three East Bay women, Sylvia McLaughlin, Esther Guilck and Kay Kerr, saw the Bay being destroyed. The Oakland Tribune reported on a federal study showing the shallow parts of the Bay could be filled for development, leaving only a narrow river for navigation. An image posed the stark choice: "Bay or River?"<br><br><table style="width:100%; cell-spacing:40px;"><tr><td><img src="images/Historical-2.jpg"></td><td><img src="images/Historical-3.jpg"></td></tr></table>',
            location: {
                center: [-122.49714, 37.83927],
                zoom: 10.80,
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
            id: 'bay-or-river',
            alignment: 'left',
            hidden: false,
            title: '',
            year: '',
            image: 'images/bay-or-river.jpg',
            description: '',
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
            year: '',
            image: 'images/Founding.jpg',
            description: 'They took action, asking national conservation leaders to stop the filling, but none agreed. So the women began recruiting friends to their cause, and formed Save San Francisco Bay Association. They attended city council meetings, opposed Berkeley and other cities’ plans to fill in the Bay, and rallied public support to halt the filling. ',
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
            title: 'Creating the First Bay Protection Agency',
            year: '1969',
            image: 'images/BCDC.jpeg',
            description: 'In 1965, Save The Bay’s campaign convinced the state legislature to create a study commission to devise a plan for San Francisco Bay. Chaired by Sunset Magazine publisher Mel Lane with journalist Joe Bodovitz as its director, the commission held public hearings and enlisted experts on all of the Bay’s resources and threats to them. The commission recommended the state create a permanent agency to regulate use of the Bay and its shoreline, limit filling, increase public access and protect commerce. In 1969, Save The Bay’s bill to create that Bay Conservation & Development Commission (BCDC) passed the legislature by one vote and was signed into law by Governor Ronald Reagan. It became the first coastal protection agency in the world, the model for California’s Coastal Commission and many others. <br><br>BCDC has continued to protect the shoreline for over 50 years through permits and planning, increasing public access from only 6 miles in 1961 to over 350 miles of Bay Trail,  while adding parks, marinas and wildlife refuges today. Learn more about BCDC <a href="https://bcdc.ca.gov/history.html" target="_blank">here</a>.',
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
            title: 'Protecting the Suisun Marsh',
            year: '1974',
            image: 'images/Suisun-Marsh.jpg',
            description: 'Save The Bay won passage of the Suisun Marsh Preservation Act, the state’s first wetlands protection law. This is the largest brackish marsh habitat in the U.S. at the north-eastern end of San Francisco Bay and the entrance to the Sacramento-San Joaquin Delta.',
            location: {
                center: [-121.88502, 38.09175],
                zoom: 9.65,
                pitch: 0.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'impact-suisun-marsh',
                    opacity: 0.2,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'impact-suisun-marsh',
                    opacity: 0
                }
            ]
        },
        {
            id: 'canal-short',
            alignment: 'left',
            hidden: false,
            title: 'Halting the Peripheral Canal',
            year: '1982',
            image: 'images/delta.jpg',
            description: 'Save The Bay helped lead the campaign to defeat Proposition 9, a statewide ballot measure supported by Governor Jerry Brown that would have authorized building a canal to divert fresh water from the Bay and Delta south to farms and cities.',
            location: {
                center: [-122.10694, 37.87824],
                zoom: 8.90,
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
            title: 'Keeping water for salmon in Bay rivers',
            year: '1992',
            image: 'images/salmon.jpg',
            description: 'Save The Bay’s coalition convinced Congress to pass the Central Valley Project Improvement Act, requiring 800,000 acre-feet of water be dedicated annually to benefit migrating salmon and other wildlife in the rivers that feed the San Francisco Bay Delta.',
            location: {
                center: [-122.10694, 37.87824],
                zoom: 8.90,
                pitch: 0.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'impact-resto-sites',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'impact-resto-sites',
                    opacity: 0
                }
            ]
        },
        {
            id: 'edu-feature',
            alignment: 'center',
            hidden: false,
            title: 'Bringing Bay Education to Students',
            year: '1998',
            image: 'images/education-1.jpg',
            description: 'Save The Bay brought high-impact experiential education to middle- and high-school students, shaping the next generation of bay stewards with programs on the water and shoreline. We’ve reached tens of thousands of students in person, and recently added <a href="https://savesfbay.org/olo" target="_blank">Outdoor Learning Online (OLO)</a> virtual field trips and educational videos to reach even more people. Our curriculum brings to life Bay science, ecology and history, teaching everyone how to protect and restore the Bay.<br><table style="width:100%; cell-spacing:40px; padding:20px 0 0 0"><tr><td style="width:33.3%;"><img src="images/education-3.jpg"></td><td style="width:33.3%;"><img src="images/education-2.jpg"></td><td style="width:33.3%;"><img src="images/education-4.jpg"></td></tr></table>',
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
                {
                    layer: 'impact-resto-sites',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'impact-resto-sites',
                    opacity: 0
                }
            ]
        },
        {
            id: 'resto-short',
            alignment: 'center',
            hidden: false,
            title: 'Engaging Volunteers to Restore Wetlands',
            year: '2000',
            image: 'images/resto-volunteer-1.jpeg',
            description: 'Save The Bay started enlisting volunteers in 2000 to restore transition-zone habitat along Bay marshes, benefiting endangered wildlife, enhancing ecosystem health and protecting shoreline communities from rising tides. The program has grown from modest beginnings to work on more than 10 sites owned by the national wildlife refuge, local park districts and other partners, and involving thousands of community volunteers annually. We remove invasive non-native plants and trash, and install native plants to support a suite of wetland habitats. We operate multiple native plant nurseries, collecting native seeds to propagate and adding new scientific techniques to increase the scale and impact of this work throughout the region.<br><table style="width:100%; cell-spacing:40px; padding:20px 0 0 0"><tr><td style="width:33.3%;"><img src="images/resto-volunteer-2.jpg"></td><td style="width:33.3%;"><img src="images/resto-volunteer-3.jpg"></td><td style="width:33.3%;"><img src="images/resto-volunteer-4.jpg"></td></tr></table>',
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
                {
                    layer: 'impact-resto-sites',
                    opacity: .7
                }
            ],
            onChapterExit: [
                {
                    layer: 'impact-resto-sites',
                    opacity: .7
                }
            ]
        },
        {
            id: 'resto-hold',
            alignment: 'center',
            hidden: false,
            title: '',
            year: '',
            image: '',
            description: '',
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
                {
                    layer: 'impact-resto-sites',
                    opacity: .7
                }
            ],
            onChapterExit: [
                {
                    layer: 'impact-resto-sites',
                    opacity: 0
                }
            ]
        },
        {
            id: 'sfo-feature',
            alignment: 'right',
            hidden: false,
            title: 'Stopping SFO Airport Runways on Bay Fill',
            year: '2002',
            image: 'images/sfo.jpg',
            description: 'Save The Bay led a successful campaign to stop San Francisco International Airport’s plan to fill in two square miles more of the Bay for reconfigured runways. SFO instead employed technology to improve airport safety and efficiency without damaging the Bay, saving tens of billions of dollars, and San Francisco voters passed Proposition D to prohibit large Bay fill projects unless voters approve.',
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
                {
                    layer: 'impact-sfo',
                    opacity: 0.2,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'impact-sfo',
                    opacity: 0
                }
            ]
        },
        {
            id: 'authority-feature',
            alignment: 'left',
            hidden: false,
            title: 'Establishing a Bay Restoration Agency',
            year: '2008',
            image: 'images/tidal-marsh.jpg',
            description: 'Save The Bay sponsored a state bill to create the San Francisco Bay Restoration Authority, with a mandate to raise public funds from the Bay Area for marsh restoration projects. The legislature approved and Governor Arnold Schwarzenegger signed the law to create this new regional agency. Learn more: <a href="http://www.sfbayrestore.org" target="_blank">www.sfbayrestore.org</a>',
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
            id: 'pollution-short',
            alignment: 'left',
            hidden: false,
            title: 'Reducing Trash Pollution in the Bay',
            year: '2009',
            image: '',
            description: 'Save The Bay led advocacy to enforce the federal Clean Water Act and reduce trash that cities let blow and flow into creeks and the Bay through stormwater, unscreened. We convinced the S.F. Regional Water Quality Control Board to create new permit requirements that cities reduce this trash in the Bay to zero by 2022 – the first time Bay trash limits had ever been set.',
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
            title: 'Banning Plastic Bag Trash',
            year: '2010',
            image: 'images/bag-ban.jpeg',
            description: 'Save The Bay led a winning campaign with San Jose’s city council to ban distribution of free plastic shopping bags, a major source of trash in the Bay. This tough bag ban quickly became the model for other cities and counties in the Bay Area and beyond. In 2016, we helped pass Proposition 67, finally establishing a statewide plastic bag ban throughout California.<br><br>Single use plastic is still a big component of trash that poisons the Bay today. Much of the plastic pollution flows into the Bay from city streets and state highways travels through storm drains unfiltered to creeks and the Bay.',
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
            alignment: 'right',
            hidden: false,
            title: 'Stopping a New City on Bay Salt Ponds',
            year: '2012',
            image: 'images/salt-pond.jpg',
            description: 'Save The Bay led the successful battle for over a decade to stop Cargill from building thousands of home on sensitive wetlands in the Bay in Redwood City. After retiring its Redwood City salt ponds from active production in 2006, Cargill proposed building 12,000 homes for 30,000 new residents on the ponds. This illegal Bay fill project would destroy wildlife habitat, worsen traffic, and put more people and property at risk of flooding from rising tides. We rallied local residents and elected officials throughout the Bay Area to oppose filling the bay for housing. Under pressure from the Redwood City council, Cargill withdrew its project in 2012, and prepared to try again, lobbying for a waiver from the federal Clean Water Act law that protects wetlands.<br><br>When the Trump Administration’s EPA provided that waiver, Save The Bay and our allies sued to overturn it and we won. President Biden’s EPA and Cargill withdrew appeals of that ruling in 2021, leaving Cargill to consider sale or donation of the property to the San Francisco Bay National Wildlife Refuge for permanent protection and restoration.',
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
                {
                    layer: 'impact-salt-pond',
                    opacity: 0.2,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'impact-salt-pond',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bayday-short',
            alignment: 'center',
            hidden: false,
            title: 'Launching the Annual Bay Day Celebration',
            year: '2015',
            image: 'images/bay-day.jpg',
            description: 'Save The Bay rallied Bay Area cities and counties to declare the first “Bay Day” celebration in October 2015, for everyone to celebrate and appreciate San Francisco Bay. Bay Day has grown in popularity and support from community partners with activities and events now including a month-long Bay Trail Challenge. Learn more: <a href="http://www.BayDay.org" target="_blank">www.BayDay.org</a><br><table style="width:100%; cell-spacing:40px; padding:20px 0 0 0"><tr><td style="width:33.3%;"><img src="images/bay-day-3.jpg"></td><td style="width:33.3%;"><img src="images/bay-day-4.jpg"></td><td style="width:33.3%;"><img src="images/bay-day-5.jpg"></td></tr></table>',
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
            title: 'Creating Regional Funding for Bay Restoration',
            year: '2016',
            image: 'images/measure-aa.jpeg',
            description: 'Voters in all nine Bay Area counties approved Measure AA, a parcel tax to generate $500 million for Bay wetlands restoration over 20 years. Save The Bay planned and advocated for this new public funding for over a decade, building a broad coalition of business, environment, local government and other supporters. Measure AA funds are accelerating tidal marsh projects that are essential to combat sea-level rise, support endangered wildlife, and increase recreation and access to the Bay for underserved communities. $100 million has been invested in wetland projects from Measure AA funds already!',
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
            id: 'baysmart-feature',
            alignment: 'center',
            hidden: false,
            title: 'Making the Bay Area Climate-Resilient',
            year: '2018',
            image: 'images/bay-smart-community.jpg',
            description: 'Save The Bay published “Bay Smart Communities for a Sustainable Future,” promoting climate adaptation priorities for a healthy Bay and a sustainable Bay Area inland and upstream from the shoreline. Working with environmental justice and equity partners, we set a bold agenda for Bay Area community resilience through urban greening, clean water, accessible transit and affordable housing.',
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
            id: 'caltrans-feature',
            alignment: 'left',
            hidden: false,
            title: 'Forcing CalTrans to Obey Water Pollution Laws',
            year: '2019',
            image: 'images/caltrans-trash.jpg',
            description: 'Save The Bay won an unprecedented legal order forcing California’s state transportation agency to reduce litter flowing from its roads and highways to pollute the Bay. The “Cease and Desist” order required Caltrans to clean up its roads and screen trash from its stormwater system, after years of non-compliance with the Clean Water Act.',
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
            id: 'salt-update',
            alignment: 'right',
            hidden: false,
            title: 'Winning Big for the Redwood City Salt Ponds',
            year: '2021',
            image: 'images/salt-pond-update.jpg',
            description: 'In 2016, US Environmental Protection Agency scientists and legal counsel concluded that the vast majority of the Redwood City Salt Ponds is jurisdictional wetlands under the federal Clean Water Act and is protected by that law. Save The Bay and other environmental plaintiffs sued Trump’s EPA in 2019, over its waiver of Clean Water Act jurisdiction on the ponds. The Federal District court ruled in October 2020 that EPA misapplied the Clean Water Act and ignored its own agency regulations, ordering the Agency to provide a legally sound jurisdictional determination.<br><br>In February 2021, the EPA dropped its appeal of our lawsuit victory restoring Clean Water Act protections to the Redwood City Salt Ponds. The move came a week after 57 Bay Area elected officials and organizations asked the Biden Administration to withdraw the Trump EPA appeal of a federal court order upholding those legal protections.<br><br>Save The Bay has fought development on these ponds for 15 years. Now we advocate for Cargill to transfer this sensitive site for addition to the San Francisco Bay National Wildlife Refuge.',
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
                {
                    layer: 'impact-salt-pond',
                    opacity: 0.2,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'impact-salt-pond',
                    opacity: 0
                }
            ]
        },
        {
            id: 'ravenswood-feature',
            alignment: 'center',
            hidden: false,
            title: 'Revegetating the Ravenswood Horizontal Levee',
            year: '2021',
            image: 'images/ravenswood-1.jpg',
            description: 'Save The Bay began work on a new, innovative wetland restoration project: revegetating a horizontal levee at the Ravenswood R4 Pond near Bedwell Bayfront Park. The horizontal levee is different in size and restoration technique than our typical projects. To revegetate 9.6 acres of gradually sloping levee, we are employing farming equipment to till the levee and spread rhizomes of native grasses throughout the site. Rhizomes are modified stems that grow underground, allowing our native plants to spread out and establish in the site. We are additionally outplanting seedlings and spreading native seed mixes – Save The Bay’s tried-and-true restoration techniques.<br><br>The goal of this horizontal levee is to showcase these large-scale restoration techniques and promote nature-based shoreline protection projects. This project echoes a movement across the country looking to natural solutions to mitigate the effects of climate change and buffer communities from sea level rise. The Ravenswood site will expand to include a nearby stretch of shoreline eventually greening 25 acres in total.<br><br>Partner organizations at Ravenswood include the South Bay Salt Pond Restoration Project, Ducks Unlimited, the State Coastal Conservancy, the USFWS, the West Bay Sanitary District and the City of Menlo Park.<br><table style="width:100%; cell-spacing:40px; padding:20px 0 0 0"><tr><td style="width:33.3%;"><img src="images/ravenswood-2.jpeg"></td><td style="width:33.3%;"><img src="images/ravenswood-3.jpg"></td><td style="width:33.3%;"><img src="images/ravenswood-4.jpg"></td></tr></table>',
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
            id: 'sfbay-resto-act-feature',
            alignment: 'center',
            hidden: false,
            title: 'Passing the San Francisco Bay Restoration Act',
            year: '2022',
            image: 'images/sfbay-resto-act.jpg',
            description: 'The San Francisco Bay Restoration Act, introduced by former Rep. Jackie Speier,  finally become law as an amendment to the 2023 National Defense Authorization Act (HR 7776) after a decade-long advocacy effort. This crucial legislation establishes a permanent program office within the Environmental Protection Agency (EPA) dedicated to supporting projects that enhance the Bay’s water quality, restore vital habitats, and help it adapt to the challenges posed by climate change. At the same time, Congress appropriated a record amount of $54.5 million in new federal funding to support the Bay’s health.<br><br>Save The Bay has been working closely with Rep. Speier’s office since the bill’s introduction in 2010. We recognized the urgent need for federal funding to address years of underinvestment that the Bay has faced compared to other major estuaries. Not waiting for federal resources, we helped lead a successful campaign to pass Measure AA in 2016, which utilized local tax revenues to support wetland restoration and water quality improvements throughout the Bay.<br><br>However, Measure AA’s funding alone cannot fully meet the Bay’s extensive project needs so Save The Bay has persistently advocated for increased federal funding. Passage of the Restoration Act highlights the importance of long-term partnerships and persistent advocacy in addressing the Bay’s environmental challenges. The combined efforts of Save The Bay, Rep. Speier, Speaker Pelosi, and Senators Feinstein and Padilla have culminated in a significant step forward for the Bay’s restoration and resilience efforts. With the new program office and increased federal funding, the Bay will witness accelerated shoreline restoration, climate adaptation, and water quality improvements, crucially needed in the face of a changing climate.',
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
        }
    ]
};
