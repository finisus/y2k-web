// Mobile optimization variable
const isSmallScreen = window.innerWidth <= 500;

/*
* Selection box logic
*/
let isSelecting = false;
let startX, startY, endX, endY;
const desktop = document.getElementById('desktop');
const selectionBox = document.getElementById('selection-box'); 
desktop.addEventListener('mousedown', function(e) {
  isSelecting = true;
  startX = e.clientX;
  startY = e.clientY;
  // Initialize the selection box styles
  selectionBox.style.left = `${startX}px`;
  selectionBox.style.top = `${startY}px`;
  selectionBox.style.width = '0';
  selectionBox.style.height = '0';
  selectionBox.style.visibility = 'visible';
});
desktop.addEventListener('mousemove', function(e) {
  if (isSelecting) {
    endX = e.clientX;
    endY = e.clientY;
    // Update the selection box styles
    selectionBox.style.width = `${Math.abs(endX - startX)}px`;
    selectionBox.style.height = `${Math.abs(endY - startY)}px`;
    selectionBox.style.left = `${Math.min(startX, endX)}px`;
    selectionBox.style.top = `${Math.min(startY, endY)}px`;
  }
});
desktop.addEventListener('mouseup', function() {
  if (isSelecting) {
    isSelecting = false;
    selectionBox.style.visibility = 'hidden';
  }
});
/******************************/
/*
* Basic functionality for some Desktop Icons
*/
const telegramIcon = document.getElementById('telegram-icon');
telegramIcon.addEventListener('click', function() {
  window.open('https://t.me/y2ksol', '_blank');
});
const twitterIcon = document.getElementById('twitter-icon');
twitterIcon.addEventListener('click', function() {
  window.open('https://twitter.com/Y2KSolOfficial/', '_blank');
});
const networkIcon = document.getElementById('network-icon');
const audio = new Audio('./metadata/dialup.mp3');
networkIcon.addEventListener('click', () => {
  if (!audio.paused) {
    audio.currentTime = 0;
  }
  audio.volume = 1.0;
  audio.play();
});
/******************************/
/*
* Creating a Internet explorer Window lookalike for buy page
*/
// 
document.getElementById('buy-page').addEventListener('click', function() {
  document.getElementById('ie-window').style.display = 'block';
  document.getElementById('ie-content').src="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=CQ6qQ6hkT3kYvCJ9hwFR4CT9kSrzUuW9VHByXqpbviTm";
});

document.getElementById('ie-close').addEventListener('click', function() {
  document.getElementById('ie-window').style.display = 'none';
});
/******************************/
/*
Internet Explorer Toolbar
*/
document.addEventListener('DOMContentLoaded', (event) => {
  const toolbarHoverImages = {
    'ie-home': './metadata/toolbar/color-icons/home.png',
    'ie-favorites': './metadata/toolbar/color-icons/favorites.png',
    'ie-print': './metadata/toolbar/color-icons/print.png',
  };
  function setImageSource(buttonId, src) {
    const button = document.getElementById(buttonId);
    const img = button.querySelector('img');
    img.src = src;
  }
  Object.keys(toolbarHoverImages).forEach(buttonId => {
    const button = document.getElementById(buttonId);
    const img = button.querySelector('img');
    const originalSrc = img.src;

    button.addEventListener('mouseenter', () => setImageSource(buttonId, toolbarHoverImages[buttonId]));
    button.addEventListener('mouseleave', () => setImageSource(buttonId, originalSrc));
  });
});
/******************************/
/*
Info Page    
*/
document.getElementById('info-page').addEventListener('click', function() {
  document.getElementById('info-window').style.display = 'block';
});
document.getElementById('info-close').addEventListener('click', function() {
  document.getElementById('info-window').style.display = 'none';
});
/******************************/
/*
Recycle Bin    
*/
document.getElementById('bin-page').addEventListener('click', function() {
  document.getElementById('bin-window').style.display = 'block';
});
document.getElementById('bin-close').addEventListener('click', function() {
  document.getElementById('bin-window').style.display = 'none';
});
/******************************/

/*
* Minesweeper
*/

document.getElementById('minesweeper-icon').addEventListener('click', function() {
  document.getElementById('minesweeper-window').style.display = 'block';
});
document.getElementById('minesweeper-close').addEventListener('click', function() {
  document.getElementById('minesweeper-window').style.display = 'none';
});
document.getElementById('minesweeper-menu-game').addEventListener('click', function() {
  const dropdown = document.getElementById('minesweeper-menu-game-dropdown');
  dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';

  const game = document.getElementById('minesweeper-menu-game');
  if (dropdown.style.display === 'block') {
    game.className = 'toggle selected';
  } else {
    game.className = 'lightweight';
  }
});
document.getElementById('minesweeper-menu-help').addEventListener('click', function() {
  const dropdown = document.getElementById('minesweeper-menu-help-dropdown');
  dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';

  const help = document.getElementById('minesweeper-menu-help');
  if (dropdown.style.display === 'block') {
    help.className = 'toggle selected';
  } else {
    help.className = 'lightweight';
  }
});

