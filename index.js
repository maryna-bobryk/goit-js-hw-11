import{a as d,S as m,i}from"./assets/vendor-BDaiwwc1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const u=d.create({baseURL:"https://pixabay.com/api/",params:{key:"23727869-9ab5af5c09b745cc02503bdaa",image_type:"photo",orientation:"horizontal",safesearch:"true"}});function p(e){return u.get("",{params:{q:e}}).then(r=>r.data.hits).catch(r=>{console.log(r)})}const f=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.8});function g(e){return` <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="card-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
          />
          <div class="card-descr">
            <div class="card-descr-elem">
              <p class="elem-titel">Likes</p>
              <p class="elem-value">${e.likes}</p>
            </div>

            <div class="card-descr-elem">
              <p class="elem-titel">Views</p>
              <p class="elem-value">${e.views}</p>
            </div>

            <div class="card-descr-elem">
              <p class="elem-titel">Comments</p>
              <p class="elem-value">${e.comments}</p>
            </div>

            <div class="card-descr-elem">
              <p class="elem-titel">Downloads</p>
              <p class="elem-value">${e.downloads}</p>
            </div>
          </div>
        </a>
      </li>`}function h(e){const r=e.map(g).join("");o.gallery.innerHTML=r,f.refresh()}const c={messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",transitionIn:"bounceInLeft",position:"topRight",displayMode:"replace",closeOnClick:!0},o={form:document.querySelector(".form"),btn:document.querySelector(".form-button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};o.form.addEventListener("submit",e=>{e.preventDefault(),o.gallery.innerHTML="";const r=e.target.elements.image.value.trim();if(!r){i.show({...c,message:"Please enter a search term!"});return}o.loader.classList.remove("hidden"),p(r).then(a=>{if(o.loader.classList.add("hidden"),a.length===0){i.show({...c,message:"No images found. Try a different search term!"});return}h(a)}).catch(a=>{o.loader.classList.add("hidden"),i.show({...c,message:"Oops! Something went wrong. Please try again later."}),console.log(a)})});
//# sourceMappingURL=index.js.map
