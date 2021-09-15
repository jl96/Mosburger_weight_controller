var app = new Vue({
    el: '#app',
    data: {
        itemList: [
            {
                id: '1',
                itemName: '樂活嫩雞沙拉',
                imgUrl: 'https://www.mos.com.tw/upload/product/20210816_115252_008.jpg',
                price: '89',
                kcal: '115.8 ',
                count: '1'
            },
            {
                id: '2',
                itemName: '摩斯辣味雞塊(8個)',
                imgUrl: 'https://www.mos.com.tw/upload/product/20210816_121219_023.jpg',
                price: '99',
                kcal: '417.8 ',
                count: '1'
            },
            {
                id: '3',
                itemName: '摩斯辣味雞塊(5個)',
                imgUrl: 'https://www.mos.com.tw/upload/product/20210816_101837_040.jpg',
                price: '60',
                kcal: '261.1',
                count: '1'
            },
            {
                id: '4',
                itemName: '摩斯肉醬薯條',
                imgUrl: 'https://www.mos.com.tw/upload/product/20210726_090739_041.jpg',
                price: '70',
                kcal: '505.4',
                count: '1'
            },
            {
                id: '5',
                itemName: '樂活鮮蔬沙拉',
                imgUrl: '	https://www.mos.com.tw/upload/product/20210816_115612_047.jpg',
                price: '65',
                kcal: '73.8',
                count: '1'
            },
            {
                id: '6',
                itemName: '金魷魚薯餅組',
                imgUrl: 'https://www.mos.com.tw/upload/product/20210118_171521_034.jpg',
                price: '55',
                kcal: '321.2',
                count: '1'
            },
            {
                id: '7',
                itemName: '北海道栗南瓜可樂餅',
                imgUrl: 'https://www.mos.com.tw/upload/product/20180928_100333_084.jpg',
                price: '45',
                kcal: '211.6',
                count: '1'
            },
            {
                id: '8',
                itemName: '和風雞腿塊',
                imgUrl: 'https://www.mos.com.tw/upload/product/20160204_144152_097.jpg',
                price: '65',
                kcal: '275.8',
                count: '1'
            },
            {
                id: '9',
                itemName: 'MOS洋蔥圈',
                imgUrl: 'https://www.mos.com.tw/upload/product/20191101_003233_069.jpg',
                price: '60',
                kcal: '322.8',
                count: '1'
            },
            {
                id: '10',
                itemName: '雞腿塊薯條組',
                imgUrl: 'https://www.mos.com.tw/upload/product/20170119_132104_007.jpg',
                price: '55',
                kcal: '362.9',
                count: '1'
            },
            {
                id: '11',
                itemName: '摩斯雞塊',
                imgUrl: 'https://www.mos.com.tw/upload/product/20180928_184212_015.jpg',
                price: '55',
                kcal: '431',
                count: '1'
            },
            {
                id: '12',
                itemName: '薯條(L)',
                imgUrl: 'https://www.mos.com.tw/upload/product/20180601_170457_088.jpg',
                price: '45',
                kcal: '446',
                count: '1'
            },
            {
                id: '13',
                itemName: '薯條(S)',
                imgUrl: 'https://www.mos.com.tw/upload/product/20180601_170521_062.jpg',
                price: '35',
                kcal: '267',
                count: '1'
            },
            {
                id: '14',
                itemName: '雞塊薯條組',
                imgUrl: '	https://www.mos.com.tw/upload/product/20180731_171404_070.jpg',
                price: '60',
                kcal: '593',
                count: '1'
            },
            {
                id: '15',
                itemName: '方塊薯餅(3個)',
                imgUrl: 'https://www.mos.com.tw/upload/product/20160218_174019_044.jpg',
                price: '35',
                kcal: '227.2',
                count: '1'
            },
            {
                id: '16',
                itemName: '北海道可樂餅',
                imgUrl: 'https://www.mos.com.tw/upload/product/20160204_143344_049.jpg',
                price: '35',
                kcal: '176',
                count: '1'
            },
            {
                id: '17',
                itemName: '和風炸雞',
                imgUrl: 'https://www.mos.com.tw/upload/product/20160204_142839_079.jpg',
                price: '65',
                kcal: '472',
                count: '1'
            },
            {
                id: '18',
                itemName: '法蘭克熱狗',
                imgUrl: 'https://www.mos.com.tw/upload/product/20160204_143231_074.jpg',
                price: '35',
                kcal: '158',
                count: '1'
            },
            {
                id: '19',
                itemName: '新夏威夷鮮蔬沙拉',
                imgUrl: 'https://www.mos.com.tw/upload/product/20160204_142713_082.jpg',
                price: '40',
                kcal: '97',
                count: '1'
            },
            {
                id: '20',
                itemName: '雞肉地瓜總匯沙拉',
                imgUrl: 'https://www.mos.com.tw/upload/product/20180928_095646_003.jpg',
                price: '65',
                kcal: '166.5',
                count: '1'
            },
        ]
    },
    methods: {
        handlePlus: function (item) {
            item.count++;
        },
        handleSub: function (item) {
            if (item.count > 1) {
                item.count--;
            }
        },
        handledelete: function (index) {
            console.log(this);
            this.itemList.splice(index, 1);
        }
    },
    computed: {

    }

})