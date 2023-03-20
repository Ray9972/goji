import{jsxs as e,jsx as l}from"react/jsx-runtime";import{useRef as t,useState as o,useMemo as i}from"react";import{motion as a}from"framer-motion";function n(e,l){void 0===l&&(l={});var t=l.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===t&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var d={upload:"upload-module_upload__sdJ3u",fileList:"upload-module_fileList__r72T1",fileItem:"upload-module_fileItem__-GDPm",deleteItem:"upload-module_deleteItem__S1XS3"};function s(a){const{beforeUpload:n,children:s,uploadUrl:m,onComplete:c,customList:r,valueFilter:u}=a,_=t();let[p,f]=o([]);const h=e=>{const l=[];for(let t=0;t<e.length;t++)l.push(new Promise(((l,o)=>{const i=new XMLHttpRequest,a=new FormData;a.append("file",e[t]),i.open("POST",m),i.send(a),i.onerror=e=>{o(e)},i.onload=()=>{let o;try{o=JSON.parse(i.response)}catch(e){o=i.response}const a={lastModified:(n=e[t]).lastModified,name:n.name,size:n.size,type:n.type,originFileObj:n};var n;const d=Object.assign({response:o},a);l(d)}})));Promise.all(l).then((e=>{p=p.concat(e),f([...p]),null==c||c(p)}))},b=i((()=>r?r(p):p.map(((t,o)=>(console.log("Abc",t),e("li",Object.assign({className:d.fileItem},{children:[t.type,l("img",{src:t,style:{width:"100px"}}),l("span",Object.assign({onClick:()=>{null==p||p.splice(o,1),f([...p])},className:d.deleteItem},{children:"delete"}))]})))))),[p]);return e("span",Object.assign({className:d.upload},{children:[l("input",{multiple:!0,onChange:e=>{var l;e.target.files&&(l=e.target.files,null==n||n(l).then((e=>{h(l)})).catch((e=>{console.log(e)})))},ref:_,type:"file"}),e("ul",Object.assign({className:d.fileList},{children:[l("li",{children:l("span",Object.assign({onClick:()=>{_.current.click()}},{children:s}))}),b]}))]}))}n(".upload-module_upload__sdJ3u{cursor:pointer;display:inline-block;position:relative}.upload-module_upload__sdJ3u input{opacity:0;position:absolute;width:200px}.upload-module_upload__sdJ3u .upload-module_fileList__r72T1{margin:0;padding-left:0}.upload-module_upload__sdJ3u .upload-module_fileList__r72T1 li{list-style:none}.upload-module_upload__sdJ3u .upload-module_fileList__r72T1 .upload-module_fileItem__-GDPm{position:relative}.upload-module_upload__sdJ3u .upload-module_fileList__r72T1 .upload-module_fileItem__-GDPm .upload-module_deleteItem__S1XS3{position:absolute}");var m={modal:"modal-module_modal__6lMO2",mask:"modal-module_mask__4ikYm",modalContent:"modal-module_modalContent__h8nfh"};function c(t){const{width:o=800,children:i,dontDestroyOnClose:n=!1,visible:d,onClose:s,style:c={},motionConfig:r={initial:{opacity:.1,y:0,scale:.2},animate:{opacity:1,y:100,scale:1}}}=t,u={};if(n)u.display=d?"block":"none";else if(!d)return null;return e("div",Object.assign({style:Object.assign({},u),className:m.modal},{children:[l("div",{onClick:()=>{null==s||s()},className:m.mask}),l(a.div,Object.assign({},r,{style:Object.assign({width:`${o}px`},c),className:m.modalContent},{children:i}))]}))}n(".modal-module_modal__6lMO2{bottom:0;left:0;position:fixed;right:0;top:0;width:100%}.modal-module_modal__6lMO2 .modal-module_mask__4ikYm{background-color:rgba(92,93,93,.385);bottom:0;left:0;position:fixed;right:0;top:0;z-index:10000}.modal-module_modal__6lMO2 .modal-module_modalContent__h8nfh{background-color:#fff;left:0;margin:0 auto;min-height:200px;position:absolute;right:0;top:100px;z-index:10001}");var r={tab:"tab-module_tab__OCzxZ",title:"tab-module_title__7nE0l",tabContent:"tab-module_tabContent__zUPX9"};function u(t){const{items:i,className:n,defaultActiveKey:d,motionConfig:s}=t,[m,c]=o(0);return e("div",Object.assign({className:`${r.tab} ${n}`},{children:[l(a.ul,Object.assign({"aria-invalid":!0,className:r.title},{children:null==i?void 0:i.map(((e,t)=>l(a.li,Object.assign({"aria-label":"tab",onClick:()=>{c(t)}},{children:e.title}),e.key)))})),l(a.div,Object.assign({"aria-label":"tab-content"},s,{className:r.tabContent},{children:null==i?void 0:i[m].children}))]}))}n(".tab-module_tab__OCzxZ .tab-module_title__7nE0l{display:flex}.tab-module_tab__OCzxZ .tab-module_title__7nE0l li{cursor:pointer;list-style:none;padding:10px}.tab-module_tab__OCzxZ .tab-module_tabContent__zUPX9{color:inherit}");var _={flex:"flex-module_flex__cvL3B"};function p({children:e,style:t,className:o}){return l("div",Object.assign({style:t,className:`${_.flex} ${o}`},{children:e}))}function f({children:e,className:t,style:o}){return l("div",Object.assign({className:t,style:o},{children:e}))}function h(t){const{data:o,cols:a,className:n}=t,d=i((()=>null==a?void 0:a.map((e=>l("td",{children:null==e?void 0:e.title},null==e?void 0:e.key)))),[a]);return e("table",Object.assign({className:n},{children:[l("thead",{children:l("tr",{children:d})}),l("tbody",{children:null==o?void 0:o.map((e=>l("tr",{children:null==a?void 0:a.map((t=>t.render?l("td",{children:t.render(e)},t.key):l("td",{children:e[t.key]},t.key)))},e.id)))})]}))}n(".flex-module_flex__cvL3B{display:flex}");export{p as Flex,f as FlexItem,c as Modal,u as Tab,h as Table,s as Upload};
//# sourceMappingURL=index.js.map
