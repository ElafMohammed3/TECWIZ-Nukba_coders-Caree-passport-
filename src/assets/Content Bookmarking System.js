 // ==================== Dummy Data for Content ====================
    const careersData = [
        {
            id: "career-001",
            type: "career",
            title: "Software Engineer",
            description: "Specializes in designing and developing software systems and applications. Requires programming and problem-solving skills.",
            image: "../src/assets/images/pexels-luis-gomes-166706-546819.jpg",
            url: "#software-engineer"
        },
        {
            id: "career-002",
            type: "video",
            title: "Video: Future of Tech Work",
            description: "Watch this video to understand job market trends in the tech field for the coming years.",
            image: "../src/assets/images/istockphoto-1187179171-612x612.jpg",
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: "career-003",
            type: "story",
            title: "Success Story: From Student to Entrepreneur",
            description: "How Ahmed built his startup through his passion for programming.",
            image: "../src/assets/images/pexels-geralt-21696.jpg",
            url: "#success-story"
        },
        {
            id: "career-004",
            type: "career",
            title: "Data Scientist",
            description: "Collects, analyzes, and interprets large datasets to find insights. Requires strong math and statistics skills.",
            image: "../src/assets/images/istockphoto-1321462048-612x612.jpg",
            url: "#data-scientist"
        },
        {
            id: "career-005",
            type: "career",
            title: "UI/UX Designer",
            description: "Designs the user interface (UI) and user experience (UX) of websites and applications. Focuses on aesthetics and usability.",
            image: "../src/assets/images/pexels-harold-vasquez-853421-2653362.jpg",
            url: "#ui-ux-designer"
        }
    ];

    // ==================== Bookmark Management System ====================
    const BOOKMARK_STORAGE_KEY = 'nextstep_bookmarks_v6';

    function initBookmarkSystem() {
        if (!localStorage.getItem(BOOKMARK_STORAGE_KEY)) {
            const initialData = {
                bookmarks: [],
                metadata: { version: "2.0", created: new Date().toISOString() },
                statistics: { totalAdded: 0, totalRemoved: 0, byType: {} }
            };
            localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify(initialData, null, 2));
        }
        renderContentCards();
        updateBookmarkCount();
        updateBookmarkButtons();
        setupNavigation();
    }

    function getBookmarkData() {
        try {
            return JSON.parse(localStorage.getItem(BOOKMARK_STORAGE_KEY)) || createInitialData();
        } catch (error) {
            console.error('Error reading data:', error);
            return createInitialData();
        }
    }

    function createInitialData() {
        return {
            bookmarks: [],
            metadata: { version: "2.0", created: new Date().toISOString() },
            statistics: { totalAdded: 0, totalRemoved: 0, byType: {} }
        };
    }

    function saveBookmarkData(data) {
        try {
            data.metadata.lastModified = new Date().toISOString();
            localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify(data, null, 2));
            return true;
        } catch (error) {
            showNotification('Error saving data', 'error');
            return false;
        }
    }

    // ==================== Rendering Content ====================
    function renderContentCards() {
        const container = document.getElementById('contentGrid');
        const cardsHtml = careersData.map(item => `
            <div class="content-card">
                <img src="${item.image}" alt="${item.title}" class="card-image">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="card-footer">
                    <span class="bookmark-type">${getTypeLabel(item.type)}</span>
                    <button class="bookmark-btn" data-id="${item.id}" data-type="${item.type}" 
                            data-title="${item.title}" data-url="${item.url}" data-image="${item.image}"
                            onclick="handleBookmarkClick(this)">
                        ♥ Save
                    </button>
                </div>
            </div>
        `).join('');
        container.innerHTML = cardsHtml;
        updateBookmarkButtons();
    }
    
    function handleBookmarkClick(button) {
        const id = button.getAttribute('data-id');
        const type = button.getAttribute('data-type');
        const title = button.getAttribute('data-title');
        const url = button.getAttribute('data-url');
        const image = button.getAttribute('data-image');
        
        const data = getBookmarkData();
        const existingBookmark = data.bookmarks.find(item => item.id === id);
        
        if (existingBookmark) {
            removeBookmark(id);
        } else {
            addBookmark(id, type, title, url, image);
        }
    }

    // ==================== File Upload System ====================
    function previewFile() {
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
        if (!file) {
            resetUploadForm();
            return;
        }
        
        const imagePreview = document.getElementById('imagePreview');
        const videoPreview = document.getElementById('videoPreview');
        const pdfPreview = document.getElementById('pdfPreview');
        
        imagePreview.style.display = 'none';
        videoPreview.style.display = 'none';
        pdfPreview.style.display = 'none';
        
        if (file.type.startsWith('image/')) {
            imagePreview.src = URL.createObjectURL(file);
            imagePreview.style.display = 'block';
        } else if (file.type.startsWith('video/')) {
            videoPreview.src = URL.createObjectURL(file);
            videoPreview.style.display = 'block';
        } else if (file.type === 'application/pdf') {
            pdfPreview.style.display = 'block';
            pdfPreview.innerHTML = `📄 ${file.name}<br><small>File size: ${(file.size / 1024 / 1024).toFixed(2)} MB</small>`;
        }
    }

    function uploadFile() {
        const fileInput = document.getElementById('fileInput');
        const titleInput = document.getElementById('fileTitle');
        const descriptionInput = document.getElementById('fileDescription');
        
        const file = fileInput.files[0];
        if (!file) {
            showNotification('Please select a file first', 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const fileType = file.type.startsWith('image/') ? 'image' : 
                             file.type.startsWith('video/') ? 'video' : 'pdf';
            
            const fileUrl = URL.createObjectURL(file);
            const fileData = {
                id: 'file-' + Date.now(),
                type: fileType,
                title: titleInput.value || file.name,
                description: descriptionInput.value,
                url: fileUrl,
                dataUrl: e.target.result // Use this for images/PDFs to save to localStorage
            };

            const data = getBookmarkData();
            data.bookmarks.unshift({
                ...fileData,
                timestamps: { created: new Date().toISOString(), lastModified: new Date().toISOString() },
                metadata: { favorite: false, tags: [] }
            });
            data.statistics.totalAdded++;
            data.statistics.byType[fileType] = (data.statistics.byType[fileType] || 0) + 1;
            
            if (saveBookmarkData(data)) {
                showNotification('File uploaded and added to bookmarks ✓', 'success');
                updateBookmarkCount();
                resetUploadForm();
            }
        };

        if (file.type.startsWith('image/') || file.type === 'application/pdf') {
            reader.readAsDataURL(file);
        } else if (file.type.startsWith('video/')) {
            // For videos, we only save the URL created by URL.createObjectURL
            const videoUrl = URL.createObjectURL(file);
            const fileData = {
                id: 'file-' + Date.now(),
                type: 'video',
                title: titleInput.value || file.name,
                description: descriptionInput.value,
                url: videoUrl
            };
            
            const data = getBookmarkData();
            data.bookmarks.unshift({
                ...fileData,
                timestamps: { created: new Date().toISOString(), lastModified: new Date().toISOString() },
                metadata: { favorite: false, tags: [] }
            });
            data.statistics.totalAdded++;
            data.statistics.byType.video = (data.statistics.byType.video || 0) + 1;
            
            if (saveBookmarkData(data)) {
                showNotification('Video uploaded and added to bookmarks ✓', 'success');
                updateBookmarkCount();
                resetUploadForm();
            }
        }
    }

    function resetUploadForm() {
        document.getElementById('uploadForm').reset();
        document.getElementById('imagePreview').style.display = 'none';
        document.getElementById('videoPreview').style.display = 'none';
        document.getElementById('pdfPreview').style.display = 'none';
        document.getElementById('fileInput').value = '';
    }

    // ==================== Basic Bookmark System ====================
    function addBookmark(itemId, itemType, itemTitle, itemUrl, itemImage = null) {
        const data = getBookmarkData();
        const existingBookmark = data.bookmarks.find(item => item.id === itemId);
        
        if (existingBookmark) {
            showNotification('This item is already bookmarked', 'warning');
            return false;
        }

        const newBookmark = {
            id: itemId,
            type: itemType,
            title: itemTitle,
            url: itemUrl,
            image: itemImage,
            notes: '',
            timestamps: { created: new Date().toISOString(), lastModified: new Date().toISOString() },
            metadata: { favorite: false, tags: [] }
        };

        data.bookmarks.unshift(newBookmark);
        data.statistics.totalAdded++;
        data.statistics.byType[itemType] = (data.statistics.byType[itemType] || 0) + 1;

        if (saveBookmarkData(data)) {
            showNotification('Added to bookmarks ✓', 'success');
            updateBookmarkCount();
            updateBookmarkButtons();
            return true;
        }
        return false;
    }

    function removeBookmark(itemId) {
        const data = getBookmarkData();
        const bookmarkIndex = data.bookmarks.findIndex(item => item.id === itemId);
        
        if (bookmarkIndex > -1) {
            const removedBookmark = data.bookmarks.splice(bookmarkIndex, 1)[0];
            data.statistics.totalRemoved++;
            data.statistics.byType[removedBookmark.type] = Math.max(0, data.statistics.byType[removedBookmark.type] - 1);
            
            if (saveBookmarkData(data)) {
                showNotification('Deleted successfully', 'success');
                updateBookmarkCount();
                updateBookmarkButtons();
                if (document.getElementById('bookmarksPage').style.display === 'block') {
                    displayAllBookmarks();
                }
                return true;
            }
        }
        return false;
    }

    function updateBookmarkNotes(itemId, newNotes) {
        const data = getBookmarkData();
        const bookmark = data.bookmarks.find(item => item.id === itemId);
        
        if (bookmark) {
            bookmark.notes = newNotes;
            bookmark.timestamps.lastModified = new Date().toISOString();
            if (saveBookmarkData(data)) {
                // No notification for every keystroke, let's keep it clean
            }
        }
    }
    
    let debounceTimeout = null;
    function debounce(func, wait) {
      if (debounceTimeout) clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(func, wait);
    }

    function displayAllBookmarks() {
        const container = document.getElementById('bookmarksList');
        const emptyState = document.getElementById('emptyState');
        const data = getBookmarkData();
        
        if (!data.bookmarks || data.bookmarks.length === 0) {
            container.innerHTML = '';
            emptyState.style.display = 'block';
            return;
        }
        
        emptyState.style.display = 'none';
        
        const bookmarksHtml = data.bookmarks.map(bookmark => `
            <div class="bookmark-card" data-id="${bookmark.id}">
                <div class="bookmark-header">
                    <h3 class="bookmark-title">${bookmark.title}</h3>
                    <div class="bookmark-actions">
                        <span class="bookmark-type">${getTypeLabel(bookmark.type)}</span>
                        <button class="btn btn-danger" onclick="removeBookmark('${bookmark.id}')" 
                                style="padding: 6px 12px; font-size: 12px;">
                            🗑 Delete
                        </button>
                    </div>
                </div>
                
                ${renderMediaForBookmark(bookmark)}
                
                <div class="bookmark-notes">
                    <textarea placeholder="Add your personal notes here..."
                                onblur="updateBookmarkNotes('${bookmark.id}', this.value)"
                                oninput="debounce(() => updateBookmarkNotes('${bookmark.id}', this.value), 500)">${bookmark.notes || ''}</textarea>
                </div>
                
                <div class="bookmark-footer">
                    <span class="bookmark-date">Added: ${formatDate(bookmark.timestamps.created)}</span>
                    ${bookmark.type === 'pdf' ? `
                       <a href="${bookmark.url}" class="btn btn-primary" target="_blank">
                           Open File
                       </a>
                    ` : `
                        <button class="btn btn-primary" onclick="window.location.href='${bookmark.url}'">
                            View Item
                        </button>
                    `}
                </div>
                
                <div class="social-share">
                    <button class="social-btn twitter" onclick="shareOnTwitter('${bookmark.title}', '${bookmark.url}')">
                        🐦 Twitter
                    </button>
                    <button class="social-btn facebook" onclick="shareOnFacebook('${bookmark.url}')">
                        📘 Facebook
                    </button>
                    <button class="social-btn linkedin" onclick="shareOnLinkedIn('${bookmark.title}', '${bookmark.url}')">
                        💼 LinkedIn
                    </button>
                </div>
            </div>
        `).join('');

        container.innerHTML = bookmarksHtml;
    }

    function renderMediaForBookmark(bookmark) {
        if (bookmark.type === 'image') {
            const source = bookmark.url || bookmark.dataUrl;
            return `<img src="${source}" alt="${bookmark.title}" class="uploaded-media">`;
        } else if (bookmark.type === 'video') {
            const source = bookmark.url || bookmark.dataUrl;
            return `
                <video controls class="uploaded-media">
                    <source src="${source}">
                </video>
            `;
        } else if (bookmark.type === 'pdf') {
            return `
                <div class="pdf-preview-card">
                    📄 ${bookmark.title}
                </div>
            `;
        }
        return '';
    }

    function getTypeLabel(type) {
        const labels = {
            'career': '💻 Career',
            'video': '🎥 Video',
            'story': '🌟 Success Story',
            'image': '🖼 Image',
            'pdf': '📄 PDF File'
        };
        return labels[type] || type;
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    function updateBookmarkCount() {
        const data = getBookmarkData();
        const count = data.bookmarks.length;
        document.querySelector('.bookmark-count').textContent = count;
    }

    function updateBookmarkButtons() {
        const data = getBookmarkData();
        const bookmarkIds = new Set(data.bookmarks.map(item => item.id));
        
        document.querySelectorAll('.bookmark-btn').forEach(btn => {
            const itemId = btn.getAttribute('data-id');
            if (bookmarkIds.has(itemId)) {
                btn.classList.add('added');
                btn.innerHTML = '✓ Saved';
            } else {
                btn.classList.remove('added');
                btn.innerHTML = '♥ Save';
            }
        });
    }

    function setupNavigation() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const page = this.getAttribute('data-page');
                showPage(page);
                
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    function showPage(pageName) {
        document.querySelectorAll('.page-content').forEach(page => {
            page.style.display = 'none';
        });
        
        if (pageName === 'home') {
            document.getElementById('homePage').style.display = 'block';
        } else if (pageName === 'bookmarks') {
            document.getElementById('bookmarksPage').style.display = 'block';
            displayAllBookmarks();
        } else if (pageName === 'upload') {
            document.getElementById('uploadPage').style.display = 'block';
            // We can optionally display uploaded files on this page too
        }
    }

    function clearAllBookmarks() {
        if (!confirm('Are you sure you want to delete all bookmarks? This action cannot be undone.')) return;
        
        const data = createInitialData(); // Reset to initial state
        if (saveBookmarkData(data)) {
            showNotification('All bookmarks have been deleted', 'success');
            updateBookmarkCount();
            updateBookmarkButtons();
            displayAllBookmarks();
        }
    }

    function exportBookmarks(format) {
        const data = getBookmarkData();
        if (data.bookmarks.length === 0) {
            showNotification('No bookmarks to export', 'warning');
            return;
        }

        if (format === 'json') {
            // Remove large dataURLs before exporting
            const exportableData = JSON.parse(JSON.stringify(data));
            exportableData.bookmarks = exportableData.bookmarks.map(bookmark => {
                if (bookmark.dataUrl) {
                    delete bookmark.dataUrl;
                }
                return bookmark;
            });

            const jsonStr = JSON.stringify(exportableData, null, 2);
            const blob = new Blob([jsonStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = `nextstep-bookmarks-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            showNotification('Bookmarks exported successfully', 'success');
        }
    }

    function shareOnTwitter(title, url) {
        const text = `Check out "${title}" via NextStep Navigator`;
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank');
    }

    function shareOnFacebook(url) {
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank');
    }

    function shareOnLinkedIn(title, url) {
        const text = `Check out "${title}" via NextStep Navigator`;
        const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(text)}`;
        window.open(shareUrl, '_blank');
    }

    function showNotification(message, type = 'info') {
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notif => notif.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        let icon = 'ℹ️';
        if (type === 'success') icon = '✅';
        if (type === 'error') icon = '❌';
        if (type === 'warning') icon = '⚠️';
        
        notification.innerHTML = `${icon} ${message}`;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideIn 0.3s ease reverse forwards';
                setTimeout(() => notification.remove(), 300);
            }
        }, 3000);
    }
    
    // Initial setup on page load
    document.addEventListener('DOMContentLoaded', initBookmarkSystem);