import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-651d7991.js";const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==";let i,t=document.querySelector("[data-start]"),h=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]"),n=document.querySelector(".inp");t.disabled=!0;t.classList.add("inactive");t.classList.remove("active");n.disabled=!1;let c=null;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){i=e[0],i<new Date?(f.error({message:"Please choose a date in the future",width:300,height:64,position:"topRight",timeout:5e3,closeOnEscape:!0,messageSize:16,messageColor:"	#fff",backgroundColor:"#ef4040",title:"Error",titleSize:16,titleColor:"#fff",iconUrl:g,iconColor:"#fff"}),t.disabled=!0,t.classList.remove("active"),t.classList.add("inactive")):(t.disabled=!1,t.classList.remove("inactive"),t.classList.add("active"))}};function w(e){const d=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),u=Math.floor(e%864e5%36e5/6e4),A=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:l,minutes:u,seconds:A}}function a(e){return String(e).padStart(2,0)}function U(){c=setInterval(()=>{const e=new Date,o=i-e;if(t.disabled=!0,n.disabled=!0,o<0){clearInterval(c),n.disabled=!1,t.disabled=!1;return}v(w(o))},1e3)}function v({days:e,hours:o,minutes:r,seconds:s}){h.textContent=a(e),y.textContent=a(o),S.textContent=a(r),C.textContent=a(s)}m("#datetime-picker",p);t.addEventListener("click",U);
//# sourceMappingURL=commonHelpers.js.map
