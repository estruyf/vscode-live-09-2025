const notifier = require('node-notifier');
const path = require('path');

(() => {
  console.log('Sending notification...', __dirname);
  notifier.notify(
    {
      title: 'WhatsApp',
      message: 'Hello from node, Mr. User!',
      icon: path.join(__dirname, 'whatsapp.jpg'), // Absolute path (doesn't work on balloons)
      sticky: true,
      wait: false
    }
  );
})();