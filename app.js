
"use strict";

const C = window.SURVEY_LOGIC;

const companions = {
  coti:{name:"Coti",icon:"🦝"},
  kunu:{name:"Kunu",icon:"🐒"},
  arami:{name:"Arami",icon:"🦜"},
  yma:{name:"Yma",icon:"🦉"},
  yampi:{name:"Yampi",icon:"🦊"}
};

const evo = {
  coti:[["Coti joven","🎒"],["Coti exploradora","🧭"],["Coti guardiana","🛡️"]],
  kunu:[["Kunu joven","🎒"],["Kunu explorador","🧤"],["Kunu guardián","🏅"]],
  arami:[["Arami joven","🍃"],["Arami exploradora","🔭"],["Arami guardiana","✨"]],
  yma:[["Yma joven","📖"],["Yma exploradora","🔎"],["Yma guardiana","🌙"]],
  yampi:[["Yampi joven","🍂"],["Yampi explorador","🧭"],["Yampi guardián","👑"]]
};

const emptySave = () => ({
  ready:false, player:"", adult:"", school:"", role:"", phone:"", terms:false,
  companion:"coti", xp:0, seeds:0, badges:[], items:[], records:[]
});

let save;
try {
  save = JSON.parse(localStorage.getItem("mc_agol_test") || "null") || emptySave();
} catch {
  save = emptySave();
}

let flow = {
  page:"intro",
  mission:null,
  module:0,
  data:{photos:{}, files:{}, awarded:{}},
  earned:0,
  sending:false,
  error:""
};

const app = document.getElementById("app");
const toast = document.getElementById("toast");
const reward = document.getElementById("reward");
const particles = document.getElementById("particles");
const soundBtn = document.getElementById("soundBtn");

let sound = true;
let ctx = null;

function persist(){ localStorage.setItem("mc_agol_test", JSON.stringify(save)); }
function companionData(){ return companions[save.companion]; }
function stage(){ return save.xp >= 1000 ? 2 : save.xp >= 400 ? 1 : 0; }
function nextStage(){ return [400,1000].find(v => v > save.xp) || null; }
function currentMission(){ return C.categories[flow.mission]; }
function layerUrl(){ return `${C.serviceUrl.replace(/\/$/,"")}/${C.layerId}`; }

function esc(v){
  return String(v ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;");
}

function tone(f,d=.08,v=.04,type="triangle"){
  if(!sound) return;
  if(!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
  const o=ctx.createOscillator(), g=ctx.createGain();
  o.type=type; o.frequency.value=f; g.gain.value=v;
  o.connect(g).connect(ctx.destination);
  o.start();
  g.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+d);
  o.stop(ctx.currentTime+d);
}

function clickSound(){ tone(510,.05,.025); }
function winSound(){
  [523,659,784,1047].forEach((f,i)=>setTimeout(()=>tone(f,i===3?.35:.14,i===3?.07:.05),i*120));
}
function failSound(){ tone(220,.18,.05,"sawtooth"); setTimeout(()=>tone(165,.25,.04,"sawtooth"),160); }

document.addEventListener("click", e => {
  if(e.target.closest("button, .challenge")) clickSound();
});

soundBtn.addEventListener("click", () => {
  sound = !sound;
  soundBtn.textContent = sound ? "🔊" : "🔇";
});

function pop(text){
  reward.textContent=text;
  reward.classList.remove("show"); void reward.offsetWidth; reward.classList.add("show");
  particles.classList.remove("show"); void particles.offsetWidth; particles.classList.add("show");
  winSound();
}

function msg(text){
  toast.textContent=text;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),1800);
}

function awardOnce(key, amount, label){
  if(flow.data.awarded[key]) return;
  flow.data.awarded[key] = true;
  flow.earned += amount;
  pop(`${label} +${amount} XP`);
}

function topbarHtml(){
  return `<header class="topbar"><div class="brand">🍃 Misión Colosos</div><div class="stats"><span class="pill">⭐ ${save.xp}</span><span class="pill">🌰 ${save.seeds}</span></div></header>`;
}

