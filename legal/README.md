# The Eminent Nyth

Nyth adalah sebuah bot berbasis Node.js yang menggunakan WhatsApp Web untuk berkomunikasi dengan pengguna. Bot ini menggunakan model bahasa GPT-3 dari OpenAI untuk memberikan respon yang relevan dan menarik dalam percakapan.

## Penggunaan

1. **Instalasi Dependensi**

    Sebelum menjalankan bot, pastikan kamu telah menginstal semua dependensi yang dibutuhkan dengan menjalankan perintah berikut:

    'npm install'

2. **Konfigurasi API Key OpenAI**

    kamu perlu mengganti `YOUR_API_KEY` dengan API key pribadi dari OpenAI. API key ini diperlukan untuk mengakses model bahasa GPT-3.

3. **Menjalankan Bot**

    Untuk menjalankan bot, gunakan perintah berikut:

    'node index.js'

    Bot akan menampilkan kode QR yang harus discan menggunakan WhatsApp untuk login.

4. **Fitur Bot**

    - Bot akan merespon pesan dari pengguna dengan menggunakan model bahasa GPT-3 untuk memberikan respon yang relevan dan menarik.
    - Ketika pengguna mengirim perintah `/nythai`, bot akan aktif dan siap merespon pesan.
    - Ketika pengguna mengirim perintah `/nythoff`, bot akan berhenti merespon pesan.

5. **Penting**

    - Pastikan kamu telah mengganti `YOUR_API_KEY` dengan API key pribadi kamu dari OpenAI.
    - Bot ini hanya berjalan pada satu akun WhatsApp. Jika kamu ingin mengaktifkan bot pada nomor telepon WhatsApp yang berbeda, Kamu perlu log-out di menu 'Linked device' di aplikasi whatsapp, lalu mengulangi lagi dari awal dengan menscan kode QR baru.
    - Apabila kalian mengganti model GPTnya, kalian mungkin harus mengganti Endpoint-nya juga [Chat Completion](https://platform.openai.com/docs/api-reference/chat) dan berikut adalah dafar Model GPT OpenAI [Rate Limits](https://platform.openai.com/account/rate-limits)

## Kontribusi

    Jika Kamu tertarik untuk berkontribusi pada proyek ini, kamu bisa mengirimkan _pull request_. saya sangat menghargai kontribusi dalam bentuk apapun.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT. Lihat `legal\LICENSE` untuk detail lebih lanjut.

---

Dibuat oleh [fromrha](https://github.com/fromrha) 

> [!NOTE]
> If you don't speak Bahasa Indonesia, and are still wondering on how to use this, feel free to reach out to me
