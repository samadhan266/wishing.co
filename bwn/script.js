// Get the elements by their IDs
const backgroundContainer = document.getElementById('background1');
const giftBoxGif = document.getElementById('giftBoxGif');
const envelopeGif = document.getElementById('envelopeGif');
const qrCode = document.getElementById('qrCode');

// Handle clicking on the gift box GIF
giftBoxGif.addEventListener('click', () => {
    // Change the background image
    backgroundContainer.style.backgroundImage = "url('el9eSPNFs0uTDEfHEjIVeLwyMHTQ0xWHiZxQxRUzPprjNYWOB.jpg')";
    
    // Hide the gift box GIF and show the envelope GIF
    giftBoxGif.classList.add('hidden');
    envelopeGif.classList.remove('hidden');
});

// Handle clicking on the envelope GIF
envelopeGif.addEventListener('click', () => {
    // Change the background image again
    backgroundContainer.style.backgroundImage = "url('EQHjvURgkOL5FxOG9iQokhQeMRdUMH5A8RwKwKff9q4kMMLnA.jpg')";
    
    // Hide the envelope GIF and show the QR code
    envelopeGif.classList.add('hidden');
    qrCode.classList.remove('hidden');
});