function shell(body, foot=""){
  app.innerHTML=`<section class="screen">${topbarHtml()}<div class="content">${body}</div>${foot}</section>`;
}

function footer(a,b,cls="primary",disabled=false){
  return `<footer class="footer"><button id="back" class="btn secondary">${a}</button><button id="nextBtn" class="btn ${cls}" ${disabled?"disabled":""}>${b}</button></footer>`;
}

function bind(backFn,nextFn){
  document.getElementById("back")?.addEventListener("click",backFn);
  document.getElementById("nextBtn")?.addEventListener("click",nextFn);
}

function companion(text){
  const c = companionData();
  return `<div class="companion-strip"><div class="companion-face">${c.icon}</div><div class="companion-text"><strong>${c.name}:</strong> ${text}</div></div>`;
}

function render(){
  const pages={intro,register,choose,camp,map,mission,sending,finish,journal};
  (pages[flow.page] || intro)();
}

function intro(){
  shell(
    `<h1 class="title">Misión<br>Colosos</h1>
     <p class="subtitle">Explorá. Descubrí. Protegé.</p>
     <div class="hero"><img src="coti.png" alt="Coti"><div class="quest-tag">NUEVA AVENTURA</div></div>
     <div class="dialogue"><strong>Coti:</strong> Hay Colosos esperando ser encontrados. ¿Venís?</div>`,
    footer("Borrar partida","¡Acepto la misión!","gold")
  );
  bind(resetGame,()=>{flow.page=save.ready?"camp":"register";render();});
}

function resetGame(){
  if(confirm("¿Borrar tu partida y tus datos guardados en este dispositivo?")){
    localStorage.removeItem("mc_agol_test");
    location.reload();
  }
}

function register(){
  shell(
    `<span class="kicker">SOLO LA PRIMERA VEZ</span>
     <h2 class="section-title">Creá tu explorador</h2>
     <div class="field"><label for="player">Tu nombre</label><input id="player" value="${esc(save.player)}"></div>
     <div class="field"><label for="adult">Nombre y apellido del adulto responsable</label><input id="adult" value="${esc(save.adult)}"></div>
     <div class="field"><label for="phone">Teléfono</label><input id="phone" inputmode="tel" value="${esc(save.phone)}"></div>
     <div class="field"><label for="school">Escuela o institución</label><input id="school" value="${esc(save.school)}"></div>
     <div class="field"><label for="role">Cargo</label><input id="role" value="${esc(save.role)}"></div>
     <label class="challenge"><input id="terms" type="checkbox" ${save.terms?"checked":""}><span>Acepto las reglas del Club de Exploradores y las bases del concurso.</span></label>
     ${companion("Esto queda guardado. Después vamos directo al campamento.")}`,
    footer("Volver","Elegir compañero")
  );
  bind(()=>{flow.page="intro";render();},saveProfile);
}

function saveProfile(){
  const player=document.getElementById("player").value.trim();
  const adult=document.getElementById("adult").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const school=document.getElementById("school").value.trim();
  const role=document.getElementById("role").value.trim();
  const terms=document.getElementById("terms").checked;
  if(!player || !adult || !phone || !terms) return msg("Completá nombre, adulto, teléfono y aceptá las reglas.");
  Object.assign(save,{player,adult,phone,school,role,terms:true});
  persist();
  flow.page="choose";
  render();
}

function choose(){
  shell(
    `<span class="kicker">FORMÁ TU EQUIPO</span>
     <h2 class="section-title">Elegí tu compañero</h2>
     <div class="choice-grid">${Object.entries(companions).map(([id,x])=>`
       <button class="choice ${save.companion===id?"selected":""}" data-c="${id}">
         <div style="font-size:3rem">${x.icon}</div>${x.name}
       </button>`).join("")}</div>
     ${companion("Voy a acompañarte en cada desafío.")}`,
    footer("Volver","Ir al campamento","gold")
  );
  document.querySelectorAll("[data-c]").forEach(b=>b.addEventListener("click",()=>{
    save.companion=b.dataset.c;
    render();
  }));
  bind(()=>{flow.page="register";render();},()=>{
    save.ready=true;
    persist();
    flow.page="camp";
    render();
  });
}

