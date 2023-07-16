import RocketDetails from '../components/Rockets/RocketDetails'

describe('<About />', () => {
    it('should render and display expected content', () => {
        const rocket = {
            "height": {
                "meters": 118,
                "feet": 387
            },
            "diameter": {
                "meters": 9,
                "feet": 30
            },
            "mass": {
                "kg": 1335000,
                "lb": 2943000
            },
            "first_stage": {
                "thrust_sea_level": {
                    "kN": 128000,
                    "lbf": 28775544
                },
                "thrust_vacuum": {
                    "kN": 138000,
                    "lbf": 31023634
                },
                "reusable": true,
                "engines": 37,
                "fuel_amount_tons": 3300,
                "burn_time_sec": null
            },
            "second_stage": {
                "thrust": {
                    "kN": 1957,
                    "lbf": 440000
                },
                "payloads": {
                    "composite_fairing": {
                        "height": {
                            "meters": null,
                            "feet": null
                        },
                        "diameter": {
                            "meters": null,
                            "feet": null
                        }
                    },
                    "option_1": "Spaceship"
                },
                "reusable": true,
                "engines": 6,
                "fuel_amount_tons": 1200,
                "burn_time_sec": null
            },
            "engines": {
                "isp": {
                    "sea_level": 330,
                    "vacuum": 380
                },
                "thrust_sea_level": {
                    "kN": 1780,
                    "lbf": 400000
                },
                "thrust_vacuum": {
                    "kN": 1960,
                    "lbf": 440000
                },
                "number": 37,
                "type": "raptor",
                "version": "",
                "layout": null,
                "engine_loss_max": null,
                "propellant_1": "liquid oxygen",
                "propellant_2": "liquid methane",
                "thrust_to_weight": 107
            },
            "landing_legs": {
                "number": 6,
                "material": "stainless steel"
            },
            "payload_weights": [
                {
                    "id": "leo",
                    "name": "Low Earth Orbit",
                    "kg": 150000,
                    "lb": 330000
                },
                {
                    "id": "mars",
                    "name": "Mars Orbit",
                    "kg": 100000,
                    "lb": 220000
                },
                {
                    "id": "moon",
                    "name": "Moon Orbit",
                    "kg": 100000,
                    "lb": 220000
                }
            ],
            "flickr_images": [
                "https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg",
                "https://live.staticflickr.com/65535/48953946911_e60c5bcc5c_b.jpg",
                "https://live.staticflickr.com/65535/48954138922_9c42173f08_b.jpg",
                "https://live.staticflickr.com/65535/48953947006_313f01ec93_b.jpg"
            ],
            "name": "Starship",
            "type": "rocket",
            "active": false,
            "stages": 2,
            "boosters": 0,
            "cost_per_launch": 7000000,
            "success_rate_pct": 0,
            "first_flight": "2021-12-01",
            "country": "United States",
            "company": "SpaceX",
            "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_Starship",
            "description": "Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.",
            "id": "5e9d0d96eda699382d09d1ee"
        }
        cy.mount(<RocketDetails rocket={rocket} />)
        cy.get('h1').contains(rocket.name)
    })
})