<template>
  <div>
    <h2>Категория: {{ categoryTitle }}</h2>
    <div id="product-grid" class="product-grid">
      <div v-for="product in categoryProducts" :key="product.name" class="product-item">
        <img :src="product.image" :alt="product.name" />
        <div class="product-name">{{ product.name }}</div>
        <div class="product-price">{{ product.price }}</div>
        <div class="product-discount">{{ product.discount }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHome',  
  data() {
    return {
      categoryTitle: 'Creams', // Default category
      products: {
        creams: [
                {
                    name: ' Texture DDM Dynamic Day Make-Up, Динамический дневной тональный крем 30 SPF, 50мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/e5a/500_500_1/gqjz6r9c03dr1z9bfe5te674luq5n18z.jpg',
                    price: '27 999тг.',
                    discount: '29 999тг.'
                },
                {
                    name: 'Texture Magic Eye Rescue, Крем для век питательный, 100 мл',
                    image: 'https://www.gigi.ru/upload/iblock/36c/ss1yhbey2spfqu7yy857y0cr6e8kuehw.jpg',
                    price: '25 599тг.',
                    discount: '27 999.'
                },
                {
                    name: 'Texture Magic Eye Rescue, Крем для век питательный, 20мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/c04/500_500_1/qve5m1si2sprf0gnmewys6dpsd27ckgo.jpg',
                    price: '33 999тг.',
                    discount: '35 999тг.'
                },
                {
                    name: '23104 Texture Magic Eye Rescue, Крем для век питательный, 20мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/c67/500_500_1/8vp8jpzxegi614p0geft61cyc1a1g060.jpg',
                    price: '18 999тг.',
                    discount: '20 999тг.'
                },
                {
                    name: '23104 Texture Magic Eye Rescue, Крем для век питательный, 20мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/c67/500_500_1/8vp8jpzxegi614p0geft61cyc1a1g060.jpg',
                    price: '15 999тг.',
                    discount: '18 999тг.'
                },
                {
                    name: ' Texture Surface Hydration Moist, крем дневной увлажняющий для всех типов кожи, 50мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/fa6/500_500_1/fyo2zqrxcp0v41gqpbw2tuufaegmqacf.jpg',
                    price: '15 999тг.',
                    discount: '18 999тг.'
                },
                {
                    name: ' Skin Lightening cream, Крем отбеливающий мультикислотный, 50мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/b08/500_500_1/5nteu0ij4g11jxjh1tcix6ilhvap9yoj.jpg',
                    price: '15 999тг.',
                    discount: '18 999тг.'
                },
                {
                    name: ' Melano Block, Крем депигментирующий, 30 мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/70c/500_500_1/1v9aqqxct8ivu5zmvxqd3sg9evlbyriv.jpg',
                    price: '15 999тг.',
                    discount: '18 999тг.'
                },
                {
                    name: 'RA MRS cream, Восстанавливающий крем осветл, 75 мл',
                    image: 'https://www.gigi.ru/upload/iblock/54c/71c1hwz0ch1evay1jjn1g1qspem4h7m7.jpg',
                    price: '15 999тг.',
                    discount: '18 999тг.'
                },
                {
                    name: 'NP 10% Lactic cream ночной крем с мол.кислотой, 50мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/657/500_500_1/7s19ws70df8fm74m5380ksyoznpn6rkj.jpg',
                    price: '15 999тг.',
                    discount: '18 999тг.'
                },
                {
                    name: 'BP Тональный корректор SPF 15, 75 мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/941/500_500_1/oe7it9w6p4903njqa43dhthgd71pqh50.jpg',
                    price: '15 999тг.',
                    discount: '18 999тг.'
                },
                {
                    name: 'NP 10% Glycolic Cream Крем с 10% гликолиевой к-той для всех тип кож, 50мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/a2f/500_500_1/6b35a4uhyqe970p411q0xr3v3hnn22ks.jpg',
                    price: '15 999тг.',
                    discount: '18 999тг.'
                },
                {
                    name: 'NP 10% Glycolic Cream Крем с 10% гликолиевой к-той для всех тип кож, 50мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/a2f/500_500_1/6b35a4uhyqe970p411q0xr3v3hnn22ks.jpg',
                    price: '15 999тг.',
                    discount: '18 999тг.'
                },
                {
                    name: 'New Age G4 Day cream SPF 20 PROMO, Крем дневн. омолаж, 15мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/361/500_500_1/puc6xxf9vl1f1il7bfziq2yg16m23810.jpg',
                    price: '15 999тг.',
                    discount: '18 999тг.'
                },
                {
                    name: 'EsC крем улучшающий цвет лица, 50 мл.',
                    image: 'https://www.gigi.ru/upload/iblock/e2a/gr16uijarp6colcjjd9sgcoducuuytx2.jpg',
                    price: '15 999тг.',
                    discount: '18 999тг.'
                },
            ],
        },
            lotions: [
                
                {
                    name: 'Антисептический заживляющий гель GIGI Acnon Spot Gel, 5 гр.',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/809/500_500_1/qpv0t8z1o86m93vcpz5822g2fobixuw3.jpg',
                    price: '15 500тг.',
                    discount: '17 500тг.'
                },
                {
                    name: 'Лосьон обезжириватель GIGI Glycopure Degreaser Step 3, 250 мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/50f/500_500_1/lefybupvhg9vi422rjt83z4jky9mxujc.jpg',
                    price: '10 500тг.',
                    discount: '12 600тг.'
                },
            ],
            masks: [
                {
                    name: 'New Age G4 Mousse Mask, Маска мусс лифтинг, 150мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/041/500_500_1/x0b51m5zr8o54q4kt3ze7p0agn2su9wr.jpg',
                    price: '33 033тг.',
                    discount: '36 708тг.'
                },
                {
                    name: 'Маска для волос увлажняющая GIGI Where Ever You Are Hydrating Hair Mask, 75 мл',
                    image: 'https://www.gigi.ru/upload/iblock/4bc/4elp7a1e5lfvcwajiq1wevt694v2f6cr.jpg',
                    price: '14 343тг.',
                    discount: '15 939тг.'
                },
                {
                    name: 'Маска альгинатная GIGI New Age G4 Rejuvenating Algae Peel Off Mask, 30 г',
                    image: 'https://www.gigi.ru/upload/iblock/f39/bw0gnh8li2g43b96l2mcsuzwgnklx6f4.jpg',
                    price: '7 999тг.',
                    discount: '8 999тг.'
                },
                {
                    name: 'Маска молочная GIGI Lotus Beauty Buttermilk Mask, 75 мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/85c/500_500_1/mehd8f12798sp8wosjxemtmdkj4rrdpy.jpg',
                    price: '20 650тг.',
                    discount: '22 925тг.'
                },
                {
                    name: 'Маска-мусс экспресс увлажнение GIGI New Age G4 Nutritious Mousse Mask, 75 мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/f95/500_500_1/a40i502sofs6djdimri8mk2fafa6zy8l.jpg',
                    price: '48 622тг.',
                    discount: '54 800тг.'
                },
                {
                    name: 'Маска-мусс экспресс увлажнение GIGI New Age G4 Nutritious Mousse Mask, 75 мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/f95/500_500_1/a40i502sofs6djdimri8mk2fafa6zy8l.jpg',
                    price: '48 622тг.',
                    discount: '54 800тг.'
                },
                {
                    name: 'Маска-мусс экспресс увлажнение GIGI New Age G4 Nutritious Mousse Mask, 75 мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/f95/500_500_1/a40i502sofs6djdimri8mk2fafa6zy8l.jpg',
                    price: '48 622тг.',
                    discount: '54 800тг.'
                },
                {
                    name: 'Маска «Спящая Красавица» GIGI City NAP Urban Sleepeng Mask, 50 мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/1da/500_500_1/xnrd92wgy1l5i65m0lcrzk67bs627avk.jpg',
                    price: '27 999тг.',
                    discount: '38 555тг.'
                },
                {
                    name: 'Лечебная маска GIGI Sea Weed Treatment Mask, 250 мл',
                    image: 'https://www.gigi.ru/upload/iblock/3a5/3ry0tfa4e0u2zurln8q5yd934cnffz00.jpg',
                    price: '70 999тг.',
                    discount: '72 500тг.'
                },
             ],
             ochistca: [
                {
                    name: ' Мыло для чувствительной кожи GIGI Acnon Smoothing Facial Cleanser, 100 мл',
                    image: 'https://www.gigi.ru/upload/iblock/5cd/fmqcssdwrcdpg0xtvfm9la0av22n38v0.jpg',
                    price: '27 999тг.',
                    discount: '29 999тг.'
                },
                {
                    name: ' Мыло для глубокого очищения GIGI Acnon Smoothing Facial Cleanser, 100 млМыло для чувствительной кожи GIGI Acnon Smoothing Facial Cleanser, 100 мл',
                    image: 'https://www.gigi.ru/upload/iblock/721/64zwi6i5xt80143zp74zpmi4o5d7e57y.jpg',
                    price: '25 999тг.',
                    discount: '27 999тг.'
                },
                {
                    name: 'Мыло для глубокого очищения GIGI Acnon Smoothing Facial Cleanser, 200 мл',
                    image: 'https://www.gigi.ru/upload/iblock/53c/2oj7d023141719bawl70m00y3t31l48d.jpg',
                    price: '27 999тг.',
                    discount: '29 999тг.'
                },
                {
                    name: 'Мыло жидкое GIGI Lipacid Facial Soap, 500 млМыло для глубокого очищения GIGI Acnon Smoothing Facial Cleanser, 200 мл',
                    image: 'https://www.gigi.ru/upload/iblock/255/31taewzgkzjtuvij3ebp1pvyy78hgdmc.jpg',
                    price: '55 999тг.',
                    discount: '57 999тг.'
                },
                {
                    name: 'Жидкое мыло GIGI Solar Energy Mud Soapless Soap, 120 мл',
                    image: 'https://www.gigi.ru/upload/resize_cache/iblock/b0b/500_500_1/cc5f1rzc3863ymgbm4c2ymmsvu3b5ixm.jpg',
                    price: '29 999тг.',
                    discount: '35 999тг.'
                },
            ],
            s: [
                {
                    name: ' Е сыворотка увлажняющая, 120 мл',
                    image: 'https://www.gigi.ru/upload/iblock/a66/2loql3wdkw1bc09veh4g39iiy7kw7hjj.jpg',
                    price: '95 999тг.',
                    discount: '97 999тг.'
                },
                {
                    name: ' Бустер биовосстанавливающий GIGI Ester C Bio Repair Booster, 92 мл',
                    image: 'https://www.gigi.ru/upload/iblock/76d/6pyhaoqau7rphdcgr8xf61fqvay3uyzm.jpg',
                    price: '73 999тг.',
                    discount: '75 999тг.'
                },
                {
                    name: ' Бустер биовосстанавливающий GIGI Ester C Bio Repair Booster, 92 мл',
                    image: 'https://www.gigi.ru/upload/iblock/76d/6pyhaoqau7rphdcgr8xf61fqvay3uyzm.jpg',
                    price: '73 999тг.',
                    discount: '75 999тг.'
                },
              ],

        // Add more categories and products here...
              
      categoryProducts: []
    };
  },
  mounted() {
    this.showCategory(this.categoryTitle);
  },
  methods: {
    showCategory(category) {
      this.categoryProducts = this.products[category];
    }
  }
};
</script>

<style scoped>
.product-grid {
  display: flex;
  flex-wrap: wrap;
}

.product-item {
  margin: 10px;
  width: 200px;
}

.product-name,
.product-price,
.product-discount {
  text-align: center;
}
</style>
