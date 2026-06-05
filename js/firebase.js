import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue, update, get, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCZpSWAEivu4NAepXVIY2JyeFoBx6mTayA",
  authDomain: "hunger-games-uns.firebaseapp.com",
  databaseURL: "https://hunger-games-uns-default-rtdb.firebaseio.com",
  projectId: "hunger-games-uns",
  storageBucket: "hunger-games-uns.firebasestorage.app",
  messagingSenderId: "833806319484",
  appId: "1:833806319484:web:39b7af0875360e4d4f6ef9"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getDatabase(app);

export { db, ref, set, push, onValue, update, get, serverTimestamp };

// Helper: safely extract all children from a snapshot as an array
// Works regardless of whether Firebase stored them as object or array
export function snapToArray(snap) {
  if (!snap || !snap.exists()) return [];
  const val = snap.val();
  if (!val || typeof val !== 'object') return [];
  return Object.values(val);
}

// Helper: safely extract children as array of {key, ...value}
export function snapToArrayWithKeys(snap) {
  if (!snap || !snap.exists()) return [];
  const val = snap.val();
  if (!val || typeof val !== 'object') return [];
  return Object.entries(val).map(([key, v]) => ({ _key: key, ...v }));
}

export const ELITES = {
  aurelius_voss:     { name: "Aurelius Voss",    title: "Chairman, Voss Industries",            credits: 400, password: "voss2025" },
  octavia_sterling:  { name: "Octavia Sterling",  title: "Chief Executive, Sterling Bank",       credits: 350, password: "sterling2025" },
  cassian_vire:      { name: "Cassian Vire",      title: "Owner, Panem Energy Consortium",       credits: 300, password: "vire2025" },
  valentina_crest:   { name: "Valentina Crest",   title: "Celebrity Sponsor & Socialite",        credits: 200, password: "crest2025" },
  lucius_draven:     { name: "Lucius Draven",     title: "Founder, Draven Security Solutions",   credits: 350, password: "draven2025" },
  aurelia_fawn:      { name: "Aurelia Fawn",      title: "Capitol Fashion Mogul",                credits: 150, password: "fawn2025" },
  magnus_halberd:    { name: "Magnus Halberd",    title: "Chairman, Halberd Defense Systems",    credits: 400, password: "halberd2025" },
  celestia_wren:     { name: "Celestia Wren",     title: "Entertainment Producer",               credits: 200, password: "wren2025" },
  tiberius_vale:     { name: "Tiberius Vale",     title: "Transportation & Maglev Magnate",      credits: 300, password: "vale2025" },
  seraphina_lux:     { name: "Seraphina Lux",     title: "Owner, Lux Media Group",               credits: 250, password: "lux2025" },
  atticus_crane:     { name: "Atticus Crane",     title: "Senior Gamemaker Representative",      credits: 500, password: "crane2025" },
  vesper_montclair:  { name: "Vesper Montclair",  title: "Arena Design Executive",               credits: 350, password: "montclair2025" },
  caius_evermont:    { name: "Caius Evermont",    title: "Chairman, Evermont Agricultural",      credits: 300, password: "evermont2025" },
  ophelia_sloane:    { name: "Ophelia Sloane",    title: "Owner, Sloane Pharmaceuticals",        credits: 350, password: "sloane2025" },
  dorian_golding:    { name: "Dorian Golding",    title: "Precious Metals & Resource Tycoon",    credits: 450, password: "golding2025" },
  lavinia_rosehart:  { name: "Lavinia Rosehart",  title: "Luxury Goods Consortium Executive",    credits: 200, password: "rosehart2025" },
  maximus_argent:    { name: "Maximus Argent",    title: "Capitol Construction & Infrastructure",credits: 300, password: "argent2025" },
  isolde_vesper:     { name: "Isolde Vesper",     title: "Biotechnology & Genetics Entrepreneur",credits: 300, password: "isolde2025" },
  corvin_blackthorne:{ name: "Corvin Blackthorne",title: "Director, Blackthorne Genetics",       credits: 400, password: "blackthorne2025" },
  portia_bellamy:    { name: "Portia Bellamy",    title: "Head of Tribute Talent Management",    credits: 250, password: "bellamy2025" },
  hadrian_ashcroft:  { name: "Hadrian Ashcroft",  title: "Chairman, Capitol Sponsor Relations",  credits: 350, password: "ashcroft2025" },
  callista_marrow:   { name: "Callista Marrow",   title: "Lead Arena Architect",                 credits: 350, password: "marrow2025" },
  orion_lockwood:    { name: "Orion Lockwood",    title: "Information Broker & Intelligence",    credits: 300, password: "lockwood2025" },
  cornelia_plume:    { name: "Cornelia Plume",    title: "Political Consultant & Power Broker",  credits: 250, password: "plume2025" },
};

