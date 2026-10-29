// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if(hamburger){
  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
  });
}

// === YOUR EDITABLE NEWS SOURCE ===
// Edit this array only - everything else auto-updates
const footballNews = [
  {
    id: 1,
    title: "Liverpool 1-1 Chelsea [6-5 Pens]",
    cat: "PITCH",
    link: "pitch.html",
    lead: "Reds knock out Chelsea on penalties at Anfield"
  },
  {
    id: 2,
    title: "Man City 2-2 Brighton [4-3 Pens]",
    cat: "PITCH",
    link: "pitch.html",
    lead: "City through after shootout thriller"
  },
  {
    id: 3,
    title: "Arsenal vs Aston Villa Tonight 19:45",
    cat: "PITCH",
    link: "pitch.html",
    lead: "Preview - Emirates showdown"
  }
];

// Dynamic posts for homepage - NOW AUTO FROM footballNews
const grid = document.getElementById('blogGrid');
if(grid){
    grid.innerHTML = ""; // clear old
    footballNews.forEach(p => {
        grid.innerHTML += `
        <article class="post" onclick="window.location.href='${p.link}'" style="cursor:pointer;">
          <h3>${p.title}</h3>
          <p>${p.lead}</p>
          <span style="color:#00ff88; font-size:11px; font-weight:700;">${p.cat} - Read More →</span>
        </article>`;
    });
    
    // Keep your other categories too
    grid.innerHTML += `
      <article class="post" onclick="window.location.href='court.html'" style="cursor:pointer;">
        <h3>LeBron's Final Season?</h3><p>NBA update</p><span style="color:#00ff88; font-size:11px;">COURT →</span>
      </article>
      <article class="post" onclick="window.location.href='tennis.html'" style="cursor:pointer;">
        <h3>Alcaraz vs Sinner Rivalry</h3><p>Tennis</p><span style="color:#00ff88; font-size:11px;">TENNIS →</span>
      </article>
    `;
}

// For pitch.html full story page
const newsContainer = document.getElementById('newsContainer');
if(newsContainer && typeof fullFootballStories !== 'undefined'){
    fullFootballStories.forEach(n => {
        newsContainer.innerHTML += `
        <section class="news-section">
            <div class="article-content" onclick="openStory(${n.id})" style="cursor:pointer;">
                <span style="background:${n.badgeColor}; color:#000; padding:4px 10px; border-radius:12px; font-size:9px; font-weight:800;">${n.badge}</span>
                <h2 style="margin-top:12px; font-family:Impact,sans-serif;">${n.title}</h2>
                <p class="lead">${n.lead}</p>
                <figure><img src="${n.image}" class="news-img"><figcaption>${n.caption}</figcaption></figure>
                <span style="color:#00ff88; font-size:11px; font-weight:700;">Tap to read full story →</span>
            </div>
        </section>`;
    });
}

function openStory(id){
  const box = document.getElementById('fullStoryBox');
  const content = document.getElementById('fullStoryContent');
  if(!box || !content) return;
  const n = fullFootballStories.find(x => x.id === id);
  content.innerHTML = `<h1 style="font-family:Impact,sans-serif;">${n.title}</h1><p>${n.fullStory}</p>`;
  box.style.display = 'block';
}
function closeStory(){
  document.getElementById('fullStoryBox').style.display = 'none';
}

console.log("E11EVEN Loaded Successfully - Update footballNews array to change news");function toggleMatch(id){
    const el = document.getElementById(id);
    // close others
    document.querySelectorAll('.full-story').forEach(e => { if(e.id !== id && e.id.startsWith('match')) e.style.display='none'; });
    if(el.style.display === 'none' || el.style.display === ''){
        el.style.display = 'block';
        el.scrollIntoView({behavior:'smooth', block:'center'});
    } else {
        el.style.display = 'none';
    }
}