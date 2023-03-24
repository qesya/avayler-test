import { render, screen, waitFor } from '@testing-library/react';
import HomePage, { getServerSideProps } from '../pages/index';
import '@testing-library/jest-dom'
import { Launch } from '../types/launch';
import { GetServerSidePropsContext } from 'next';

const mockResponse: Array<Launch> = [
  {
    "fairings": {
      "reused": false,
      "recovery_attempt": false,
      "recovered": false,
      "ships": []
    },
    "links": {
      "patch": {
        "small": "https://images2.imgbox.com/94/f2/NN6Ph45r_o.png",
        "large": "https://images2.imgbox.com/5b/02/QcxHUb5V_o.png"
      },
      "reddit": {
        "campaign": null,
        "launch": null,
        "media": null,
        "recovery": null
      },
      "flickr": {
        "small": [],
        "original": []
      },
      "presskit": null,
      "webcast": "https://www.youtube.com/watch?v=0a_00nJ_Y88",
      "youtube_id": "0a_00nJ_Y88",
      "article": "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
      "wikipedia": "https://en.wikipedia.org/wiki/DemoSat"
    },
    "static_fire_date_utc": "2006-03-17T00:00:00.000Z",
    "static_fire_date_unix": 1142553600,
    "net": false,
    "window": 0,
    "rocket": "5e9d0d95eda69955f709d1eb",
    "success": false,
    "failures": [
      {
        "time": 33,
        "altitude": null,
        "reason": "merlin engine failure"
      }
    ],
    "details": "Engine failure at 33 seconds and loss of vehicle",
    "crew": [],
    "ships": [],
    "capsules": [],
    "payloads": [
      "5eb0e4b5b6c3bb0006eeb1e1"
    ],
    "launchpad": "5e9e4502f5090995de566f86",
    "flight_number": 1,
    "name": "FalconSat",
    "date_utc": "2006-03-24T22:30:00.000Z",
    "date_unix": 1143239400,
    "date_local": "2006-03-25T10:30:00+12:00",
    "date_precision": "hour",
    "upcoming": false,
    "cores": [
      {
        "core": "5e9e289df35918033d3b2623",
        "flight": 1,
        "gridfins": false,
        "legs": false,
        "reused": false,
        "landing_attempt": false,
        "landing_success": null,
        "landing_type": null,
        "landpad": null
      }
    ],
    "auto_update": true,
    "tbd": false,
    "launch_library_id": null,
    "id": "5eb87cd9ffd86e000604b32a"
  },
  {
    "fairings": {
      "reused": false,
      "recovery_attempt": false,
      "recovered": false,
      "ships": []
    },
    "links": {
      "patch": {
        "small": "https://images2.imgbox.com/f9/4a/ZboXReNb_o.png",
        "large": "https://images2.imgbox.com/80/a2/bkWotCIS_o.png"
      },
      "reddit": {
        "campaign": null,
        "launch": null,
        "media": null,
        "recovery": null
      },
      "flickr": {
        "small": [],
        "original": []
      },
      "presskit": null,
      "webcast": "https://www.youtube.com/watch?v=Lk4zQ2wP-Nc",
      "youtube_id": "Lk4zQ2wP-Nc",
      "article": "https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html",
      "wikipedia": "https://en.wikipedia.org/wiki/DemoSat"
    },
    "static_fire_date_utc": '',
    "static_fire_date_unix": 0,
    "net": false,
    "window": 0,
    "rocket": "5e9d0d95eda69955f709d1eb",
    "success": false,
    "failures": [
      {
        "time": 301,
        "altitude": 289,
        "reason": "harmonic oscillation leading to premature engine shutdown"
      }
    ],
    "details": "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage",
    "crew": [],
    "ships": [],
    "capsules": [],
    "payloads": [
      "5eb0e4b6b6c3bb0006eeb1e2"
    ],
    "launchpad": "5e9e4502f5090995de566f86",
    "flight_number": 2,
    "name": "DemoSat",
    "date_utc": "2007-03-21T01:10:00.000Z",
    "date_unix": 1174439400,
    "date_local": "2007-03-21T13:10:00+12:00",
    "date_precision": "hour",
    "upcoming": false,
    "cores": [
      {
        "core": "5e9e289ef35918416a3b2624",
        "flight": 1,
        "gridfins": false,
        "legs": false,
        "reused": false,
        "landing_attempt": false,
        "landing_success": null,
        "landing_type": null,
        "landpad": null
      }
    ],
    "auto_update": true,
    "tbd": false,
    "launch_library_id": null,
    "id": "5eb87cdaffd86e000604b32b"
  },
  {
    "fairings": {
      "reused": false,
      "recovery_attempt": false,
      "recovered": false,
      "ships": []
    },
    "links": {
      "patch": {
        "small": "https://images2.imgbox.com/89/2a/bkI6LN0R_o.png",
        "large": "https://images2.imgbox.com/24/c3/9MKjvOdD_o.png"
      },
      "reddit": {
        "campaign": "https://www.reddit.com/r/spacex/comments/5dii6z",
        "launch": "https://www.reddit.com/r/spacex/comments/5nsaqm",
        "media": "https://www.reddit.com/r/spacex/comments/5nsico",
        "recovery": "https://www.reddit.com/r/spacex/comments/5oe9kk"
      },
      "flickr": {
        "small": [],
        "original": [
          "https://farm1.staticflickr.com/658/32394688795_55a9873ea7_o.jpg",
          "https://farm1.staticflickr.com/506/32394688095_a3339f3c6d_o.jpg",
          "https://farm1.staticflickr.com/745/32394687645_63ae2b4740_o.jpg",
          "https://farm1.staticflickr.com/318/31548291014_e3a30abca8_o.jpg",
          "https://farm1.staticflickr.com/670/32351549066_e9cffe8d2b_o.jpg",
          "https://farm6.staticflickr.com/5518/31579784413_83aeac560a_o.jpg",
          "https://farm6.staticflickr.com/5556/32312421135_22c197c156_o.jpg",
          "https://farm1.staticflickr.com/529/32312420015_5d2403a847_o.jpg",
          "https://farm1.staticflickr.com/435/32312417695_19c0e50c4b_o.jpg",
          "https://farm1.staticflickr.com/735/32312416415_b90892af0a_o.jpg",
          "https://farm1.staticflickr.com/293/32312415025_cae16d1994_o.jpg",
          "https://farm1.staticflickr.com/738/31467130724_92e02c9524_o.jpg",
          "https://farm1.staticflickr.com/464/31467130374_9f7a7d380e_o.jpg",
          "https://farm1.staticflickr.com/581/31467129424_bac77d594a_o.jpg",
          "https://farm1.staticflickr.com/380/32308163845_c1731a4b1f_o.jpg",
          "https://farm1.staticflickr.com/447/31450835954_72ed10a19e_o.jpg",
          "https://farm1.staticflickr.com/507/31450834974_b8a3f4aca5_o.jpg"
        ]
      },
      "presskit": "https://drive.google.com/open?id=0BwA3a65ef1OvZC1aU3FuMlQzalE",
      "webcast": "https://www.youtube.com/watch?v=7WimRhydggo",
      "youtube_id": "7WimRhydggo",
      "article": "https://spaceflightnow.com/2017/01/14/spacex-resumes-flights-with-on-target-launch-for-iridium/",
      "wikipedia": "https://en.wikipedia.org/wiki/Iridium_satellite_constellation#Next-generation_constellation"
    },
    "static_fire_date_utc": "2017-01-05T19:40:00.000Z",
    "static_fire_date_unix": 1483645200,
    "net": false,
    "window": 0,
    "rocket": "5e9d0d95eda69973a809d1ec",
    "success": true,
    "failures": [],
    "details": "Return-to-flight mission after the loss of Amos-6 in September 2016. Iridium NEXT will replace the original Iridium constellation, launched in the late 1990s. Each Falcon mission will carry 10 satellites, with a goal to complete deployment of the 66 plus 9 spare satellite constellation by mid 2018. The first two Iridium qualification units were supposed to ride a Dnepr rocket in April 2016 but were delayed, so Iridium decided to qualify the first batch of 10 satellites instead.",
    "crew": [],
    "ships": [
      "5ea6ed2f080df4000697c910",
      "5ea6ed30080df4000697c912",
      "5ea6ed30080df4000697c915"
    ],
    "capsules": [],
    "payloads": [
      "5eb0e4c2b6c3bb0006eeb208"
    ],
    "launchpad": "5e9e4502f509092b78566f87",
    "flight_number": 35,
    "name": "Iridium NEXT Mission 1",
    "date_utc": "2017-01-14T17:54:00.000Z",
    "date_unix": 1484416440,
    "date_local": "2017-01-14T10:54:00-07:00",
    "date_precision": "hour",
    "upcoming": false,
    "cores": [
      {
        "core": "5e9e28a3f359189e3a3b2645",
        "flight": 1,
        "gridfins": true,
        "legs": true,
        "reused": false,
        "landing_attempt": true,
        "landing_success": true,
        "landing_type": "ASDS",
        "landpad": "5e9e3033383ecbb9e534e7cc"
      }
    ],
    "auto_update": true,
    "tbd": false,
    "launch_library_id": null,
    "id": "5eb87cfdffd86e000604b34c"
  },
]

describe('Test HomePage', () => {
  it('Should renders HomePage', async () => {
    const component = render(<HomePage launches={mockResponse} />);
    expect(component).toMatchSnapshot();
  });

  it('Should renders a list of launches', async () => {
    render(<HomePage launches={mockResponse} />);
    expect(screen.getByText('DemoSat')).toBeInTheDocument();
    expect(screen.getByText('Iridium NEXT Mission 1')).toBeInTheDocument();
  });
})