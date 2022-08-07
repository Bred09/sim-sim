// Slider
$(function () {
    $(".slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

// Yandex maps
ymaps.ready(function () {
    let myMap = new ymaps.Map("ykarta", {
            center: [56.861173, 60.534998],
            zoom: 16.5,
        }),
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
        myPlacemark = new ymaps.Placemark(
            myMap.getCenter(),
            {
                balloonContent: `<h3>Сим-Сим, откройся!</h3><br>г. Екатеринбург
                ул. Миномётчиков, 3`,
            },
            {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: "default#image",
                // Своё изображение иконки метки.
                iconImageHref: "/img/icons/map_point.svg",
                // Размеры метки.
                iconImageSize: [60, 82],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-20, -74],
            }
        );

    myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
});
