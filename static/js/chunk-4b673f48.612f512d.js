(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b673f48"],{"0bc4":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("el-tag",{staticClass:"mb4 mr4"},[e._v("toolbox: xml插槽")]),o("el-tag",{staticClass:"mb4 mr4"},[e._v("工具箱: flyoutToolbox")]),o("el-button",{attrs:{size:"small"},on:{click:e.load}},[e._v("展示")]),o("el-button",{attrs:{size:"small"},on:{click:e.save}},[e._v("保存")]),o("el-button",{attrs:{size:"small"},on:{click:e.json2Code}},[e._v("打印代码")]),o("el-button",{attrs:{size:"small"},on:{click:e.runCode}},[e._v("执行当前画布代码")]),o("BlocklyComponent",{ref:"refblockly3",staticStyle:{width:"100%",height:"calc(100vh - 170px)"},attrs:{id:"blockly3",toolbox:e.toolbox3}})],1)},_=[],l=(o("caad"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{ref:"blocklyDiv",staticClass:"blocklyDiv"}),o("xml",{ref:"blocklyToolbox",staticStyle:{display:"none"}},[e._t("default")],2)],1)}),i=[],a=o("777b"),c=a["a"],s=(o("c8c4"),o("2877")),r=Object(s["a"])(c,l,i,!1,null,"4bc88fed",null),u=r.exports,d={name:"Blockly",components:{BlocklyComponent:u},data:function(){return{toolbox3:{kind:"categoryToolbox",contents:[{kind:"category",name:"逻辑",colour:"%{BKY_LOGIC_HUE}",contents:[{kind:"block",type:"controls_if"},{kind:"block",type:"custom_switch_main"},{kind:"block",type:"logic_compare"},{kind:"block",type:"logic_operation"},{kind:"block",type:"logic_negate"},{kind:"block",type:"logic_boolean"}]},{kind:"category",name:"循环",colour:"%{BKY_LOOPS_HUE}",contents:[{kind:"block",type:"controls_repeat_ext",inputs:{TIMES:{block:{type:"math_number",fields:{NUM:10}}}}},{kind:"block",type:"controls_whileUntil"}]},{kind:"category",name:"列表",colour:"%{BKY_LISTS_HUE}",contents:[{kind:"block",type:"lists_create_empty"},{kind:"block",type:"lists_create_with"},{kind:"block",type:"lists_repeat",inputs:{NUM:{block:{type:"math_number",fields:{NUM:5}}}}},{kind:"block",type:"lists_length"},{kind:"block",type:"lists_isEmpty"},{kind:"block",type:"lists_indexOf"},{kind:"block",type:"lists_getIndex"},{kind:"block",type:"lists_setIndex"}]},{kind:"category",name:"数学",colour:"%{BKY_MATH_HUE}",contents:[{kind:"block",type:"math_number",field:{NUM:123}},{kind:"block",type:"math_arithmetic"},{kind:"block",type:"math_single"}]},{kind:"category",name:"文本",colour:"%{BKY_TEXTS_HUE}",contents:[{kind:"block",type:"text"},{kind:"block",type:"text_length"},{kind:"block",type:"text_print"}]},{kind:"sep"},{kind:"category",name:"变量",custom:"VARIABLE"},{kind:"category",name:"函数",custom:"PROCEDURE"},{kind:"sep"},{kind:"category",name:"助手函数",contents:[{kind:"block",type:"controls_for",inputs:{FROM:{block:{type:"math_number",fields:{NUM:1}}},TO:{block:{type:"math_number",fields:{NUM:10}}},BY:{block:{type:"math_number",fields:{NUM:1}}}}},{kind:"block",type:"procedures_defreturn",fields:{NAME:"判断值x是否存在于列表y中"},extraState:{params:[{name:"要查找的值X"},{name:"被查找的列表Y"}]},icons:{comment:{width:400,height:80,text:"要查找的值X，被查找的值Y。\n如果X存在于Y中，返回true，否则返回false。"}},inputs:{STACK:{block:{type:"procedures_ifreturn",inputs:{CONDITION:{block:{type:"logic_compare",fields:{OP:"GTE"},inputs:{A:{block:{type:"lists_indexOf",fields:{END:"FIRST"},inputs:{FIND:{block:{type:"variables_get",fields:{VAR:{name:"被查找的列表Y"}}}},VALUE:{block:{type:"variables_get",fields:{VAR:{name:"要查找的值X"}}}}}}},B:{block:{type:"math_number",fields:{NUM:1}}}}}},VALUE:{block:{type:"logic_boolean",fields:{BOOL:"TRUE"}}}}}},RETURN:{block:{type:"logic_boolean",fields:{BOOL:"FALSE"}}}}}]}]}}},mounted:function(){},methods:{load:function(){var e=localStorage.getItem("refblockly3");e&&this.$refs["refblockly3"].jsonLoad(JSON.parse(e))},save:function(){var e=this.$refs["refblockly3"].jsonSave();console.log(e,"json")},json2Code:function(){var e=this.$refs["refblockly3"].json2Code();console.log(e),alert(e)},runCode:function(){this.$refs["refblockly3"].runCode()},testFun:function(){var e="男生",t="军人",o="山东",n=2,_=1e3,l=34,i=function(){return"男生"===e?0===n?50:1===n?75:2===n?100:0:"女生"===e?0===n?70:1===n?100:2===n?50:0:void 0},a=function(){return l<30?1.1:l<40?1.5:l<50?1.3:1},c=function(){return"无业"===t?0:["老师","军人","公务员"].includes(t)?200:["司机","高空作业人员"].includes(t)?50:100},s=function(){return["北京","上海","广州"].includes(o)?_<3e3?300:_<6e3?350:_<1e4?400:600:["江苏","浙江"].includes(o)?_<3e3?400:_<6e3?450:_<1e4?500:650:_<3e3?500:_<6e3?550:_<1e4?600:750},r=function(){if(["北京","上海","广州"].includes(o)){if(c()>=100)return.2;if(c()<100)return.1}else{if(c()>150)return.3;if(c()<=150)return.25}};console.log("结果： ".concat(i()*a()+s()*r()))}}},p=d,b=(o("8124"),Object(s["a"])(p,n,_,!1,null,"3ddcad62",null));t["default"]=b.exports},"251a":function(e,t,o){"use strict";o.d(t,"b",(function(){return i})),o.d(t,"a",(function(){return a}));var n=o("b7fd"),_=o("560a"),l=o("2b0e");l["default"].config.ignoredElements=["field","block","category","xml","mutation","value","sep","next","statement","arg"];var i={media:"media/",horizontalLayout:!0,toolboxPosition:"end",oneBasedIndex:!0,readOnly:!1,renderer:"zelos",scrollbars:!0,sounds:!0,theme:"deuteranopia",trashcan:!0,move:{scrollbars:{horizontal:!0,vertical:!0},drag:!0,wheel:!0},grid:{spacing:50,length:3,colour:"#ccc",snap:!0},zoom:{controls:!0,wheel:!1,startScale:1,maxScale:4,minScale:.5,scaleSpeed:1.2,pinch:!0},toolbox:void 0},a={blocks:{languageVersion:0,blocks:[{type:"procedures_defreturn",id:"h4#!?~DE6{g.vVq^NG9Q",x:75,y:75,extraState:{params:[{name:"要查找的值X",id:"`xSrRrZXgnlw=:5t/1Jt"},{name:"被查找的列表Y",id:"gVDLd8^ugU%{hZ0*(fGz"}]},icons:{comment:{text:"要查找的值X，被查找的值Y。\n如果X存在于Y中，返回true，否则返回false。",pinned:!1,height:80,width:400}},fields:{NAME:"判断值x是否存在于列表y中"},inputs:{STACK:{block:{type:"procedures_ifreturn",id:"qSI,/|[049EH#s.3Nz=#",extraState:'<mutation value="1"></mutation>',inputs:{CONDITION:{block:{type:"logic_compare",id:"j?cQrS2gk:]!r]b@ceo:",fields:{OP:"GTE"},inputs:{A:{block:{type:"lists_indexOf",id:"{#Nr2=K_(U0mJrmPDQu!",fields:{END:"FIRST"},inputs:{VALUE:{block:{type:"variables_get",id:"$HPaN_Hx5UQ_u}Iqk-MC",fields:{VAR:{id:"`xSrRrZXgnlw=:5t/1Jt"}}}},FIND:{block:{type:"variables_get",id:"kRV5XPNkX(^XL}RrEi4-",fields:{VAR:{id:"gVDLd8^ugU%{hZ0*(fGz"}}}}}}},B:{block:{type:"math_number",id:"0O;pPV+;pnez1cUTNVCn",fields:{NUM:1}}}}}},VALUE:{block:{type:"logic_boolean",id:"-UybRF~mVg;.p{[uL.@5",fields:{BOOL:"TRUE"}}}}}},RETURN:{block:{type:"logic_boolean",id:"djRbWU153]azI{}Ru1lP",fields:{BOOL:"FALSE"}}}}}]},variables:[{name:"要查找的值X",id:"`xSrRrZXgnlw=:5t/1Jt"},{name:"被查找的列表Y",id:"gVDLd8^ugU%{hZ0*(fGz"}]};n["setLocale"](_);var c={CONTROLS:{SWITCH_MAIN:"CUSTOM_CON_SWITCH_MAIN"},BLOCKS:{SWITCH_VARIABLE:"CUSTOM_BLOCKS_SWITCH_VARIABLE",SWITCH_CASE_ITEM:"CUSTOM_BLOCKS_SWITCH_ITEM",SWITCH_CASE_INPUT:"CUSTOM_SWITCH_CASE_INPUT",SWITCH_DEFAULT:"CUSTOM_SWITCH_DEFAULT"}};n["defineBlocksWithJsonArray"]([{type:"controls_switch_case",lastDummyAlign0:"CENTER",message0:"case ",previousStatement:null,nextStatement:null,colour:230,tooltip:"",helpUrl:""},{type:"controls_switch_main",lastDummyAlign0:"LEFT",message0:"switch %1 case %2 %3 default",args0:[{type:"input_dummy"},{type:"input_dummy"},{type:"input_statement",name:c.CONTROLS.SWITCH_MAIN}],colour:230,tooltip:"",helpUrl:""},{type:"custom_switch_main",message0:"switch %1 %2 case:  %3 %4 default:  %5",args0:[{type:"field_variable",name:c.BLOCKS.SWITCH_VARIABLE,variable:"item"},{type:"input_dummy",align:"CENTRE"},{type:"field_input",name:"caseValue",text:""},{type:"input_statement",name:c.BLOCKS.SWITCH_CASE_INPUT+"0",align:"RIGHT"},{type:"input_statement",name:c.BLOCKS.SWITCH_DEFAULT,align:"RIGHT"}],previousStatement:null,nextStatement:null,colour:230,tooltip:"",helpUrl:"",mutator:"mutator_custom_switch"}]);var s=n["Input"].Align,r={itemCount_:0,saveExtraState:function(){return{itemCount:this.itemCount_}},loadExtraState:function(e){this.itemCount_=e["itemCount"],this.updateShape_()},decompose:function(e){var t=e.newBlock("controls_switch_main");t.initSvg();for(var o=t.getInput(c.CONTROLS.SWITCH_MAIN).connection,n=0;n<this.itemCount_;n++){var _=e.newBlock("controls_switch_case");_.initSvg(),o.connect(_.previousConnection),o=_.nextConnection}return t},compose:function(e){var t=e.getInputTargetBlock(c.CONTROLS.SWITCH_MAIN),o=[];while(t)t.isInsertionMarker()||o.push(t.valueConnection_),t=t.getNextBlock();for(var _=0;_<this.itemCount_;_++){var l=this.getInput(c.BLOCKS.SWITCH_CASE_ITEM+_+1).connection.targetConnection;l&&-1===o.indexOf(l)&&l.disconnect()}this.itemCount_=o.length,this.updateShape_();for(var i=0;i<this.itemCount_;i++)n["Mutator"].reconnect(o[i],this,c.BLOCKS.SWITCH_CASE_ITEM+i+1)},saveConnections:function(e){var t=e.getInputTargetBlock(c.CONTROLS.SWITCH_MAIN),o=0;while(t)if(t.isInsertionMarker())t=t.getNextBlock();else{var n=this.getInput(c.BLOCKS.SWITCH_CASE_ITEM+o+1);t.valueConnection_=n&&n.connection.targetConnection,t=t.getNextBlock(),o++}},updateShape_:function(){for(var e=0;e<this.itemCount_;e++)this.getInput(c.BLOCKS.SWITCH_CASE_ITEM+e+1)||this.addCase_(e);for(var t=this.itemCount_;this.getInput(c.BLOCKS.SWITCH_CASE_ITEM+t+1);t++)this.removeInput(c.BLOCKS.SWITCH_CASE_ITEM+t+1)},addCase_:function(e){this.appendStatementInput(c.BLOCKS.SWITCH_CASE_ITEM+e+1).setAlign(s.RIGHT).appendField("case: ").appendField(new n["FieldTextInput"](""),c.BLOCKS.SWITCH_CASE_INPUT+e+1),this.moveInputBefore(c.BLOCKS.SWITCH_CASE_ITEM+e+1,c.BLOCKS.SWITCH_DEFAULT)}};n["Extensions"].registerMutator("mutator_custom_switch",r,null,["controls_switch_case"])},"36ec":function(e,t,o){},"777b":function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_runner_work_vue_blockly_vue_blockly_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("5530"),blockly__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("54ca"),blockly__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_1__),blockly_javascript__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("fc06"),blockly_javascript__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(blockly_javascript__WEBPACK_IMPORTED_MODULE_2__),_customBlock__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("251a");
/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */__webpack_exports__["a"]={name:"BlocklyComponent",props:{options:{type:Object,default:void 0},toolbox:{type:Object,default:void 0},defaultJson:{type:Object,default:void 0}},data:function(){return{workspace:null}},watch:{toolbox:{handler:function(e){this.updateToolbox(e)},deep:!0}},mounted:function(){this.init()},methods:{init:function(){var e=this,t=this.$props,o=t.options,n=void 0===o?{}:o,_=t.toolbox,l=Object(_home_runner_work_vue_blockly_vue_blockly_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(Object(_home_runner_work_vue_blockly_vue_blockly_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["a"])({},_customBlock__WEBPACK_IMPORTED_MODULE_3__["b"]),n);l.toolbox=_||this.$refs["blocklyToolbox"],this.workspace=blockly__WEBPACK_IMPORTED_MODULE_1___default.a.inject(this.$refs["blocklyDiv"],l),this.$nextTick((function(){return e.jsonLoad(Object(_home_runner_work_vue_blockly_vue_blockly_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(Object(_home_runner_work_vue_blockly_vue_blockly_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["a"])({},_customBlock__WEBPACK_IMPORTED_MODULE_3__["a"]),e.defaultJson))}))},updateToolbox:function(e){this.workspace.updateToolbox(e)},jsonSave:function(){var e=blockly__WEBPACK_IMPORTED_MODULE_1___default.a.serialization.workspaces.save(this.workspace);return e},jsonLoad:function(e){blockly__WEBPACK_IMPORTED_MODULE_1___default.a.serialization.workspaces.load(Object(_home_runner_work_vue_blockly_vue_blockly_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["a"])({},e),this.workspace)},json2Code:function(){return blockly_javascript__WEBPACK_IMPORTED_MODULE_2__["javascriptGenerator"].workspaceToCode(this.workspace)},runCode:function runCode(){var codeParam=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;window.LoopTrap=1e3,blockly_javascript__WEBPACK_IMPORTED_MODULE_2__["javascriptGenerator"].INFINITE_LOOP_TRAP='if (--window.LoopTrap == 0) throw "Infinite loop.";\n';var code=codeParam||blockly_javascript__WEBPACK_IMPORTED_MODULE_2__["javascriptGenerator"].workspaceToCode(this.workspace);blockly_javascript__WEBPACK_IMPORTED_MODULE_2__["javascriptGenerator"].INFINITE_LOOP_TRAP=null;try{eval(code)}catch(e){alert(e)}}}}},8124:function(e,t,o){"use strict";o("b1a3")},b1a3:function(e,t,o){},c8c4:function(e,t,o){"use strict";o("36ec")}}]);