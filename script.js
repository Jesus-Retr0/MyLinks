const data = {
    user: {
        name: "Jesus De La Paz",
        subtitle: "🚀 Software developer | Passionate about creating innovative tech! 💻✨",
        imageUrl: "./assets/avatar.png"
    },
    links: [
        { url: "https://jesus-retr0.github.io/Portfolio", name: "Portfolio", iconUrl: "./assets/file-earmark-fill.svg" },
        { url: "https://github.com/Jesus-Retr0", name: "GitHub", iconUrl: "https://github.githubassets.com/favicons/favicon-dark.png" }
    ],
    // suggestedProjects is an array of objects (JSON-style). Edit this data to add/remove projects.
    suggestedProjects: [
        {
            "title": "Password Generator Vault",
            "url": "https://github.com/Jesus-Retr0/Password-Generator-Vault",
            "description": "A simple, secure, and offline password manager written in Go. Generate strong passwords and store them in an encrypted vault file on your computer. No internet required—your secrets stay private."
        },
        {
            "title": "Markdown based Journal App",
            "url": "https://github.com/Jesus-Retr0/Markdown-based-Journal-App",
            "description": "A clean, journal app built with Electron and Javascript. Write and save journal entries in Markdown format - all stored as simple '.md' files on your machine."
        }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const userNameElement = document.querySelector('.user-name');
    const userSubtitleElement = document.querySelector('.user-subtitle');
    const userImageElement = document.querySelector('.user-image');
    const linksContainer = document.querySelector('.links');
    const suggestedProjectsContainer = document.querySelector('.suggested-projects');

    // Populate user data
    if (userNameElement) userNameElement.textContent = data.user.name;
    if (userSubtitleElement && data.user.subtitle) userSubtitleElement.textContent = data.user.subtitle;
    if (userImageElement) userImageElement.src = data.user.imageUrl;

    // Populate links
    if (linksContainer && Array.isArray(data.links)) {
        data.links.forEach(link => {
            const linkItem = document.createElement('a');
            linkItem.className = 'link-item';
            linkItem.href = link.url;
            linkItem.target = '_blank';
            linkItem.rel = 'noopener';
            linkItem.innerHTML = `<img src="${link.iconUrl}" alt="${link.name} icon">${link.name}`;
            linksContainer.appendChild(linkItem);
        });
    }

    // Populate suggested projects dynamically from the JSON data
    function renderSuggestedProjects(projects) {
        if (!suggestedProjectsContainer) return;

        if (!projects || projects.length === 0) {
            suggestedProjectsContainer.style.display = 'none';
            return;
        }

        suggestedProjectsContainer.innerHTML = '';

        const heading = document.createElement('h2');
        heading.textContent = 'Suggested Projects';
        suggestedProjectsContainer.appendChild(heading);

        const grid = document.createElement('div');
        grid.className = 'projects-grid';

        projects.forEach(p => {
            const card = document.createElement('div');
            card.className = 'project-card';

            const title = document.createElement('h3');
            title.className = 'project-title';
            title.textContent = p.title || 'Untitled Project';

            const desc = document.createElement('p');
            desc.className = 'project-desc';
            if (p.description) desc.textContent = p.description;

            const link = document.createElement('a');
            link.className = 'project-link';
            link.href = p.url || '#';
            link.target = '_blank';
            link.rel = 'noopener';
            link.textContent = p.url ? 'Visit Project' : 'No link available';

            card.appendChild(title);
            if (p.description) card.appendChild(desc);
            card.appendChild(link);

            grid.appendChild(card);
        });

        suggestedProjectsContainer.appendChild(grid);
    }

    // Add a footer with the current year
    (function addFooter() {
        const container = document.querySelector('.container');
        const footer = document.createElement('footer');
        footer.className = 'site-footer';
        const year = new Date().getFullYear();
        footer.innerHTML = `<div class="footer-inner">&copy; ${year} Jesus de la Paz</div>`;
        // Insert footer after the main container so it sits below the content
        if (container && container.parentNode) container.parentNode.appendChild(footer);
        else document.body.appendChild(footer);
    })();
    renderSuggestedProjects(data.suggestedProjects);
});