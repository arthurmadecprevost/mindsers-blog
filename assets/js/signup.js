import{ready}from"./ready.js";ready(()=>{const n=document.querySelector('form[data-members-form="signup"]');function e(e){const t=e.target.value;if(e.target.checked){const r=document.createElement("input");return r.value=t,r.dataset.membersLabel="",r.type="hidden",void n.appendChild(r)}document.querySelectorAll("input[data-members-label]").forEach(e=>{e.value===t&&e.remove()})}document.querySelector("#en-check").addEventListener("change",e),document.querySelector("#fr-check").addEventListener("change",e)});
//# sourceMappingURL=signup.js.map