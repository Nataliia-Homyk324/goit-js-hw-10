import{i as f}from"./assets/octagon-2f000356.js";/* empty css                      */import{f as v,i as h}from"./assets/vendor-651d7991.js";let s,e=document.querySelector("[data-start]"),y=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),L=document.querySelector("[data-seconds]"),i=document.querySelector(".inp");e.disabled=!0;e.classList.add("inactive");e.classList.remove("active");i.disabled=!1;let c=null;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0],s<new Date?(h.error({message:"Please choose a date in the future",width:300,height:64,close:!1,position:"topRight",timeout:5e3,closeOnEscape:!0,messageSize:16,messageColor:"	#fff",backgroundColor:"#ef4040",title:"Error",titleSize:16,titleColor:"#fff",iconUrl:f,iconColor:"#fff"}),e.disabled=!0,e.classList.remove("active"),e.classList.add("inactive")):(e.disabled=!1,e.classList.remove("inactive"),e.classList.add("active"))}};function C(t){const d=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:l,minutes:u,seconds:m}}function a(t){return String(t).padStart(2,0)}function g(){c=setInterval(()=>{const t=new Date,o=s-t;if(e.disabled=!0,e.classList.add("inactive"),e.classList.remove("active"),i.disabled=!0,o<0){clearInterval(c),i.disabled=!1,e.disabled=!1,e.classList.add("active"),e.classList.remove("inactive");return}q(C(o))},1e3)}function q({days:t,hours:o,minutes:n,seconds:r}){y.textContent=a(t),p.textContent=a(o),S.textContent=a(n),L.textContent=a(r)}v("#datetime-picker",b);e.addEventListener("click",g);
//# sourceMappingURL=commonHelpers.js.map
