var APP_DATA = {
  "scenes": [
    {
      "id": "0-piscina-fundo",
      "name": "Piscina fundo",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5389259619013451,
          "pitch": 0.18738667092204864,
          "rotation": 0,
          "target": "1-piscina-lado"
        },
        {
          "yaw": 1.2493722026793908,
          "pitch": 0.2334510491844881,
          "rotation": 0,
          "target": "2-quintal-piscina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-piscina-lado",
      "name": "Piscina lado",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8755552300310381,
          "pitch": 0.2997143455661817,
          "rotation": 0,
          "target": "2-quintal-piscina"
        },
        {
          "yaw": 0.5441276107837929,
          "pitch": 0.2985742953636894,
          "rotation": 0,
          "target": "0-piscina-fundo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-quintal-piscina",
      "name": "Quintal Piscina",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2369986413772054,
          "pitch": 0.228554651656804,
          "rotation": 0,
          "target": "0-piscina-fundo"
        },
        {
          "yaw": 1.9204926180274864,
          "pitch": 0.25081928773066053,
          "rotation": 0,
          "target": "1-piscina-lado"
        },
        {
          "yaw": 2.5468780992743696,
          "pitch": 0.11289572985417529,
          "rotation": 0,
          "target": "3-lateral-casa"
        },
        {
          "yaw": -2.1454786527413106,
          "pitch": 0.10436353253505004,
          "rotation": 0,
          "target": "8-sala-de-jantar"
        },
        {
          "yaw": -0.8883252342052224,
          "pitch": 0.3099531965119162,
          "rotation": 0,
          "target": "5-quintal-lado"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lateral-casa",
      "name": "Lateral Casa",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5182673622758482,
          "pitch": 0.24412246586763864,
          "rotation": 0,
          "target": "4-quintal-entrada-cozinha"
        },
        {
          "yaw": -2.03797526687838,
          "pitch": 0.28862822059754123,
          "rotation": 0,
          "target": "2-quintal-piscina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-quintal-entrada-cozinha",
      "name": "Quintal Entrada cozinha",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.014913105019895,
          "pitch": 0.29036656366241687,
          "rotation": 0,
          "target": "10-entrada-cozinha"
        },
        {
          "yaw": -0.5432544903703231,
          "pitch": 0.19177555212070274,
          "rotation": 0,
          "target": "3-lateral-casa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-quintal-lado",
      "name": "Quintal lado",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.24533799774997078,
          "pitch": 0.23827021334051324,
          "rotation": 0,
          "target": "6-entrada-casa"
        },
        {
          "yaw": -0.6054935024111199,
          "pitch": 0.20767509920559846,
          "rotation": 0,
          "target": "2-quintal-piscina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-entrada-casa",
      "name": "Entrada Casa",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.699884915206745,
          "pitch": 0.1584164238966217,
          "rotation": 0,
          "target": "7-sala"
        },
        {
          "yaw": 0.2706513006242126,
          "pitch": 0.3326020888166106,
          "rotation": 0,
          "target": "9-sala-de-jantar-fundos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-sala",
      "name": "Sala",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2938154890156959,
          "pitch": 0.3084695637516788,
          "rotation": 0,
          "target": "6-entrada-casa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-sala-de-jantar",
      "name": "Sala de Jantar",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.17445818929092027,
          "pitch": 0.4770146290465913,
          "rotation": 0,
          "target": "9-sala-de-jantar-fundos"
        },
        {
          "yaw": 2.3670853230616338,
          "pitch": 0.10527451162601054,
          "rotation": 0,
          "target": "2-quintal-piscina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-sala-de-jantar-fundos",
      "name": "Sala de Jantar fundos",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.48444724333409,
          "pitch": 0.14212372428519515,
          "rotation": 0,
          "target": "8-sala-de-jantar"
        },
        {
          "yaw": -0.6559854131289153,
          "pitch": 0.23900981620354855,
          "rotation": 0,
          "target": "10-entrada-cozinha"
        },
        {
          "yaw": 1.6496246205711858,
          "pitch": 0.12116646897335492,
          "rotation": 0,
          "target": "7-sala"
        },
        {
          "yaw": 2.263564594736751,
          "pitch": 0.09769484218606017,
          "rotation": 0,
          "target": "5-quintal-lado"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-entrada-cozinha",
      "name": "Entrada Cozinha",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7827791860581854,
          "pitch": 0.2855086850011581,
          "rotation": 0,
          "target": "13-entrada-banheiro"
        },
        {
          "yaw": -2.1124622881894144,
          "pitch": 0.4353951799561475,
          "rotation": 0,
          "target": "9-sala-de-jantar-fundos"
        },
        {
          "yaw": 1.7700147105520987,
          "pitch": 0.12826539441515017,
          "rotation": 0,
          "target": "11-cozinha"
        },
        {
          "yaw": 0.714510830299222,
          "pitch": 0.06840169291893616,
          "rotation": 0,
          "target": "4-quintal-entrada-cozinha"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-cozinha",
      "name": "Cozinha",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1733718534465218,
          "pitch": 0.056099513669000345,
          "rotation": 0,
          "target": "12-lavanderia"
        },
        {
          "yaw": -1.7600509990028854,
          "pitch": 0.2602419220509109,
          "rotation": 0,
          "target": "4-quintal-entrada-cozinha"
        },
        {
          "yaw": -3.105177314656494,
          "pitch": 0.3938060837480428,
          "rotation": 0,
          "target": "10-entrada-cozinha"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-lavanderia",
      "name": "Lavanderia",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.454345247737507,
          "pitch": 0.4578759667838064,
          "rotation": 0,
          "target": "11-cozinha"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-entrada-banheiro",
      "name": "Entrada banheiro",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9537175549229637,
          "pitch": 0.41951642119750865,
          "rotation": 0,
          "target": "10-entrada-cozinha"
        },
        {
          "yaw": -2.636602907156801,
          "pitch": 0.3571101750069303,
          "rotation": 0,
          "target": "14-banheiro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-banheiro",
      "name": "Banheiro",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2042138449214157,
          "pitch": 0.2464340228478754,
          "rotation": 0,
          "target": "13-entrada-banheiro"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
