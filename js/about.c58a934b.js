(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"352c":function(t,e,l){},a72b:function(t,e,l){"use strict";var a=l("352c"),n=l.n(a);n.a},bb51:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row"},[t._m(0),t._m(1),l("div",{staticClass:"col"},[l("h1",{staticClass:"mb-4"},[t._v("業務部門專案")]),[l("el-table",{staticClass:"mb-5",staticStyle:{width:"100%"},attrs:{data:t.tableData1}},[l("el-table-column",{attrs:{prop:"peopleDistribution",label:"人力分配",width:"200",align:"center"}}),l("el-table-column",{attrs:{label:"執行中",align:"center"}},[l("el-table-column",{attrs:{prop:"progress",label:"案數/待辦",align:"center"}})],1),l("el-table-column",{attrs:{label:"延遲",align:"center"}},[l("el-table-column",{attrs:{prop:"delay",label:"案數/待辦",align:"center"}})],1),l("el-table-column",{attrs:{label:"重要",align:"center"}},[l("el-table-column",{attrs:{prop:"important",label:"案數/待辦",align:"center"}})],1),l("el-table-column",{attrs:{label:"未完成",align:"center"}},[l("el-table-column",{attrs:{prop:"undone",label:"案數/待辦",align:"center"}})],1),l("el-table-column",{attrs:{prop:"updateRatio",label:"更新比",align:"center",width:"150"}}),l("el-table-column",{attrs:{prop:"bonusAccumulation",label:"獎金累積",align:"center",width:"150"}})],1)],[l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData2}},[l("el-table-column",{attrs:{prop:"peopleDistribution",label:"人力分配",width:"100",align:"center"}}),l("el-table-column",{attrs:{label:"Q1-即將訂購",align:"center"}},[l("el-table-column",{attrs:{label:"案數/收入/毛利率",align:"center"}},[l("el-table-column",{attrs:{label:"重疊/延遲/未完成",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("div",{domProps:{innerHTML:t._s(e.row.q1Text)}})]}}])})],1)],1),l("el-table-column",{attrs:{label:"Q2-追蹤",align:"center"}},[l("el-table-column",{attrs:{label:"案數/收入/毛利率",align:"center"}},[l("el-table-column",{attrs:{label:"重疊/延遲/未完成",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("div",{domProps:{innerHTML:t._s(e.row.q2Text)}})]}}])})],1)],1),l("el-table-column",{attrs:{label:"Q3-報價",align:"center"}},[l("el-table-column",{attrs:{label:"案數/收入/毛利率",align:"center"}},[l("el-table-column",{attrs:{label:"重疊/延遲/未完成",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("div",{domProps:{innerHTML:t._s(e.row.q3Text)}})]}}])})],1)],1),l("el-table-column",{attrs:{label:"Q4-有消息",align:"center"}},[l("el-table-column",{attrs:{label:"案數/收入/毛利率",align:"center"}},[l("el-table-column",{attrs:{label:"重疊/延遲/未完成",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("div",{domProps:{innerHTML:t._s(e.row.q4Text)}})]}}])})],1)],1),l("el-table-column",{attrs:{label:"Q5-訂購",align:"center"}},[l("el-table-column",{attrs:{label:"案數/收入/毛利率",align:"center"}},[l("el-table-column",{attrs:{label:"重疊/延遲/未完成",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("div",{domProps:{innerHTML:t._s(e.row.q5Text)}})]}}])})],1)],1),l("el-table-column",{attrs:{label:"獎金",align:"center",width:"150"}},[l("el-table-column",{attrs:{prop:"bonusTotal",label:"總額",align:"center",width:"80"}}),l("el-table-column",{attrs:{prop:"NotYetReleased",label:"尚未發放",align:"center",width:"80"}}),l("el-table-column",{attrs:{prop:"released",label:"已發放",align:"center",width:"80"}})],1),l("el-table-column",{attrs:{prop:"activity",label:"活躍度",align:"center",width:"100"}})],1)]],2)])},n=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-sm-6"},[l("div",{staticClass:"board"},[l("div",{staticClass:"board__content"},[l("div",{attrs:{id:"taskStats__chart"}},[t._v(" 圖表 ")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-sm-6"},[l("div",{staticClass:"board"},[l("div",{staticClass:"board__content"},[l("div",{attrs:{id:"taskStats__chart"}},[t._v(" 圖表 ")])])])])}],r={name:"Home",data:function(){return{tableData1:[{peopleDistribution:"整體",progress:"5/10",delay:"5/10",important:"5/10",undone:"5/10",updateRatio:"30%",bonusAccumulation:"78"}],tableData2:[{peopleDistribution:"整體",q1Text:"3/500/30%<br/>*2/5/10",q2Text:"3/500/30%<br/>*2/5/10",q3Text:"3/500/30%<br/>*2/5/10",q4Text:"3/500/30%<br/>*2/5/10",q5Text:"3/500/30%<br/>*2/5/10",bonusTotal:"78",NotYetReleased:"8",released:"70",activity:"80"},{peopleDistribution:"Vivian",q1Text:"3/500/30%<br/>*2/5/10",q2Text:"3/500/30%<br/>*2/5/10",q3Text:"3/500/30%<br/>*2/5/10",q4Text:"3/500/30%<br/>*2/5/10",q5Text:"3/500/30%<br/>*2/5/10",bonusTotal:"78",NotYetReleased:"8",released:"70",activity:"80"}]}}},o=r,s=(l("a72b"),l("2877")),i=Object(s["a"])(o,a,n,!1,null,"d8857130",null);e["default"]=i.exports}}]);
//# sourceMappingURL=about.c58a934b.js.map