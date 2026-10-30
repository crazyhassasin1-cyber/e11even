// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if(hamburger){
  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
  });
}

// === YOUR EDITABLE NEWS SOURCE ===
const footballNews = [
  {
    id: 1,
    title: "BREAKING: Grealish Axed Over Discipline Breach",
    cat: "PITCH",
    link: "pitch.html#grealish",
    lead: "David Moyes confirms Grealish dropped for Everton's 3-1 Carabao Cup win over Newcastle"
  },
  {
    id: 2,
    title: "Liverpool 1-1 Chelsea [6-5 Pens]",
    cat: "PITCH",
    link: "pitch.html",
    lead: "Reds knock out Chelsea on penalties at Anfield"
  },
  {
    id: 3,
    title: "Man City 2-2 Brighton [4-3 Pens]",
    cat: "PITCH",
    link: "pitch.html",
    lead: "City through after shootout thriller"
  },
  {
    id: 4,
    title: "Bournemouth 3-0 Aston Villa",
    cat: "PITCH",
    link: "pitch.html",
    lead: "Statement win for Iraola at Vitality"
  }
];

// Homepage auto posts from footballNews
const grid = document.getElementById('blogGrid');
if(grid){
    grid.innerHTML = "";
    footballNews.forEach(p => {
        grid.innerHTML += `
        <article class="post" onclick="window.location.href='${p.link}'" style="cursor:pointer;">
          <h3>${p.title}</h3>
          <p>${p.lead}</p>
          <span style="color:#00ff88; font-size:11px; font-weight:700;">${p.cat} - Read More →</span>
        </article>`;
    });
    grid.innerHTML += `
      <article class="post" onclick="window.location.href='court.html'" style="cursor:pointer;">
        <h3>LeBron's Final Season?</h3><p>NBA update</p><span style="color:#00ff88; font-size:11px;">COURT →</span>
      </article>
      <article class="post" onclick="window.location.href='tennis.html'" style="cursor:pointer;">
        <h3>Alcaraz vs Sinner Rivalry</h3><p>Tennis</p><span style="color:#00ff88; font-size:11px;">TENNIS →</span>
      </article>
    `;
}

// Toggle functions for pitch.html
function toggleStory(id, btn){
    const el = document.getElementById(id);
    if(!el) return;
    el.classList.toggle('show');
    const isOpen = el.classList.contains('show');
    if(id === 'grealishStory'){
        btn.textContent = isOpen ? 'Hide Updates ↑' : 'Follow Live Updates →';
    } else {
        btn.textContent = isOpen ? 'Hide Full Story ↑' : 'Read Full Story ↓';
    }
    if(isOpen) el.scrollIntoView({behavior:'smooth', block:'start'});
}

function toggleMatch(id){
    const el = document.getElementById(id);
    if(!el) return;
    document.querySelectorAll('.match-detail').forEach(m => { 
        if(m.id !== id) m.classList.remove('show'); 
    });
    el.classList.toggle('show');
    if(el.classList.contains('show')) el.scrollIntoView({behavior:'smooth', block:'center'});
}

console.log("E11EVEN Loaded - Grealish story integrated");