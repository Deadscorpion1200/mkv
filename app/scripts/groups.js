"use strict";

// Группы объектов
var groups = [{
    name: "Покушайки",
    style: {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './img/map-dot.png',
        // Размеры метки.
        iconImageSize: [12, 12],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
    },
    items: [{
        price: '45млн.',
        center: [59.937696, 30.316002],
        name: "Ресторан &quot;Калинка-Малинка1&quot;",
        content: "ДА ЧТО Ж ЭТО ТАКОЕ!?!?!?!?",
    }, {
        center: [59.940252, 30.315738],
        name: "Бар &quot;Сало-бар&quot;",
        content: "<strong>Выбор первой той самой легендарной метки на карте каталога</strong>",
    }, {
        center: [59.939939, 30.310287],
        name: "Ресторан &quot;Спотыкач&quot;",
        content: "<strong>Выбор первой той самой легендарной метки на карте каталога</strong>",
    }]
}];