webpackJsonp([0],[,,,function(e,a,i){"use strict";var n=i(25),t=i.n(n),o=i(4),_=i.n(o),r=i(26),c=i.n(r),s=(_.a.convert(new Date,0),{lat:-7.79722,lon:110.36879,timezone:7});a.a={name:"app",data:function(){return{cities:c.a.map(t.a,function(e){return{name:e.province_name,value:e.province_name_en,latidude:e.province_lat,longitude:e.province_lon,timezone:e.timezone}}),today:{},selected:{city:{name:"DI Yogyakarta"}},listTimes:[]}},watch:function(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}({},"selected.city",function(e){window.prayTimes.setMethod("Makkah");var a={lat:e.latidude,lon:e.longitude,timezone:e.timezone};this.createList(a),this.selected.city=e,this.today=window.prayTimes.getTimes(new Date,[a.lat,a.lon],a.timezone)}),methods:{createList:function(e){for(var a=e.lat,i=e.lon,n=e.timezone,t=[],o=new Date((new Date).getFullYear(),(new Date).getMonth(),1),_=new Date((new Date).getFullYear(),(new Date).getMonth()+1,0);o<=_;){var r=window.prayTimes.getTimes(o,[a,i],n);r.day=o.getDate();var c=new Date;t.push(Object.assign({},r,{day:o.getDate(),isToday:o.getMonth()==c.getMonth()&&o.getDate()==c.getDate()})),o.setDate(o.getDate()+1)}this.listTimes=t}},mounted:function(){console.log(window.prayTimes),this.createList(s),this.today=window.prayTimes.getTimes(new Date,[s.lat,s.lon],s.timezone)}}},,function(e,a,i){"use strict";a.a={name:"menubar",data:function(){return{visibility:!1}},methods:{toggleSidebar:function(){this.visibility=!this.visibility}}}},function(e,a,i){"use strict";a.a={name:"icon",props:["name"]}},function(e,a,i){"use strict";a.a={name:"dtitle",props:["title"],created:function(){document.title=this.title},watch:{title:function(){document.title=this.title}}}},function(e,a,i){"use strict";var n=i(4),t=i.n(n),o=t.a.convert(new Date,0);a.a={props:["today"],data:function(){return{hijriDate:o.year+" - "+o.dayOfMonth+" -  "+o.monthText}},created:function(){(function(e,a,i){var n,t=e.getElementsByTagName(a)[0];e.getElementById(i)||(n=e.createElement(a),n.id=i,n.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=1717383648589097&autoLogAppEvents=1",t.parentNode.insertBefore(n,t))})(document,"script","facebook-jssdk")}}},function(e,a,i){i(10),i(12),e.exports=i(17)},function(e,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=i(11),t=i.n(n);t.a.install({onUpdateReady:function(){t.a.applyUpdate()}})},,function(e,a,i){window.Promise||(window.Promise=i(13)),Object.assign=i(16)},,,,,function(e,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=i(18),t=i(19),o=i(29);i.n(o);n.a.config.productionTip=!1,n.a.component("menu-bar",i(32).default),n.a.component("icon",i(36).default),n.a.component("dtitle",i(38).default),n.a.component("navigation",i(40).default),i(43),new n.a({el:"#app",render:function(e){return e(t.a)}})},,function(e,a,i){"use strict";function n(e){i(20),i(21),i(22),i(23),i(24)}var t=i(3),o=i(28),_=i(1),r=n,c=_(t.a,o.a,!1,r,"data-v-d1b5714c",null);a.a=c.exports},,,,function(e,a){},function(e,a){},function(e,a){e.exports=[{province_id:"11",province_name:"Aceh",province_name_abbr:"NAD",province_name_id:"Nanggroe Aceh Darussalam",province_name_en:"Nanggroe Aceh Darussalam",province_capital_city_id:"1171",iso_code:"ID-AC",iso_name:"Aceh",iso_type:"autonomous province",iso_geounit:"SM",timezone:"7",province_lat:"4.695135",province_lon:"96.749397"},{province_id:"12",province_name:"Sumatera Utara",province_name_abbr:"Sumut",province_name_id:"Sumatera Utara",province_name_en:"North Sumatera",province_capital_city_id:"1275",iso_code:"ID-SU",iso_name:"Sumatera Utara",iso_type:"province",iso_geounit:"SM",timezone:"7",province_lat:"3.585242",province_lon:"98.675598"},{province_id:"13",province_name:"Sumatera Barat",province_name_abbr:"Sumbar",province_name_id:"Sumatera Barat",province_name_en:"West Sumatera",province_capital_city_id:"1371",iso_code:"ID-SB",iso_name:"Sumatera Barat",iso_type:"province",iso_geounit:"SM",timezone:"7",province_lat:"-0.953730",province_lon:"100.351990"},{province_id:"14",province_name:"Riau",province_name_abbr:"Riau",province_name_id:"Riau",province_name_en:"Riau",province_capital_city_id:"1471",iso_code:"ID-RI",iso_name:"Riau",iso_type:"province",iso_geounit:"SM",timezone:"7",province_lat:"0.293347",province_lon:"101.706818"},{province_id:"15",province_name:"Jambi",province_name_abbr:"Jambi",province_name_id:"Jambi",province_name_en:"Jambi",province_capital_city_id:"1571",iso_code:"ID-JA",iso_name:"Jambi",iso_type:"province",iso_geounit:"SM",timezone:"7",province_lat:"-1.485180",province_lon:"102.438049"},{province_id:"16",province_name:"Sumatera Selatan",province_name_abbr:"Sumsel",province_name_id:"Sumatera Selatan",province_name_en:"South Sumatera",province_capital_city_id:"1671",iso_code:"ID-SS",iso_name:"Sumatera Selatan",iso_type:"province",iso_geounit:"SM",timezone:"7",province_lat:"-2.991100",province_lon:"104.756729"},{province_id:"17",province_name:"Bengkulu",province_name_abbr:"Bengkulu",province_name_id:"Bengkulu",province_name_en:"Bengkulu",province_capital_city_id:"1771",iso_code:"ID-BE",iso_name:"Bengkulu",iso_type:"province",iso_geounit:"SM",timezone:"7",province_lat:"-3.800640",province_lon:"102.256203"},{province_id:"18",province_name:"Lampung",province_name_abbr:"Lampung",province_name_id:"Lampung",province_name_en:"Lampung",province_capital_city_id:"1871",iso_code:"ID-LA",iso_name:"Lampung",iso_type:"province",iso_geounit:"SM",timezone:"7",province_lat:"-4.558580",province_lon:"105.406799"},{province_id:"19",province_name:"Kepulauan Bangka Belitung",province_name_abbr:"Babel",province_name_id:"Kepulauan Bangka Belitung",province_name_en:"Bangka Belitung Islands",province_capital_city_id:"1971",iso_code:"ID-BB",iso_name:"Bangka Belitung",iso_type:"province",iso_geounit:"SM",timezone:"7",province_lat:"-2.741050",province_lon:"106.440582"},{province_id:"21",province_name:"Kepulauan Riau",province_name_abbr:"Kepri",province_name_id:"Kepulauan Riau",province_name_en:"Riau Islands",province_capital_city_id:"2172",iso_code:"ID-KR",iso_name:"Kepulauan Riau",iso_type:"province",iso_geounit:"SM",timezone:"7",province_lat:"1.082828",province_lon:"104.030449"},{province_id:"31",province_name:"DKI Jakarta",province_name_abbr:"DKI",province_name_id:"DKI Jakarta",province_name_en:"Special Capital Region of Jakarta",province_capital_city_id:"3173",iso_code:"ID-JK",iso_name:"Jakarta Raya",iso_type:"special district",iso_geounit:"JW",timezone:"7",province_lat:"-6.211540",province_lon:"106.845169"},{province_id:"32",province_name:"Jawa Barat",province_name_abbr:"Jabar",province_name_id:"Jawa Barat",province_name_en:"West Java",province_capital_city_id:"3273",iso_code:"ID-JB",iso_name:"Jawa Barat",iso_type:"province",iso_geounit:"JW",timezone:"7",province_lat:"-6.914740",province_lon:"107.609810"},{province_id:"33",province_name:"Jawa Tengah",province_name_abbr:"Jateng",province_name_id:"Jawa Tengah",province_name_en:"Central Java",province_capital_city_id:"3374",iso_code:"ID-JT",iso_name:"Jawa Tengah",iso_type:"province",iso_geounit:"JW",timezone:"7",province_lat:"-6.966660",province_lon:"110.416656"},{province_id:"34",province_name:"DI Yogyakarta",province_name_abbr:"DIY",province_name_id:"DI Yogyakarta",province_name_en:"Yogyakarta Special Region",province_capital_city_id:"3471",iso_code:"ID-YO",iso_name:"Yogyakarta",iso_type:"special region",iso_geounit:"JW",timezone:"7",province_lat:"-7.797220",province_lon:"110.368790"},{province_id:"35",province_name:"Jawa Timur",province_name_abbr:"Jatim",province_name_id:"Jawa Timur",province_name_en:"East Java",province_capital_city_id:"3578",iso_code:"ID-JI",iso_name:"Jawa Timur",iso_type:"province",iso_geounit:"JW",timezone:"7",province_lat:"-7.289160",province_lon:"112.734390"},{province_id:"36",province_name:"Banten",province_name_abbr:"Banten",province_name_id:"Banten",province_name_en:"Banten",province_capital_city_id:"3673",iso_code:"ID-BT",iso_name:"Banten",iso_type:"province",iso_geounit:"JW",timezone:"7",province_lat:"-6.120090",province_lon:"106.150291"},{province_id:"51",province_name:"Bali",province_name_abbr:"Bali",province_name_id:"Bali",province_name_en:"Bali",province_capital_city_id:"5171",iso_code:"ID-BA",iso_name:"Bali",iso_type:"province",iso_geounit:"NU",timezone:"8",province_lat:"-8.656290",province_lon:"115.222092"},{province_id:"52",province_name:"Nusa Tenggara Barat",province_name_abbr:"NTB",province_name_id:"Nusa Tenggara Barat",province_name_en:"West Nusa Tenggara",province_capital_city_id:"5271",iso_code:"ID-NB",iso_name:"Nusa Tenggara Barat",iso_type:"province",iso_geounit:"NU",timezone:"8",province_lat:"-8.583330",province_lon:"116.116661"},{province_id:"53",province_name:"Nusa Tenggara Timur",province_name_abbr:"NTT",province_name_id:"Nusa Tenggara Timur",province_name_en:"East Nusa Tenggara",province_capital_city_id:"5371",iso_code:"ID-NT",iso_name:"Nusa Tenggara Timur",iso_type:"province",iso_geounit:"NU",timezone:"8",province_lat:"-10.172400",province_lon:"123.577904"},{province_id:"61",province_name:"Kalimantan Barat",province_name_abbr:"Kalbar",province_name_id:"Kalimantan Barat",province_name_en:"West Kalimantan",province_capital_city_id:"6171",iso_code:"ID-KB",iso_name:"Kalimantan Barat",iso_type:"province",iso_geounit:"KA",timezone:"7",province_lat:"-0.022520",province_lon:"109.330299"},{province_id:"62",province_name:"Kalimantan Tengah",province_name_abbr:"Kalteng",province_name_id:"Kalimantan Tengah",province_name_en:"Central Kalimantan",province_capital_city_id:"6271",iso_code:"ID-KT",iso_name:"Kalimantan Tengah",iso_type:"province",iso_geounit:"KA",timezone:"7",province_lat:"-2.226660",province_lon:"113.944160"},{province_id:"63",province_name:"Kalimantan Selatan",province_name_abbr:"Kalsel",province_name_id:"Kalimantan Selatan",province_name_en:"South Kalimantan",province_capital_city_id:"6371",iso_code:"ID-KS",iso_name:"Kalimantan Selatan",iso_type:"province",iso_geounit:"KA",timezone:"8",province_lat:"-3.328490",province_lon:"114.589203"},{province_id:"64",province_name:"Kalimantan Timur",province_name_abbr:"Kaltim",province_name_id:"Kalimantan Timur",province_name_en:"East Kalimantan",province_capital_city_id:"6472",iso_code:"ID-KI",iso_name:"Kalimantan Timur",iso_type:"province",iso_geounit:"KA",timezone:"8",province_lat:"-1.265380",province_lon:"116.831200"},{province_id:"65",province_name:"Kalimantan Utara",province_name_abbr:"Kaltara",province_name_id:"Kalimantan Utara",province_name_en:"North Kalimantan",province_capital_city_id:"6571",iso_code:"ID-KU",iso_name:"Kalimantan Utara",iso_type:"province",iso_geounit:"KA",timezone:"8",province_lat:"2.850000",province_lon:"117.383331"},{province_id:"71",province_name:"Sulawesi Utara",province_name_abbr:"Sulut",province_name_id:"Sulawesi Utara",province_name_en:"Nourth Sulawesi",province_capital_city_id:"7171",iso_code:"ID-SA",iso_name:"Sulawesi Utara",iso_type:"province",iso_geounit:"SL",timezone:"8",province_lat:"1.493056",province_lon:"124.841263"},{province_id:"72",province_name:"Sulawesi Tengah",province_name_abbr:"Sulteng",province_name_id:"Sulawesi Tengah",province_name_en:"Central Sulawesi",province_capital_city_id:"7271",iso_code:"ID-ST",iso_name:"Sulawesi Tengah",iso_type:"province",iso_geounit:"SL",timezone:"8",province_lat:"-0.898580",province_lon:"119.850601"},{province_id:"73",province_name:"Sulawesi Selatan",province_name_abbr:"Sulsel",province_name_id:"Sulawesi Selatan",province_name_en:"South Sulawesi",province_capital_city_id:"7371",iso_code:"ID-SN",iso_name:"Sulawesi Selatan",iso_type:"province",iso_geounit:"SL",timezone:"8",province_lat:"-5.133330",province_lon:"119.416656"},{province_id:"74",province_name:"Sulawesi Tenggara",province_name_abbr:"Sultra",province_name_id:"Sulawesi Tenggara",province_name_en:"South East Sulawesi",province_capital_city_id:"7471",iso_code:"ID-SG",iso_name:"Sulawesi Tenggara",iso_type:"province",iso_geounit:"SL",timezone:"8",province_lat:"-3.967480",province_lon:"122.594704"},{province_id:"75",province_name:"Gorontalo",province_name_abbr:"Gorontalo",province_name_id:"Gorontalo",province_name_en:"Gorontalo",province_capital_city_id:"7571",iso_code:"ID-GO",iso_name:"Gorontalo",iso_type:"province",iso_geounit:"SL",timezone:"8",province_lat:"0.552512",province_lon:"123.065491"},{province_id:"76",province_name:"Sulawesi Barat",province_name_abbr:"Sulbar",province_name_id:"Sulawesi Barat",province_name_en:"West Sulawesi",province_capital_city_id:"7604",iso_code:"ID-SR",iso_name:"Sulawesi Barat",iso_type:"province",iso_geounit:"SL",timezone:"8",province_lat:"-2.699190",province_lon:"118.862106"},{province_id:"81",province_name:"Maluku",province_name_abbr:"Maluku",province_name_id:"Maluku",province_name_en:"Maluku",province_capital_city_id:"8171",iso_code:"ID-MA",iso_name:"Maluku",iso_type:"province",iso_geounit:"ML",timezone:"9",province_lat:"-3.656070",province_lon:"128.166412"},{province_id:"82",province_name:"Maluku Utara",province_name_abbr:"Malut",province_name_id:"Maluku Utara",province_name_en:"North Maluku",province_capital_city_id:"8271",iso_code:"ID-MU",iso_name:"Maluku Utara",iso_type:"province",iso_geounit:"ML",timezone:"9",province_lat:"0.788068",province_lon:"127.377151"},{province_id:"91",province_name:"Papua Barat",province_name_abbr:"Papua Barat",province_name_id:"Papua Barat",province_name_en:"West Papua",province_capital_city_id:"9105",iso_code:"ID-PB",iso_name:"Papua Barat",iso_type:"province",iso_geounit:"IJ",timezone:"9",province_lat:"-0.861520",province_lon:"134.078796"},{province_id:"94",province_name:"Papua",province_name_abbr:"Papua",province_name_id:"Papua",province_name_en:"Papua",province_capital_city_id:"9471",iso_code:"ID-PA",iso_name:"Papua",iso_type:"province",iso_geounit:"IJ",timezone:"9",province_lat:"-2.541360",province_lon:"140.706390"}]},,,function(e,a,i){"use strict";var n=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"fb-root"}}),e._v(" "),i("dtitle",{attrs:{title:"Jadwal Sholat untuk "+e.selected.city.name+" dan sekitarnya"}}),e._v(" "),i("nav",{staticClass:"topnav"},[i("menu-bar"),e._v(" "),i("div",{staticClass:"top-title"},[e._v("Jadwal Sholat")])],1),e._v(" "),e._m(0),e._v(" "),i("section",{staticClass:"content"},[i("article",[i("div",{staticClass:"content__title"},[e._v("\n                    Jadwal Sholat untuk "+e._s(e.selected.city.name)+" dan sekitarnya\n                ")]),e._v(" "),i("div",{staticClass:"content__body container-fluid"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-8 col-sm-12"},[i("div",{staticClass:"filter__prayer"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"input-group mb-3"},[e._m(1),e._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.selected.city,expression:"selected.city"}],staticClass:"custom-select",attrs:{id:"inputGroupSelect01"},on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.selected,"city",a.target.multiple?i:i[0])}}},[i("option",{attrs:{selected:""}},[e._v("Choose...")]),e._v(" "),e._l(e.cities,function(a,n){return i("option",{key:n,domProps:{value:a}},[e._v(e._s(a.name))])})],2)])])])]),e._v(" "),i("div",{staticClass:"button__action",staticStyle:{margin:"10px 0"}},[i("button",{staticClass:"btn btn-primary"},[e._v("Sebelumnya")]),e._v(" "),i("div",{staticClass:"button__right float-right"},[i("button",{staticClass:"btn btn-warning float-right"},[i("icon",{attrs:{name:"fi-print"}})],1),e._v(" "),i("button",{staticClass:"btn btn-primary float-right"},[e._v("Selanjutnya")])])]),e._v(" "),i("table",{staticClass:"table"},[e._m(2),e._v(" "),i("tbody",e._l(e.listTimes,function(a,n){return i("tr",{key:n,class:a.isToday&&"table-active"},[i("td",[e._v(e._s(a.day))]),e._v(" "),i("td",[e._v(e._s(a.imsak))]),e._v(" "),i("td",[e._v(e._s(a.fajr))]),e._v(" "),i("td",[e._v(e._s(a.dhuhr))]),e._v(" "),i("td",[e._v(e._s(a.asr))]),e._v(" "),i("td",[e._v(e._s(a.maghrib))]),e._v(" "),i("td",[e._v(e._s(a.isha))])])}))])]),e._v(" "),i("div",{staticClass:"col-md-4 col-sm-12"},[i("navigation",{attrs:{today:e.today}})],1)])])])]),e._v(" "),i("footer",{staticClass:"footer"},[e._v("\n            Made with ♥ in Kretek, Bantul Regency\n        ")])],1)},t=[function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("header",{staticClass:"header"},[i("div",{staticClass:"header__background img--parallax"},[i("h1",{staticClass:"title"},[e._v("“Sesungguhnya shalat itu adalah fardhu/wajib yang ditentukan waktunya atas orang-orang yang beriman”. [ QS. An Nisa’ (4) : 103]")])])])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"input-group-prepend"},[i("label",{staticClass:"input-group-text",attrs:{for:"inputGroupSelect01"}},[e._v("Pilih Kota")])])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("thead",[i("tr",[i("th",[e._v("Tanggal")]),e._v(" "),i("th",[e._v("Imsak")]),e._v(" "),i("th",[e._v("Shubuh")]),e._v(" "),i("th",[e._v("Dhuhur")]),e._v(" "),i("th",[e._v("Ashar")]),e._v(" "),i("th",[e._v("Magrib")]),e._v(" "),i("th",[e._v("Isya")])])])}],o={render:n,staticRenderFns:t};a.a=o},,,,function(e,a,i){"use strict";function n(e){i(33)}Object.defineProperty(a,"__esModule",{value:!0});var t=i(5),o=i(34),_=i(1),r=n,c=_(t.a,o.a,!1,r,"data-v-4d3bcf12",null);a.default=c.exports},function(e,a){},function(e,a,i){"use strict";var n=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"menu__container"},[i("span",{staticClass:"barmenu",on:{click:function(a){e.toggleSidebar()}}},[i("icon",{attrs:{name:"fi-menu"}})],1),e._v(" "),i("div",{staticClass:"sidebar",class:!1===e.visibility&&"hide"},[i("span",{staticClass:"barmenu",on:{click:function(a){e.toggleSidebar()}}},[i("icon",{attrs:{name:"fi-menu"}})],1),e._v(" "),e._m(0),e._v(" "),e._m(1)])])},t=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"header__sidebar"},[n("img",{attrs:{src:i(35)}})])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"sidebar__menu"},[i("div",{staticClass:"menu"},[e._v("\n                Home\n            ")]),e._v(" "),i("div",{staticClass:"menu"},[e._v("\n                About\n            ")]),e._v(" "),i("div",{staticClass:"menu"},[e._v("\n                Contact\n            ")])])}],o={render:n,staticRenderFns:t};a.a=o},function(e,a,i){e.exports=i.p+"assets/images/ramadhan_cute.a958ee31.jpg"},function(e,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=i(6),t=i(37),o=i(1),_=o(n.a,t.a,!1,null,null,null);a.default=_.exports},function(e,a,i){"use strict";var n=function(){var e=this,a=e.$createElement;return(e._self._c||a)("span",{class:e.name})},t=[],o={render:n,staticRenderFns:t};a.a=o},function(e,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=i(7),t=i(39),o=i(1),_=o(n.a,t.a,!1,null,null,null);a.default=_.exports},function(e,a,i){"use strict";var n=function(){var e=this,a=e.$createElement;return(e._self._c||a)("div")},t=[],o={render:n,staticRenderFns:t};a.a=o},function(e,a,i){"use strict";function n(e){i(41)}Object.defineProperty(a,"__esModule",{value:!0});var t=i(8),o=i(42),_=i(1),r=n,c=_(t.a,o.a,!1,r,"data-v-28eef5a5",null);a.default=c.exports},function(e,a){},function(e,a,i){"use strict";var n=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"navigation"},[i("h2",{staticClass:"navigation__title"},[e._v("\n        Hari ini\n        "),i("div",{staticClass:"float-right"},[e._v(e._s(e.hijriDate))])]),e._v(" "),i("div",{staticClass:"navigation__content pray__today"},[i("table",{staticClass:"table table-striped table-sm"},[i("tr",[i("td",[e._v("Imsak")]),e._v(" "),i("td",[e._v(":")]),e._v(" "),i("td",[e._v(e._s(e.today.imsak))])]),e._v(" "),i("tr",[i("td",[e._v("Shubuh")]),e._v(" "),i("td",[e._v(":")]),e._v(" "),i("td",[e._v(e._s(e.today.fajr))])]),e._v(" "),i("tr",[i("td",[e._v("Dhuhr")]),e._v(" "),i("td",[e._v(":")]),e._v(" "),i("td",[e._v(e._s(e.today.dhuhr))])]),e._v(" "),i("tr",[i("td",[e._v("Ashar")]),e._v(" "),i("td",[e._v(":")]),e._v(" "),i("td",[e._v(e._s(e.today.asr))])]),e._v(" "),i("tr",[i("td",[e._v("Magrib")]),e._v(" "),i("td",[e._v(":")]),e._v(" "),i("td",[e._v(e._s(e.today.maghrib))])]),e._v(" "),i("tr",[i("td",[e._v("Isya")]),e._v(" "),i("td",[e._v(":")]),e._v(" "),i("td",[e._v(e._s(e.today.isha))])])])]),e._v(" "),i("h2",{staticClass:"navigation__title"},[e._v("Fanpage")]),e._v(" "),e._m(0)])},t=[function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"navigation__content"},[i("div",{staticClass:"fb-page",attrs:{"data-href":"https://www.facebook.com/pondokitcom/","data-tabs":"timeline","data-small-header":"false","data-adapt-container-width":"true","data-hide-cover":"false","data-show-facepile":"true"}},[i("blockquote",{staticClass:"fb-xfbml-parse-ignore",attrs:{cite:"https://www.facebook.com/pondokitcom/"}},[i("a",{attrs:{href:"https://www.facebook.com/pondokitcom/"}},[e._v("Pondok IT")])])])])}],o={render:n,staticRenderFns:t};a.a=o}],[9]);
//# sourceMappingURL=client.6c6ac79a.js.map