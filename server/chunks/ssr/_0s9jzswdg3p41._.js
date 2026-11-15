module.exports=[24560,(a,b,c)=>{"use strict";var d=a.r(82520);function e(){}function f(){}f.resetWarningCache=e,b.exports=function(){function a(a,b,c,e,f,g){if(g!==d){var h=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}function b(){return a}a.isRequired=a;var c={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:b,element:a,elementType:a,instanceOf:b,node:a,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:f,resetWarningCache:e};return c.PropTypes=c,c}},41212,(a,b,c)=>{b.exports=a.r(24560)()},82520,(a,b,c)=>{"use strict";b.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},67043,a=>{"use strict";a.s(["f",0,(a,b)=>`
<svg width="${a}" height="${b}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#E0E0E0" offset="20%" />
      <stop stop-color="#F5F5F5" offset="50%" />
      <stop stop-color="#E0E0E0" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${a}" height="${b}" fill="#E0E0E0" />
  <rect id="r" width="${a}" height="${b}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${a}" to="${a}" dur="1s" repeatCount="indefinite"  />
</svg>`])},2944,a=>{"use strict";let b=["tsgroup.s3.amazonaws.com","tsgrouptest.s3.amazonaws.com","d2lpxiu1sq3srq.cloudfront.net"],c="cdn.travelshopbooking.com";a.s(["f",0,function(a){if(!a||"string"!=typeof a)return a;let d=a;for(let a of b)d=d.split(a).join(c);return d.split(`https:/${c}`).join(`https://${c}`)}])},1117,13335,a=>{"use strict";var b=a.i(95940),c=a.i(53416),d=a.i(77381);async function e({data:a}){let f=(0,b.hasCookie)("auth-token-v3")?(0,b.getCookie)("auth-token-v3"):void 0,g=(0,d.getAttributionToken)();return(0,c.apiClient)("/bookings/new-enquiry",{method:"POST",auth:f?"sanctum":"app-token",token:f,body:g?{...a,attribution_token:g}:a})}async function f({data:a}){return(0,c.apiClient)(`/b2c/tours/${a.slug}/send-pdf`,{method:"POST",body:{first_name:a.first_name,email:a.email},...a.token?{auth:"sanctum",token:a.token}:{}})}a.s(["f",0,e],1117),a.s(["f",0,f],13335)}];

//# sourceMappingURL=_0s9jzswdg3p41._.js.map