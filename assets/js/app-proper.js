var core=document.getElementById('core');
var properD='श्री संत ज्ञानेश्वर महाराज';
var properT='जगद्गुरू श्री संत तुकाराम महाराज';
function normalizeText(t){
  if(!t) return t;
  var D='__DNYANESHWAR_PALKHI_NAME__';
  var T='__TUKARAM_PALKHI_NAME__';
  t=t.replace(/(?:श्री\s+संत\s+)?ज्ञानेश्वर\s+महाराज/g,D);
  t=t.replace(/ज्ञानेश्वर\s+माऊली/g,D);
  t=t.replace(/ज्ञानेश्वर/g,D);
  t=t.replace(/(?:(?:जगद्गुरू\s+श्री\s+)?(?:संत\s+)?तुकाराम\s+महाराज\s*)+/g,T);
  t=t.replace(/तुकाराम/g,T);
  t=t.replace(new RegExp('(?:'+D+'\\s*)+','g'),properD);
  t=t.replace(new RegExp('(?:'+T+'\\s*)+','g'),properT);
  return t;
}
function replaceTextInDoc(doc){
  if(!doc || !doc.body) return;
  if(!doc.getElementById('proper-name-style')){
    var style=doc.createElement('style');
    style.id='proper-name-style';
    style.textContent='.tab{white-space:normal!important;line-height:1.12!important;min-height:46px!important;font-size:10.5px!important}.badge{white-space:normal!important}.hero p{line-height:1.25!important}';
    doc.head.appendChild(style);
  }
  var walker=doc.createTreeWalker(doc.body,NodeFilter.SHOW_TEXT);
  var n;
  while(n=walker.nextNode()) n.nodeValue=normalizeText(n.nodeValue);
}
function applyProperNames(){
  try{replaceTextInDoc(core.contentDocument || core.contentWindow.document);}catch(e){}
}
core.addEventListener('load',function(){applyProperNames();});
function callCore(fn){
  try{
    var w=core.contentWindow;
    if(w && typeof w[fn]==='function') w[fn]();
    setTimeout(applyProperNames,250);
  }catch(e){}
}
window.locateMe=function(){callCore('locateMe')};
window.openMapPanel=function(){callCore('openMapPanel')};
window.showMappedArea=function(){callCore('showMappedArea')};