function profile(){
  const s=stage(), n=nextStage();
  const min=s===0?0:s===1?400:1000;
  const pct=n?((save.xp-min)/(n-min))*100:100;
  return `<div class="profile">
    <div class="profile-avatar">${companionData().icon}<span class="gear">${evo[save.companion][s][1]}</span></div>
    <div>
      <div class="profile-name">Explorador ${esc(save.player)}</div>
      <div class="level">${evo[save.companion][s][0]}</div>
      <div class="track"><div class="bar" style="width:${Math.max(6,Math.min(100,pct))}%"></div></div>
      <div class="small">${n?`${save.xp}/${n} XP para evolucionar`:"Evolución máxima · seguí desbloqueando objetos"}</div>
    </div>
  </div>`;
}

function camp(){
  shell(
    `${profile()}
     <div class="camp-scene"><div class="camp-companion">${companionData().icon}</div><div class="camp-bubble">¡Hola, ${esc(save.player)}! ¿Salimos a buscar otro Coloso?</div></div>
     <div class="hub-actions">
       <button id="explore" class="btn gold">🗺️ Explorar</button>
       <button id="bag" class="btn secondary">🎒 Mochila</button>
       <button id="book" class="btn secondary">📖 Diario</button>
     </div>`
  );
  document.getElementById("explore").addEventListener("click",()=>{flow.page="map";render();});
  document.getElementById("bag").addEventListener("click",()=>{flow.page="journal";render();});
  document.getElementById("book").addEventListener("click",()=>{flow.page="journal";render();});
}

function map(){
  shell(
    `<span class="kicker">MAPA DE AVENTURAS</span>
     <h2 class="section-title">¿A dónde vamos?</h2>
     <div class="map">${Object.entries(C.categories).map(([id,m])=>`
       <button class="map-node" data-m="${id}">
         <span>${m.icon}</span>${m.title}
         <small>${m.subtitle}</small>
         <div class="points">🏆 +${m.completionXp} XP</div>
       </button>`).join("")}</div>
     ${companion("Las misiones más difíciles dan más experiencia.")}`,
    footer("Campamento","")
  );
  document.getElementById("nextBtn").style.visibility="hidden";
  document.querySelectorAll("[data-m]").forEach(b=>b.addEventListener("click",()=>{
    flow={
      page:"mission",
      mission:b.dataset.m,
      module:0,
      data:{photos:{},files:{},awarded:{}},
      earned:0,
      sending:false,
      error:""
    };
    render();
  }));
  bind(()=>{flow.page="camp";render();},()=>{});
}

function photoInput(key,label,icon,xp,help){
  const file=flow.data.files[key];
  return `<label class="challenge ${file?"done":""}" for="file-${key}">
    <span class="challenge-icon">${icon}</span>
    <span>
      <strong>${label}</strong><br>
      <small>${help}</small>
      ${file?`<span class="file-name">✅ ${esc(file.name)}</span>`:""}
    </span>
    <span class="challenge-xp">${file?"✅":"+"+xp}</span>
    <input class="photo-input" id="file-${key}" data-file="${key}" data-xp="${xp}" type="file" accept="image/*" capture="environment">
  </label>`;
}

function speciesOptions(){
  const quick = [
    {value:"Tajy - Lapacho",label:"Tajy / Lapacho"},
    {value:"Samu'u",label:"Samu'u"},
    {value:"Timbo",label:"Timbó"},
    {value:"Yvyra Pytã",label:"Yvyra pytã"},
    {value:"Cedro",label:"Cedro"},
    {value:"No conozco la especie",label:"No estoy seguro"},
    {value:"__other__",label:"Creo que es otra especie"}
  ];
  return quick.map(o=>`<button class="choice ${flow.data.species===o.value?"selected":""}" data-species="${esc(o.value)}">${esc(o.label)}</button>`).join("");
}