export const TRIBUTES_INIT = [
  { id:"t01", name:"Valeria Apollo",     district:"District 1",  hp:100, status:"Cornucopia — Career alliance forming",   alive:true },
  { id:"t02", name:"Velouro Leo",        district:"District 1",  hp:100, status:"Cornucopia — Securing weapons cache",     alive:true },
  { id:"t03", name:"Brontes Ares",       district:"District 2",  hp:100, status:"Leading Career alliance",                 alive:true },
  { id:"t04", name:"Kiyra Kain",         district:"District 2",  hp:100, status:"Tracking escaping tributes",              alive:true },
  { id:"t05", name:"Synrik Orion",       district:"District 3",  hp:100, status:"Fled north — forest cover",              alive:true },
  { id:"t06", name:"Elena Atheniapolos", district:"District 3",  hp:100, status:"Fled northeast — concealed position",    alive:true },
  { id:"t07", name:"Corven Tide",        district:"District 4",  hp:100, status:"Career alliance — near lake",            alive:true },
  { id:"t08", name:"Tori Vegah",         district:"District 4",  hp:100, status:"Career alliance patrol",                 alive:true },
  { id:"t09", name:"Volti Helios",       district:"District 5",  hp:100, status:"Fled west — seeking high ground",        alive:true },
  { id:"t10", name:"Lyra Solenn",        district:"District 5",  hp:100, status:"Fled south — searching for water",       alive:true },
  { id:"t11", name:"Axel Ode",           district:"District 6",  hp:100, status:"Fled east — dense undergrowth",          alive:true },
  { id:"t12", name:"Veesuvi Rain",       district:"District 6",  hp:100, status:"Injured — moving slowly southeast",      alive:true },
  { id:"t13", name:"Plutonus Blu",       district:"District 7",  hp:100, status:"Treetop position — observing",           alive:true },
  { id:"t14", name:"Mebanis Cades",      district:"District 7",  hp:100, status:"Forest — gathering resources",           alive:true },
  { id:"t15", name:"Odinsos Hemingway",  district:"District 8",  hp:100, status:"Hiding near rocky outcrop",              alive:true },
  { id:"t16", name:"Lamina Calow",       district:"District 8",  hp:100, status:"Moving west — avoiding Careers",         alive:true },
  { id:"t17", name:"Anaya Trove",        district:"District 9",  hp:100, status:"Fled northwest — seeking shelter",       alive:true },
  { id:"t18", name:"Claude Alainus",     district:"District 9",  hp:100, status:"Fled west — near grain fields",          alive:true },
  { id:"t19", name:"Marvin Narlan",      district:"District 10", hp:100, status:"Moving south — open terrain",            alive:true },
  { id:"t20", name:"Vanderwall Moon",    district:"District 10", hp:100, status:"Fled southwest — concealed",             alive:true },
  { id:"t21", name:"Coryo Chambers",     district:"District 11", hp:100, status:"Eastern sector — grain field border",    alive:true },
  { id:"t22", name:"Sisou Confucias",    district:"District 11", hp:100, status:"Treetop — watching arena boundary",      alive:true },
  { id:"t23", name:"Cecelia Kebih",      district:"District 12", hp:100, status:"Fled north — riverbank",                alive:true },
  { id:"t24", name:"Mauve Plinth",       district:"District 12", hp:100, status:"Fled north — moving carefully",          alive:true },
];

export const SPONSOR_ITEMS = [
  { id:"food",      name:"Food Parcel",         desc:"Bread, dried fruit, high-calorie rations",          cost:15,  icon:"ti-bread" },
  { id:"water",     name:"Fresh Water",          desc:"Purified canteen, water purification tablets",       cost:10,  icon:"ti-droplet" },
  { id:"medicine",  name:"Medicine & Bandages",  desc:"Infection treatment, wound dressing, painkillers",  cost:25,  icon:"ti-first-aid-kit" },
  { id:"antidote",  name:"Antidote",             desc:"Counteracts poison, tracker jacker venom",          cost:35,  icon:"ti-flask" },
  { id:"knife",     name:"Combat Knife",         desc:"Standard-issue arena blade",                        cost:30,  icon:"ti-tool" },
  { id:"bow",       name:"Bow & Arrows",         desc:"Composite bow with 12 arrows",                      cost:50,  icon:"ti-arrow-up-right" },
  { id:"sword",     name:"Short Sword",          desc:"Capitol-forged arena blade",                        cost:55,  icon:"ti-sword" },
  { id:"trident",   name:"Trident",              desc:"Signature District 4 weapon",                       cost:75,  icon:"ti-git-branch" },
  { id:"axe",       name:"Throwing Axe",         desc:"Weighted for arena combat",                         cost:45,  icon:"ti-axe" },
  { id:"armor",     name:"Body Armor",           desc:"Lightweight Capitol-grade plating",                 cost:60,  icon:"ti-shield" },
  { id:"intel",     name:"Intelligence Report",  desc:"Rival tribute location & alliance data",            cost:20,  icon:"ti-eye" },
  { id:"camouflage",name:"Camouflage Kit",       desc:"Full-body paint and concealment materials",         cost:25,  icon:"ti-palette" },
  { id:"rope",      name:"Rope & Snare Kit",     desc:"Hunting snares, 30m climbing rope",                 cost:15,  icon:"ti-rotate-clockwise" },
  { id:"fire",      name:"Fire Kit",             desc:"Waterproof matches, flint, kindling",               cost:12,  icon:"ti-flame" },
  { id:"sleeping",  name:"Sleeping Bag",         desc:"Thermal insulation for cold arena nights",          cost:20,  icon:"ti-moon" },
  { id:"quell",     name:"Quell Advantage",      desc:"Special 100th Games twist — Gamemaker discretion", cost:100, icon:"ti-crown" },
];

export function getSession() {
  const s = sessionStorage.getItem('panem_session');
  return s ? JSON.parse(s) : null;
}

export function setSession(eliteId) {
  const elite = ELITES[eliteId];
  const session = { eliteId, name: elite.name, title: elite.title };
  sessionStorage.setItem('panem_session', JSON.stringify(session));
}

export function clearSession() {
  sessionStorage.removeItem('panem_session');
}

export function formatTime(ts) {
  if (!ts) return '';
  const d = new Date(ts);
  return d.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });
}

export function showToast(msg, type = 'gold') {
  const container = document.getElementById('toastContainer') || (() => {
    const c = document.createElement('div');
    c.id = 'toastContainer';
    c.className = 'toast-container';
    document.body.appendChild(c);
    return c;
  })();
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  container.appendChild(t);
  setTimeout(() => t.remove(), 4000);
}
