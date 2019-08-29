var APP_DATA = {
  "scenes": [
    {
      "id": "0-waiting-area",
      "name": "Waiting Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3215224001403953,
          "pitch": 0.14449293274205743,
          "rotation": 0,
          "target": "2-alternate-per"
        },
        {
          "yaw": 2.8921177848975805,
          "pitch": 0.1523833623875337,
          "rotation": 6.283185307179586,
          "target": "1-patient-experience-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.454535419183845,
          "pitch": 0.45246265313175016,
          "title": "Check-in",
          "text": "Touch-based Check in Area"
        }
      ]
    },
    {
      "id": "1-patient-experience-room",
      "name": "Patient Experience Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3654646989108059,
          "pitch": 0.1928122900259659,
          "rotation": 6.283185307179586,
          "target": "0-waiting-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-alternate-per",
      "name": "Alternate PER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0623927518246603,
          "pitch": 0.29277395610342793,
          "rotation": 5.497787143782138,
          "target": "0-waiting-area"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6788565925843555,
          "pitch": 0.29247054497890446,
          "title": "L-Shaped Counter",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Quest",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