function measureSelect(id,label,options,value){
  return `<div class="field">
    <label for="${id}">${label}</label>
    <select id="${id}">
      <option value="">Elegí una medida</option>
      ${options.map(o=>`<option value="${esc(o.value)}" ${String(value||"")===o.value?"selected":""}>${esc(o.label)} m</option>`).join("")}
    </select>
  </div>`;
}

function mission(){
  const m=currentMission();
  const mod=m.modules[flow.module];
  let body="", nextLabel="Continuar";

  if(mod==="gps"){
    const coords=flow.data.coords;
    body=`<span class="kicker">${m.title}</span>
      <h2 class="section-title">Encontraste un posible Coloso</h2>
      <div class="dialogue"><strong>📍 Guardá el punto estando junto al árbol.</strong><br>El celular registrará la ubicación. Después completaremos departamento y distrito automáticamente.</div>
      <button id="gpsBtn" class="btn blue">${coords?"✓ Actualizar ubicación":"Usar mi ubicación"}</button>
      ${coords?`<div class="location-info"><span>Precisión aproximada: ${Math.round(coords.accuracy)} m</span><span class="small">Mientras menor sea el número, mejor.</span></div>`:""}
      ${companion(coords?"¡Perfecto! Ya sé dónde está.":"Quedate cerca del árbol y activá el GPS.")}`;
  }

  if(mod==="photos"){
    const xp=C.actionXp.photo;
    body=`<span class="kicker">MISIÓN FOTOGRÁFICA</span>
      <h2 class="section-title">Conseguí las tres pruebas</h2>
      <div class="tip">📷 <strong>Hacé fotos claras:</strong> hojas o flores de cerca, la cinta rodeando el tronco y el árbol entero con una persona al lado para comparar su altura.</div>
      <div class="challenge-grid">
        ${photoInput("leaves","Hojas o flores","🍃",xp,"De cerca, para poder reconocer la especie.")}
        ${photoInput("trunk","Tronco con la cinta","📏",xp,"Que se vea la cinta métrica rodeando el tronco.")}
        ${photoInput("full","Árbol completo","🌳",xp,"Que se vea entero y una persona parada al lado.")}
      </div>
      ${companion("Una buena foto puede convertir una pista en un gran descubrimiento.")}`;
  }

  if(mod==="mainPhoto"){
    body=`<span class="kicker">SAFARI FOTOGRÁFICO</span>
      <h2 class="section-title">Conseguí una foto legendaria</h2>
      <div class="tip">📷 Buscá buena luz y tratá de que el árbol se vea completo y nítido.</div>
      <div class="challenge-grid">${photoInput("main","Fotografía principal","📸",C.actionXp.mainPhoto,"Esta será la imagen principal de tu postulación.")}</div>
      ${companion("Esperá el mejor momento. Luz, encuadre... ¡ahora!")}`;
  }

  if(mod==="species"){
    body=`<span class="kicker">DESAFÍO DE IDENTIFICACIÓN</span>
      <h2 class="section-title">¿Reconocés este árbol?</h2>
      <div class="choice-grid">${speciesOptions()}</div>
      ${flow.data.species==="__other__"?`
        <div class="field">
          <label for="speciesSelect">Buscá la especie en la lista</label>
          <select id="speciesSelect">
            <option value="">Elegí una especie</option>
            ${C.choices.species.filter(o=>o.value!=="No conozco la especie").map(o=>`<option value="${esc(o.value)}" ${flow.data.speciesOtherCode===o.value?"selected":""}>${esc(o.label)}</option>`).join("")}
            <option value="other" ${flow.data.speciesOtherCode==="other"?"selected":""}>No aparece en la lista</option>
          </select>
        </div>
        ${flow.data.speciesOtherCode==="other"?`<div class="field"><label for="speciesOther">Escribí cuál podría ser</label><input id="speciesOther" value="${esc(flow.data.speciesOther||"")}"></div>`:""}
      `:""}
      <div class="tip">🌿 Si reconocés una especie de la lista ganás más XP. Si no sabés, igual sumás por intentarlo.</div>
      ${companion("No pasa nada si dudás. También se aprende intentando.")}`;
  }

  if(mod==="measure"){
    body=`<span class="kicker">DESAFÍO DE TAMAÑO</span>
      <h2 class="section-title">¿Qué tan gigante es?</h2>
      <div class="tip">📏 Usá una <strong>cinta métrica</strong>. Rodeá el tronco a la altura del pecho. La altura puede ser aproximada.</div>
      ${measureSelect("height","Altura aproximada",C.choices.heights,flow.data.height)}
      ${measureSelect("circ","Circunferencia del tronco",C.choices.circumferences,flow.data.circ)}
      ${companion("Medir bien puede revelar que encontraste un verdadero gigante.")}`;
  }

  if(mod==="story"){
    body=`<span class="kicker">SECRETO DEL ÁRBOL</span>
      <h2 class="section-title">¿Qué historia guarda?</h2>
      <div class="field"><textarea id="story" placeholder="¿Quién te habló de este árbol? ¿Qué pasó bajo su sombra?">${esc(flow.data.story||"")}</textarea></div>
      ${companion("Las mejores historias convierten un árbol en leyenda.")}`;
  }

  if(mod==="protectedArea"){
    body=`<span class="kicker">RESERVA NATURAL</span>
      <h2 class="section-title">¿Cómo se llama este lugar?</h2>
      <div class="field"><label for="protectedArea">Área Silvestre Protegida</label>
        <select id="protectedArea">
          <option value="">Elegí el área</option>
          ${C.choices.protectedAreas.map(o=>`<option value="${esc(o.value)}" ${flow.data.protectedArea===o.value?"selected":""}>${esc(o.label)}</option>`).join("")}
        </select>
      </div>
      ${flow.data.protectedArea==="other"?`<div class="field"><label for="protectedAreaOther">Escribí el nombre</label><input id="protectedAreaOther" value="${esc(flow.data.protectedAreaOther||"")}"></div>`:""}
      ${companion("Anotá el nombre de la reserva para completar el descubrimiento.")}`;
  }

  if(mod==="school"){
    body=`<span class="kicker">MISIÓN ESCUELA</span>
      <h2 class="section-title">Confirmá tu institución</h2>
      <div class="field"><label for="institution">Escuela o institución</label><input id="institution" value="${esc(flow.data.institution||save.school)}"></div>
      <div class="field"><label for="institutionRole">Cargo del adulto</label><input id="institutionRole" value="${esc(flow.data.institutionRole||save.role)}"></div>
      ${companion("Ya lo recordamos por vos.")}`;
  }

  if(mod==="photoDate"){
    body=`<span class="kicker">FECHA DE CAPTURA</span>
      <h2 class="section-title">¿Cuándo tomaste la foto?</h2>
      <div class="field"><label for="photoDate">Fecha</label><input id="photoDate" type="date" value="${esc(flow.data.photoDate||"")}"></div>
      ${companion("Una última pista y la foto entra al diario.")}`;
  }

  shell(body,footer("Salir",nextLabel));
  bind(()=>{flow.page="map";render();},advanceModule);
  bindMission(mod);
}

