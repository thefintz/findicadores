import I from"./C6bAGx7-.js";import{$ as b,as as c,i as k,t as i,v as f,a5 as d,a4 as v,M as m,a9 as H,A as g,a7 as h,V as y,ab as _,ac as A}from"./BKb0QeFW.js";import{s as L}from"./s9s2itEu.js";import"./8U5FVahK.js";import"./hSfToSpl.js";import"./Beuq8Guo.js";var C={},U={name:"BaseDynamicDialog",extends:L,props:{},style:C,provide:function(){return{$parentInstance:this}}},x={name:"DynamicDialog",extends:U,inheritAttrs:!1,data:function(){return{instanceMap:{}}},openListener:null,closeListener:null,currentInstance:null,mounted:function(){var n=this;this.openListener=function(p){var r=p.instance,s=b()+"_dynamic_dialog";r.visible=!0,r.key=s,n.instanceMap[s]=r},this.closeListener=function(p){var r=p.instance,s=p.params,a=r.key,o=n.instanceMap[a];o&&(o.visible=!1,o.options.onClose&&o.options.onClose({data:s,type:"config-close"}),n.currentInstance=o)},c.on("open",this.openListener),c.on("close",this.closeListener)},beforeUnmount:function(){c.off("open",this.openListener),c.off("close",this.closeListener)},methods:{onDialogHide:function(n){!this.currentInstance&&n.options.onClose&&n.options.onClose({type:"dialog-close"})},onDialogAfterHide:function(){this.currentInstance&&delete this.currentInstance,this.currentInstance=null},getTemplateItems:function(n){return Array.isArray(n)?n:[n]}},components:{DDialog:I}};function B(t,n,p,r,s,a){var o=k("DDialog");return i(!0),f(v,null,d(s.instanceMap,function(e,D){return i(),m(o,y({key:D,visible:e.visible,"onUpdate:visible":function(l){return e.visible=l},_instance:e},e.options.props,{onHide:function(l){return a.onDialogHide(e)},onAfterHide:a.onDialogAfterHide}),H({default:g(function(){return[(i(),m(h(e.content),_(A(e.options.emits)),null,16))]}),_:2},[e.options.templates&&e.options.templates.header?{name:"header",fn:g(function(){return[(i(!0),f(v,null,d(a.getTemplateItems(e.options.templates.header),function(u,l){return i(),m(h(u),y({key:l+"_header"},e.options.emits),null,16)}),128))]}),key:"0"}:void 0,e.options.templates&&e.options.templates.footer?{name:"footer",fn:g(function(){return[(i(!0),f(v,null,d(a.getTemplateItems(e.options.templates.footer),function(u,l){return i(),m(h(u),y({key:l+"_footer"},e.options.emits),null,16)}),128))]}),key:"1"}:void 0]),1040,["visible","onUpdate:visible","_instance","onHide","onAfterHide"])}),128)}x.render=B;export{x as default};