// Click outside to close the dropdown
window.addEventListener('click', function(event) {
  if (!event.target.matches('#minesweeper-menu-game')) {
    const dropdown = document.getElementById('minesweeper-menu-game-dropdown');
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';

      const game = document.getElementById('minesweeper-menu-game');
      game.className = 'lightweight';
    }
  }
});
window.addEventListener('click', function(event) {
  if (!event.target.matches('#minesweeper-menu-help')) {
    const dropdown = document.getElementById('minesweeper-menu-help-dropdown');
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';

      const help = document.getElementById('minesweeper-menu-help');
      help.className = 'lightweight';
    }
  }
});

// Connect dropdown menu buttons with the game's insetting buttons
document.querySelectorAll('.game-setting').forEach(button => {
  button.addEventListener('click', function() {
    const setting =  this.getAttribute('data-setting');
    const iframeWindow = document.querySelector('#minesweeper-wrapper iframe').contentWindow;
    iframeWindow.postMessage({ setting: setting }, '*');
  });
});

// Add an event listener for the dropdown "Exit" button
document.getElementById('minesweeper-menu-dropdown-exit').addEventListener('click', function() {
  document.getElementById('minesweeper-window').style.display = 'none';
})

// Adjusting minesweeper-window Size according to game modes
const gameSizes = {
  beginner: { width: '172px', height: '260px' },
  intermediate: { width: '284px', height: '372px' },
  expert: { width: '508px', height: '372px' },
}
const gameSizesMobile = {
  beginner: { width: '172px', height: '256px' },
  intermediate: { width: '284px', height: '368px' },
  expert: { width: '508px', height: '368px' },
}

document.querySelectorAll('.game-setting').forEach(button => {
  button.addEventListener('click', function() {
    const setting = this.getAttribute('data-setting');
    const size = isSmallScreen? gameSizesMobile[setting] : gameSizes[setting];
    if (size) {
      //set the size of minesweeper-window
      const minesweeperWindow = document.getElementById('minesweeper-window');
      minesweeperWindow.style.width = size.width;
      minesweeperWindow.style.height = size.height;
      const iframe = minesweeperWindow.querySelector('iframe');
      iframe.style.width = size.width;
      iframe.style.height = size.height;
    }
  })
})

/******************************/
/*
Task Bar
*/
// Sound-Toggle
document.addEventListener('DOMContentLoaded', () => {
  const soundToggle = document.getElementById('sound-toggle');
  const soundToggleImg = document.getElementById('sound-toggle-img');
  const mutedIconPath = './metadata/win98icons/loudspeaker_muted.ico';
  const unmutedIconPath = './metadata/win98icons/loudspeaker_rays.ico';
  let isMuted = false;
  soundToggle.addEventListener('click', () => {
    isMuted = !isMuted;
    audio.muted = isMuted;
    soundToggleImg.src = isMuted ? mutedIconPath : unmutedIconPath;
  });
});
// Function to update the Clock in TaskBar
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.querySelector('#clock span').textContent = `${hours}:${minutes}`;
}
updateClock();
setInterval(updateClock, 30000); // updates the clock immediately and every 30 seconds

// Start Page
document.getElementById('start-button').addEventListener('click', function() {
  const startPage = document.getElementById('start-page');
  startPage.style.display = startPage.style.display === 'none' ? 'block' : 'none';

  const startButton = document.getElementById('start-button');
  if (startPage.style.display === 'block') {
    startButton.className = 'toggle selected';
  } else {
    startButton.className = 'outset-deep';
  }
})
// click outside to close start page
window.addEventListener('click', function(event) {
  const startPage = document.getElementById('start-page');
  const startButton = document.getElementById('start-button');

  if (startPage.style.display === 'block' && !startButton.contains(event.target)) {
    startPage.style.display = 'none';
    startButton.className = 'outset-deep';
  }
});

document.getElementById('attention-window').addEventListener('click', function() {
  window.open('https://raydium.io/swap/?inputCurrency=sol&outputCurrency=CQ6qQ6hkT3kYvCJ9hwFR4CT9kSrzUuW9VHByXqpbviTm', '_blank');
})