function bindMission(mod){
  if(mod==="gps"){
    document.getElementById("gpsBtn").addEventListener("click",()=>{
      if(!navigator.geolocation){
        msg("Este dispositivo no permite obtener la ubicación.");
        return;
      }
      msg("Buscando una ubicación precisa...");
      navigator.geolocation.getCurrentPosition(
        p=>{
          flow.data.coords={
            x:p.coords.longitude,
            y:p.coords.latitude,
            accuracy:p.coords.accuracy
          };
          awardOnce("gps",C.actionXp.gps,"📍");
          render();
        },
        err=>{
          failSound();
          const reason=err.code===1?"Permití el acceso a la ubicación.":err.code===3?"El GPS tardó demasiado. Probá otra vez.":"No pudimos obtener la ubicación.";
          msg(reason);
        },
        {enableHighAccuracy:true,timeout:20000,maximumAge:0}
      );
    });
  }

  document.querySelectorAll("[data-file]").forEach(input=>{
    input.addEventListener("change",()=>{
      const file=input.files?.[0];
      if(!file) return;
      if(!file.type.startsWith("image/")) return msg("Elegí una imagen.");
      if(file.size > 20*1024*1024) return msg("La foto supera 20 MB.");
      const key=input.dataset.file;
      flow.data.files[key]=file;
      flow.data.photos[key]=true;
      awardOnce(`photo-${key}`,Number(input.dataset.xp),"📸");
      render();
    });
  });

  document.querySelectorAll("[data-species]").forEach(button=>{
    button.addEventListener("click",()=>{
      flow.data.species=button.dataset.species;
      if(flow.data.species==="No conozco la especie"){
        awardOnce("species",C.actionXp.speciesUnknown,"🌿");
      }else if(flow.data.species==="__other__"){
        // Award after the player chooses a real species or writes one.
      }else{
        awardOnce("species",C.actionXp.speciesKnown,"🌿");
      }
      render();
    });
  });

  document.getElementById("speciesSelect")?.addEventListener("change",e=>{
    flow.data.speciesOtherCode=e.target.value;
    if(e.target.value && e.target.value!=="other"){
      awardOnce("species",C.actionXp.speciesKnown,"🌿");
    }
    render();
  });

  document.getElementById("protectedArea")?.addEventListener("change",e=>{
    flow.data.protectedArea=e.target.value;
    render();
  });
}

