import { ProductInfo } from './types';

// curated images for demo products (clothing, boots, seats, toys, accessories)
const curatedImages = [
    'https://imgs.search.brave.com/xmkj3X_Tr4z8gdSZD2Zn8ZifM9sOSQqXDS2aTO4K3Gc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcm9z/dGluZ2FuZGNvbmZl/dHRpLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8xMC9i/YWJ5LXN3ZWF0ZXIt/a25pdHRpbmctcGF0/dGVybnMtOS5qcGc', // baby clothes
    'https://imgs.search.brave.com/R4N6p3lvGlVnGf1-eAWAZUazlh7-2dLfNSukzNl2NDo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFhNGx4ak9jaEwu/anBn', // baby shoes
    'https://www.jollyroom.se/storage/8997BBAA1C15F91AFEDD33730C91C1D7038644DF4FDCD1649A4218138FCEC1CE/456cf5edd13b475d9213dc16880bb24a/300-450-0-jpg.Jpeg/media/b4566662a702405e9778b85e5bba7afd/BEEMOO-ONE-ALLBLACK-1895_5.jpeg', // stroller
    'https://www.jollyroom.se/storage/7F1826B2CA38B580DE74B23254FF172924CBFB548E1D3B230275F77DA66B34AA/a8b42b69ca5748d9b1d6d1ff43f37d27/337-450-0-jpg.Jpeg/media/3de34915eb1742458cf02f3d4d4792f0/12319-2139_1.jpeg', // knitted sweater
    'https://www.jollyroom.se/storage/795FF251D8D4FE886E9E92F0C05B55789F20A91ABF043E50B57D2829505C54DC/128d019b01ec4aa3941a1d8b5d571cb1/900-1200-0-jpg.Jpeg/media/70b4820a78da44b08333e7bd72e210e3/TJ427-4490_1.jpeg', // baby toy
    'https://www.jollyroom.se/storage/9930ACB76B714E69636C19E17EED80F1334CD249D10CF4B35672C39BC884C101/8b28a39b0a3946fc85ec7e929785d9ca/334-450-0-jpg.Jpeg/media/01045af9be6e4b6a80b3527847352a4a/505940-A98-1356_5.jpeg', // car seat
    'https://www.jollyroom.se/storage/615334A4AC8D27B719C1539C60C9040822BFC9EDE7B993F57ADBC0C2FECA31DF/34c76f49e7784d90a9da59281499695d/300-450-0-jpg.Jpeg/media/5fb9d01c75764504a5e391ab164d6dae/1820037_7MYXF421-2S-2254_5.jpeg', // boots
    'https://www.jollyroom.se/storage/530433D26BEA92F8920177E00ECD2E1BB2FD1D03D2616FE13DE8A31E84229964/c3696de9d2074515b8c81d4c594aa497/800-1200-0-jpg.Jpeg/media/95852d2295734551ba7c4d9145526cfb/CC-12PC-907146095-2798_5.jpeg', // soft toy
    'https://www.jollyroom.se/storage/53D208AE8C485B19C3FDB83B77A486AF1784630EC81CB2E2B121CCF489455EA1/71cb2f4127334d46a73353c11d12e479/337-450-0-jpg.Jpeg/media/43b955ed65ef4bd2ba4ee9d551a74977/ZA-DAVY-01-1228_1.jpeg', // baby blanket
    'https://www.jollyroom.se/storage/0F2A929E5D291271BBCA133D4FCC80984A9EAFC856521EAADE0ED042946137C6/24304290cf914a87bd98bc3f620da0c2/jpg/media/d0f5dc0f978545a7b5c223727681011a/BB-Mini3DJersey-021084-1242_5.jpg', // nursery decor
    'https://www.jollyroom.se/storage/A3D480EB4E889118C5DB09F9B96E909D31CF516F555812168BF6608558B42451/688b7e7fd4b2424093b28bf05e66bed7/900-1200-0-jpg.Jpeg/media/03a056b51a434bacbdaee5ab305c89df/%20BC-6500D-1765_1.jpeg', // playmat
    'https://www.jollyroom.se/storage/C6BE20EA80BFD93EBAD9CE22FBBE8F172F246438133063F3D6215F2B17ED3909/4f72dddb9c9d474690d5160693ec1e78/337-450-0-jpg.Jpeg/media/bc8f15a234df4f4698b0d32ae8768bdb/BD-LekhageFlex-671162600130010-1150_1.jpeg',
    'https://www.jollyroom.se/storage/FB369A4A6A421DD9591CA9A5967D1BD9F94F3F3B0B63C418EDC5AFD75319CF75/ea207fd289cb41f7802ce385bc96d738/300-400-0-jpg.Jpeg/media/3f43a3fa389a4d1c8db6e18dd28f8076/088808720-74266-2966_1.jpeg' // kids jacket
];

