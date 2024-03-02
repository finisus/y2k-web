window.addEventListener('message', function(event) {
  // Optional: Check event.origin here if you want to ensure messages are coming from your main project
  const data = event.data;
  if (data.setting) {
    switch (data.setting) {
      case 'beginner':
        // Trigger beginner level settings
        document.getElementById('button_beginner').click();
        break;
      case 'intermediate':
        // Trigger intermediate level settings
        document.getElementById('button_intermediate').click();
        break;
      case 'expert':
        // Trigger expert level settings
        document.getElementById('button_expert').click();
        break;
    }
  }
});