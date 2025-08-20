// Shared Header & Footer JavaScript
function initSharedComponents() {
    const headerHTML = `
    <div class="site-header-container">
        <!-- Logo -->
        <a href="home.html" class="site-logo">
            <img src="images/websiteLogo.png" alt="FoodieHub Logo">
        </a>

        <!-- Navigation -->
        <nav class="site-nav">
            <a href="index.html" class="site-nav-link">Home</a>
            <a href="foodList.html" class="site-nav-link">Food List</a>
            <a href="favorites.html" class="site-nav-link">Favorites</a>
        </nav>

        <!-- Right Controls -->
        <div class="site-header-actions">
            <a href="index.html" class="site-login" title="Login">
                <i class="fas fa-user-circle"></i>
            </a>
            <button class="site-mobile-toggle">☰</button>
        </div>
    </div>
    `;

    const footerHTML = `
    <div class="site-footer-container">
        <div class="site-footer-content">
            <div class="site-footer-section">
                <h3>About FoodieHub</h3>
                <p>Discover amazing local foods and hidden culinary gems in your area.</p>
            </div>
            <div class="site-footer-section">
                <h3>Quick Links</h3>
                <a href="index.html">Home</a><br>
                <a href="foodList.html">Food List</a><br>
                <a href="favorites.html">Favorites</a>
            </div>
            <div class="site-footer-section">
                <h3>Contact</h3>
                <p>Email: info@foodiehub.com</p>
                <p>Phone: (555) 123-4567</p>
            </div>
        </div>
        <div class="site-footer-bottom">
            <p>&copy; ${new Date().getFullYear()} FoodieHub. All rights reserved.</p>
        </div>
    </div>
    `;

    const header = document.querySelector('header');
    if (header) {
        header.className = 'site-header';
        header.innerHTML = headerHTML;
    }

    const footer = document.querySelector('footer');
    if (footer) {
        footer.className = 'site-footer';
        footer.innerHTML = footerHTML;
    }

    const mobileToggle = document.querySelector('.site-mobile-toggle');
    const siteNav = document.querySelector('.site-nav');
    if (mobileToggle && siteNav) {
        mobileToggle.addEventListener('click', function () {
            siteNav.classList.toggle('active');
        });
    }

    setActiveNavLink();
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.site-nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', initSharedComponents);