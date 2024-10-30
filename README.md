<table>
  <tr>
    <td style="text-align: center;">
      <img src="https://github.com/user-attachments/assets/595d8118-e3e4-48a0-ab91-1e181ead8217" height="120" alt="anime-yes"/>
    </td>
    <td style="vertical-align: middle;">
      <h5>Nama: Muhamad Galih</h5>
      <h5>NIM: H1D022052</h5>
      <h5>Shift: E (Baru)</h5>
    </td>
  </tr>
</table>

## Demo Hasil

[iPhone-13-PRO-localhost-_BxIVPiO2c.webm](https://github.com/user-attachments/assets/c1001214-a9f8-4dbc-b6ce-b8d3c5b0c42d)

## Screen Shoot
<!-- Gambar 1 -->
<img src="https://github.com/user-attachments/assets/9f5b14e5-0dfe-4ec7-9436-77a279832586" alt="iPhone 13 PRO" width="300"/>

<!-- Gambar 2 -->
<img src="https://github.com/user-attachments/assets/210e20dc-93a3-4eb5-a49e-3e47b60060bd" alt="iPhone 13 PRO" width="300"/>

<!-- Gambar 3 -->
<img src="https://github.com/user-attachments/assets/00692751-65ce-4984-9090-c76336724bf7" alt="iPhone 13 PRO" width="300"/>




Berikut adalah penjelasan rinci tentang cara membuat komponen Ionic
## Penjelasan Ringkas
Berikut adalah kesimpulan akhir mengenai langkah-langkah menambahkan komponen di aplikasi Ionic:

### Kesimpulan Menambahkan Komponen di Ionic

1. **Membuat Komponen**: 
   - Gunakan perintah `ionic generate component [nama_komponen]` untuk membuat komponen baru. Dalam contoh ini, Anda membuat komponen `Aboutme` dengan perintah `ionic generate component aboutme`.

2. **Mengatur Routing**:
   - Jika komponen baru tersebut harus menjadi bagian dari halaman tertentu (seperti halaman `Home`), pastikan untuk mengubah pengaturan routing di file `app-routing.module.ts`, agar dapat mengarahkan pengguna ke komponen yang tepat saat aplikasi dijalankan.

3. **Mendeklarasikan Komponen dalam Modul**:
   - Buka file modul yang sesuai (misalnya `home.module.ts`) dan tambahkan `AboutmeComponent` ke dalam `declarations`. Ini memberi tahu Angular bahwa komponen tersebut akan digunakan dalam modul ini.
   - Pastikan juga untuk mengimpor modul lain yang diperlukan seperti `CommonModule`, `FormsModule`, dan `IonicModule`.

4. **Menggunakan Komponen dalam Template**:
   - Tambahkan tag komponen (misalnya `<app-aboutme>`) di dalam template halaman yang sesuai (misalnya `home.page.html`). Tag ini akan digantikan oleh konten dari komponen `Aboutme` ketika halaman dirender.

5. **Data Binding dan Interaktivitas**:
   - Definisikan variabel dan metode dalam file TypeScript komponen (`aboutme.component.ts`) untuk menyediakan data yang akan ditampilkan dan fungsi interaksi. Variabel ini dapat diakses dalam template HTML komponen menggunakan sintaks Angular, seperti `{{ name }}`.
   - Gunakan event binding (misalnya `(click)="scrollToPortfolio()"`) untuk menambahkan fungsionalitas interaktif yang dapat diakses oleh pengguna.

### Ringkasan

Dengan mengikuti langkah-langkah ini, Anda dapat dengan mudah menambahkan komponen baru ke dalam aplikasi Ionic. Proses ini mencakup pembuatan, pengaturan routing, deklarasi dalam modul, penggunaan dalam template, dan penanganan data serta interaktivitas. Dengan demikian, Anda dapat meningkatkan fungsionalitas aplikasi Anda dan memberikan pengalaman pengguna yang lebih baik melalui struktur komponen yang modular dan terorganisir.

## Langkah-langkah Membuat Komponen Ionic (Lebih Detail)

1. **Buat Halaman Baru untuk Home**
   - Untuk membuat halaman baru bernama **Home** yang berisi informasi tentang diri Anda, gunakan perintah berikut pada terminal:
     ```
     ionic generate page home
     ```
   - Perintah ini akan membuat folder baru bernama `home` di dalam direktori `src/app`, yang berisi semua file yang diperlukan untuk halaman tersebut (seperti HTML, CSS, TypeScript, dan file routing).

2. **Modifikasi Routing untuk Halaman Awal**
   - Selanjutnya, Anda perlu mengarahkan aplikasi ke halaman **Home** saat aplikasi pertama kali dijalankan. Buka file `app-routing.module.ts` yang terletak di direktori `src/app`.
   - Temukan bagian yang mengatur routing, dan ubah bagian yang mengarahkan ke halaman awal menjadi seperti berikut:
     ```typescript
     const routes: Routes = [
       { path: '', redirectTo: 'home', pathMatch: 'full' },
       // tambahkan route lainnya di sini
     ];
     ```
   - Dengan modifikasi ini, saat aplikasi dimulai, pengguna akan diarahkan ke halaman **Home**.

3. **Buat Komponen AboutMe**
   - Setelah itu, Anda akan membuat komponen baru bernama **AboutMe** untuk menampilkan informasi tentang diri Anda. Gunakan perintah berikut:
     ```
     ionic generate component aboutme
     ```
   - Perintah ini akan membuat folder baru bernama `aboutme` di dalam direktori `src/app`, yang berisi file untuk komponen tersebut.

4. **Modifikasi Komponen AboutMe**
   - Buka file `aboutme.component.ts` yang terletak di dalam folder `aboutme` dan lakukan modifikasi sesuai dengan berikut:
     ```typescript
     import { Component } from '@angular/core';

     @Component({
       selector: 'app-aboutme',
       templateUrl: './aboutme.component.html',
       styleUrls: ['./aboutme.component.scss'],
     })
     export class AboutmeComponent {
       name: string = 'Muhamad Galih';
       bio: string = 'Aspiring graphic designer.';
       nim: string = '123456';
       shiftLama: string = 'Morning';
       shiftBaru: string = 'Afternoon';
       contact: string = '081234567890';
       email: string = 'galih@example.com';
       address: string = 'Kota Banjar, Indonesia';
       cvLink: string = 'assets/document/cv.pdf';

       scrollToPortfolio() {
         const portfolioSection = document.getElementById('portfolio');
         if (portfolioSection) {
           portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
         }
       }
     }
     ```
   - Dalam kode di atas:
     - **Deklarasi Variabel**: Anda mendeklarasikan beberapa variabel yang menyimpan informasi pribadi, seperti nama, bio, NIM, kontak, email, alamat, dan tautan ke CV Anda.
     - **Fungsi `scrollToPortfolio`**: Fungsi ini digunakan untuk menggulir halaman secara halus ke bagian portofolio ketika dipanggil. Fungsi ini mencari elemen dengan ID **portfolio** dan menggunakan metode `scrollIntoView` untuk melakukan pengguliran.


Berikut adalah penjelasan tentang elemen-elemen yang digunakan dalam komponen **AboutMe** pada kode Ionic yang Anda berikan. Komponen ini terdiri dari tiga bagian utama: **Introduction Section**, **Details Section**, dan **Portfolio Section**. Mari kita lihat setiap bagian secara rinci.

### 1. Introduction Section
```html
<ion-grid style="padding: 20px;">
  <ion-row class="intro-section" style="align-items: center; justify-content: center; text-align: center;">
    <ion-col size="12" size-md="4">
      <img src="assets/image/galih.png" alt="Profile Photo" style="border-radius: 50%; width: 100%; max-width: 150px; margin-bottom: 16px;">
    </ion-col>
    <ion-col size="12" size-md="8">
      <h2 style="font-size: 26px; font-weight: bold; margin-bottom: 8px;">Hello! I’m <span style="color: #FF5A5F;">{{ name }}</span></h2>
      <p style="font-size: 16px; color: #666;">{{ bio }}</p>
      <div style="margin-top: 20px;">
        <ion-button color="danger" style="margin-right: 8px;">Hire Me</ion-button>
        <ion-button fill="outline" color="primary" (click)="scrollToPortfolio()">Portfolio</ion-button>
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

- **`<ion-grid>`**: Komponen ini digunakan untuk membuat layout grid. Grid ini memberikan struktur yang responsif untuk konten di dalamnya.
- **`<ion-row>`**: Digunakan untuk membuat baris di dalam grid. Dalam contoh ini, baris ini dipusatkan secara vertikal dan horizontal, serta teks di dalamnya juga diatur ke tengah.
- **`<ion-col>`**: Digunakan untuk membuat kolom dalam baris. Dalam hal ini, terdapat dua kolom, satu untuk gambar profil dan satu untuk informasi tentang diri.
- **`<img>`**: Menampilkan gambar profil dengan gaya untuk membuatnya bulat (`border-radius: 50%`).
- **`<h2>`**: Judul yang menampilkan nama pengguna, dengan gaya untuk ukuran dan ketebalan font. Nama ditampilkan dalam warna khusus.
- **`<p>`**: Menampilkan bio pengguna.
- **`<ion-button>`**: Dua tombol yang masing-masing berfungsi untuk mengajak pengguna menyewa (Hire Me) dan untuk menggulir ke bagian portfolio (Portfolio).

### 2. Details Section
```html
<ion-card style="--ion-card-background: #ffffff; border-radius: 12px; padding: 20px; margin: 20px;">
  <ion-card-header>
    <ion-item lines="none" color="transparent">
      <ion-avatar slot="start">
        <img src="assets/image/galih.png" alt="Profile Photo">
      </ion-avatar>
      <ion-label>
        <h2 style="font-weight: bold;">{{ name }}</h2>
        <p>NIM: {{ nim }}</p>
        <p>Shift Lama: {{ shiftLama }} | Shift Baru: {{ shiftBaru }}</p>
      </ion-label>
    </ion-item>
  </ion-card-header>
  <ion-card-content>
    <p style="color: #666; line-height: 1.6;">I am an aspiring graphic designer looking for new challenges to improve my skills...</p>
    <ion-item lines="none" color="transparent" style="margin-top: 20px;">
      <ion-icon name="call-outline" slot="start"></ion-icon>
      <ion-label>{{ contact }}</ion-label>
    </ion-item>
    <ion-item lines="none" color="transparent">
      <ion-icon name="mail-outline" slot="start"></ion-icon>
      <ion-label>{{ email }}</ion-label>
    </ion-item>
    <ion-item lines="none" color="transparent">
      <ion-icon name="location-outline" slot="start"></ion-icon>
      <ion-label>{{ address }}</ion-label>
    </ion-item>
    <ion-button expand="block" color="primary" style="margin-top: 20px;" [href]="cvLink" download>
      <ion-icon slot="start" name="download-outline"></ion-icon>
      Download CV
    </ion-button>
  </ion-card-content>
</ion-card>
```

- **`<ion-card>`**: Komponen ini digunakan untuk membuat kartu yang memberikan tampilan terpisah dan menarik bagi konten.
- **`<ion-card-header>`**: Bagian atas kartu yang biasanya digunakan untuk menampilkan informasi header.
- **`<ion-item>`**: Digunakan untuk membuat item dalam daftar atau kartu. Di sini, item digunakan untuk menampilkan foto profil dan informasi pengguna.
- **`<ion-avatar>`**: Menampilkan gambar sebagai avatar dengan ukuran yang disesuaikan.
- **`<ion-label>`**: Menampilkan teks, termasuk nama pengguna, NIM, dan shift.
- **`<ion-card-content>`**: Bagian isi dari kartu yang menampilkan deskripsi pengguna, serta informasi kontak.
- **`<ion-icon>`**: Menampilkan ikon dari Ionic, digunakan untuk memberikan representasi visual untuk nomor telepon, email, dan alamat.
- **`<ion-button>`**: Tombol untuk mengunduh CV pengguna. Menggunakan atribut `[href]` untuk mengarahkan ke tautan dokumen.

### 3. Portfolio Section
```html
<ion-grid id="portfolio" style="padding: 20px;">
  <ion-row>
    <!-- Portfolio Card 1 -->
    <ion-col size="12" size-md="4">
      <ion-card style="--ion-card-background: #ffffff; border-radius: 12px;">
        <ion-img src="assets/image/poster.png" alt="Design 1" style="border-top-left-radius: 12px; border-top-right-radius: 12px;"></ion-img>
        <ion-card-header>
          <ion-card-title style="font-weight: bold;">Creative Poster</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p style="color: #666;">A vibrant poster design for a fictional event.</p>
        </ion-card-content>
      </ion-card>
    </ion-col>

    <!-- Portfolio Card 2 -->
    <ion-col size="12" size-md="4">
      <ion-card style="--ion-card-background: #ffffff; border-radius: 12px;">
        <ion-img src="assets/image/logo.png" alt="Design 2" style="border-top-left-radius: 12px; border-top-right-radius: 12px;"></ion-img>
        <ion-card-header>
          <ion-card-title style="font-weight: bold;">Minimalist Logo</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p style="color: #666;">A clean and modern logo created for a brand concept.</p>
        </ion-card-content>
      </ion-card>
    </ion-col>

    <!-- Portfolio Card 3 -->
    <ion-col size="12" size-md="4">
      <ion-card style="--ion-card-background: #ffffff; border-radius: 12px;">
        <ion-img src="assets/image/baju.png" alt="Design 3" style="border-top-left-radius: 12px; border-top-right-radius: 12px;"></ion-img>
        <ion-card-header>
          <ion-card-title style="font-weight: bold;">Clothing Graphic</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p style="color: #666;">A unique graphic design for a clothing brand.</p>
        </ion-card-content>
      </ion-card>
    </ion-col>
  </ion-row>
</ion-grid>
```

- **`<ion-grid id="portfolio">`**: Mengatur layout untuk bagian portofolio, dengan ID untuk navigasi internal.
- **`<ion-row>`**: Menyusun kolom-kolom dalam baris.
- **`<ion-col>`**: Setiap kolom mewakili satu kartu dalam portofolio. Kolom ini responsif, dengan ukuran penuh pada perangkat kecil dan sepertiga pada perangkat lebih besar.
- **`<ion-card>`**: Membuat kartu untuk setiap item portofolio, dengan gambar dan informasi yang relevan.
- **`<ion-img>`**: Menampilkan gambar desain, dengan gaya untuk memberi efek sudut melengkung pada bagian atas.
- **`<ion-card-header>` dan `<ion-card-title>`**: Menampilkan judul desain yang ditampilkan dalam kartu.
- **`<ion-card-content>`**: Bagian isi kartu yang berisi deskripsi singkat tentang desain.

## Penggunaan Komponen Aboutme di HomePage

Setelah Anda membuat komponen `Aboutme` dalam proyek Ionic, Anda perlu menambahkan dan menggunakannya dalam halaman `Home`. Berikut adalah penjelasan tentang cara mengintegrasikan komponen `Aboutme` ke dalam `HomePage` dan cara kerjanya.

### 1. **Menambahkan Komponen ke Halaman Home**

#### a. **Template Halaman Home**
Di dalam file template `home.page.html`, Anda telah menambahkan komponen `Aboutme` seperti berikut:

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>Home</ion-title>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <app-aboutme></app-aboutme>
</ion-content>
```

- **Penjelasan:**
  - **`<ion-header>`**: Membuat header untuk halaman dengan toolbar yang berisi judul "Home" dan tombol menu.
  - **`<ion-content>`**: Menyediakan area konten yang dapat di-scroll. Di dalamnya, Anda menempatkan komponen `Aboutme`.
  - **`<app-aboutme>`**: Ini adalah tag kustom yang digunakan untuk menyertakan komponen `Aboutme`. Ketika halaman `Home` dirender, Angular akan mengganti tag ini dengan konten yang didefinisikan dalam komponen `Aboutme`.

#### b. **Module Halaman Home**
Di dalam file `home.module.ts`, Anda telah mengimpor dan mendeklarasikan `AboutmeComponent`:

```typescript
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { HomePage } from './home.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, AboutmeComponent],
})
export class HomePageModule {}
```

- **Penjelasan:**
  - **`CommonModule`**: Menyediakan fungsionalitas umum Angular seperti ngIf dan ngFor.
  - **`FormsModule`**: Menyediakan fungsionalitas untuk menangani formulir Angular.
  - **`IonicModule`**: Mengimpor semua komponen dan direktif dari Ionic.
  - **`HomePageRoutingModule`**: Mengatur routing untuk halaman `Home`.
  - **`AboutmeComponent`**: Anda mendeklarasikan `AboutmeComponent` di dalam `declarations`. Ini memberitahu Angular bahwa komponen ini akan digunakan dalam modul ini.

### 2. **Menggunakan Komponen Aboutme**

Setelah menambahkan `Aboutme` ke `HomePage`, saat aplikasi dijalankan, komponen ini akan dirender di dalam konten halaman. Berikut adalah alur yang terjadi:

1. **Rendering**: Ketika pengguna mengakses halaman `Home`, Angular akan memproses template `home.page.html`. Tag `<app-aboutme>` akan diidentifikasi dan digantikan dengan konten yang didefinisikan di dalam `AboutmeComponent`.
2. **Data Binding**: Data yang didefinisikan dalam `AboutmeComponent` (seperti `name`, `bio`, dan lainnya) akan di-bind secara otomatis ke elemen di dalam template `aboutme.component.html`. Ini memungkinkan tampilan data yang dinamis berdasarkan nilai-nilai yang ada di dalam komponen.
3. **Interaktivitas**: Jika ada metode atau interaksi di dalam `AboutmeComponent`, seperti metode `scrollToPortfolio()`, pengguna dapat berinteraksi dengan komponen tersebut, dan fungsionalitas tersebut akan dijalankan sesuai dengan logika yang telah didefinisikan.

