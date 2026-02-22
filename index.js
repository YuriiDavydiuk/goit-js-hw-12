import{a as w,S as v,i}from"./assets/vendor-B5nsgUv9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const S="54662059-4256913c5e8876e723dd9edc3",q="https://pixabay.com/api/";async function u(e,r=1){return(await w(`${q}`,{params:{key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),p=document.querySelector(".js-load-more"),R=new v(".gallery a",{captionsData:"alt",captionDelay:250});function h(e){const r=e.map(t=>`<li class="gallery-item">
          <a href="${t.largeImageURL}">
            <img
              src="${t.webformatURL}"
              alt="${t.tags}"
            />
          </a>
          <div class="info">
            <p><b>Likes</b> ${t.likes}</p>
            <p><b>Views</b> ${t.views}</p>
            <p><b>Comments</b> ${t.comments}</p>
            <p><b>Downloads</b> ${t.downloads}</p>
          </div>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",r),R.refresh()}function $(){f.innerHTML=""}function y(){m.classList.add("is-visible")}function g(){m.classList.remove("is-visible")}function M(){p.classList.remove("is-hidden")}function l(){p.classList.add("is-hidden")}const P=document.querySelector(".form"),O=document.querySelector(".js-load-more");let c="",n=1,L=0;P.addEventListener("submit",B);O.addEventListener("click",E);async function B(e){e.preventDefault();const r=e.target.elements["search-text"].value.trim();if(!r){i.error({message:"Please enter a search query!",position:"topRight"});return}c=r,n=1,$(),l(),y();try{const t=await u(c,n);if(L=t.totalHits,t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits),b()}catch(t){i.error({message:t.message,position:"topRight"})}finally{g()}e.target.reset()}async function E(){n+=1,l(),y();try{const e=await u(c,n);h(e.hits),x(),b()}catch(e){i.error({message:e.message,position:"topRight"})}finally{g()}}function b(){n*15>=L?(l(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):M()}function x(){const e=document.querySelector(".gallery-item");if(!e)return;const r=e.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
