(function(C){function t(t){for(var n,a,u=t[0],o=t[1],s=t[2],c=0,p=[];c<u.length;c++)a=u[c],r[a]&&p.push(r[a][0]),r[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(C[n]=o[n]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var C,t=0;t<i.length;t++){for(var e=i[t],n=!0,u=1;u<e.length;u++){var o=e[u];0!==r[o]&&(n=!1)}n&&(i.splice(t--,1),C=a(a.s=e[0]))}return C}var n={},r={app:0},i=[];function a(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return C[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=C,a.c=n,a.d=function(C,t,e){a.o(C,t)||Object.defineProperty(C,t,{enumerable:!0,get:e})},a.r=function(C){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(C,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(C,"__esModule",{value:!0})},a.t=function(C,t){if(1&t&&(C=a(C)),8&t)return C;if(4&t&&"object"===typeof C&&C&&C.__esModule)return C;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:C}),2&t&&"string"!=typeof C)for(var n in C)a.d(e,n,function(t){return C[t]}.bind(null,n));return e},a.n=function(C){var t=C&&C.__esModule?function(){return C["default"]}:function(){return C};return a.d(t,"a",t),t},a.o=function(C,t){return Object.prototype.hasOwnProperty.call(C,t)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=o;i.push([0,"chunk-vendors"]),e()})({0:function(C,t,e){C.exports=e("56d7")},"034f":function(C,t,e){"use strict";var n=e("64a9"),r=e.n(n);r.a},"099e":function(C,t,e){},"56d7":function(C,t,e){"use strict";e.r(t);var n=e("2b0e"),r=function(){var C=this,t=C.$createElement,e=C._self._c||t;return e("div",{attrs:{id:"app"}},[e("Quiz")],1)},i=[],a=function(){var C=this,t=C.$createElement,e=C._self._c||t;return e("section",{staticClass:"quiz"},[e("div",{staticClass:"welcome"},[e("Picture",{staticClass:"quiz-img",attrs:{url:"https://media0.giphy.com/media/Bh3YfliwBZNwk/giphy.gif?cid=3640f6095c852266776c6f746fb2fc67"}}),C._m(0),e("a",{staticClass:"quiz-button",attrs:{href:"#"}},[C._v("Start Quiz")])],1)])},u=[function(){var C=this,t=C.$createElement,e=C._self._c||t;return e("h1",{staticClass:"quiz-heading"},[C._v("How Well Do You Know\n      "),e("br"),C._v("the Harry Potter Movies?\n    ")])}],o=function(){var C=this,t=C.$createElement,e=C._self._c||t;return e("svg",{staticClass:"item__svg",attrs:{width:"600",height:"400",viewBox:"0 0 600 400"}},[e("clipPath",{attrs:{id:"clipShape"}},[e("path",[e("animate",{attrs:{repeatCount:"indefinite",attributeName:"d",dur:"12s",values:"\n          M38.6327956,262.850157 C10.4303836,245.465029 11.129617,209.370192 21.8511951,185.52773 C33.0389287,160.691833 32.3059325,107.874675 71.9291558,76.5814447 C143.250958,20.6178894 145.848576,48.7647223 192.231055,29.3927224 C243.974324,7.7027054 311.333803,13.6633208 354.453193,26.74356 C396.640272,39.6582266 418.826971,16.1976171 483.156439,45.8351212 C550.282841,76.9627792 542.08081,105.390568 564.223199,127.908448 C600.583334,164.831149 579.140178,216.15867 574.478622,227.583183 C566.787055,246.12732 573.705414,291.248454 547.134546,304.659838 C509.142867,323.700693 519.045487,316.291317 474.52763,333.345299 C436.769029,347.75012 388.715628,331.397234 352.355493,353.749541 C299.446836,386.367353 203.651867,396.301712 166.126344,369.810088 C130.69852,344.808618 111.319301,351.477574 71.9291558,329.621985 C42.561355,313.561438 67.0682853,280.566431 38.6327956,262.850157 Z;\n          M40.0507812,274.53125 C11.8483693,257.146122 17.0792032,207.018243 27.8007813,183.175781 C38.9885149,158.339884 34.9119329,117.465106 74.5351563,86.171875 C145.856958,30.2083197 143.765958,41.0555937 190.148437,21.6835937 C241.891706,-0.00642323944 294.603266,14.8338232 337.722656,27.9140625 C379.909735,40.8287291 429.670532,21.0656209 494,50.703125 C561.126402,81.830783 529.408392,97.736026 551.550781,120.253906 C587.910916,157.176607 585.407649,199.075487 580.746094,210.5 C573.054527,229.044137 578.121649,290.014397 551.550781,303.425781 C513.559102,322.466636 519.263951,323.379611 474.746094,340.433594 C436.987493,354.838414 374.082791,326.464099 337.722656,348.816406 C284.813999,381.434218 195.392711,397.96428 157.867187,371.472656 C122.439364,346.471186 119.362802,347.796996 79.9726562,325.941406 C50.6048554,309.880859 68.4862709,292.247523 40.0507812,274.53125 Z;\n          M37.7851563,283.613281 C16.6523438,268.429687 16.5664062,182.390625 37.7851562,163.960938 C59.0039062,145.53125 39.2803603,99.9414423 76.7226563,67.4179688 C119.183594,30.5351562 124.589673,36.9833964 180.984375,25.2890625 C226.910156,15.765625 309.72436,12.2088232 352.84375,25.2890625 C395.030829,38.2037291 438.385375,19.5070271 502.714844,49.1445313 C569.841246,80.2721892 537.73261,100.247745 559.875,122.765625 C596.235134,159.688326 586.434993,209.012987 581.773438,220.4375 C574.081871,238.981637 592.957586,305.756584 566.386719,319.167969 C528.39504,338.208823 547.232701,353.801486 502.714844,370.855469 C464.956243,385.260289 406.90625,353.820313 360.148438,366.011719 C293.126529,383.486688 197.546875,383.328125 145.730469,366.011719 C93.9140625,348.695313 116.112802,348.652465 76.7226563,326.796875 C47.3548554,310.736328 58.9179687,298.796875 37.7851563,283.613281 Z;\n          M46.546875,280.519531 C25.4140625,265.335937 16.5664062,198.621094 37.7851562,180.191406 C59.0039062,161.761719 28.7373916,117.117224 66.1796875,84.59375 C108.640625,47.7109375 124.589673,36.9833964 180.984375,25.2890625 C226.910156,15.765625 309.72436,12.2088232 352.84375,25.2890625 C395.030829,38.2037291 426.877563,31.6242146 491.207031,61.2617187 C558.333433,92.3893767 537.73261,100.247745 559.875,122.765625 C596.235134,159.688326 586.434993,209.012987 581.773438,220.4375 C574.081871,238.981637 570.215399,301.16674 543.644531,314.578125 C505.652852,333.61898 519.658482,331.762423 475.140625,348.816406 C437.382024,363.221227 360.563259,326.464099 324.203125,348.816406 C271.294468,381.434218 186.568492,407.140061 149.042969,380.648437 C113.615146,355.646968 111.198739,357.629027 71.8085938,335.773437 C42.4407929,319.712891 67.6796875,295.703125 46.546875,280.519531 Z;\n          M38.6327956,262.850157 C10.4303836,245.465029 11.129617,209.370192 21.8511951,185.52773 C33.0389287,160.691833 32.3059325,107.874675 71.9291558,76.5814447 C143.250958,20.6178894 145.848576,48.7647223 192.231055,29.3927224 C243.974324,7.7027054 311.333803,13.6633208 354.453193,26.74356 C396.640272,39.6582266 418.826971,16.1976171 483.156439,45.8351212 C550.282841,76.9627792 542.08081,105.390568 564.223199,127.908448 C600.583334,164.831149 579.140178,216.15867 574.478622,227.583183 C566.787055,246.12732 573.705414,291.248454 547.134546,304.659838 C509.142867,323.700693 519.045487,316.291317 474.52763,333.345299 C436.769029,347.75012 388.715628,331.397234 352.355493,353.749541 C299.446836,386.367353 203.651867,396.301712 166.126344,369.810088 C130.69852,344.808618 111.319301,351.477574 71.9291558,329.621985 C42.561355,313.561438 67.0682853,280.566431 38.6327956,262.850157 Z\n        "}})])]),e("path",{attrs:{fill:"#333",opacity:"0.2"}},[e("animate",{attrs:{repeatCount:"indefinite",attributeName:"d",dur:"11s",values:"\n        M18.18503,271.296942 C-12.3266423,252.642517 2.24542966,194.525572 13.8449084,168.94236 C25.9487123,142.293181 17.409303,108.250806 60.2769417,74.6728404 C137.438691,14.6233576 132.856673,31.2652594 183.037027,10.4788999 C239.01712,-12.7947162 315.544407,7.97401042 362.194484,22.0092446 C407.835911,35.8668175 428.980824,4.96427168 498.577696,36.765625 C571.200519,70.165929 553.785365,100.499617 577.740811,124.66154 C617.078173,164.279985 593.33865,216.741794 588.295398,229.000416 C579.974033,248.898469 597.070283,301.768612 568.323749,316.159169 C527.221248,336.590206 546.740749,334.348146 498.577696,352.647248 C457.727358,368.103772 396.933226,344.848675 357.595864,368.832936 C300.354958,403.832191 183.555193,410.790533 142.957017,382.364742 C104.628305,355.537902 95.3322496,355.787931 52.7167735,332.336654 C20.9442883,315.103518 48.9488648,290.30669 18.18503,271.296942 Z;\n        M22.9609375,277.792969 C-7.55073477,259.138544 11.3614588,188.770712 22.9609375,163.1875 C35.0647414,136.538321 24.8276738,105.636559 67.6953125,72.0585938 C144.857062,12.0091109 130.604803,35.7043282 180.785156,14.9179687 C236.765249,-8.35564737 322.096016,0.882734603 368.746094,14.9179688 C414.387521,28.7755417 441.03594,15.8002092 510.632812,47.6015625 C583.255636,81.0018665 544.368304,96.3771404 568.323749,120.539063 C607.661112,160.157508 589.980752,232.026534 584.9375,244.285156 C576.616135,264.18321 582.891065,302.500068 554.144531,316.890625 C513.042031,337.321662 545.077115,342.025116 496.914062,360.324219 C456.063724,375.780742 392.634238,336.339958 353.296875,360.324219 C296.055969,395.323474 166.613801,411.730478 126.015625,383.304687 C87.6869127,356.477848 99.7912574,345.826277 57.1757812,322.375 C25.4032961,305.141864 53.7247724,296.802716 22.9609375,277.792969 Z;\n        M22.9609375,277.792969 C-7.55073477,259.138544 11.3614588,188.770712 22.9609375,163.1875 C35.0647414,136.538321 22.9609375,86.5820313 49.9570312,61.5351563 C85.2734375,41.0585938 115.339844,21.0273437 180.785156,14.9179688 C246.150367,8.81607131 285.492188,1.328125 374.804688,10.6640625 C464.117188,20 469.128906,29.4414063 500.96875,34.2265625 C568.323749,44.8945313 547.927038,85.8472048 567.550781,111.640625 C596.226562,149.332031 594.058594,212.359375 589.300781,235.832031 C585.155041,256.285031 602.492187,303.277344 577.011719,327.066406 C547.328837,354.778923 544.5625,378.761719 500.96875,380.351563 C448.480469,381.578125 408.605469,358.441406 362.332031,371.796875 C290.959452,392.396474 193.363281,397.160156 138.59375,380.351563 C83.8242188,363.542969 99.7912574,345.826277 57.1757812,322.375 C25.4032961,305.141864 53.7247724,296.802716 22.9609375,277.792969 Z;\n        M22.9609375,277.792969 C-7.55073477,259.138544 11.3614588,188.770712 22.9609375,163.1875 C35.0647414,136.538321 22.9609375,86.5820313 49.9570312,61.5351563 C100.665411,26.9384668 126.015625,28.03125 180.785156,14.9179688 C242.759688,0.079618949 322.096016,0.882734603 368.746094,14.9179688 C414.387521,28.7755417 469.128906,46.0820313 500.96875,50.8671875 C568.323749,61.5351563 544.368304,96.3771404 568.323749,120.539063 C607.661112,160.157508 589.980752,232.026534 584.9375,244.285156 C576.616135,264.18321 582.891065,302.500068 554.144531,316.890625 C513.042031,337.321662 525.851562,364.433594 482.257812,366.023438 C429.769531,367.25 392.634238,336.339958 353.296875,360.324219 C296.055969,395.323474 166.613801,411.730478 126.015625,383.304688 C87.6869127,356.477848 99.7912574,345.826277 57.1757812,322.375 C25.4032961,305.141864 53.7247724,296.802716 22.9609375,277.792969 Z;\n        M18.18503,271.296942 C-12.3266423,252.642517 2.24542966,194.525572 13.8449084,168.94236 C25.9487123,142.293181 17.409303,108.250806 60.2769417,74.6728404 C137.438691,14.6233576 132.856673,31.2652594 183.037027,10.4788999 C239.01712,-12.7947162 315.544407,7.97401042 362.194484,22.0092446 C407.835911,35.8668175 428.980824,4.96427168 498.577696,36.765625 C571.200519,70.165929 553.785365,100.499617 577.740811,124.66154 C617.078173,164.279985 593.33865,216.741794 588.295398,229.000416 C579.974033,248.898469 597.070283,301.768612 568.323749,316.159169 C527.221248,336.590206 546.740749,334.348146 498.577696,352.647248 C457.727358,368.103772 396.933226,344.848675 357.595864,368.832936 C300.354958,403.832191 183.555193,410.790533 142.957017,382.364742 C104.628305,355.537902 95.3322496,355.787931 52.7167735,332.336654 C20.9442883,315.103518 48.9488648,290.30669 18.18503,271.296942 Z\n      "}})]),e("g",{attrs:{"clip-path":"url(#clipShape)",fill:"#222222"}},[e("image",C._b({staticClass:"item__img",attrs:{x:"0",y:"0",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid slice"}},"image",{"xlink:href":C.url},!1))]),e("path",{attrs:{stroke:"#191919",fill:"none"}},[e("animate",{attrs:{repeatCount:"indefinite",attributeName:"d",dur:"12s",values:"\n        M34.047406,264.54881 C5.3502149,246.693814 6.06171555,209.623441 16.9713915,185.136588 C28.3554011,159.62945 27.6095453,105.384801 67.9279129,73.2458081 C140.500975,15.7697242 143.144165,44.6772824 190.340372,24.7817149 C242.991417,2.50548121 311.532642,8.62719432 355.408512,22.0609535 C398.335715,35.3246652 420.911655,11.2299851 486.36971,41.6685029 C554.673768,73.6374489 546.327842,102.833556 568.858694,125.960028 C605.856726,163.88064 584.037374,216.595391 579.294036,228.328675 C571.467529,247.374004 578.507263,293.714629 551.47024,307.488482 C512.81204,327.043955 522.88839,319.434326 477.589518,336.949226 C439.168485,351.743367 390.272042,334.948511 353.27401,357.904934 C299.437131,391.404309 201.961549,401.607164 163.777683,374.39955 C127.728319,348.722365 108.009113,355.571563 67.9279129,333.125282 C38.0448875,316.630666 62.981764,282.743902 34.047406,264.54881 Z;\n        M34.2123028,278.912867 C5.50999222,261.063072 10.8335447,209.595384 21.7451669,185.115665 C33.1312074,159.615958 28.9823664,117.648686 69.3079268,85.5190554 C141.893935,28.059716 139.765871,39.1969141 186.970498,19.3071427 C239.630936,-2.96260126 293.276829,12.2742927 337.160527,25.7041383 C380.095388,38.9639859 430.738215,18.6726528 496.207948,49.1023029 C564.524191,81.0619355 532.243967,97.392291 554.778839,120.512025 C591.783471,158.421589 589.235833,201.440335 584.49165,213.170201 C576.663747,232.209982 581.820685,294.809845 554.778839,308.579686 C516.113742,328.129461 521.919712,329.066838 476.612759,346.576637 C438.184872,361.366467 374.16516,332.233768 337.160527,355.183503 C283.314044,388.673119 192.307729,405.644993 154.11705,378.445306 C118.061255,352.775601 114.93016,354.136847 74.8418085,331.697104 C44.9534521,315.207294 63.1518226,297.102657 34.2123028,278.912867 Z;\n        M29.1630401,288.219672 C7.65607171,272.616891 7.56861259,184.202471 29.16304,165.263979 C50.7574675,146.325485 30.6847167,99.4770386 68.7899276,66.0556601 C112.002635,28.1545903 117.504429,34.7808529 174.897598,22.7636629 C221.636493,12.9773032 305.916921,9.3223056 349.799739,22.7636629 C392.733739,36.0348764 436.855876,16.8219976 502.324297,47.2777313 C570.63917,79.2647586 537.962051,99.7917977 560.496472,122.931349 C597.500361,160.873409 587.526709,211.55982 582.782621,223.29974 C574.954875,242.355842 594.164784,310.974306 567.123481,324.755951 C528.45916,344.322483 547.630341,360.345627 502.324297,377.870434 C463.897181,392.672941 404.819414,360.364973 357.233756,372.892959 C289.025226,390.850375 191.753336,390.687434 139.019522,372.892959 C86.2857073,355.098483 108.877475,355.054452 68.7899276,332.595475 C38.9021705,316.09153 50.6700085,303.822454 29.1630401,288.219672 Z;\n        M36.3034935,278.794423 C14.7939254,263.205808 5.78853319,194.711353 27.3855709,175.790055 C48.9826085,156.868758 18.1765028,111.033375 56.2863196,77.6423405 C99.5042503,39.7756825 115.737638,28.7619852 173.137744,16.7557061 C219.882289,6.97823179 304.172904,3.32655264 348.061026,16.7557061 C391.000216,30.0148702 423.414713,23.2598478 488.891047,53.6879295 C557.214177,85.6459148 536.246083,93.7139043 558.783227,116.832447 C595.79159,154.740057 585.816732,205.380449 581.072071,217.10971 C573.243378,236.14851 569.307975,299.992394 542.263402,313.761527 C503.594408,333.310295 517.84973,331.404214 472.538209,348.913111 C434.106448,363.702179 355.918159,325.964558 318.909797,348.913111 C265.057884,382.401 178.821415,408.792544 140.626887,381.594258 C104.567457,355.925877 102.10797,357.960808 62.015578,335.522222 C32.1242082,319.033262 57.8130616,294.383038 36.3034935,278.794423 Z;\n        M34.047406,264.54881 C5.3502149,246.693814 6.06171555,209.623441 16.9713915,185.136588 C28.3554011,159.62945 27.6095453,105.384801 67.9279129,73.2458081 C140.500975,15.7697242 143.144165,44.6772824 190.340372,24.7817149 C242.991417,2.50548121 311.532642,8.62719432 355.408512,22.0609535 C398.335715,35.3246652 420.911655,11.2299851 486.36971,41.6685029 C554.673768,73.6374489 546.327842,102.833556 568.858694,125.960028 C605.856726,163.88064 584.037374,216.595391 579.294036,228.328675 C571.467529,247.374004 578.507263,293.714629 551.47024,307.488482 C512.81204,327.043955 522.88839,319.434326 477.589518,336.949226 C439.168485,351.743367 390.272042,334.948511 353.27401,357.904934 C299.437131,391.404309 201.961549,401.607164 163.777683,374.39955 C127.728319,348.722365 108.009113,355.571563 67.9279129,333.125282 C38.0448875,316.630666 62.981764,282.743902 34.047406,264.54881 Z\n      "}})])])},s=[],l={props:{url:{required:!0,type:String}}},c=l,p=e("2877"),f=Object(p["a"])(c,o,s,!1,null,null,null),d=f.exports,h={name:"Quiz",components:{Picture:d}},v=h,m=(e("a184"),Object(p["a"])(v,a,u,!1,null,null,null)),b=m.exports,g={name:"app",components:{Quiz:b}},_=g,M=(e("034f"),Object(p["a"])(_,r,i,!1,null,null,null)),y=M.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(C){return C(y)}}).$mount("#app")},"64a9":function(C,t,e){},a184:function(C,t,e){"use strict";var n=e("099e"),r=e.n(n);r.a}});
//# sourceMappingURL=app.6a5bb715.js.map