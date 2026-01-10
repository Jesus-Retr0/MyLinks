const data = {
    user: {
        name: "Jesus De La Paz",
        subtitle: "🚀 Software developer | Passionate about creating innovative tech! 💻✨",
        imageUrl: "./assets/avatar.png"
    },
    links: [
        { url: "https://jesus-retr0.github.io/Portfolio", name: "Portfolio", iconUrl: "./assets/file-earmark-fill.svg" },
        { url: "mailto:jesus_codes1@proton.me", name: "Email", iconUrl: "./assets/envelope.svg" },
        { url: "https://github.com/Jesus-Retr0", name: "GitHub", iconUrl: "https://github.githubassets.com/favicons/favicon-dark.png" },
        { url: "https://www.linkedin.com/in/jesus-de-la-paz/", name: "LinkedIn", iconUrl: "./assets/linkedin.svg" }

    ],
    // suggestedProjects is an array of objects (JSON-style). Edit this data to add/remove projects.
    suggestedProjects: [
        {
            "title": "Password Generator Vault",
            "url": "https://github.com/Jesus-Retr0/Password-Generator-Vault",
            "description": "A simple, secure, and offline password manager written in Go. Generate strong passwords and store them in an encrypted vault file on your computer. No internet required—your secrets stay private."
        },
        {
            "title": "Node Talk",
            "url": "https://file-server--jesus90.replit.app/",
            "description": "Node Talk is a Python-based client/server application designed for real-time communication between two users. It allows users to exchange messages. Try out this Node talk demo made with replit."
        },{
            "title": "Simple Home Inventory Tracker",
            "url": "https://github.com/Jesus-Retr0/Simple-Home-Inventory-Tracker",
            "description": "A simple PHP & MySQL web application to help you manage and track your home inventory"
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

    // Spotify
    const toggleButton = document.getElementById('toggle-button');
    const spotifyFrameContainer = document.querySelector('.spotify-frame');
    let isPlaylistVisible = false; // To track the visibility of the playlist
    let iframe; // Declare a variable to hold the iframe

    toggleButton.addEventListener('click', function() {
        if (isPlaylistVisible) {
            // Collapse the playlist
            spotifyFrameContainer.style.height = '0';  // Collapse height
            toggleButton.textContent = 'Show Playlist';
        } else {
            // Create the heading if it doesn't already exist
            if (!spotifyFrameContainer.querySelector('h2')) {
                const heading = document.createElement('h2');
                heading.textContent = 'Spotify Playlist';
                heading.style.color = '#ffffff'; // Match suggested projects heading color 
                heading.style.margin = '0 0 12px 0'; // Add some margin
                heading.style.textAlign = 'left'; // Align left
                spotifyFrameContainer.appendChild(heading);
            }

            // Create the iframe only if it doesn't already exist
            if (!iframe) {
                iframe = document.createElement('iframe');
                iframe.src = "https://open.spotify.com/embed/playlist/1ecoN9W6hztW6w0FafOjH8?utm_source=generator";
                iframe.width = "100%"; // Responsive width
                iframe.height = "380"; // Height of iframe
                iframe.frameBorder = "0";
                iframe.allow = "encrypted-media";
                spotifyFrameContainer.appendChild(iframe);
            }

            // Expand to show iframe
            spotifyFrameContainer.style.height = '380px'; // Expand height
            toggleButton.textContent = 'Hide Playlist';
        }
        isPlaylistVisible = !isPlaylistVisible; // Toggle state
    });




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
            link.textContent = p.url ? 'Visit Project' : '';

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
        footer.innerHTML = `<div class="footer-inner">&copy; ${year} Jesus De La Paz</div>`;
        // Insert footer after the main container so it sits below the content
        if (container && container.parentNode) container.parentNode.appendChild(footer);
        else document.body.appendChild(footer);
    })();
    renderSuggestedProjects(data.suggestedProjects);
});