(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{7021:function(e,t,n){"use strict";var o=n(5893),c=(n(7294),n(9008)),a=n(2566);t.Z=function(e){var t=e.page;return(0,o.jsxs)(c.default,{children:[(0,o.jsx)("title",{children:"".concat(a.ug.logoText," | ").concat(t)}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,o.jsx)("meta",{name:"title",content:a.ug.logoText}),(0,o.jsx)("meta",{name:"description",content:a.ug.greeting.subtitle}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:title",content:a.ug.logoText}),(0,o.jsx)("meta",{property:"og:description",content:a.ug.greeting.subtitle}),(0,o.jsx)("meta",{property:"og:image",content:""}),(0,o.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{property:"twitter:title",content:a.ug.logoText}),(0,o.jsx)("meta",{property:"twitter:description",content:a.ug.greeting.subtitle}),(0,o.jsx)("meta",{property:"twitter:image",content:""})]})}},5381:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var o=n(5893),c=(n(9008),n(980)),a=n(51),r=n(9887),i=n(17),s=n(7294),l=n(4066),u=n.n(l),d=n(7625),m=n(1664),p=n(2566),g=function(e){var t=e.currentTheme,n=(0,c.useToast)(),l=(0,s.useState)(""),g=l[0],h=l[1],f=(0,s.useState)(""),x=f[0],j=f[1],_=(0,s.useState)(""),v=_[0],C=_[1],y=(0,s.useState)(""),b=y[0],N=y[1],T=(0,s.useState)(!1),w=(T[0],T[1]),S={backgroundColor:t.tertiary,color:"#101010",boxShadow:t.boxShadow};return(0,o.jsxs)("div",{className:u().contactWrapper,children:[(0,o.jsx)("div",{className:u().contactHeading,children:(0,o.jsx)("h2",{className:u().contact,children:p.qY.contact})}),(0,o.jsx)("form",{onSubmit:function(e){!function(e){e.preventDefault(),console.log("Sending");var t={name:g,email:x,phone:v,message:b};h(""),j(""),C(""),N(""),n({description:"You reached us!",status:"success",duration:5e3,isClosable:!0}),fetch("/api/contact",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){console.log("Response received"),200===e.status&&(console.log("Response succeeded!"),w(!0),h(""),j(""),C(""),N(""))}))}(e)},className:u().form,style:{borderColor:t.text,backgroundColor:"light"===t.name?"#fafafa":"transparent"},children:(0,o.jsxs)(a.Kq,{spacing:4,children:[(0,o.jsx)(r.I,{type:"text",name:"name",value:g,placeholder:"Your Name",focusBorderColor:t.tertiary,isRequired:!0,autoComplete:"off",onChange:function(e){h(e.target.value)}}),(0,o.jsx)(r.I,{type:"email",name:"email",value:x,placeholder:"yourname@email.com",focusBorderColor:t.tertiary,autoComplete:"off",isRequired:!0,onChange:function(e){j(e.target.value)}}),(0,o.jsx)(r.I,{type:"tel",name:"phone",value:v,placeholder:"Phone Number",focusBorderColor:t.tertiary,autoComplete:"off",isRequired:!0,onChange:function(e){C(e.target.value)}}),(0,o.jsx)(i.g,{placeholder:"Message for me!",resize:"vertical",focusBorderColor:t.tertiary,isRequired:!0,name:"email",value:b,autoComplete:"off",onChange:function(e){N(e.target.value)}}),(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:u().submit,style:{backgroundColor:t.tertiary},children:(0,o.jsx)("button",{type:"submit",children:p.Rm.submitBTN})})})]})}),(0,o.jsx)("div",{style:{textAlign:"center",paddingTop:"0.5rem"},children:(0,o.jsx)(m.default,{href:"mailto:".concat(p.ug.contact.email?p.ug.contact.email:""),children:(0,o.jsx)("a",{children:p.ug.contact.email})})}),p.ug.contact.phone?(0,o.jsx)("div",{style:{textAlign:"center",paddingTop:"0.2rem",color:t.tertiary},children:(0,o.jsx)(m.default,{href:"tel:".concat(p.ug.contact.countrycode).concat(p.ug.contact.phone),children:(0,o.jsx)("a",{children:"".concat(p.ug.contact.countrycode).concat(p.ug.contact.phone)})})}):null,(0,o.jsx)("div",{className:u().socialIconDiv,children:p.ug.socials?p.ug.socials.map((function(e,t){return(0,o.jsx)("div",{className:u().socialIcon,style:S,children:(0,o.jsx)(m.default,{href:e.link,children:(0,o.jsx)("a",{children:(0,o.jsx)(d.G,{icon:e.icon})})})},t)})):null})]})},h=n(7021),f=function(e){var t=e.currentTheme;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.Z,{page:"Contact"}),(0,o.jsx)("div",{className:u().contactFullDiv,children:(0,o.jsx)(g,{currentTheme:t})})]})}},3269:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(5381)}])},4066:function(e){e.exports={contactFullDiv:"Contact_contactFullDiv__21ZFJ",contactWrapper:"Contact_contactWrapper__Cz9Cx",contactHeading:"Contact_contactHeading__2e3ro",contact:"Contact_contact__4DQ_E",submit:"Contact_submit__2qCPY",socialIconDiv:"Contact_socialIconDiv__3KXg5",socialIcon:"Contact_socialIcon__lPjZR",form:"Contact_form__2NCIj"}}},function(e){e.O(0,[774,761,301,888,179],(function(){return t=3269,e(e.s=t);var t}));var t=e.O();_N_E=t}]);