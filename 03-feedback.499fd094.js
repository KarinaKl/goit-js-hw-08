function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(t,e,n){var r,o,i,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=r,i=o;return r=o=void 0,c=e,a=t.apply(i,n)}function S(t){return c=t,f=setTimeout(x,e),l?b(t):a}function j(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=i}function x(){var t=p();if(j(t))return O(t);f=setTimeout(x,function(t){var n=e-(t-u);return s?m(n,i-(t-c)):n}(t))}function O(t){return f=void 0,v&&r?b(t):(r=o=void 0,a)}function T(){var t=p(),n=j(t);if(r=arguments,o=this,u=t,n){if(void 0===f)return S(u);if(s)return f=setTimeout(x,e),b(u)}return void 0===f&&(f=setTimeout(x,e)),a}return e=y(e)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,e):i,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},T.flush=function(){return void 0===f?a:O(p())},T}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=i.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(t,e,{leading:r,maxWait:e,trailing:o})};const b={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),mail:document.querySelector(".feedback-form input")};b.form.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem("formData")})),b.form.addEventListener("input",t(e)((function(t){S[t.target.name]=t.target.value,localStorage.setItem("formData",JSON.stringify(S))}),500));let S={};!function(){const t=localStorage.getItem("formData"),e=JSON.parse(t);t&&(b.textarea.value=e.message)}(),function(){const t=localStorage.getItem("formData"),e=JSON.parse(t);t&&(b.mail.value=e.email)}();
//# sourceMappingURL=03-feedback.499fd094.js.map