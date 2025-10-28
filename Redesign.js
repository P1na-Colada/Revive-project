class DesignStudio {
    constructor() {
        this.currentElement = null;
        this.selectedColor = '#1A2940';
        this.selectedSize = 'medium';
        this.currentGarment = 'tshirt';
        this.currentGarmentImage = '';
        this.elements = [];
        this.elementCount = 0;
        this.history = [];
        this.historyIndex = -1;
        this.isAddingElement = false;
        this.currentKnittedCategory = 'all';
        this.selectedGarmentSize = 'm';
        this.selectedTexture = 'none';
       
        this.garmentImages = {
    tshirt: [
        { name: 'STYLE 1', url: 'redesign_tanktops/photo_2025-10-25_07-55-07.jpg' },
        { name: 'STYLE 2', url: 'redesign_tanktops/photo_2025-10-25_07-55-08.jpg' },
        { name: 'STYLE 3', url: 'redesign_tanktops/photo_2025-10-25_07-55-10.jpg' },
        { name: 'STYLE 4', url: 'redesign_tanktops/photo_2025-10-25_07-55-12.jpg' },
        { name: 'STYLE 5', url: 'redesign_tanktops/photo_2025-10-25_07-55-13.jpg' },
        { name: 'STYLE 6', url: 'redesign_tanktops/photo_2025-10-25_07-55-17.jpg' },
        { name: 'STYLE 7', url: 'redesign_tanktops/photo_2025-10-25_08-24-41.jpg' },
        { name: 'STYLE 8', url: 'redesign_tanktops/photo_2025-10-25_08-24-42.jpg' }
    ],
    pants: [
        { name: 'STYLE 1', url: 'redesign_pants/photo_2025-10-23_21-14-08.jpg' },
        { name: 'STYLE 2', url: 'redesign_pants/photo_2025-10-23_21-14-09.jpg' },
        { name: 'STYLE 3', url: 'redesign_pants/photo_2025-10-23_21-14-11.jpg' },
        { name: 'STYLE 4', url: 'redesign_pants/photo_2025-10-23_21-14-12.jpg' }
    ],
    dress: [
        { name: 'STYLE 1', url: 'redesign_dresses/photo_2025-10-24_15-56-42.jpg' },
        { name: 'STYLE 2', url: 'redesign_dresses/photo_2025-10-24_15-56-45.jpg' },
        { name: 'STYLE 3', url: 'redesign_dresses/photo_2025-10-24_15-56-54.jpg' },
        { name: 'STYLE 4', url: 'redesign_dresses/photo_2025-10-24_15-56-48.jpg' },
        { name: 'STYLE 5', url: 'redesign_dresses/photo_2025-10-24_15-56-56.jpg' }
    ],
    longsleeve: [
        { name: 'STYLE 1', url: 'redesign_tshirts/redesign_tanktops/photo_2025-10-24_16-01-11.jpg' },
        { name: 'STYLE 2', url: 'redesign_tshirts/redesign_tanktops/photo_2025-10-24_16-01-13.jpg' },
        { name: 'STYLE 3', url: 'redesign_tshirts/redesign_tanktops/photo_2025-10-24_16-01-15.jpg' },
        { name: 'STYLE 4', url: 'redesign_tshirts/redesign_tanktops/photo_2025-10-24_16-01-17.jpg' },
        { name: 'STYLE 5', url: 'redesign_tshirts/redesign_tanktops/photo_2025-10-24_16-01-18.jpg' },
        { name: 'STYLE 6', url: 'redesign_tshirts/redesign_tanktops/photo_2025-10-24_16-01-20.jpg' },
        { name: 'STYLE 7', url: 'redesign_tshirts/redesign_tanktops/photo_2025-10-24_16-01-22.jpg' },
        { name: 'STYLE 8', url: 'redesign_tshirts/redesign_tanktops/photo_2025-10-24_16-01-23.jpg' },
        { name: 'STYLE 9', url: 'redesign_tshirts/redesign_tanktops/photo_2025-10-24_16-01-26.jpg' }
    ],
    coat: [
        { name: 'STYLE 1', url: 'redesign_coats/photo_2025-10-25_07-54-42.jpg' },
        { name: 'STYLE 2', url: 'redesign_coats/photo_2025-10-25_07-54-43.jpg' },
        { name: 'STYLE 3', url: 'redesign_coats/photo_2025-10-25_07-54-45.jpg' },
        { name: 'STYLE 4', url: 'redesign_coats/photo_2025-10-25_07-54-47.jpg' },
        { name: 'STYLE 5', url: 'redesign_coats/photo_2025-10-25_07-54-49.jpg' },
        { name: 'STYLE 6', url: 'redesign_coats/photo_2025-10-25_07-54-52.jpg' }
    ],
    shorts: [
        { name: 'STYLE 1', url: 'redesign_shorts/photo_2025-10-25_08-05-41.jpg' },
        { name: 'STYLE 2', url: 'redesign_shorts/photo_2025-10-25_08-05-43.jpg' },
        { name: 'STYLE 3', url: 'redesign_shorts/photo_2025-10-25_08-05-44.jpg' },
        { name: 'STYLE 4', url: 'redesign_shorts/photo_2025-10-25_08-05-46.jpg' }
    ],
    accessories: [
        { name: 'STYLE 1', url: 'redesign_accessories/photo_2025-10-25_08-04-01.jpg' },
        { name: 'STYLE 2', url: 'redesign_accessories/photo_2025-10-25_08-04-03.jpg' },
        { name: 'STYLE 3', url: 'redesign_accessories/photo_2025-10-25_08-04-04.jpg' },
        { name: 'STYLE 4', url: 'redesign_accessories/photo_2025-10-25_08-04-11.jpg' },
        { name: 'STYLE 5', url: 'redesign_accessories/photo_2025-10-25_08-04-14.jpg' },
        { name: 'STYLE 6', url: 'redesign_accessories/photo_2025-10-25_08-04-20.jpg' }
    ],
    hat: [
        { name: 'STYLE 1', url: 'redesign_hats/photo_2025-10-25_08-05-00.jpg' },
        { name: 'STYLE 2', url: 'redesign_hats/photo_2025-10-25_08-05-06.jpg' },
        { name: 'STYLE 3', url: 'redesign_hats/photo_2025-10-25_08-05-09.jpg' },
        { name: 'STYLE 4', url: 'redesign_hats/photo_2025-10-25_08-05-12.jpg' }
    ],
    skirt: [
        { name: 'STYLE 1', url: 'redesign_skirts/photo_2025-10-25_07-56-54.jpg' },
        { name: 'STYLE 2', url: 'redesign_skirts/photo_2025-10-25_07-56-55.jpg' },
        { name: 'STYLE 3', url: 'redesign_skirts/photo_2025-10-25_07-56-57.jpg' },
        { name: 'STYLE 4', url: 'redesign_skirts/photo_2025-10-25_07-56-59.jpg' },
        { name: 'STYLE 5', url: 'redesign_skirts/photo_2025-10-25_07-57-00.jpg' },
        { name: 'STYLE 6', url: 'redesign_skirts/photo_2025-10-25_07-57-03.jpg' }
    ]
};

        this.knittedElements = [
            { type: 'rose', name: 'Knitted Rose', icon: '🌹', category: 'floral' },
            { type: 'tulip', name: 'Tulip Flower', icon: '🌷', category: 'floral' },
            { type: 'daisy', name: 'Daisy Flower', icon: '🌼', category: 'floral' },
            { type: 'lily', name: 'Lily Flower', icon: '🌸', category: 'floral' },
            { type: 'leaf', name: '3D Leaf', icon: '🍃', category: 'floral' },
            { type: 'vine', name: 'Leafy Vine', icon: '🌿', category: 'floral' },
            { type: 'butterfly', name: 'Knitted Butterfly', icon: '🦋', category: 'floral' },
            { type: 'mushroom', name: 'Mushroom Motif', icon: '🍄', category: 'floral' },
            { type: 'acorn', name: 'Acorn Motif', icon: '🌰', category: 'floral' },
            { type: 'bobble', name: 'Bobble Stitch', icon: '🔘', category: 'textured' },
            { type: 'popcorn', name: 'Popcorn Stitch', icon: '🍿', category: 'textured' },
            { type: 'ruffle', name: 'Knitted Ruffle', icon: '💫', category: 'textured' },
            { type: 'pompom', name: 'Pompom', icon: '⚪', category: 'textured' },
            { type: 'tassel', name: 'Tassel', icon: '🧶', category: 'textured' },
            { type: 'cable', name: 'Cable Knit', icon: '🌀', category: 'textured' },
            { type: 'heart', name: '3D Heart', icon: '💖', category: 'textured' },
            { type: 'star', name: '3D Star', icon: '⭐', category: 'textured' },
            { type: 'bow', name: 'Knitted Bow', icon: '🎀', category: 'textured' },
            { type: 'beaded', name: 'Beaded Knit', icon: '💎', category: 'mixed' },
            { type: 'sequin', name: 'Sequin Accent', icon: '✨', category: 'mixed' },
            { type: 'ribbon', name: 'Ribbon Weave', icon: '🎗️', category: 'mixed' },
            { type: 'lace', name: 'Lace Insert', icon: '⚜️', category: 'mixed' },
            { type: 'button', name: 'Decorative Button', icon: '🔘', category: 'mixed' },
            { type: 'mirror', name: 'Mirror Inlay', icon: '🔮', category: 'mixed' },
            { type: 'fairisle', name: 'Fair Isle Pattern', icon: '❄️', category: 'pattern' },
            { type: 'ombre', name: 'Ombre Gradient', icon: '🌈', category: 'pattern' },
            { type: 'zigzag', name: 'Zigzag Pattern', icon: '〰️', category: 'pattern' },
            { type: 'stripe', name: 'Color Stripe', icon: '➖', category: 'pattern' },
            { type: 'geometric', name: 'Geometric', icon: '🔷', category: 'pattern' },
            { type: 'chevron', name: 'Chevron Pattern', icon: '🔻', category: 'pattern' },
            { type: 'mosaic', name: 'Mosaic Pattern', icon: '🧩', category: 'pattern' },
            { type: 'mandala', name: 'Mandala', icon: '☸️', category: 'thematic' },
            { type: 'initial', name: 'Initial Monogram', icon: '🔤', category: 'thematic' },
            { type: 'zodiac', name: 'Zodiac Sign', icon: '♈', category: 'thematic' },
            { type: 'folk', name: 'Folk Motif', icon: '🏵️', category: 'thematic' },
            { type: 'cloud', name: 'Cloud Motif', icon: '☁️', category: 'thematic' },
            { type: 'fruit', name: 'Fruit Motif', icon: '🍓', category: 'thematic' },
            { type: 'animal', name: 'Animal Motif', icon: '🐾', category: 'thematic' }
        ];

        this.initializeAll();
    }

    initializeAll() {
        this.initializeEventListeners();
        this.initializeColorPicker();
        this.initializeSizeControls();
        this.initializeGarmentSelection();
        this.initializeGallery();
        this.initializeKnittedModal();
        this.initializeFilters();
        this.initializeUploadHandlers();
        this.initializeUndoRedo();
        this.updateGarmentPreview();
        this.updateUndoRedoButtons();
        this.saveState();
    }

    initializeEventListeners() {
        // Element selection
        document.getElementById('elements-grid').addEventListener('click', (e) => {
            const elementItem = e.target.closest('.element-item');
            if (elementItem) {
                this.selectElementType(elementItem);
                this.isAddingElement = true;
            }
        });

        // Canvas click for adding elements
        document.getElementById('garment-preview').addEventListener('click', (e) => {
            if (this.isAddingElement && this.currentElement) {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                this.addElementToCanvas(x, y);
                this.isAddingElement = false;
            }
        });

        // Clear button
        document.getElementById('clear-btn').addEventListener('click', () => {
            this.clearCanvas();
        });

        // Upload button
        document.getElementById('upload-btn').addEventListener('click', () => {
            this.uploadDesign();
        });

        // Element selection on canvas
        document.addEventListener('click', (e) => {
            if (e.target.closest('.design-element')) {
                const element = e.target.closest('.design-element');
                this.selectCanvasElement(element);
            }
        });
    }

    initializeColorPicker() {
        const colorPicker = document.getElementById('color-picker');
        const selectedColorPreview = document.getElementById('selected-color-preview');
        const colorHexValue = document.getElementById('color-hex-value');
        const colorPresets = document.querySelectorAll('.color-preset');
        
        colorPicker.addEventListener('input', (e) => {
            const color = e.target.value;
            selectedColorPreview.style.background = color;
            colorHexValue.textContent = color.toUpperCase();
            this.updateActiveColor(color);
            this.applyColorToSelectedElement(color);
        });
        
        colorPresets.forEach(preset => {
            preset.addEventListener('click', () => {
                const color = preset.getAttribute('data-color');
                colorPicker.value = color;
                selectedColorPreview.style.background = color;
                colorHexValue.textContent = color.toUpperCase();
                this.updateActiveColor(color);
                this.applyColorToSelectedElement(color);
            });
        });
        
        colorHexValue.addEventListener('click', function() {
            navigator.clipboard.writeText(this.textContent).then(() => {
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 1000);
            });
        });
    }

    updateActiveColor(color) {
        document.querySelectorAll('.color-preset').forEach(preset => {
            preset.classList.remove('active');
        });
        
        const matchingPreset = document.querySelector(`.color-preset[data-color="${color}"]`);
        if (matchingPreset) {
            matchingPreset.classList.add('active');
        }
    }

    applyColorToSelectedElement(color) {
        const selectedElement = document.querySelector('.design-element.selected');
        if (selectedElement) {
            selectedElement.style.color = color;
            selectedElement.style.backgroundColor = color;
            document.getElementById('current-element').textContent = 
                `${selectedElement.dataset.type} (${color})`;
        }
    }

    initializeUploadHandlers() {
        // Photo upload
        document.querySelector('[data-type="upload-photo"]').addEventListener('click', () => {
            document.getElementById('photo-upload').click();
        });

        document.getElementById('photo-upload').addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                this.addImageToCanvas(imageUrl, 'uploaded-photo');
                document.getElementById('current-element').textContent = 'Uploaded Photo';
            }
        });

        // Accessories upload
        document.querySelector('[data-type="accessories"]').addEventListener('click', () => {
            document.getElementById('accessories-upload').click();
        });

        document.getElementById('accessories-upload').addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                this.addImageToCanvas(imageUrl, 'accessory');
                document.getElementById('current-element').textContent = 'Accessory';
            }
        });
    }

    addImageToCanvas(imageUrl, elementType = 'uploaded-photo') {
        const canvas = document.getElementById('garment-preview');
        const img = document.createElement('img');
        img.src = imageUrl;
        img.className = 'design-element';
        img.style.position = 'absolute';
        img.style.maxWidth = '80%';
        img.style.maxHeight = '80%';
        img.style.cursor = 'move';
        img.style.left = '50%';
        img.style.top = '50%';
        img.style.transform = 'translate(-50%, -50%)';
        img.draggable = true;
        img.setAttribute('data-type', elementType);
        
        this.makeDraggable(img);
        canvas.appendChild(img);
        this.saveState();
    }

    initializeUndoRedo() {
        document.getElementById('undo-btn').addEventListener('click', () => {
            this.undo();
        });

        document.getElementById('redo-btn').addEventListener('click', () => {
            this.redo();
        });
    }

    initializeFilters() {
        // Material filters
        document.getElementById('material-filters').addEventListener('click', (e) => {
            const option = e.target.closest('.filter-option');
            if (option) {
                document.querySelectorAll('#material-filters .filter-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                option.classList.add('active');
                this.applyFilters();
            }
        });

        // Price filters
        document.getElementById('price-filters').addEventListener('click', (e) => {
            const option = e.target.closest('.filter-option');
            if (option) {
                document.querySelectorAll('#price-filters .filter-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                option.classList.add('active');
                this.applyFilters();
            }
        });

        // Sort select
        document.getElementById('sort-select').addEventListener('change', () => {
            this.applyFilters();
        });

        // Garment size controls
        document.querySelectorAll('.garment-size-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectGarmentSize(e.target);
            });
        });

        // Textural controls
        document.querySelectorAll('.textural-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectTexture(e.target);
            });
        });
    }

    selectGarmentSize(sizeBtn) {
        document.querySelectorAll('.garment-size-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        sizeBtn.classList.add('active');
        this.selectedGarmentSize = sizeBtn.dataset.garmentSize;
        document.getElementById('selected-garment-size').textContent = this.selectedGarmentSize.toUpperCase();
        this.saveState();
    }

    selectTexture(textureBtn) {
        document.querySelectorAll('.textural-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        textureBtn.classList.add('active');
        this.selectedTexture = textureBtn.dataset.texture;
        document.getElementById('selected-texture').textContent = this.formatTextureName(this.selectedTexture);
        this.saveState();
    }

    formatTextureName(texture) {
        return texture.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    applyFilters() {
        const material = document.querySelector('#material-filters .filter-option.active').dataset.material;
        const price = document.querySelector('#price-filters .filter-option.active').dataset.price;
        const sort = document.getElementById('sort-select').value;
        
        console.log('Applying filters:', { material, price, sort });
    }

    initializeGarmentSelection() {
        document.getElementById('garment-selection').addEventListener('click', (e) => {
            const garmentItem = e.target.closest('.garment-item');
            if (garmentItem && !e.target.classList.contains('gallery-btn')) {
                this.selectGarment(garmentItem);
            }
        });
    }

    initializeGallery() {
        document.querySelectorAll('.gallery-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const garmentType = btn.dataset.type;
                this.openGallery(garmentType);
            });
        });

        document.getElementById('close-gallery').addEventListener('click', () => {
            this.closeGallery();
        });

        document.getElementById('gallery-modal').addEventListener('click', (e) => {
            if (e.target.id === 'gallery-modal') {
                this.closeGallery();
            }
        });
    }

    initializeKnittedModal() {
        document.getElementById('knitted-btn').addEventListener('click', () => {
            this.openKnittedModal();
        });

        document.getElementById('close-knitted').addEventListener('click', () => {
            this.closeKnittedModal();
        });

        document.getElementById('knitted-modal').addEventListener('click', (e) => {
            if (e.target.id === 'knitted-modal') {
                this.closeKnittedModal();
            }
        });
    }

    openKnittedModal() {
        const modal = document.getElementById('knitted-modal');
        const categoriesContainer = document.getElementById('knitted-categories');
        const grid = document.getElementById('knitted-grid');
        
        const categories = ['all', 'floral', 'textured', 'mixed', 'pattern', 'thematic'];
        const categoryNames = {
            'all': 'All Elements',
            'floral': 'Floral & Nature',
            'textured': '3D & Textured',
            'mixed': 'Mixed Materials',
            'pattern': 'Patterns',
            'thematic': 'Thematic'
        };
        
        categoriesContainer.innerHTML = '';
        categories.forEach(category => {
            const categoryBtn = document.createElement('button');
            categoryBtn.className = `category-btn ${category === this.currentKnittedCategory ? 'active' : ''}`;
            categoryBtn.textContent = categoryNames[category];
            categoryBtn.dataset.category = category;
            
            categoryBtn.addEventListener('click', () => {
                this.filterKnittedElements(category);
            });
            
            categoriesContainer.appendChild(categoryBtn);
        });
        
        this.populateKnittedGrid();
        modal.classList.add('active');
    }

    filterKnittedElements(category) {
        this.currentKnittedCategory = category;
        
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });
        
        this.populateKnittedGrid();
    }

    populateKnittedGrid() {
        const grid = document.getElementById('knitted-grid');
        grid.innerHTML = '';
        
        const filteredElements = this.currentKnittedCategory === 'all' 
            ? this.knittedElements 
            : this.knittedElements.filter(el => el.category === this.currentKnittedCategory);
        
        filteredElements.forEach(element => {
            const knittedItem = document.createElement('div');
            knittedItem.className = 'knitted-item';
            knittedItem.dataset.type = element.type;
            knittedItem.dataset.icon = element.icon;
            knittedItem.innerHTML = `
                <div class="knitted-icon">${element.icon}</div>
                <div class="knitted-name">${element.name}</div>
            `;
            
            knittedItem.addEventListener('click', () => {
                this.selectKnittedElement(element);
                this.closeKnittedModal();
            });
            
            grid.appendChild(knittedItem);
        });
    }

    closeKnittedModal() {
        document.getElementById('knitted-modal').classList.remove('active');
    }

    selectKnittedElement(element) {
        this.currentElement = {
            type: element.type,
            icon: element.icon
        };

        document.getElementById('current-element').textContent = `Selected: ${element.name}`;
        this.isAddingElement = true;
    }

    openGallery(garmentType) {
        const modal = document.getElementById('gallery-modal');
        const title = document.getElementById('gallery-title');
        const grid = document.getElementById('gallery-grid');
        
        const garmentName = document.querySelector(`[data-type="${garmentType}"] .garment-name`).textContent;
        title.textContent = `Select ${garmentName} Style`;
        
        grid.innerHTML = '';
        
        if (this.garmentImages[garmentType]) {
            this.garmentImages[garmentType].forEach((image) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.innerHTML = `
                    <img src="${image.url}" alt="${image.name}" class="gallery-image">
                    <div class="gallery-name">${image.name}</div>
                `;
                
                galleryItem.addEventListener('click', () => {
                    this.selectGarmentImage(garmentType, image.url, image.name);
                    this.closeGallery();
                });
                
                grid.appendChild(galleryItem);
            });
        }
        
        modal.classList.add('active');
    }

    closeGallery() {
        document.getElementById('gallery-modal').classList.remove('active');
    }

    selectGarmentImage(garmentType, imageUrl, imageName) {
        this.currentGarmentImage = imageUrl;
        const background = document.getElementById('garment-background');
        background.src = imageUrl;
        background.style.display = 'block';
        
        document.getElementById('current-garment').textContent = imageName;
        this.saveState();
    }

    selectGarment(garmentItem) {
        document.querySelectorAll('.garment-item').forEach(item => {
            item.classList.remove('active');
        });
        
        garmentItem.classList.add('active');
        
        this.currentGarment = garmentItem.dataset.type;
        const garmentName = garmentItem.querySelector('.garment-name').textContent;
        document.getElementById('current-garment').textContent = garmentName;
        
        this.currentGarmentImage = '';
        document.getElementById('garment-background').style.display = 'none';
        
        this.updateGarmentPreview();
        this.saveState();
    }

   updateGarmentPreview() {
    const garmentPreview = document.getElementById('garment-preview');
    
    const garmentStyles = {
        tshirt: 'linear-gradient(135deg, #FAF8F5 0%, #F5EFE6 100%)',
        pants: 'linear-gradient(135deg, #FAF8F5 0%, #E8E8E8 100%)',
        dress: 'linear-gradient(135deg, #FAF8F5 0%, #F0E6FF 100%)',
        longsleeve: 'linear-gradient(135deg, #FAF8F5 0%, #E6F0FF 100%)',
        coat: 'linear-gradient(135deg, #FAF8F5 0%, #D4C9B8 100%)',
        shorts: 'linear-gradient(135deg, #FAF8F5 0%, #E6F5E6 100%)',
        skirt: 'linear-gradient(135deg, #FAF8F5 0%, #FFE6F5 100%)', // ДОДАЙТЕ ЦЕЙ РЯДОК
        hat: 'linear-gradient(135deg, #FAF8F5 0%, #F5F5DC 100%)'
    };

    if (!this.currentGarmentImage) {
        garmentPreview.style.background = garmentStyles[this.currentGarment] || garmentStyles.tshirt;
    } else {
        garmentPreview.style.background = 'transparent';
    }
}

    initializeSizeControls() {
        document.querySelectorAll('.size-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectSize(e.target);
            });
        });
    }

    selectElementType(elementItem) {
        document.querySelectorAll('.element-item').forEach(item => {
            item.classList.remove('active');
        });
        
        elementItem.classList.add('active');
        
        this.currentElement = {
            type: elementItem.dataset.type,
            icon: elementItem.dataset.icon
        };

        document.getElementById('current-element').textContent = 
            `Selected: ${elementItem.querySelector('.element-name').textContent}`;
    }

    selectSize(sizeBtn) {
        document.querySelectorAll('.size-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        sizeBtn.classList.add('active');
        
        this.selectedSize = sizeBtn.dataset.size;
        
        const selectedElement = document.querySelector('.design-element.selected');
        if (selectedElement) {
            this.updateElementSize(selectedElement);
            this.saveState();
        }
    }

    addElementToCanvas(x, y) {
        this.elementCount++;
        const element = document.createElement('div');
        element.className = 'design-element';
        element.innerHTML = `
            <div class="element-controls">
                <button class="element-control-btn delete-btn">×</button>
                <button class="element-control-btn duplicate-btn">+</button>
            </div>
            <div class="element-content">${this.currentElement.icon}</div>
        `;

        const sizes = {
            small: 20,
            medium: 30,
            large: 40
        };
        const offset = sizes[this.selectedSize] || 30;

        element.style.left = `${x - offset}px`;
        element.style.top = `${y - offset}px`;
        element.style.color = this.selectedColor;
        element.dataset.id = this.elementCount;
        element.dataset.type = this.currentElement.type;

        this.updateElementSize(element);

        element.addEventListener('click', (e) => {
            e.stopPropagation();
            this.selectCanvasElement(element);
        });

        element.querySelector('.delete-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            this.deleteElement(element);
        });

        element.querySelector('.duplicate-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            this.duplicateElement(element);
        });

        this.makeDraggable(element);

        document.getElementById('garment-preview').appendChild(element);
        this.elements.push(element);
        this.selectCanvasElement(element);
        this.saveState();
    }

    updateElementSize(element) {
        const sizes = {
            small: { fontSize: '16px', size: '40px' },
            medium: { fontSize: '24px', size: '60px' },
            large: { fontSize: '32px', size: '80px' }
        };

        const size = sizes[this.selectedSize];
        element.style.fontSize = size.fontSize;
        element.style.width = size.size;
        element.style.height = size.size;
        element.style.lineHeight = size.size;
        element.style.textAlign = 'center';
        element.style.display = 'flex';
        element.style.alignItems = 'center';
        element.style.justifyContent = 'center';
    }

    makeDraggable(element) {
        let isDragging = false;
        let startX, startY, initialX, initialY;
        
        const startDrag = (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            isDragging = true;
            element.classList.add('dragging');
            document.body.classList.add('dragging-active');
            
            startX = e.clientX || e.touches[0].clientX;
            startY = e.clientY || e.touches[0].clientY;
            
            const rect = element.getBoundingClientRect();
            const canvasRect = document.getElementById('garment-preview').getBoundingClientRect();
            initialX = rect.left - canvasRect.left;
            initialY = rect.top - canvasRect.top;
            
            document.addEventListener('mousemove', drag, { passive: false });
            document.addEventListener('touchmove', drag, { passive: false });
            document.addEventListener('mouseup', stopDrag);
            document.addEventListener('touchend', stopDrag);
            
            document.body.style.userSelect = 'none';
            document.body.style.cursor = 'grabbing';
        };

        const drag = (e) => {
            if (!isDragging) return;
            
            e.preventDefault();
            e.stopPropagation();
            
            const currentX = e.clientX || (e.touches && e.touches[0].clientX);
            const currentY = e.clientY || (e.touches && e.touches[0].clientY);
            
            if (!currentX || !currentY) return;
            
            const deltaX = currentX - startX;
            const deltaY = currentY - startY;
            
            let newX = initialX + deltaX;
            let newY = initialY + deltaY;
            
            const canvas = document.getElementById('garment-preview');
            const maxX = canvas.offsetWidth - element.offsetWidth;
            const maxY = canvas.offsetHeight - element.offsetHeight;
            
            newX = Math.max(0, Math.min(newX, maxX));
            newY = Math.max(0, Math.min(newY, maxY));
            
            element.style.transition = 'none';
            element.style.left = `${newX}px`;
            element.style.top = `${newY}px`;
            
            element.offsetHeight;
        };

        const stopDrag = (e) => {
            if (!isDragging) return;
            
            isDragging = false;
            element.classList.remove('dragging');
            document.body.classList.remove('dragging-active');
            
            element.style.transition = '';
            document.body.style.userSelect = '';
            document.body.style.cursor = '';
            
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('touchmove', drag);
            document.removeEventListener('mouseup', stopDrag);
            document.removeEventListener('touchend', stopDrag);
            
            this.saveState();
        };

        element.addEventListener('mousedown', startDrag);
        element.addEventListener('touchstart', startDrag, { passive: false });
        
        element.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });
        
        element.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }

    selectCanvasElement(element) {
        document.querySelectorAll('.design-element').forEach(el => {
            el.classList.remove('selected');
        });
        
        element.classList.add('selected');
        
        const elementName = document.querySelector(`[data-type="${element.dataset.type}"] .element-name`)?.textContent || 
                           this.knittedElements.find(el => el.type === element.dataset.type)?.name || 
                           element.dataset.type;
        document.getElementById('current-element').textContent = `Selected: ${elementName}`;
    }

    deleteElement(element) {
        const index = this.elements.indexOf(element);
        if (index > -1) {
            this.elements.splice(index, 1);
        }
        element.remove();
        this.saveState();
    }

    duplicateElement(element) {
        const rect = element.getBoundingClientRect();
        const canvasRect = document.getElementById('garment-preview').getBoundingClientRect();
        
        this.addElementToCanvas(
            rect.left - canvasRect.left + rect.width / 2 + 10,
            rect.top - canvasRect.top + rect.height / 2 + 10
        );
    }

    saveState() {
        if (this.history.length > 50) {
            this.history.shift();
            this.historyIndex--;
        }
        
        this.history = this.history.slice(0, this.historyIndex + 1);
        
        const state = {
            elements: this.elements.map(el => ({
                id: el.dataset.id,
                type: el.dataset.type,
                icon: el.querySelector('.element-content').textContent,
                color: el.style.color,
                position: { left: el.style.left, top: el.style.top },
                size: this.selectedSize
            })),
            garment: this.currentGarment,
            garmentImage: this.currentGarmentImage,
            garmentSize: this.selectedGarmentSize,
            texture: this.selectedTexture
        };
        
        this.history.push(JSON.parse(JSON.stringify(state)));
        this.historyIndex = this.history.length - 1;
        this.updateUndoRedoButtons();
    }

    undo() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            this.restoreState(this.history[this.historyIndex]);
        }
    }

    redo() {
        if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            this.restoreState(this.history[this.historyIndex]);
        }
    }

    restoreState(state) {
        this.elements.forEach(el => el.remove());
        this.elements = [];
        
        state.elements.forEach(elementData => {
            const element = document.createElement('div');
            element.className = 'design-element';
            element.innerHTML = `
                <div class="element-controls">
                    <button class="element-control-btn delete-btn">×</button>
                    <button class="element-control-btn duplicate-btn">+</button>
                </div>
                <div class="element-content">${elementData.icon}</div>
            `;

            element.style.left = elementData.position.left;
            element.style.top = elementData.position.top;
            element.style.color = elementData.color;
            element.dataset.id = elementData.id;
            element.dataset.type = elementData.type;

            this.selectedSize = elementData.size;
            this.updateElementSize(element);

            element.addEventListener('click', (e) => {
                e.stopPropagation();
                this.selectCanvasElement(element);
            });

            element.querySelector('.delete-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                this.deleteElement(element);
            });

            element.querySelector('.duplicate-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                this.duplicateElement(element);
            });

            this.makeDraggable(element);
            document.getElementById('garment-preview').appendChild(element);
            this.elements.push(element);
        });

        this.currentGarment = state.garment;
        this.currentGarmentImage = state.garmentImage;
        this.selectedGarmentSize = state.garmentSize || 'm';
        this.selectedTexture = state.texture || 'none';
        
        document.querySelectorAll('.garment-size-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.garmentSize === this.selectedGarmentSize);
        });
        
        document.querySelectorAll('.textural-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.texture === this.selectedTexture);
        });
        
        document.getElementById('selected-garment-size').textContent = this.selectedGarmentSize.toUpperCase();
        document.getElementById('selected-texture').textContent = this.formatTextureName(this.selectedTexture);
        
        if (this.currentGarmentImage) {
            document.getElementById('garment-background').src = this.currentGarmentImage;
            document.getElementById('garment-background').style.display = 'block';
        } else {
            document.getElementById('garment-background').style.display = 'none';
            this.updateGarmentPreview();
        }
        
        this.updateUndoRedoButtons();
    }

    updateUndoRedoButtons() {
        document.getElementById('undo-btn').disabled = this.historyIndex <= 0;
        document.getElementById('redo-btn').disabled = this.historyIndex >= this.history.length - 1;
    }

   clearCanvas() {
    const garmentPreview = document.getElementById('garment-preview');
    const designElements = garmentPreview.querySelectorAll('.design-element');
    const hasBackground = document.getElementById('garment-background').style.display !== 'none';
    
    if (designElements.length === 0 && !hasBackground) {
        return;
    }
    
    const userChoice = confirm('Clear design elements only? (OK = Yes, Cancel = Clear everything including garment)');
    
    if (userChoice) {
        // Тільки елементи дизайну
        designElements.forEach(element => {
            element.remove();
        });
    } else {
        // Все включаючи фон
        designElements.forEach(element => {
            element.remove();
        });
        
        const garmentBackground = document.getElementById('garment-background');
        garmentBackground.style.display = 'none';
        garmentBackground.src = '';
        this.currentGarmentImage = '';
        this.updateGarmentPreview();
        
        // Скидаємо на T-Shirt
        document.querySelectorAll('.garment-item').forEach(item => {
            item.classList.remove('active');
        });
        const firstGarment = document.querySelector('.garment-item[data-type="tshirt"]');
        if (firstGarment) {
            firstGarment.classList.add('active');
            this.currentGarment = 'tshirt';
            document.getElementById('current-garment').textContent = 'T-Shirt';
        }
    }
    
    this.elements = [];
    this.elementCount = 0;
    document.getElementById('current-element').textContent = 'No element selected';
    this.saveState();
}

    uploadDesign() {
        if (this.elements.length === 0) {
            alert('Please add some design elements before uploading!');
            return;
        }

        this.showConfirmationModal();
        
        const designData = {
            garment: this.currentGarment,
            garmentImage: this.currentGarmentImage,
            garmentSize: this.selectedGarmentSize,
            texture: this.selectedTexture,
            elements: this.elements.map(el => ({
                type: el.dataset.type,
                color: el.style.color,
                position: {
                    left: el.style.left,
                    top: el.style.top
                },
                size: this.selectedSize
            })),
            timestamp: new Date().toISOString()
        };
        
        console.log('Design saved:', designData);
    }

    showConfirmationModal() {
        const modal = document.createElement('div');
        modal.className = 'confirmation-modal';
        modal.innerHTML = `
            <div class="confirmation-content">
                <div class="confirmation-header">
                    <i class="fas fa-check-circle confirmation-icon"></i>
                    <h2>Design Submitted Successfully!</h2>
                </div>
                <div class="confirmation-body">
                    <p>🎉 <strong>Thank you for your creative design!</strong></p>
                    <p>Our design manager and consultant will contact you within 24 hours to discuss the details of your unique piece.</p>
                    <div class="confirmation-details">
                        <div class="detail-item">
                            <i class="fas fa-phone"></i>
                            <span>We'll call you to finalize materials and measurements</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-palette"></i>
                            <span>We'll discuss color options and finishing touches</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-truck"></i>
                            <span>Get ready for your one-of-a-kind upcycled fashion!</span>
                        </div>
                    </div>
                    <p class="thank-you-message">Thank you for choosing sustainable fashion and supporting the Revive Project! ♻️</p>
                </div>
                <div class="confirmation-footer">
                    <button class="btn btn-filled" id="confirmation-ok">Awesome! Can't Wait</button>
                </div>
            </div>
        `;
        
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        `;
        
        const content = modal.querySelector('.confirmation-content');
        content.style.cssText = `
            background: white;
            padding: 30px;
            border-radius: 15px;
            max-width: 500px;
            width: 90%;
            text-align: center;
            animation: slideUp 0.3s ease;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideUp {
                from { 
                    opacity: 0;
                    transform: translateY(30px);
                }
                to { 
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(modal);
        
        modal.querySelector('#confirmation-ok').addEventListener('click', () => {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
                document.head.removeChild(style);
            }
        });
    }

    showSuccessMessage(message) {
        const successMessage = document.getElementById('successMessage');
        successMessage.querySelector('span').textContent = message;
        successMessage.classList.add('show');
        
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 3000);
    }
}

// Initialize the design studio when page loads
document.addEventListener('DOMContentLoaded', () => {
    new DesignStudio();
});