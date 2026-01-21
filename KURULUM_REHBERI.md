# 🎮 Mixapark Kayseri - Web Site Kurulum ve Yönetim Rehberi

## 📋 İçindekiler
1. [Gereksinimler](#gereksinimler)
2. [Kurulum](#kurulum)
3. [Yapılandırma](#yapılandırma)
4. [SEO Optimizasyonu](#seo-optimizasyonu)
5. [Performans İyileştirmeleri](#performans-iyileştirmeleri)
6. [Bakım ve Güncelleme](#bakım-ve-güncelleme)

---

## 🔧 Gereksinimler

### Hosting Gereksinimleri
- **Web Server**: Apache veya Nginx
- **PHP**: 7.4 veya üzeri (opsiyonel, form işleme için)
- **HTTPS**: SSL Sertifikası (Let's Encrypt önerilir)
- **Disk Alanı**: Minimum 500MB

### Domain Ayarları
- Domain: `www.mixapark.com` (veya gerçek domain'iniz)
- SSL sertifikası aktif olmalı

---

## 📦 Kurulum

### 1. Dosyaları Yükleme
Tüm dosyaları hosting'in `public_html` veya `www` klasörüne yükleyin:

```
/public_html/
├── index.html
├── style.css
├── script.js
├── sitemap.xml
├── robots.txt
├── .htaccess
└── web/
    ├── logo3.png
    ├── logo1.PNG
    ├── video.mp4
    └── [diğer görseller]
```

### 2. Dosya İzinlerini Ayarlama
```bash
chmod 644 *.html
chmod 644 *.css
chmod 644 *.js
chmod 755 web/
chmod 644 web/*
```

---

## ⚙️ Yapılandırma

### 1. Domain Adını Güncelleme

#### a) `index.html` dosyasında:
- Satır 36: `og:url` meta tag'ini kendi domain'inizle değiştirin
- Satır 37-40: Open Graph image URL'lerini güncelleyin

#### b) `sitemap.xml` dosyasında:
- Tüm `https://www.mixapark.com/` URL'lerini kendi domain'inizle değiştirin

#### c) `robots.txt` dosyasında:
- Satır 8: Sitemap URL'ini güncelleyin

### 2. Google Analytics Kurulumu (OPSİYONEL)

`index.html` dosyasında 58-65. satırlar arasındaki yorumları kaldırın:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); <!-- Kendi ID'nizi buraya -->
</script>
```

**Google Analytics ID alma:**
1. https://analytics.google.com adresine gidin
2. Yeni özellik oluşturun
3. Ölçüm ID'sini (G-XXXXXXXXXX) kopyalayın
4. Yukarıdaki kod bloğuna yapıştırın

### 3. Google Search Console Doğrulama

`index.html` dosyasında 68. satırdaki yorumu kaldırın:

```html
<meta name="google-site-verification" content="your-verification-code" />
```

**Doğrulama kodu alma:**
1. https://search.google.com/search-console adresine gidin
2. "Mülk ekle" > "URL ön eki" seçin
3. Meta tag yöntemini seçin
4. Kodu kopyalayıp yapıştırın

---

## 🚀 SEO Optimizasyonu

### Yapılması Gerekenler

#### 1. Sitemap'i Google'a Gönderme
```
Google Search Console > Sitemap'ler > Yeni sitemap ekle
URL: https://www.mixapark.com/sitemap.xml
```

#### 2. Google My Business Kaydı
- https://business.google.com adresinden işletme kaydı oluşturun
- Konum bilgilerini ekleyin (Tuna Life Center, Kayseri)
- Çalışma saatlerini güncelleyin (10:00 - 22:00)
- Fotoğraflar ekleyin

#### 3. Sosyal Medya Entegrasyonu
- Instagram: @mixaparksquadgame (✅ Mevcut)
- Facebook Business Page oluşturun
- TikTok hesabı açmayı düşünün

#### 4. Yerel SEO Optimizasyonu
- Yandex Haritalar'a işletme ekleyin
- Foursquare/Swarm'a kayıt yapın
- Gezinomi gibi yerel rehberlere ekleyin

---

## ⚡ Performans İyileştirmeleri

### Yapılan İyileştirmeler ✅
- [x] Preconnect ve DNS-prefetch eklendi
- [x] Video lazy loading (preload="metadata")
- [x] Image lazy loading (Intersection Observer)
- [x] CSS/JS minification hazır
- [x] Browser caching (.htaccess)
- [x] GZIP compression (.htaccess)

### Önerilen İyileştirmeler

#### 1. Görsel Optimizasyonu
```bash
# ImageMagick ile görselleri optimize edin:
for file in web/*.jpeg; do
    convert "$file" -quality 85 -strip "$file"
done

# WebP formatına çevirin (daha küçük dosya boyutu):
for file in web/*.jpeg; do
    cwebp -q 85 "$file" -o "${file%.jpeg}.webp"
done
```

#### 2. Video Optimizasyonu
```bash
# FFmpeg ile video'yu optimize edin:
ffmpeg -i web/video.mp4 -vcodec h264 -acodec aac -strict -2 \
       -movflags +faststart -crf 23 web/video_optimized.mp4
```

#### 3. CDN Kullanımı
- Cloudflare (Ücretsiz): https://cloudflare.com
- Görseller ve video için CDN kullanımı önerilir

---

## 🔒 Güvenlik

### Mevcut Güvenlik Önlemleri ✅
- [x] HTTPS zorunluluğu (.htaccess)
- [x] Security headers (X-Frame-Options, X-XSS-Protection)
- [x] Directory browsing kapatıldı
- [x] Bad bot bloklama

### Ek Güvenlik Önerileri
1. Düzenli yedekleme yapın (haftada bir)
2. Hosting panel şifresini güçlü tutun
3. 2FA (İki faktörlü kimlik doğrulama) aktif edin

---

## 📊 Form Yönetimi

### WhatsApp Entegrasyonu ✅
Form gönderildiğinde otomatik olarak WhatsApp'a yönlendirme yapılıyor:
- Telefon: +90 538 558 27 63
- Mesaj formatı: İsim, E-posta, Telefon, Mesaj

### Alternatif Form Çözümleri
1. **Formspree** (Ücretsiz): https://formspree.io
2. **EmailJS** (Ücretsiz): https://www.emailjs.com
3. **Web3Forms** (Ücretsiz): https://web3forms.com

---

## 🎨 Tasarım Güncellemeleri

### Renk Değişimi
`style.css` dosyasında 8-22. satırlar arasındaki CSS değişkenlerini düzenleyin:

```css
:root {
    --primary-color: #5B2C91;    /* Ana mor renk */
    --secondary-color: #FDB827;   /* Sarı renk */
    --pink-color: #E91E8C;        /* Pembe (Squad Game) */
}
```

### Logo Değişimi
1. Yeni logoyu `web/logo3.png` olarak kaydedin
2. Boyut: 500x500px önerilir (PNG formatı, şeffaf arka plan)

---

## 📱 Mobil Uyumluluk

### Test Araçları
1. Google Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
2. PageSpeed Insights: https://pagespeed.web.dev

### Responsive Test
Site şu çözünürlüklerde test edilmiştir:
- ✅ Desktop (1920x1080)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667)
- ✅ Large Mobile (414x896)

---

## 🔄 Bakım ve Güncelleme

### Günlük Kontroller
- [ ] WhatsApp mesajlarını kontrol et
- [ ] Instagram yorumlarına yanıt ver
- [ ] Google My Business sorularını yanıtla

### Haftalık Kontroller
- [ ] Google Analytics verilerini incele
- [ ] Search Console hatalarını kontrol et
- [ ] Yedekleme yap

### Aylık Kontroller
- [ ] İçerik güncellemesi (yeni fotoğraflar)
- [ ] Blog yazısı ekle (opsiyonel)
- [ ] Fiyat güncellemesi (gerekirse)
- [ ] Sitemap güncelle

---

## 📞 Destek

### İletişim Bilgileri
- **Telefon**: +90 538 558 27 63
- **E-posta**: mixaparksquadgame@gmail.com
- **Instagram**: @mixaparksquadgame

### Teknik Sorunlar
Site ile ilgili teknik sorunlar için:
1. Hosting sağlayıcı desteği ile iletişime geçin
2. .htaccess dosyasını kontrol edin
3. Tarayıcı önbelleğini temizleyin (Ctrl+Shift+Delete)

---

## ✅ Yapılacaklar Listesi

### Hemen Yapılması Gerekenler
- [ ] Domain adını tüm dosyalarda güncelle
- [ ] Google Analytics kurulumu yap
- [ ] Google Search Console doğrulaması yap
- [ ] Google My Business kaydı oluştur
- [ ] SSL sertifikası kontrol et

### İsteğe Bağlı İyileştirmeler
- [ ] Görselleri WebP formatına çevir
- [ ] Video optimizasyonu yap
- [ ] CDN kurulumu yap
- [ ] Blog bölümü ekle
- [ ] Online rezervasyon sistemi entegrasyonu
- [ ] Fiyat listesi sayfası ekle
- [ ] Çoklu dil desteği (İngilizce)

---

## 📝 Versiyon Geçmişi

### v2.0 - 21 Ocak 2026
- ✅ Form accessibility iyileştirmesi (label'lar eklendi)
- ✅ SEO meta description optimize edildi
- ✅ Open Graph tam URL'ler eklendi
- ✅ Canonical URL eklendi
- ✅ Sitemap tarihi güncellendi
- ✅ Form WhatsApp entegrasyonu geliştirildi
- ✅ Performans iyileştirmeleri (preconnect, dns-prefetch)
- ✅ Video preload optimizasyonu

### v1.0 - Ocak 2026
- İlk versiyon

---

## 🎯 SEO Hedefleri

### Anahtar Kelimeler
1. **Birincil**: mixapark kayseri, kayseri çocuk oyun alanı
2. **İkincil**: trambolin park kayseri, squad game kayseri
3. **Uzun Kuyruk**: tuna life center çocuk oyun alanı, kayseri kapalı oyun alanı

### Hedef Metrikler
- Google ilk sayfa (3 ay içinde)
- Organik trafik: 1000+ ziyaretçi/ay
- Dönüşüm oranı: %5+
- Sayfa yüklenme hızı: <3 saniye

---

## 🏆 En İyi Uygulamalar

1. **İçerik Güncellemesi**: En az ayda bir yeni içerik ekleyin
2. **Sosyal Medya**: Düzenli paylaşımlar yapın (günde 1-2 gönderi)
3. **Müşteri Yorumları**: Google My Business'ta yorum toplayın
4. **Fotoğraf Galerisi**: Düzenli olarak yeni fotoğraflar ekleyin
5. **Özel Günler**: Bayram ve özel günlerde kampanya duyuruları yapın

---

**Son Güncelleme**: 21 Ocak 2026
**Hazırlayan**: Mustafa Göçmen