function saveCurrent(mod){
  if(mod==="species"){
    const select=document.getElementById("speciesSelect");
    const other=document.getElementById("speciesOther");
    if(select) flow.data.speciesOtherCode=select.value;
    if(other) flow.data.speciesOther=other.value.trim();
  }
  if(mod==="measure"){
    flow.data.height=document.getElementById("height").value;
    flow.data.circ=document.getElementById("circ").value;
  }
  if(mod==="story") flow.data.story=document.getElementById("story").value.trim();
  if(mod==="protectedArea"){
    flow.data.protectedArea=document.getElementById("protectedArea").value;
    const other=document.getElementById("protectedAreaOther");
    if(other) flow.data.protectedAreaOther=other.value.trim();
  }
  if(mod==="school"){
    flow.data.institution=document.getElementById("institution").value.trim();
    flow.data.institutionRole=document.getElementById("institutionRole").value.trim();
  }
  if(mod==="photoDate") flow.data.photoDate=document.getElementById("photoDate").value;
}

function advanceModule(){
  const m=currentMission();
  const mod=m.modules[flow.module];
  saveCurrent(mod);

  if(mod==="gps"&&!flow.data.coords) return msg("Guardá la ubicación.");
  if(mod==="photos"&&["leaves","trunk","full"].some(k=>!flow.data.files[k])) return msg("Necesitamos las tres fotos.");
  if(mod==="mainPhoto"&&!flow.data.files.main) return msg("Agregá la fotografía principal.");
  if(mod==="species"&&!flow.data.species) return msg("Elegí una opción.");
  if(mod==="species"&&flow.data.species==="__other__"&&!flow.data.speciesOtherCode) return msg("Elegí una especie de la lista.");
  if(mod==="species"&&flow.data.speciesOtherCode==="other"&&!flow.data.speciesOther) return msg("Escribí cuál podría ser.");
  if(mod==="measure"&&(!flow.data.height||!flow.data.circ)) return msg("Completá las dos medidas.");
  if(mod==="story"&&!flow.data.story) return msg("Contanos la historia.");
  if(mod==="protectedArea"&&!flow.data.protectedArea) return msg("Elegí el área protegida.");
  if(mod==="protectedArea"&&flow.data.protectedArea==="other"&&!flow.data.protectedAreaOther) return msg("Escribí el nombre del área.");
  if(mod==="school"&&!flow.data.institution) return msg("Indicá la institución.");
  if(mod==="photoDate"&&!flow.data.photoDate) return msg("Indicá la fecha.");

  if(mod==="measure") awardOnce("measure",C.actionXp.measure,"📏");
  if(mod==="story") awardOnce("story",C.actionXp.story,"📖");
  if(mod==="protectedArea") awardOnce("protectedArea",C.actionXp.protectedArea,"🦜");
  if(mod==="school") awardOnce("school",C.actionXp.school,"🏫");
  if(mod==="photoDate") awardOnce("photoDate",C.actionXp.photoDate,"📅");
  if(mod==="species"&&flow.data.species==="__other__"&&!flow.data.awarded.species){
    const amount=flow.data.speciesOtherCode==="other"?C.actionXp.speciesOther:C.actionXp.speciesKnown;
    awardOnce("species",amount,"🌿");
  }

  if(flow.module===m.modules.length-1){
    sendMission();
    return;
  }
  flow.module++;
  render();
}

