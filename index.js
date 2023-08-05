const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const axios = require('axios');

const API_KEY_OPEN_AI = 'YOUR_API_KEY'; // Ganti dengan API key kalian
const apiUrl = 'https://api.openai.com/v1/completions'; // Apabila kalian mengganti model GPTnya, kalian mungkin harus mengganti Endpoint-nya juga, lihat README.md untuk lebih lanjut

const webClient = new Client({
  authStrategy: new LocalAuth(),
});

let botIsActive = false; // off by default

// Fungsi untuk mengirim permintaan ke API OpenAI
    async function sendMessageToOpenAI(message) {
        try {
          const response = await axios.post(apiUrl, {
            prompt: message,
            max_tokens: 1000, // Atur batas token kalian
            model: 'text-davinci-003', // Ganti sesuai model yang diinginkan
          }, {
            headers: {
              'Authorization': `Bearer ${API_KEY_OPEN_AI}`,
              'Content-Type': 'application/json',
            },
          });
      
          // Hasil dari API OpenAI berada di response.data.choices[0].text
          return response.data.choices[0].text.trim();
        } catch (error) {
          console.error('Error sending message to OpenAI:', error.message);
          return null;
        }
      }

webClient.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

webClient.on('ready', () => {
  console.log('Gasskeun!');
});

webClient.on('message', async (message) => {
    // Pastikan hanya merespon pesan dari pengguna dan bukan dari bot sendiri
    if (!message.fromMe) {
      const userMessage = message.body;
  
      if (userMessage.toLowerCase() === '/nythai') {
        // Hidupkan bot jika belum menyala
        if (!botIsActive) {
          botIsActive = true;
          message.reply('Fitur Chatbot AI sudah aktif, Selamat menggunakan!');
        } else {
          message.reply('Fitur Chatbot AI sudah aktif.');
        }
      } else if (userMessage.toLowerCase() === '/nythoff') {
        // Matikan bot jika sedang menyala
        if (botIsActive) {
          botIsActive = false;
          message.reply('Fitur Chatbot AI sudah dinonaktifkan, Terima kasih!');
        } else {
          message.reply('Fitur Chatbot AI sudah dinonaktifkan.');
        }
      } else if (botIsActive) {
        // Jika bot aktif, gunakan model ChatGPT untuk merespons pesan
        const openAIResponse = await sendMessageToOpenAI(userMessage);
  
        if (openAIResponse) {
          // Kirim balasan dari ChatGPT
          message.reply(openAIResponse);
        } else {
          message.reply('Maaf, terjadi kesalahan dalam memproses pesan Anda.');
        }
      }
    }
  });
  
webClient.initialize();