const copyButton = document.getElementById("copy-ca");
const textToCopy = "CQ6qQ6hkT3kYvCJ9hwFR4CT9kSrzUuW9VHByXqpbviTm";
copyButton.addEventListener("click", async () => {
  try {
    // Try the modern Clipboard API first (if supported)
    await navigator.clipboard.writeText(textToCopy);
    console.log("Text copied successfully using Clipboard API");
  } catch (err) {
    // If Clipboard API fails, use the legacy approach
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    textArea.style.position = "fixed"; // Hide element off-screen
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    console.log("Text copied successfully using legacy approach");
  }
});

// Meme Generator
/* open window with desktop icon */
document.getElementById('meme-gen-page').addEventListener('click', function() {
  document.getElementById('meme-gen-window').style.display = 'block';
});
/* close window with action button */
document.getElementById('meme-gen-close').addEventListener('click', function() {
  document.getElementById('meme-gen-window').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
  const uploadInput = document.getElementById('meme-gen-upload');
  const generateBtn = document.getElementById('meme-gen-generate');
  const downloadBtn = document.getElementById('meme-gen-download');
  const preResultImg = document.getElementById('pre-result');
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const result = document.getElementById('result');
  const borderImage = new Image();
  borderImage.src = './metadata/border.png';

  canvas.width = 300;
  canvas.height = 300;


  uploadInput.onchange = function(e) {
    const file = e.target.files[0];
    if (file) {
      preResultImg.style.display = 'none';

      const reader = new FileReader();
      reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
          // Clear the canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Draw the uploaded image resized to 170x170 at position (70, 50)
          ctx.drawImage(img, 70, 24, 160, 160);

          // Optionally, draw the border image here or in the generate button click event
          // This ensures the border is on top of the uploaded image
          // ctx.drawImage(borderImage, 0, 0, 300, 300);

          canvas.style.display = 'inline-block'; // Show canvas
          result.style.display = 'none'; // Hide result
        }
        img.src = event.target.result;
      }
      reader.readAsDataURL(file);
    }
  };

  generateBtn.onclick = function() {
    // Ensure border image is drawn last so it's on top
    if (borderImage.complete) {
      ctx.drawImage(borderImage, 0, 0, 300, 300);
      result.src = canvas.toDataURL('image/png');
      canvas.style.display = 'none';
      result.style.display = 'inline-block'; // Show result
    } else {
      console.error('Border image not loaded');
    }
  };

  downloadBtn.onclick = function() {
    if (result.src) {
      const link = document.createElement('a');
      link.download = 'meme.png';
      link.href = result.src;
      link.click();
    }
  };
});

/*


document.addEventListener('DOMContentLoaded', function() {
  const uploadInput = document.getElementById('meme-gen-upload');
  const generateBtn = document.getElementById('meme-gen-generate');
  const downloadBtn = document.getElementById('meme-gen-download');
  const preResultImg = document.getElementById('pre-result');
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const result = document.getElementById('result');
  const borderImage = new Image();
  borderImage.src = './metadata/border.png';

  // Function to adjust image size
  function adjustImageSize(imgWidth, imgHeight, maxWidth, maxHeight) {
    let newWidth = imgWidth;
    let newHeight = imgHeight;

    if (imgWidth > maxWidth || imgHeight > maxHeight) {
      const ratio = Math.min(maxWidth / imgWidth, maxHeight / imgHeight);
      newWidth = imgWidth * ratio;
      newHeight = imgHeight * ratio;
    }

    return { width: newWidth, height: newHeight };
  }

  uploadInput.onchange = function(e) {
    const file = e.target.files[0];
    if (file) {
      preResultImg.style.display = 'none';

      const reader = new FileReader();
      reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
          // Adjust image size to fit within maximum dimensions
          const maxCanvasWidth = 300; // Maximum canvas width
          const maxCanvasHeight = 300; // Maximum canvas height
          const adjustedSize = adjustImageSize(img.width, img.height, maxCanvasWidth, maxCanvasHeight);

          canvas.width = adjustedSize.width;
          canvas.height = adjustedSize.height;
          ctx.drawImage(img, 0, 0, adjustedSize.width, adjustedSize.height);
          canvas.style.display = 'inline-block'; // Show canvas
          result.style.display = 'none'; // Hide result
        }
        img.src = event.target.result;
      }
      reader.readAsDataURL(file);
    }
  };

  generateBtn.onclick = function() {
    if (borderImage.complete) { // Check if border image has loaded
      ctx.drawImage(borderImage, 0, 0, canvas.width, canvas.height);
      result.src = canvas.toDataURL('image/png');
      canvas.style.display = 'none';
      result.style.display = 'inline-block'; // Show result
    } else {
      console.error('Border image not loaded');
    }
  };

  downloadBtn.onclick = function() {
    if (result.src) {
      const link = document.createElement('a');
      link.download = 'meme.png';
      link.href = result.src;
      link.click();
    }
  };
});


*/