function buildFeature(){
  const m=currentMission(), f=C.fieldMap, d=flow.data;
  const attributes={};

  attributes[f.category]=m.officialValue;

// En Árbol de mi escuela el registro oficial lo hace el docente.
// En las demás categorías se registra el nombre del postulante.
attributes[f.name] =
  flow.mission === "school"
    ? save.adult
    : save.player;

attributes[f.phone]=Number(String(save.phone).replace(/\D/g,"")) || null;
attributes[f.terms]="Sí";
attributes[f.country]="Paraguay";

  if(flow.mission==="school"){
    attributes[f.institution]=d.institution||save.school;
    attributes[f.institutionRole]=d.institutionRole||save.role;
  }

  if(d.species){
    if(d.species==="__other__"){
      if(d.speciesOtherCode==="other"){
        attributes[f.species]="other";
        attributes[f.speciesOther]=d.speciesOther;
      }else{
        attributes[f.species]=d.speciesOtherCode;
      }
    }else{
      attributes[f.species]=d.species;
    }
  }

  if(d.height) attributes[f.height]=String(d.height);
  if(d.circ) attributes[f.circumference]=String(d.circ);
  if(d.story) attributes[f.story]=d.story;
  if(d.photoDate) attributes[f.photoDate]=new Date(`${d.photoDate}T12:00:00`).getTime();
  if(d.protectedArea){
    attributes[f.protectedArea]=d.protectedArea;
    if(d.protectedArea==="other" && d.protectedAreaOther){
      attributes["nombre_del_rea_silvestre_proteg_other"]=d.protectedAreaOther;
    }
  }

  return {
    attributes,
    geometry:{
      x:d.coords.x,
      y:d.coords.y,
      spatialReference:{wkid:4326}
    }
  };
}

async function postForm(url, body){
  const response=await fetch(url,{method:"POST",body});
  let data;
  try{ data=await response.json(); }
  catch{ throw new Error(`Respuesta inválida del servidor (${response.status}).`); }
  if(!response.ok || data.error){
    const detail=data.error?.message || data.error?.details?.join(" ") || `Error HTTP ${response.status}`;
    throw new Error(detail);
  }
  return data;
}

async function addFeature(feature){
  const body=new URLSearchParams();
  body.set("f","json");
  body.set("features",JSON.stringify([feature]));
  body.set("rollbackOnFailure","true");
  body.set("returnEditMoment","true");

  const data=await postForm(`${layerUrl()}/addFeatures`,body);
  const result=data.addResults?.[0];
  if(!result?.success){
    throw new Error(result?.error?.description || result?.error?.message || "AGOL rechazó el registro.");
  }
  return result.objectId;
}

async function addAttachment(objectId,key,file){
  const keyword=C.attachmentMap[key];
  const form=new FormData();
  form.append("f","json");
  form.append("attachment",file,file.name);
  if(keyword) form.append("keywords",keyword);

  const data=await postForm(`${layerUrl()}/${objectId}/addAttachment`,form);
  if(!data.addAttachmentResult?.success){
    throw new Error(data.addAttachmentResult?.error?.description || `No se pudo subir ${file.name}.`);
  }
}

async function sendMission(){
  if(flow.sending) return;
  flow.sending=true;
  flow.error="";
  flow.page="sending";
  render();

  try{
    const feature=buildFeature();
    const objectId=await addFeature(feature);

    const files=Object.entries(flow.data.files);
    let uploaded=0;
    for(const [key,file] of files){
      await addAttachment(objectId,key,file);
      uploaded++;
      const status=document.getElementById("uploadStatus");
      if(status) status.textContent=`Fotos cargadas: ${uploaded}/${files.length}`;
    }

    finalizeSuccess(objectId);
  }catch(error){
    console.error(error);
    flow.sending=false;
    flow.error=error.message || "No se pudo enviar la misión.";
    flow.page="sending";
    failSound();
    render();
  }
}

