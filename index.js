import{a as u,S as d,i as a}from"./assets/vendor-DQiTczw4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="54662059-4256913c5e8876e723dd9edc3",p="https://pixabay.com/api/";function m(o){return u.get(p,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const s=o.map(t=>`<li class="gallery-item">
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
      `).join("");c.insertAdjacentHTML("beforeend",s),h.refresh()}function g(){c.innerHTML=""}function b(){l.classList.add("is-visible")}function L(){l.classList.remove("is-visible")}const v=document.querySelector(".form");v.addEventListener("submit",S);function S(o){o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){a.error({message:"Please enter a search query!",position:"topRight"});return}g(),b(),m(t).then(i=>{if(i.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(i.hits)}).catch(i=>{a.error({message:i.message,position:"topRight"})}).finally(()=>{L()}),o.target.reset()}
//# sourceMappingURL=index.js.map