const demoNames = [
    'Cozy Knit Baby Sweater',
    'Soft Sole Winter Boots',
    'Beemoo One Duo Cart',
    'Canal Toys Photo Creator Retro Instant Kamera',
    'Tooky Toy Grocery Store',
    'Didriksons Monte Fleece Jacket, Winter Ocean Multi',
    'Alice & Fox Cubbie Folding Sofa 94x55 cm, Beige',
    'Cloudberry Castle Animal Farm Animal Set 12 pcs',
    'ZAZU Sleep Trainer Davy, Taupe',
    'BabyBjörn Mini Baby Carrier 3D Jersey, Dark Grey',
    'Neonate BC-6500D Digital Baby Monitor',
    'BabyDan Lekhage Flex Incl. Play mat Black',
    'Disney Frozen 2 Water Bottle '
];

export const products: ProductInfo[] = [
    {
        id: 1,
        imageUrl: 'https://www.jollyroom.no/storage/66A0C88F8E6BA634F01B1C20F80E71991CBFB9BB38FA5BA120C620FEF58A2E22/0005408b9a7a404286414c0e97f6391e/jpg/media/5bf4d2fcfb084442808e31b259323019/503825-I13-1356_5.jpg',
        category: 'Kids\' Clothing',
        name: 'Didriksons Lun Winter Jacket',
        subtitle: 'Rusty Wine',
        currentPrice: '65.99',
        originalPrice: '99.99',
        tags: [
            { text: 'Best in Test', bgColor: 'bg-blue-100', textColor: 'text-blue-700' },
            { text: 'Mid Season', bgColor: 'bg-purple-100', textColor: 'text-purple-700' },
        ],
        review: { avatarUrl: 'https://i.pravatar.cc/40?u=person1', text: 'Warm and flexible jacket!' },
        rating: 4.8,
        reviewCount: 31,
        colors: ['#B94E5A', '#9B89B3', '#79AC78', '#F3BAD6'],
    },
    {
        id: 2,
        imageUrl: 'https://streams.frend.dev/image/v1?url=https://vikingfootwear.centracdn.net/client/dynamic/images/735_edd834ed76-5-25100-4803-c-1350x0.jpg&width=3840&quality=80',
        category: 'Kids\' Shoes',
        name: 'Viking Ultra Lined Rubber Boots',
        subtitle: 'Grape/Grey',
        currentPrice: '47.99',
        originalPrice: '64.99',
        tags: [ 
            { text: 'Best in test', bgColor: 'bg-blue-100', textColor: 'text-blue-700' },
            { text: 'Super price', bgColor: 'bg-indigo-100', textColor: 'text-indigo-700' }
        ],
        review: { avatarUrl: 'https://i.pravatar.cc/40?u=person2', text: 'Love these winter boots! Bought now.' },
        rating: 4.9,
        reviewCount: 291,
        colors: ['#4d2d52', '#3b82f6', '#1f2937'],
    },
    {
        id: 3,
        imageUrl: 'https://www.jollyroom.no/storage/07145EBE41602B37619E245FEB68371DAC7F9F3CE1BB7B718D8492D51FC670F7/f144e00c4aba43c4b3143b22b86edcbc/337-450-0-jpg.Jpeg/media/50714be2d72144c7b3cc617938f44837/119263-009-4300_1.jpeg',
        category: 'Kids\' Shoes',
        name: 'Nordbjörn Snowfall Winter boots',
        subtitle: 'Navy',
        currentPrice: '44.99',
        originalPrice: '59.99',
        tags: [
            { text: 'Best in test', bgColor: 'bg-blue-100', textColor: 'text-blue-700' },
            { text: 'Super price', bgColor: 'bg-indigo-100', textColor: 'text-indigo-700' }
        ],
        review: { avatarUrl: 'https://i.pravatar.cc/40?u=person3', text: 'Solid and rain-resistant boots, so satisfied!' },
        rating: 4.5,
        reviewCount: 7,
        colors: ['#3b82f6', '#1f2937', '#a3e635', '#f9a8d4'],
    },
    {
        id: 4,
        imageUrl: 'https://cdn.shopify.com/s/files/1/0690/7111/0431/files/5100117C-8680_zoom_12.jpg?v=1760606383&width=1536&quality=75&format=pjpg',
        category: 'Strollers',
        name: 'Voksi Urban Travel Bag',
        subtitle: 'Meadow Green Wings',
        currentPrice: '229.50',
        originalPrice: '299.50',
        tags: [
            { text: 'Best in test', bgColor: 'bg-blue-100', textColor: 'text-blue-700' },
            { text: 'Super price', bgColor: 'bg-indigo-100', textColor: 'text-indigo-700' }
        ],
        review: { avatarUrl: 'https://i.pravatar.cc/40?u=person4', text: 'Super nice, soft and warm travel bag! Perfect.' },
        rating: 5,
        reviewCount: 35,
        colors: ['#84cc16', '#3b82f6', '#4b5563'],
    },
    {
        id: 5,
        imageUrl: 'https://www.fjellsport.no/assets/blobs/didriksons-aw2025-kids-a7r0370-1x1-c252-09949a42ed.jpeg?preset=tiny&dpr=2',
        category: 'Kids\' Clothing',
        name: 'Reimatec Gotland Overall',
        subtitle: 'Green Clay',
        currentPrice: '137.99',
        originalPrice: '174.99',
        tags: [
            { text: 'Best in test', bgColor: 'bg-blue-100', textColor: 'text-blue-700' },
            { text: 'Newness', bgColor: 'bg-pink-100', textColor: 'text-pink-700' }
        ],
        review: { avatarUrl: 'https://i.pravatar.cc/40?u=person5', text: 'Absolutely incredible overall! Definitely the...' },
        rating: 4.9,
        reviewCount: 7,
        colors: ['#84cc16', '#3b82f6', '#a3e635'],
    },
    ...Array.from({ length: 25 }, (_, i) => ({
        id: i + 6,
        imageUrl: curatedImages[i % curatedImages.length],
        category: ['Toys', 'Gifts', 'Nursery', 'Kids\' Clothing', 'Kids\' Shoes'][i % 5],
        name: demoNames[i % demoNames.length],
        subtitle: ['Fun Series', 'Cozy Collection', 'Playtime Essentials', 'Outdoor Gear', 'Cuddly Comfort'][i % 5],
        currentPrice: (20 + i * 3.5).toFixed(2),
        originalPrice: (25 + i * 4).toFixed(2),
        tags: i % 4 === 0 ? [{ text: 'Sale', bgColor: 'bg-red-100', textColor: 'text-red-700' }] : [],
        review: { avatarUrl: `https://i.pravatar.cc/40?u=person${i + 6}`, text: 'A really great find!' },
        rating: 4.5 + (i % 5) / 10,
        reviewCount: 10 + i * 5,
        colors: ['#3b82f6', '#10b981', '#f97316', '#9333ea'],
    }))
];
