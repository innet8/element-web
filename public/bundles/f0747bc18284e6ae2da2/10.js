(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1431:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return h}));var s=r(3),a=r(1),n=r(25);const o=window.crypto.subtle||window.crypto.webkitSubtle;function i(e,t){return{message:e,friendlyText:t}}function l(){return Object(a.b)("Your browser does not support the required cryptography extensions")}async function c(e,t){const r=function(e){const t=(new TextDecoder).decode(new Uint8Array(e));let r=0;for(;;){const e=t.indexOf("\n",r);if(e<0)throw new Error("Header line not found");const s=t.slice(r,e).trim();if(r=e+1,s===p)break}const s=r;for(;;){const e=t.indexOf("\n",r);if(t.slice(r,e<0?void 0:e).trim()===u)break;if(e<0)throw new Error("Trailer line not found");r=e+1}const a=r;return function(e){const t=window.atob(e),r=new Uint8Array(t.length);for(let e=0;e<t.length;e++)r[e]=t.charCodeAt(e);return r}(t.slice(s,a))}(e),s=n.b.get().brand;if(r.length<1)throw i("Invalid file: too short",Object(a.b)("Not a valid %(brand)s keyfile",{brand:s}));if(1!==r[0])throw i("Unsupported version",Object(a.b)("Not a valid %(brand)s keyfile",{brand:s}));const c=r.length-69;if(c<0)throw i("Invalid file: too short",Object(a.b)("Not a valid %(brand)s keyfile",{brand:s}));const h=r.subarray(1,17),m=r.subarray(17,33),y=r[33]<<24|r[34]<<16|r[35]<<8|r[36],w=r.subarray(37,37+c),b=r.subarray(-32),[f,g]=await d(h,y,t),E=r.subarray(0,-32);let v,x;try{v=await o.verify({name:"HMAC"},g,b,E)}catch(e){throw i("subtleCrypto.verify failed: "+e,l())}if(!v)throw i("hmac mismatch",Object(a.b)("Authentication check failed: incorrect password?"));try{x=await o.decrypt({name:"AES-CTR",counter:m,length:64},f,w)}catch(e){throw i("subtleCrypto.decrypt failed: "+e,l())}return(new TextDecoder).decode(new Uint8Array(x))}async function h(e,t,r){const s=(r=r||{}).kdf_rounds||5e5,a=new Uint8Array(16);window.crypto.getRandomValues(a);const n=new Uint8Array(16);window.crypto.getRandomValues(n),n[8]&=127;const[c,h]=await d(a,s,t),y=(new TextEncoder).encode(e);let w;try{w=await o.encrypt({name:"AES-CTR",counter:n,length:64},c,y)}catch(e){throw i("subtleCrypto.encrypt failed: "+e,l())}const b=new Uint8Array(w),f=1+a.length+n.length+4+b.length+32,g=new Uint8Array(f);let E=0;g[E++]=1,g.set(a,E),E+=a.length,g.set(n,E),E+=n.length,g[E++]=s>>24,g[E++]=s>>16&255,g[E++]=s>>8&255,g[E++]=255&s,g.set(b,E),E+=b.length;const v=g.subarray(0,E);let x;try{x=await o.sign({name:"HMAC"},h,v)}catch(e){throw i("subtleCrypto.sign failed: "+e,l())}const C=new Uint8Array(x);return g.set(C,E),function(e){const t=96,r=Math.ceil(e.length/t),s=new Array(r+3);s[0]=p;let a,n=0;for(a=1;a<=r;a++)s[a]=m(e.subarray(n,n+t)),n+=t;return s[a++]=u,s[a]="",(new TextEncoder).encode(s.join("\n")).buffer}(g)}async function d(e,t,r){const a=new Date;let n,c;try{n=await o.importKey("raw",(new TextEncoder).encode(r),{name:"PBKDF2"},!1,["deriveBits"])}catch(e){throw i("subtleCrypto.importKey failed: "+e,l())}try{c=await o.deriveBits({name:"PBKDF2",salt:e,iterations:t,hash:"SHA-512"},n,512)}catch(e){throw i("subtleCrypto.deriveBits failed: "+e,l())}const h=new Date;s.a.log("E2e import/export: deriveKeys took "+(h.getTime()-a.getTime())+"ms");const d=c.slice(0,32),p=c.slice(32),u=o.importKey("raw",d,{name:"AES-CTR"},!1,["encrypt","decrypt"]).catch((e=>{throw i("subtleCrypto.importKey failed for AES key: "+e,l())})),m=o.importKey("raw",p,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign","verify"]).catch((e=>{throw i("subtleCrypto.importKey failed for HMAC key: "+e,l())}));return Promise.all([u,m])}const p="-----BEGIN MEGOLM SESSION DATA-----",u="-----END MEGOLM SESSION DATA-----";function m(e){const t=String.fromCharCode.apply(null,Array.from(e));return window.btoa(t)}},1653:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return w}));var s=r(2),a=r.n(s),n=r(1385),o=r.n(n),i=r(0),l=r.n(i),c=r(3),h=r(1),d=r(1431),p=r(34),u=r(1376),m=r(1426),y=function(e){return e.Edit="edit",e.Exporting="exporting",e}(y||{});class w extends l.a.Component{constructor(e){super(e),a()(this,"fieldPassword",null),a()(this,"fieldPasswordConfirm",null),a()(this,"unmounted",!1),a()(this,"onPassphraseFormSubmit",(async e=>{if(e.preventDefault(),!await this.verifyFieldsBeforeSubmit())return;if(this.unmounted)return;const t=this.state.passphrase1;this.startExport(t)})),a()(this,"onCancelClick",(e=>(e.preventDefault(),this.props.onFinished(!1),!1))),a()(this,"onPassphraseChange",((e,t)=>{this.setState({[t]:e.target.value})})),this.state={phase:y.Edit,errStr:null,passphrase1:"",passphrase2:""}}componentWillUnmount(){this.unmounted=!0}async verifyFieldsBeforeSubmit(){const e=[this.fieldPassword,this.fieldPasswordConfirm],t=[];for(const r of e){if(!r)continue;await r.validate({allowEmpty:!1})||t.push(r)}return 0===t.length||(t[0].focus(),t[0].validate({allowEmpty:!1,focused:!0}),!1)}startExport(e){Promise.resolve().then((()=>this.props.matrixClient.exportRoomKeys())).then((t=>d.b(JSON.stringify(t),e))).then((e=>{const t=new Blob([e],{type:"text/plain;charset=us-ascii"});o.a.saveAs(t,"element-keys.txt"),this.props.onFinished(!0)})).catch((e=>{if(c.a.error("Error exporting e2e keys:",e),this.unmounted)return;const t=e.friendlyText||Object(h.b)("Unknown error");this.setState({errStr:t,phase:y.Edit})})),this.setState({errStr:null,phase:y.Exporting})}render(){const e=this.state.phase===y.Exporting;return l.a.createElement(p.a,{className:"mx_exportE2eKeysDialog",onFinished:this.props.onFinished,title:Object(h.b)("Export room keys")},l.a.createElement("form",{onSubmit:this.onPassphraseFormSubmit},l.a.createElement("div",{className:"mx_Dialog_content"},l.a.createElement("p",null,Object(h.b)("This process allows you to export the keys for messages you have received in encrypted rooms to a local file. You will then be able to import the file into another Matrix client in the future, so that client will also be able to decrypt these messages.")),l.a.createElement("p",null,Object(h.b)("The exported file will allow anyone who can read it to decrypt any encrypted messages that you can see, so you should be careful to keep it secure. To help with this, you should enter a unique passphrase below, which will only be used to encrypt the exported data. It will only be possible to import the data by using the same passphrase.")),l.a.createElement("div",{className:"error"},this.state.errStr),l.a.createElement("div",{className:"mx_E2eKeysDialog_inputTable"},l.a.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},l.a.createElement(u.a,{minScore:3,label:Object(h.d)("Enter passphrase"),labelEnterPassword:Object(h.d)("Enter passphrase"),labelStrongPassword:Object(h.d)("Great! This passphrase looks strong enough"),labelAllowedButUnsafe:Object(h.d)("Great! This passphrase looks strong enough"),value:this.state.passphrase1,onChange:e=>this.onPassphraseChange(e,"passphrase1"),autoFocus:!0,size:64,type:"password",disabled:e,autoComplete:"new-password",fieldRef:e=>this.fieldPassword=e})),l.a.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},l.a.createElement(m.a,{password:this.state.passphrase1,label:Object(h.d)("Confirm passphrase"),labelRequired:Object(h.d)("Passphrase must not be empty"),labelInvalid:Object(h.d)("Passphrases must match"),value:this.state.passphrase2,onChange:e=>this.onPassphraseChange(e,"passphrase2"),size:64,type:"password",disabled:e,autoComplete:"new-password",fieldRef:e=>this.fieldPasswordConfirm=e})))),l.a.createElement("div",{className:"mx_Dialog_buttons"},l.a.createElement("input",{className:"mx_Dialog_primary",type:"submit",value:Object(h.b)("action|export"),disabled:e}),l.a.createElement("button",{onClick:this.onCancelClick,disabled:e},Object(h.b)("action|cancel")))))}}}}]);
//# sourceMappingURL=10.js.map