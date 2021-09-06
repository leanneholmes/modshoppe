const SHOP_DATA = {
  hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://i.ibb.co/V3b8cG9/hat1.png',
        price: 25
      },
      {
        id: 2,
        name: 'Wide Brim Fedora',
        imageUrl: 'https://i.ibb.co/MVBvpxv/hat4.png',
        price: 45
      },
      {
        id: 3,
        name: 'Sage Rancher',
        imageUrl: 'https://i.ibb.co/pr8DbWs/hat2.png',
        price: 35
      },
      {
        id: 4,
        name: 'White Brim',
        imageUrl: 'https://i.ibb.co/XzGFm1R/hat3.png',
        price: 25
      },
      {
        id: 5,
        name: 'Black Fedora',
        imageUrl: 'https://i.ibb.co/vXpP09W/hat5.png',
        price: 45
      },
      {
        id: 6,
        name: 'Bre Hat',
        imageUrl: 'https://i.ibb.co/Xj6yTMM/hat3.png',
        price: 26
      },
      {
        id: 7,
        name: 'Annabelle Hat',
        imageUrl: 'https://i.ibb.co/MVRSFK9/hat6.png',
        price: 38
      },
      {
        id: 8,
        name: 'Flat Brim',
        imageUrl: 'https://i.ibb.co/Qc6BNP1/hat7.png',
        price: 20
      }
    ]
  },
  shoes: {
    id: 2,
    title: 'Shoes',
    routeName: 'shoes',
    items: [
      {
        id: 10,
        name: 'Knit Running Shoes',
        imageUrl: 'https://i.ibb.co/Jt6t0rx/shoes1.png',
        price: 120
      },
      {
        id: 11,
        name: 'Leather Loafers',
        imageUrl: 'https://i.ibb.co/p0JqWVm/shoes2.png',
        price: 180
      },
      {
        id: 12,
        name: 'Dress Shoes',
        imageUrl: 'https://i.ibb.co/JQCd0zY/shoes3.png',
        price: 110
      },
      {
        id: 13,
        name: 'Minmalist Sandals',
        imageUrl: 'https://i.ibb.co/nnBSbjT/shoes4.png',
        price: 80
      },
      {
        id: 14,
        name: 'Ballet Flats',
        imageUrl: 'https://i.ibb.co/LddB40z/shoes5.png',
        price: 160
      },
      {
        id: 15,
        name: 'Studded Shoes',
        imageUrl: 'https://i.ibb.co/j43zZVT/shoes6.png',
        price: 160
      },
      {
        id: 16,
        name: 'Ankle Boots',
        imageUrl: 'https://i.ibb.co/Y21vgKf/shoes7.png',
        price: 190
      },
      {
        id: 17,
        name: 'Fabric Heeled Boots',
        imageUrl: 'https://i.ibb.co/xsKRN2k/shoes8.png',
        price: 200
      }
    ]
  },
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Ecru Brushed Jacket',
        imageUrl: 'https://i.ibb.co/h1GPvh3/jacket1.png',
        price: 125
      },
      {
        id: 19,
        name: 'Satin Duster',
        imageUrl: 'https://i.ibb.co/mtCN4H8/jacket2.png',
        price: 90
      },
      {
        id: 20,
        name: 'Technical Jacket',
        imageUrl: 'https://i.ibb.co/D4XF7wf/jacket3.png',
        price: 90
      },
      {
        id: 21,
        name: 'Suede Jacket',
        imageUrl: 'https://i.ibb.co/FwwwGxt/jacket4.png',
        price: 165
      },
      {
        id: 22,
        name: 'Grey Puffer',
        imageUrl: 'https://i.ibb.co/ypDfFg6/jacket5.png',
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Utility Top',
        imageUrl: 'https://i.ibb.co/x3hZBGC/womens1.png',
        price: 65
      },
      {
        id: 24,
        name: 'Silk Blouse',
        imageUrl: 'https://i.ibb.co/cbqFDNn/women2.png',
        price: 40
      },
      {
        id: 25,
        name: 'Sweater Dress',
        imageUrl: 'https://i.ibb.co/M8dZ50j/womens3.png',
        price: 80
      },
      {
        id: 26,
        name: 'Knit Sweater',
        imageUrl: 'https://i.ibb.co/GVZvB7q/womens4.png',
        price: 80
      },
      {
        id: 27,
        name: 'Illustrator Vest',
        imageUrl: 'https://i.ibb.co/YQ6cXvy/womens5.png',
        price: 45
      },
      {
        id: 28,
        name: 'Linen Blazer',
        imageUrl: 'https://i.ibb.co/0Msbdfc/womens6.png',
        price: 135
      },
      {
        id: 29,
        name: 'Dress Pants',
        imageUrl: 'https://i.ibb.co/h25y6dk/womens7.png',
        price: 120
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Abstract Shirt',
        imageUrl: 'https://i.ibb.co/gMzz74z/mens.png',
        price: 95
      },
      {
        id: 31,
        name: 'Denim Shirt',
        imageUrl: 'https://i.ibb.co/48C4mjk/mens2.png',
        price: 125
      },
      {
        id: 32,
        name: 'Tan Polo',
        imageUrl: 'https://i.ibb.co/BL0hZj4/mens3.png',
        price: 65
      },
      {
        id: 33,
        name: 'Leather Pants',
        imageUrl: 'https://i.ibb.co/Qvf6psR/mens4.png',
        price: 145
      },
      {
        id: 34,
        name: 'Knit Sweater',
        imageUrl: 'https://i.ibb.co/ngt6mFK/mens5.png',
        price: 40
      },
      {
        id: 35,
        name: 'Grey Cardigan',
        imageUrl: 'https://i.ibb.co/ZT2H4Cv/mens6.png',
        price: 65
      }
    ]
  }
};

export default SHOP_DATA;
