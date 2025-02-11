// frontend/script.js
document.addEventListener('DOMContentLoaded', () => {
    const articlesContainer = document.getElementById('articles-container');
    const addArticleBtn = document.getElementById('add-article-btn');

    // Fetch articles from the backend
    async function fetchArticles() {
        const response = await fetch('http://localhost:5000/api/articles');
        const articles = await response.json();
        articles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.innerHTML = `<h3>${article.title}</h3><img src="${article.image}" alt="${article.title}"><p>${article.content}</p>`;
            articlesContainer.appendChild(articleDiv);
        });
    }

    // Add new article functionality
    addArticleBtn.addEventListener('click', () => {
        const title = prompt("Enter article title:");
        const content = prompt("Enter article content:");
        const image = prompt("Enter image URL:");

        if (title && content && image) {
            fetch('http://localhost:5000/api/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, content, image })
            }).then(() => {
                articlesContainer.innerHTML = ''; // Clear current articles
                fetchArticles(); // Fetch updated articles
            });
        }
    });

    fetchArticles(); // Initial fetch
});