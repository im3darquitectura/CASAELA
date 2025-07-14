TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "cardboardMenu": {
   "fontFamily": "Arial",
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "rollOverOpacity": 0.8,
   "id": "Menu_597AEF08_55F3_49B8_41D4_DF41D0330D27",
   "opacity": 0.4,
   "class": "Menu",
   "rollOverFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "children": [
    {
     "label": "360  ACCESO",
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "class": "MenuItem"
    },
    {
     "label": "360  HALL ACCESO",
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "class": "MenuItem"
    },
    {
     "label": "03. 360 SALON",
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "class": "MenuItem"
    },
    {
     "label": "05. 360 TERRAZA",
     "click": "this.mainPlayList.set('selectedIndex', 3)",
     "class": "MenuItem"
    },
    {
     "label": "360  HAB PPAL",
     "click": "this.mainPlayList.set('selectedIndex', 4)",
     "class": "MenuItem"
    },
    {
     "label": "6. 360 HALL ABAJO  - casa ELA",
     "click": "this.mainPlayList.set('selectedIndex', 5)",
     "class": "MenuItem"
    },
    {
     "label": "7. 360 GYM  - casa ELA",
     "click": "this.mainPlayList.set('selectedIndex', 6)",
     "class": "MenuItem"
    },
    {
     "label": "8. 360 HUESPEDES - casa ELA",
     "click": "this.mainPlayList.set('selectedIndex', 7)",
     "class": "MenuItem"
    },
    {
     "label": "9. 360 BAÑO PPAL - casa ELA copy",
     "click": "this.mainPlayList.set('selectedIndex', 8)",
     "class": "MenuItem"
    },
    {
     "label": "10. 360 vestier PPAL - casa ELA copy",
     "click": "this.mainPlayList.set('selectedIndex', 9)",
     "class": "MenuItem"
    },
    {
     "label": "11. 360 BAÑO SOCIAL - casa ELA copy",
     "click": "this.mainPlayList.set('selectedIndex', 10)",
     "class": "MenuItem"
    },
    {
     "label": "12. 360 CORREDOR casa ELA copy",
     "click": "this.mainPlayList.set('selectedIndex', 11)",
     "class": "MenuItem"
    },
    {
     "label": "13. 360  HAB 2 casa ELA copy",
     "click": "this.mainPlayList.set('selectedIndex', 12)",
     "class": "MenuItem"
    },
    {
     "label": "14. 360 BAÑO HAB 2 - casa ELA copy",
     "click": "this.mainPlayList.set('selectedIndex', 13)",
     "class": "MenuItem"
    }
   ],
   "rollOverBackgroundColor": "#000000"
  },
  "id": "panorama_FB267618_F0E9_6D8F_41B1_1C536455C91A",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FB267618_F0E9_6D8F_41B1_1C536455C91A_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_FB266619_F0E9_6D8E_41E2_5CE0054DDF81",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99, this.camera_59D36097_55F3_78D7_41C3_A38F833A4D58); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": 13.13,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_FB267618_F0E9_6D8F_41B1_1C536455C91A_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.41
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_FB267618_F0E9_6D8F_41B1_1C536455C91A_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_FB267618_F0E9_6D8F_41B1_1C536455C91A_t.jpg",
  "label": "360  ACCESO",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "gyroscopeEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": false,
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_rotation",
  "touchControlMode": "drag_acceleration",
  "buttonCardboardView": {
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "width": "17.15%",
   "paddingLeft": 0,
   "height": "76.75%",
   "mode": "push",
   "paddingRight": 0,
   "minWidth": 1,
   "maxHeight": 70,
   "paddingBottom": 0,
   "maxWidth": 70,
   "verticalAlign": "middle",
   "class": "IconButton",
   "transparencyActive": false,
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "data": {
    "name": "IconButton8475"
   },
   "borderSize": 0,
   "borderRadius": 0,
   "minHeight": 1,
   "backgroundOpacity": 0,
   "shadow": false,
   "paddingTop": 0
  },
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false,
  "displayPlaybackBar": true
 },
 {
  "id": "panorama_FB267618_F0E9_6D8F_41B1_1C536455C91A_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -17.4,
   "class": "PanoramaCameraPosition",
   "pitch": -1.01
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_597AEF08_55F3_49B8_41D4_DF41D0330D27",
  "id": "panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_59FE1A08_55F2_CBB8_41D0_C2AD38B8DF62",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5E18EFAC_55F1_48F8_41A4_531C118330F2, this.camera_59E73086_55F3_78A8_41C6_454A2054FF45); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -82.58,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.17
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_59FE3A08_55F2_CBB8_41C7_D0D5460DDEE6",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_FB267618_F0E9_6D8F_41B1_1C536455C91A, this.camera_59EBD076_55F3_7868_41D3_F6AD182CE87C); this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -179.8,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.67
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_59FE5A08_55F2_CBB8_4195_1D1C4ADF00B8",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5E685D9A_55FE_C8D8_41D1_462EF9E500DA, this.camera_59FE3064_55F3_7868_41B4_A43621C7B377); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -3.2,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.34
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_59FE4A08_55F2_CBB8_41B8_F27895E7198A",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5E27B8FE_55F1_4858_41C5_AFD45CE36CA1, this.camera_5E17D043_55F3_77A8_41AB_D589AA016D56); this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": 90.76,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.6
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_59FE6A08_55F2_CBB8_41C0_D2DA9A419502",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_BB14EE2C_B171_ECD8_41DA_6BC07BC75626, this.camera_5E02F055_55F3_77A8_41C3_46DF5BE113AA); this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.31,
        "yaw": -93.38,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -9.13
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_59FE9A08_55F2_CBB8_41C4_F721BD6C3054",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5E36789F_55F1_C8D8_41C9_8402C8570205, this.camera_5E188033_55F3_77EF_41AC_180CC17BF6B5); this.mainPlayList.set('selectedIndex', 10)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -103.18,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.42
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99_t.jpg",
  "label": "360  HALL ACCESO",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_597AEF08_55F3_49B8_41D4_DF41D0330D27",
  "id": "panorama_5E18EFAC_55F1_48F8_41A4_531C118330F2",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_5E18EFAC_55F1_48F8_41A4_531C118330F2_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5E18FFAC_55F1_48F8_41C9_9B6DF3C7E5A1",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99, this.camera_5972B160_55F3_7868_41C9_F70123BBF2C0); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": 112.37,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_5E18EFAC_55F1_48F8_41A4_531C118330F2_0_HS_19_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.41
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5E188FAC_55F1_48F8_41C3_513E61AB70C7",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5E685D9A_55FE_C8D8_41D1_462EF9E500DA, this.camera_596CF16F_55F3_7877_41BF_418B957FDF2F); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": 85.23,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_5E18EFAC_55F1_48F8_41A4_531C118330F2_0_HS_20_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.41
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_5E18EFAC_55F1_48F8_41A4_531C118330F2_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5E18EFAC_55F1_48F8_41A4_531C118330F2_t.jpg",
  "label": "03. 360 SALON",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_5E18EFAC_55F1_48F8_41A4_531C118330F2_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -133.76,
   "class": "PanoramaCameraPosition",
   "pitch": -4.07
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_597AEF08_55F3_49B8_41D4_DF41D0330D27",
  "id": "panorama_5E685D9A_55FE_C8D8_41D1_462EF9E500DA",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_5E685D9A_55FE_C8D8_41D1_462EF9E500DA_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5E684D9A_55FE_C8D8_4177_E574F6F6069F",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99, this.camera_5E929F69_55F3_4878_41CC_B18B37E8EAD8); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -179.3,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_5E685D9A_55FE_C8D8_41D1_462EF9E500DA_0_HS_12_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.17
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5E687D9A_55FE_C8D8_4162_C82CDAB848AC",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": 140,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_5E685D9A_55FE_C8D8_41D1_462EF9E500DA_0_HS_13_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.09
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5E686D9A_55FE_C8D8_41CF_A038DDA447D5",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5E18EFAC_55F1_48F8_41A4_531C118330F2, this.camera_5E89EF7B_55F3_4858_41C3_23CE544FF586); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -100.42,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_5E685D9A_55FE_C8D8_41D1_462EF9E500DA_0_HS_14_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.09
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_5E685D9A_55FE_C8D8_41D1_462EF9E500DA_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5E685D9A_55FE_C8D8_41D1_462EF9E500DA_t.jpg",
  "label": "05. 360 TERRAZA",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_5E685D9A_55FE_C8D8_41D1_462EF9E500DA_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 5.8,
   "class": "PanoramaCameraPosition",
   "pitch": 2.81
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_597AEF08_55F3_49B8_41D4_DF41D0330D27",
  "id": "panorama_5E29420F_55F1_BBB7_41C5_146DB1CA645B",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_5E29420F_55F1_BBB7_41C5_146DB1CA645B_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5E29520F_55F1_BBB7_41B0_D59BAD0850CE",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5E27B8FE_55F1_4858_41C5_AFD45CE36CA1, this.camera_59BEB0C9_55F3_78B8_41C3_B9DFF79467EA); this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -169.76,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_5E29420F_55F1_BBB7_41C5_146DB1CA645B_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.34
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5E29620F_55F1_BBB7_41C8_D6997F0C1C64",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_4CC470D7_4784_C399_41C1_BF9BFA4A776D, this.camera_59A8E0EB_55F3_7878_41D4_1D0CFD288C72); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 10.43,
        "yaw": 159.09,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_5E29420F_55F1_BBB7_41C5_146DB1CA645B_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.85
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_5E29420F_55F1_BBB7_41C5_146DB1CA645B_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5E29420F_55F1_BBB7_41C5_146DB1CA645B_t.jpg",
  "label": "360  HAB PPAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_5E29420F_55F1_BBB7_41C5_146DB1CA645B_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_597AEF08_55F3_49B8_41D4_DF41D0330D27",
  "id": "panorama_BB14EE2C_B171_ECD8_41DA_6BC07BC75626",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_BB14EE2C_B171_ECD8_41DA_6BC07BC75626_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_BF2ACA7B_B171_D538_41A3_52697EB75E0C",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99, this.camera_5E619FBE_55F3_48D8_41B9_7A2374515724); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 9.52,
        "yaw": -173.27,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_BB14EE2C_B171_ECD8_41DA_6BC07BC75626_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 24.28
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_BC8E8D40_B176_EF48_41C6_BA9B0C7D378C",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A1FC2F09_B176_2CD8_41BD_27BA8FF8BC05, this.camera_5E5EDFCF_55F3_48B8_41D3_B153CEB28108); this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": 85.74,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_BB14EE2C_B171_ECD8_41DA_6BC07BC75626_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.67
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_BF0A9A65_B177_D548_41B8_8901DEB0AAA3",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_BB1749E8_B171_D758_41D9_CBF4FC01CF67, this.camera_5E54EFDF_55F3_4858_41D2_2E88EAC2DA0A); this.mainPlayList.set('selectedIndex', 7)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": 162.86,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_BB14EE2C_B171_ECD8_41DA_6BC07BC75626_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.67
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_BB14EE2C_B171_ECD8_41DA_6BC07BC75626_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_BB14EE2C_B171_ECD8_41DA_6BC07BC75626_t.jpg",
  "label": "6. 360 HALL ABAJO  - casa ELA",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_BB14EE2C_B171_ECD8_41DA_6BC07BC75626_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_597AEF08_55F3_49B8_41D4_DF41D0330D27",
  "id": "panorama_A1FC2F09_B176_2CD8_41BD_27BA8FF8BC05",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A1FC2F09_B176_2CD8_41BD_27BA8FF8BC05_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_A1FC3F09_B176_2CD8_41E5_0F7B0736B531",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_BB14EE2C_B171_ECD8_41DA_6BC07BC75626, this.camera_5E6BEFAE_55F3_48F8_41B5_898F94EAD153); this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 8.29,
        "yaw": 177.36,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 91,
           "width": 92,
           "url": "media/panorama_A1FC2F09_B176_2CD8_41BD_27BA8FF8BC05_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.28
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_A1FC2F09_B176_2CD8_41BD_27BA8FF8BC05_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_A1FC2F09_B176_2CD8_41BD_27BA8FF8BC05_t.jpg",
  "label": "7. 360 GYM  - casa ELA",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_A1FC2F09_B176_2CD8_41BD_27BA8FF8BC05_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_597AEF08_55F3_49B8_41D4_DF41D0330D27",
  "id": "panorama_BB1749E8_B171_D758_41D9_CBF4FC01CF67",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_BB1749E8_B171_D758_41D9_CBF4FC01CF67_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_BF0406B0_B176_FDC8_41DF_6978D17BB904",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_BB14EE2C_B171_ECD8_41DA_6BC07BC75626, this.camera_5E428FF1_55F3_4868_41D1_4E8F1CF12313); this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -143.88,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_BB1749E8_B171_D758_41D9_CBF4FC01CF67_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.67
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_BB1749E8_B171_D758_41D9_CBF4FC01CF67_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_BB1749E8_B171_D758_41D9_CBF4FC01CF67_t.jpg",
  "label": "8. 360 HUESPEDES - casa ELA",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_BB1749E8_B171_D758_41D9_CBF4FC01CF67_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_597AEF08_55F3_49B8_41D4_DF41D0330D27",
  "id": "panorama_4CC470D7_4784_C399_41C1_BF9BFA4A776D",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4CC470D7_4784_C399_41C1_BF9BFA4A776D_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_4860FE07_479C_5E79_419E_4C877282A63B",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5E29420F_55F1_BBB7_41C5_146DB1CA645B, this.camera_5E2D4022_55F3_77E8_416D_459C0AD8B791); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.43,
        "yaw": -8.47,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_4CC470D7_4784_C399_41C1_BF9BFA4A776D_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.85
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_57921FC9_479C_DD89_41A9_3752808908F3",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_4DDCBC94_4784_C39F_41AE_B1FD67585F80, this.camera_5E37F012_55F3_77A8_41C8_E476B508B33F); this.mainPlayList.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.43,
        "yaw": 174.42,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_4CC470D7_4784_C399_41C1_BF9BFA4A776D_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.35
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_4CC470D7_4784_C399_41C1_BF9BFA4A776D_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_4CC470D7_4784_C399_41C1_BF9BFA4A776D_t.jpg",
  "label": "9. 360 BA\u00d1O PPAL - casa ELA copy",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_4CC470D7_4784_C399_41C1_BF9BFA4A776D_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_597AEF08_55F3_49B8_41D4_DF41D0330D27",
  "id": "panorama_4DDCBC94_4784_C39F_41AE_B1FD67585F80",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4DDCBC94_4784_C39F_41AE_B1FD67585F80_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_48537DF4_479C_3D9F_41CD_63B1E0B234A7",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_4CC470D7_4784_C399_41C1_BF9BFA4A776D, this.camera_59CC10B9_55F3_78D8_41B2_365E4139B9D0); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.42,
        "yaw": -38.62,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_4DDCBC94_4784_C39F_41AE_B1FD67585F80_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.1
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_4DDCBC94_4784_C39F_41AE_B1FD67585F80_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_4DDCBC94_4784_C39F_41AE_B1FD67585F80_t.jpg",
  "label": "10. 360 vestier PPAL - casa ELA copy",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_4DDCBC94_4784_C39F_41AE_B1FD67585F80_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_597AEF08_55F3_49B8_41D4_DF41D0330D27",
  "id": "panorama_5E36789F_55F1_C8D8_41C9_8402C8570205",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_5E36789F_55F1_C8D8_41C9_8402C8570205_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5E36689F_55F1_C8D8_41C0_A4F27DC3E3DD",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99, this.camera_59611F38_55F3_49D9_41D5_1101697BCFE9); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.43,
        "yaw": -157.7,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_5E36789F_55F1_C8D8_41C9_8402C8570205_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.35
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_5E36789F_55F1_C8D8_41C9_8402C8570205_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5E36789F_55F1_C8D8_41C9_8402C8570205_t.jpg",
  "label": "11. 360 BA\u00d1O SOCIAL - casa ELA copy",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_5E36789F_55F1_C8D8_41C9_8402C8570205_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_597AEF08_55F3_49B8_41D4_DF41D0330D27",
  "id": "panorama_5E27B8FE_55F1_4858_41C5_AFD45CE36CA1",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_5E27B8FE_55F1_4858_41C5_AFD45CE36CA1_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5E2788FE_55F1_4858_41B8_3531D457627A",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5E29420F_55F1_BBB7_41C5_146DB1CA645B, this.camera_5997D11E_55F3_79D8_41BD_34F4ED1E004E); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": 2.33,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_5E27B8FE_55F1_4858_41C5_AFD45CE36CA1_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.34
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5E2798FE_55F1_4858_41D1_57569ECFC447",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99, this.camera_5980213E_55F3_79D9_41C4_6A1FF9F30F6E); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -11.23,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_5E27B8FE_55F1_4858_41C5_AFD45CE36CA1_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.34
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5E27690D_55F1_49B8_41B4_AF29583BC3FB",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5E367C9F_55F2_C8D7_419F_4D6232FC5A1C, this.camera_59A570FC_55F3_7858_41C5_A35C31C75953); this.mainPlayList.set('selectedIndex', 12)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": 162.86,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_5E27B8FE_55F1_4858_41C5_AFD45CE36CA1_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.84
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_5E27B8FE_55F1_4858_41C5_AFD45CE36CA1_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5E27B8FE_55F1_4858_41C5_AFD45CE36CA1_t.jpg",
  "label": "12. 360 CORREDOR casa ELA copy",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_5E27B8FE_55F1_4858_41C5_AFD45CE36CA1_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_597AEF08_55F3_49B8_41D4_DF41D0330D27",
  "id": "panorama_5E367C9F_55F2_C8D7_419F_4D6232FC5A1C",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_5E367C9F_55F2_C8D7_419F_4D6232FC5A1C_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5E366C9F_55F2_C8D7_41C7_1C60C4E456A8",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5E27B8FE_55F1_4858_41C5_AFD45CE36CA1, this.camera_5E7DFF9C_55F3_48D9_41D4_FC89DEEF8EDA); this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -76.55,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_5E367C9F_55F2_C8D7_419F_4D6232FC5A1C_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.41
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5E369C9F_55F2_C8D7_41C5_7689A9245400",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5E33E83E_55F2_B7D9_41B3_AC3BEC8C4EC3, this.camera_5E879F8D_55F3_48B8_41C7_E2C924F06CBE); this.mainPlayList.set('selectedIndex', 13)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 10.44,
        "yaw": -46.66,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_5E367C9F_55F2_C8D7_419F_4D6232FC5A1C_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.41
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_5E367C9F_55F2_C8D7_419F_4D6232FC5A1C_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5E367C9F_55F2_C8D7_419F_4D6232FC5A1C_t.jpg",
  "label": "13. 360  HAB 2 casa ELA copy",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_5E367C9F_55F2_C8D7_419F_4D6232FC5A1C_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_597AEF08_55F3_49B8_41D4_DF41D0330D27",
  "id": "panorama_5E33E83E_55F2_B7D9_41B3_AC3BEC8C4EC3",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_5E33E83E_55F2_B7D9_41B3_AC3BEC8C4EC3_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5E33F83E_55F2_B7D9_41C6_8434A92AA011",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5E367C9F_55F2_C8D7_419F_4D6232FC5A1C, this.camera_5E386000_55F3_77A8_41D2_CBBD19600490); this.mainPlayList.set('selectedIndex', 12)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.43,
        "yaw": -124.28,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_5E33E83E_55F2_B7D9_41B3_AC3BEC8C4EC3_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.85
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_5E33E83E_55F2_B7D9_41B3_AC3BEC8C4EC3_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5E33E83E_55F2_B7D9_41B3_AC3BEC8C4EC3_t.jpg",
  "label": "14. 360 BA\u00d1O HAB 2 - casa ELA copy",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_5E33E83E_55F2_B7D9_41B3_AC3BEC8C4EC3_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_FB267618_F0E9_6D8F_41B1_1C536455C91A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FB267618_F0E9_6D8F_41B1_1C536455C91A_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_5E18EFAC_55F1_48F8_41A4_531C118330F2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5E18EFAC_55F1_48F8_41A4_531C118330F2_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_5E685D9A_55FE_C8D8_41D1_462EF9E500DA",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5E685D9A_55FE_C8D8_41D1_462EF9E500DA_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_5E29420F_55F1_BBB7_41C5_146DB1CA645B",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5E29420F_55F1_BBB7_41C5_146DB1CA645B_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_BB14EE2C_B171_ECD8_41DA_6BC07BC75626",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BB14EE2C_B171_ECD8_41DA_6BC07BC75626_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_A1FC2F09_B176_2CD8_41BD_27BA8FF8BC05",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A1FC2F09_B176_2CD8_41BD_27BA8FF8BC05_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_BB1749E8_B171_D758_41D9_CBF4FC01CF67",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BB1749E8_B171_D758_41D9_CBF4FC01CF67_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_4CC470D7_4784_C399_41C1_BF9BFA4A776D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4CC470D7_4784_C399_41C1_BF9BFA4A776D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_4DDCBC94_4784_C39F_41AE_B1FD67585F80",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4DDCBC94_4784_C39F_41AE_B1FD67585F80_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_5E36789F_55F1_C8D8_41C9_8402C8570205",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5E36789F_55F1_C8D8_41C9_8402C8570205_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_5E27B8FE_55F1_4858_41C5_AFD45CE36CA1",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5E27B8FE_55F1_4858_41C5_AFD45CE36CA1_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_5E367C9F_55F2_C8D7_419F_4D6232FC5A1C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5E367C9F_55F2_C8D7_419F_4D6232FC5A1C_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E33E83E_55F2_B7D9_41B3_AC3BEC8C4EC3",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5E33E83E_55F2_B7D9_41B3_AC3BEC8C4EC3_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "media": "this.panorama_FB267618_F0E9_6D8F_41B1_1C536455C91A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FB267618_F0E9_6D8F_41B1_1C536455C91A_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "media": "this.panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_59FFFA08_55F2_CBB8_41B8_CD1585DBFF99_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "media": "this.panorama_5E18EFAC_55F1_48F8_41A4_531C118330F2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5E18EFAC_55F1_48F8_41A4_531C118330F2_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "media": "this.panorama_5E685D9A_55FE_C8D8_41D1_462EF9E500DA",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5E685D9A_55FE_C8D8_41D1_462EF9E500DA_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "media": "this.panorama_5E29420F_55F1_BBB7_41C5_146DB1CA645B",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5E29420F_55F1_BBB7_41C5_146DB1CA645B_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "media": "this.panorama_BB14EE2C_B171_ECD8_41DA_6BC07BC75626",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BB14EE2C_B171_ECD8_41DA_6BC07BC75626_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "media": "this.panorama_A1FC2F09_B176_2CD8_41BD_27BA8FF8BC05",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A1FC2F09_B176_2CD8_41BD_27BA8FF8BC05_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "media": "this.panorama_BB1749E8_B171_D758_41D9_CBF4FC01CF67",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BB1749E8_B171_D758_41D9_CBF4FC01CF67_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "media": "this.panorama_4CC470D7_4784_C399_41C1_BF9BFA4A776D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4CC470D7_4784_C399_41C1_BF9BFA4A776D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 10)",
    "media": "this.panorama_4DDCBC94_4784_C39F_41AE_B1FD67585F80",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4DDCBC94_4784_C39F_41AE_B1FD67585F80_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 10, 11)",
    "media": "this.panorama_5E36789F_55F1_C8D8_41C9_8402C8570205",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5E36789F_55F1_C8D8_41C9_8402C8570205_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 11, 12)",
    "media": "this.panorama_5E27B8FE_55F1_4858_41C5_AFD45CE36CA1",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5E27B8FE_55F1_4858_41C5_AFD45CE36CA1_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 12, 13)",
    "media": "this.panorama_5E367C9F_55F2_C8D7_419F_4D6232FC5A1C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5E367C9F_55F2_C8D7_419F_4D6232FC5A1C_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 13, 0)",
    "media": "this.panorama_5E33E83E_55F2_B7D9_41B3_AC3BEC8C4EC3",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5E33E83E_55F2_B7D9_41B3_AC3BEC8C4EC3_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.Menu_597AEF08_55F3_49B8_41D4_DF41D0330D27",
 {
  "id": "camera_59611F38_55F3_49D9_41D5_1101697BCFE9",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 76.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_5E929F69_55F3_4878_41CC_B18B37E8EAD8",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 176.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_5E89EF7B_55F3_4858_41C3_23CE544FF586",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -94.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_5E879F8D_55F3_48B8_41C7_E2C924F06CBE",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 55.72,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_5E7DFF9C_55F3_48D9_41D4_FC89DEEF8EDA",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -17.14,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_5E6BEFAE_55F3_48F8_41B5_898F94EAD153",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -94.26,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_5E619FBE_55F3_48D8_41B9_7A2374515724",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 86.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_5E5EDFCF_55F3_48B8_41D3_B153CEB28108",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -2.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_5E54EFDF_55F3_4858_41D2_2E88EAC2DA0A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 36.12,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_5E428FF1_55F3_4868_41D1_4E8F1CF12313",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -17.14,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_5E386000_55F3_77A8_41D2_CBBD19600490",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 133.34,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_5E37F012_55F3_77A8_41C8_E476B508B33F",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 141.38,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_5E2D4022_55F3_77E8_416D_459C0AD8B791",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -20.91,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_5E188033_55F3_77EF_41AC_180CC17BF6B5",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 22.3,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_5E17D043_55F3_77A8_41AB_D589AA016D56",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 168.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_5E02F055_55F3_77A8_41C3_46DF5BE113AA",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 6.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_59FE3064_55F3_7868_41B4_A43621C7B377",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_59EBD076_55F3_7868_41D3_F6AD182CE87C",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -166.87,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_59E73086_55F3_78A8_41C6_454A2054FF45",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -67.63,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_59D36097_55F3_78D7_41C3_A38F833A4D58",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_59CC10B9_55F3_78D8_41B2_365E4139B9D0",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -5.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_59BEB0C9_55F3_78B8_41C3_B9DFF79467EA",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -177.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_59A8E0EB_55F3_7878_41D4_1D0CFD288C72",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 171.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_59A570FC_55F3_7858_41C5_A35C31C75953",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 103.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_5997D11E_55F3_79D8_41BD_34F4ED1E004E",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 10.24,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_5980213E_55F3_79D9_41C4_6A1FF9F30F6E",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -89.24,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_5972B160_55F3_7868_41C9_F70123BBF2C0",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 97.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_596CF16F_55F3_7877_41BF_418B957FDF2F",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 79.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "thumbnailUrl": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904_t.jpg",
  "label": "1. EXT 1 - CABA\u00d1A VT1",
  "width": 160,
  "id": "photo_7A1D2634_714C_3CEE_41D0_EA423895C904",
  "class": "Photo",
  "height": 80,
  "image": {
   "levels": [
    {
     "url": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B_t.jpg",
  "label": "2. EXT 2 - CABA\u00d1A VT1",
  "width": 1600,
  "id": "photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B",
  "class": "Photo",
  "height": 800,
  "image": {
   "levels": [
    {
     "url": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469_t.jpg",
  "label": "3. EXT 3 - CABA\u00d1A VT1",
  "width": 1600,
  "id": "photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469",
  "class": "Photo",
  "height": 800,
  "image": {
   "levels": [
    {
     "url": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC_t.jpg",
  "label": "4. INT 1 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC",
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18_t.jpg",
  "label": "5. INT 2 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_7394633D_781D_12D6_41A4_A0A677937A18",
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6_t.jpg",
  "label": "6. EXT 4 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6",
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C_t.jpg",
  "label": "7. INT 3- CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C",
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 }
], "children": [
 {
  "shadow": false,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBackgroundOpacity": 1,
  "toolTipBackgroundColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingLeft": 0,
  "progressBarOpacity": 1,
  "toolTipTextShadowVerticalLength": 0,
  "paddingRight": 0,
  "progressBottom": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 10,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "progressHeight": 10,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipOpacity": 0.7,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "progressLeft": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipPaddingTop": 9,
  "toolTipBorderColor": "#767676",
  "toolTipTextShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "borderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarLeft": 0,
  "playbackBarRight": 0,
  "minHeight": 50,
  "progressBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "transitionDuration": 500,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarBorderSize": 0,
  "paddingTop": 0,
  "toolTipBorderRadius": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "width": "100%",
  "height": "100%",
  "minWidth": 100,
  "toolTipBorderSize": 0,
  "paddingBottom": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 14,
  "toolTipFontSize": 13,
  "progressBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "top": 0,
  "propagateClick": false,
  "playbackBarHeadBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowOpacity": 0,
  "toolTipPaddingRight": 14,
  "playbackBarBottom": 5,
  "progressOpacity": 1,
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarBorderColor": "#000000",
  "id": "MainViewer",
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowColor": "#000000",
  "left": 0,
  "playbackBarHeadOpacity": 1,
  "transitionMode": "blending",
  "toolTipFontFamily": "Arial",
  "toolTipPaddingBottom": 9,
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 1,
  "progressBorderColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical"
 },
 {
  "children": [
   {
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "toolTipBackgroundColor": "#000000",
      "width": "17.48%",
      "paddingLeft": 0,
      "height": "76.75%",
      "mode": "toggle",
      "paddingRight": 0,
      "minWidth": 1,
      "maxHeight": 70,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "Full Screen",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "maxWidth": 70,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "toolTipOpacity": 0.7,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "Icon fullscreen"
      },
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipFontFamily": "Arial",
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipPaddingBottom": 9,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     },
     {
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "toolTipBackgroundColor": "#000000",
      "width": "17.15%",
      "paddingLeft": 0,
      "height": "76.75%",
      "mode": "toggle",
      "paddingRight": 0,
      "minWidth": 1,
      "maxHeight": 70,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "Audio On/Off",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "maxWidth": 70,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "toolTipOpacity": 0.7,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "Icon audio"
      },
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipFontFamily": "Arial",
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipPaddingBottom": 9,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     }
    ],
    "gap": 10,
    "scrollBarVisible": "rollOver",
    "width": "75.269%",
    "paddingLeft": 0,
    "height": "100%",
    "overflow": "visible",
    "paddingRight": 0,
    "scrollBarWidth": 10,
    "minWidth": 1,
    "layout": "horizontal",
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "class": "Container",
    "creationPolicy": "delayed",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "right",
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "data": {
     "name": "-Hide buttons"
    },
    "scrollBarColor": "#000000",
    "borderSize": 0,
    "contentOpaque": false,
    "borderRadius": 0,
    "minHeight": 1,
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingTop": 0
   }
  ],
  "gap": 1,
  "scrollBarVisible": "rollOver",
  "width": "22.545%",
  "overflow": "visible",
  "paddingLeft": 0,
  "minWidth": 265,
  "layout": "horizontal",
  "paddingRight": 0,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarWidth": 10,
  "verticalAlign": "middle",
  "top": "89%",
  "creationPolicy": "delayed",
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": "3%",
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "scrollBarMargin": 2,
  "data": {
   "name": "--Settings Button Set"
  },
  "horizontalAlign": "right",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "borderRadius": 5,
  "minHeight": 50,
  "right": 25,
  "shadow": false,
  "backgroundOpacity": 0,
  "paddingTop": 0
 },
 {
  "gap": 10,
  "scrollBarVisible": "rollOver",
  "width": "21%",
  "height": "25%",
  "overflow": "visible",
  "paddingLeft": 0,
  "minWidth": 300,
  "layout": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "scrollBarWidth": 10,
  "verticalAlign": "top",
  "class": "Container",
  "top": "3.5%",
  "creationPolicy": "delayed",
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "horizontalAlign": "left",
  "id": "Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
  "scrollBarMargin": 2,
  "data": {
   "name": "--Stickers Container"
  },
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "left": "2.14%",
  "borderRadius": 0,
  "minHeight": 120,
  "backgroundOpacity": 0,
  "shadow": false,
  "paddingTop": 0
 },
 {
  "selectedItemThumbnailShadow": true,
  "backgroundOpacity": 0.25,
  "selectedItemThumbnailShadowOpacity": 0.73,
  "backgroundColor": [
   "#000000"
  ],
  "itemHorizontalAlign": "center",
  "itemBackgroundColorDirection": "vertical",
  "paddingLeft": 15,
  "paddingRight": 15,
  "itemBackgroundColor": [],
  "itemLabelHorizontalAlign": "center",
  "backgroundColorRatios": [
   0
  ],
  "selectedItemThumbnailShadowVerticalLength": 0,
  "selectedItemThumbnailShadowBlurRadius": 10,
  "maxWidth": 150,
  "selectedItemLabelFontWeight": "bold",
  "itemBorderRadius": 0,
  "selectedItemBackgroundColorRatios": [],
  "itemPaddingTop": 3,
  "itemLabelFontFamily": "Arial",
  "itemLabelPosition": "bottom",
  "rollOverItemLabelFontColor": "#FFFFFF",
  "scrollBarMargin": 4,
  "scrollBarOpacity": 1,
  "itemThumbnailShadow": false,
  "scrollBarColor": "#52B7EF",
  "selectedItemBackgroundColor": [],
  "itemBackgroundOpacity": 0,
  "selectedItemBorderRadius": 0,
  "itemThumbnailWidth": 80,
  "borderSize": 0,
  "rollOverItemLabelFontWeight": "bold",
  "minHeight": 1,
  "itemLabelGap": 9,
  "itemLabelFontColor": "#FFFFFF",
  "backgroundColorDirection": "vertical",
  "paddingTop": 20,
  "gap": 10,
  "itemThumbnailBorderRadius": 50,
  "itemPaddingLeft": 3,
  "itemVerticalAlign": "middle",
  "itemOpacity": 1,
  "selectedItemLabelFontStyle": "italic",
  "itemThumbnailOpacity": 1,
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "selectedItemBorderSize": 0,
  "minWidth": 1,
  "layout": "vertical",
  "selectedItemBackgroundOpacity": 0,
  "itemThumbnailScaleMode": "fit_outside",
  "paddingBottom": 20,
  "scrollBarWidth": 7,
  "height": "82.127%",
  "class": "ThumbnailList",
  "itemPaddingRight": 3,
  "verticalAlign": "top",
  "selectedItemLabelTextDecoration": "underline",
  "top": "3.5%",
  "itemLabelFontWeight": "normal",
  "itemLabelTextDecoration": "none",
  "visible": false,
  "itemLabelFontStyle": "normal",
  "propagateClick": false,
  "itemPaddingBottom": 3,
  "rollOverItemLabelTextDecoration": "underline",
  "horizontalAlign": "left",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "data": {
   "name": "-ThumbnailList"
  },
  "itemMode": "normal",
  "borderRadius": 3,
  "itemBackgroundColorRatios": [],
  "selectedItemLabelFontColor": "#FFFFFF",
  "selectedItemLabelFontSize": 12,
  "itemThumbnailHeight": 80,
  "itemLabelFontSize": 12,
  "scrollBarVisible": "rollOver",
  "shadow": false,
  "right": "2%"
 },
 {
  "children": [
   {
    "gap": 10,
    "scrollBarVisible": "rollOver",
    "width": "100%",
    "paddingLeft": 0,
    "height": "55.435%",
    "overflow": "visible",
    "paddingRight": 0,
    "scrollBarWidth": 10,
    "minWidth": 1,
    "layout": "horizontal",
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "class": "Container",
    "creationPolicy": "delayed",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "left",
    "id": "Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B",
    "data": {
     "name": "Container Content"
    },
    "scrollBarColor": "#000000",
    "borderSize": 0,
    "contentOpaque": false,
    "borderRadius": 0,
    "minHeight": 1,
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingTop": 0
   }
  ],
  "gap": 1,
  "scrollBarVisible": "rollOver",
  "width": "37.394%",
  "paddingLeft": 0,
  "height": 92,
  "overflow": "visible",
  "paddingRight": 0,
  "minWidth": 1,
  "layout": "vertical",
  "paddingBottom": 0,
  "scrollBarWidth": 10,
  "verticalAlign": "bottom",
  "class": "Container",
  "creationPolicy": "delayed",
  "scrollBarMargin": 2,
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": "3%",
  "id": "Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
  "data": {
   "name": "-Discover Container"
  },
  "horizontalAlign": "left",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "left": "2%",
  "borderRadius": 0,
  "minHeight": 1,
  "backgroundOpacity": 0,
  "shadow": false,
  "paddingTop": 0
 },
 {
  "width": "5%",
  "paddingLeft": 0,
  "height": "5%",
  "paddingRight": 0,
  "minWidth": 1,
  "maxHeight": 265,
  "url": "skin/Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D.png",
  "paddingBottom": 0,
  "maxWidth": 485,
  "class": "Image",
  "scaleMode": "fit_inside",
  "verticalAlign": "middle",
  "top": "0.98%",
  "propagateClick": false,
  "horizontalAlign": "center",
  "id": "Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D",
  "data": {
   "name": "Image21736"
  },
  "borderSize": 0,
  "borderRadius": 0,
  "minHeight": 1,
  "right": "0.6%",
  "shadow": false,
  "backgroundOpacity": 0,
  "paddingTop": 0
 }
], 
 "start": "this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "gap": 10,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "mouseWheelEnabled": true,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "paddingLeft": 0,
 "height": "100%",
 "overflow": "visible",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "paddingRight": 0,
 "minWidth": 20,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "class": "Player",
 "creationPolicy": "delayed",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "vrPolyfillScale": 0.85,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "data": {
  "name": "Player463"
 },
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "scripts": {
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getKey": function(key){  return window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "existsKey": function(key){  return key in window; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); }
 },
 "paddingTop": 0
})