// Function to create a scroll item with an image
function createScrollItem(content, imageFile) {
    const item = document.createElement('div');
    item.className = 'scroll-item';
    item.style.width = '100%'; // Fixed width for each item
    item.style.height = '100%'; // Fixed height for each item
    item.style.background = 'transparent'; // Transparent background
    item.style.display = 'flex';
    item.style.flexDirection = 'column';
    item.style.alignItems = 'center';
    item.style.justifyContent = 'space-between';
    item.style.marginRight = '50px';

    const imgContainer = document.createElement('div');
    imgContainer.style.width = '100%'; 
    imgContainer.style.height = '200px'; 
    imgContainer.style.display = 'flex';
    imgContainer.style.alignItems = 'center';
    imgContainer.style.justifyContent = 'center'; 

    const img = document.createElement('img');
    img.src = imageFile;
    img.alt = content; 
    img.style.width = 'auto'; 
    img.style.height = '100px'; 
    img.style.objectFit = 'cover'; 

    
    imgContainer.appendChild(img);

    
    item.appendChild(imgContainer);

    return item;
}

async function fetchFilesFromFolder(folderPath) {
    const files = [
        `${folderPath}/medpar1.png`,
        `${folderPath}/medpar2.png`,
        `${folderPath}/medpar3.png`,
        `${folderPath}/medpar4.png`,
        `${folderPath}/medpar5.png`
    ];
    return files; 
}

const scrollContainer = document.getElementById('scroll-container');
scrollContainer.style.background = 'transparent'; 
scrollContainer.style.display = 'flex';
scrollContainer.style.overflowX = 'auto'; 
scrollContainer.style.position = 'relative';
scrollContainer.style.height = '150px';
scrollContainer.style.scrollBehavior = 'smooth'; 
scrollContainer.style.gap = '100px'; 
scrollContainer.style.top = '500px';

const scrollContent = document.createElement('div');
scrollContent.style.display = 'flex';
scrollContent.style.width = 'max-content'; 
scrollContent.style.position = 'relative';
scrollContent.style.top = '0';
scrollContent.style.left = '0';
scrollContent.style.gap = '100px';
scrollContainer.appendChild(scrollContent);

const folderPath = 'Assets';

fetchFilesFromFolder(folderPath).then((imageFiles) => {
    
    imageFiles.forEach((imageFile, index) => {
        const item = createScrollItem(`Item ${index + 1}`, imageFile);
        scrollContent.appendChild(item);
    });

    imageFiles.forEach((imageFile, index) => {
        const item = createScrollItem(`Item ${index + 1}`, imageFile);
        scrollContent.appendChild(item);
    });

    scrollContainer.addEventListener('scroll', () => {
        if (scrollContainer.scrollLeft >= scrollContent.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0;
        }
    });
}).catch((error) => {
    console.error('Error fetching files:', error);
});
