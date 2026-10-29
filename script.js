// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Dynamic posts for homepage
const posts = [
    { title: "EPL Matchday 11 Review", cat: "PITCH", link: "pitch.html" },
    { title: "LeBron's Final Season?", cat: "COURT", link: "court.html" },
    { title: "Tennis: Alcaraz vs Sinner Rivalry", cat: "TENNIS", link: "tennis.html" }
];

const grid = document.getElementById('blogGrid');
if(grid){
    posts.forEach(p => {
        grid.innerHTML += `<article class="post"><h3>${p.title}</h3><p>Read full story on ${p.cat}</p><a href="${p.link}" style="color:#00ff88;">Read More →</a></article>`;
    });
}

console.log("E11EVEN Loaded Successfully");