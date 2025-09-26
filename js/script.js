document.addEventListener('DOMContentLoaded', () => {

    function sapaPengguna() {
        let namaPengguna = prompt("Siapa nama Anda?");

        if (namaPengguna) {
            document.getElementById('nama-pengguna').textContent = namaPengguna;
        }
    }
    sapaPengguna();

    const menuItems = [
        {
            nama: "Yoghurt Dessert",
            deskripsi: "yoghurt lembut dengan topping buah segar dan taburan musley oat serta madu alami dan strawberry jam yang manis.",
            harga: "Rp 15.000",
            gambar: "images/Gemini_Generated_Image_6hbyzk6hbyzk6hby.png" 
        },
        {
            nama: "Original Yoghurt Drink",
            deskripsi: "Yoghurt original yang lembut dan klasik, dengan jelly yang kenyal, cocok untuk diminum dan dinikmati dengan dengan topping apapun.",
            harga: "Rp 15.000",
            gambar: "images/Gemini_Generated_Image_23h4hy23h4hy23h4.png" 
        },
        {
            nama: "Mango Yoghurt Drink",
            deskripsi: "Kesegaran yoghurt alami dengan perpaduan rasa mangga yang diambil dari mangga harumanis yang segar, memberikan rasa yang otentik untuk diminum",
            harga: "Rp 15.000",
            gambar: "images/Gemini_Generated_Image_t5bw8ot5bw8ot5bw.png" 
        },
        {
            nama: "Strawberry Yoghurt Drink",
            deskripsi: "Yoghurt alami dengan perpaduan rasa strawberry yang manis dan segar, tanpa gula tambahan dan rendah kalori, dan mampu untuk menyegarkan dahaga",
            harga: "Rp 15.000",
            gambar: "images/Gemini_Generated_Image_ynjg7tynjg7tynjg.png" 
        }
    
    ];

    let currentIndex = 0;
    const imgElement = document.getElementById('produk-gambar');
    const namaElement = document.getElementById('produk-nama');
    const deskripsiElement = document.getElementById('produk-deskripsi');
    const hargaElement = document.getElementById('produk-harga');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    function updateSlider() {
        const currentItem = menuItems[currentIndex];
        imgElement.src = currentItem.gambar;
        namaElement.textContent = currentItem.nama;
        deskripsiElement.textContent = currentItem.deskripsi;
        hargaElement.textContent = currentItem.harga;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % menuItems.length;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
        updateSlider();
    });

    updateSlider();

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});