/*
Copyright 2012, KISSY UI Library v1.30rc
MIT Licensed
build time: Jun 29 16:29
*/
KISSY.add("editor/plugin/justifyCenter/index",function(d,c,e){function f(){var a=this.get("editor");a.execCommand("justifyCenter");a.focus()}function b(){}d.augment(b,{renderUI:function(a){e.init(a);a.addButton("justifyCenter",{tooltip:"居中对齐",checkable:!0,listeners:{click:f,afterSyncUI:function(){var b=this;a.on("selectionChange",function(){a.get("mode")!=c.SOURCE_MODE&&(a.queryCommandValue("justifyCenter")?b.set("checked",!0):b.set("checked",!1))})}},mode:c.WYSIWYG_MODE})}});return b},{requires:["editor",
"./cmd"]});