function sending(){
  if(flow.error){
    shell(
      `<span class="kicker">NO SE PERDIÓ TU MISIÓN</span>
       <h2 class="section-title">No pudimos enviarla todavía</h2>
       <div class="error-box">${esc(flow.error)}</div>
       <div class="dialogue"><strong>${companionData().name}:</strong> Revisá Internet o los permisos de edición de la capa y probemos otra vez.</div>`,
      footer("Volver al mapa","Reintentar","danger")
    );
    bind(()=>{flow.page="map";render();},sendMission);
    return;
  }

  shell(`<div class="sending"><div class="spinner"></div><h2>Guardando el descubrimiento...</h2><p id="uploadStatus">Creando el registro en Colosos</p><p class="small">No cierres esta pantalla.</p></div>`);
}

function finalizeSuccess(objectId){
  const m=currentMission();
  const gained=m.completionXp+flow.earned;
  const oldStage=stage();

  save.xp+=gained;
  save.seeds+=m.seeds;
  if(!save.badges.includes(m.title)) save.badges.push(m.title);
  if(save.seeds>=10&&!save.items.includes("Sombrero del Guardián")) save.items.push("Sombrero del Guardián");

  save.records.unshift({
    title:m.title,
    date:new Date().toLocaleDateString("es-PY"),
    xp:gained,
    seeds:m.seeds,
    objectId
  });

  persist();
  flow.evolved=stage()>oldStage;
  flow.sentObjectId=objectId;
  flow.sending=false;
  flow.page="finish";
  pop(`⭐ +${gained} XP · 🌰 +${m.seeds}`);
  render();
}

function finish(){
  const m=currentMission();
  const gained=m.completionXp+flow.earned;
  shell(
    `<div class="finish">
      <div style="font-size:5rem">🏆</div>
      <h2 class="finish-title">¡Misión completada!</h2>
      ${companion("¡Lo logramos! El Coloso ya está guardado.")}
      <div class="loot">
        <div class="loot-card">⭐<br>+${gained} XP</div>
        <div class="loot-card">🌰<br>+${m.seeds}</div>
        <div class="loot-card">🏅<br>${m.title}</div>
      </div>
      <div class="small">Registro TEST: ${flow.sentObjectId}</div>
      ${flow.evolved?`<div class="dialogue"><strong>¡EVOLUCIÓN!</strong><br>${companionData().name} ahora es ${evo[save.companion][stage()][0]} ${evo[save.companion][stage()][1]}</div>`:""}
      ${profile()}
    </div>`,
    footer("Campamento","Otra aventura","gold")
  );
  bind(()=>{flow.page="camp";render();},()=>{flow.page="map";render();});
}

function journal(){
  shell(
    `${profile()}
     <h2 class="section-title">🎒 Mochila</h2>
     <div class="inventory">${(save.items.length?save.items:["Próximo objeto"]).map(x=>`<div class="item">🎒<br><small>${esc(x)}</small></div>`).join("")}${save.badges.slice(-2).map(x=>`<div class="item">🏅<br><small>${esc(x)}</small></div>`).join("")}</div>
     <h2 class="section-title">📖 Diario del Explorador</h2>
     <div class="challenge-grid">${save.records.length?save.records.map(r=>`<div class="challenge done"><span class="challenge-icon">🌳</span><span><strong>${esc(r.title)}</strong><br><small>${esc(r.date)} · ID ${esc(r.objectId)}</small></span><span class="challenge-xp">+${r.xp}</span></div>`).join(""):'<div class="dialogue">Todavía no hay Colosos en tu diario.</div>'}</div>`,
    footer("Editar perfil","Campamento")
  );
  bind(()=>{save.ready=false;persist();flow.page="register";render();},()=>{flow.page="camp";render();});
}

render();
