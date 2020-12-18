// yandex map

function yandexMap(){
    ymaps.ready(init);
        
    function init(){     
        
        var myMap;
        
        myMap = new ymaps.Map("contacts-map", {
            center: [55.67399106906445,37.580310500000024],
            zoom: 16,
            controls: []
        });
        
        myMap.behaviors.disable('scrollZoom');
    
        var myPlacemark = new ymaps.Placemark([55.67399106906445,37.580310500000024], {
        },
            { 
                preset: 'islands#redIcon',
            });     
        
        myMap.geoObjects.add(myPlacemark);
    }
};
yandexMap();
function yandexMap2(){
    ymaps.ready(init);
        
    function init(){     
        
        var myMap;
        
        myMap = new ymaps.Map("contacts-map-2", {
            center: [55.67399106906445,37.580310500000024],
            zoom: 16,
            controls: []
        });
        
        myMap.behaviors.disable('scrollZoom');
    
        var myPlacemark = new ymaps.Placemark([55.67399106906445,37.580310500000024], {
        },
            { 
                preset: 'islands#redIcon',
            });     
        
        myMap.geoObjects.add(myPlacemark);
    }
};
yandexMap2();
function yandexMap3(){
    ymaps.ready(init);
        
    function init(){     
        
        var myMap;
        
        myMap = new ymaps.Map("contacts-map-3", {
            center: [55.67399106906445,37.580310500000024],
            zoom: 16,
            controls: []
        });
        
        myMap.behaviors.disable('scrollZoom');
    
        var myPlacemark = new ymaps.Placemark([55.67399106906445,37.580310500000024], {
        },
            { 
                preset: 'islands#redIcon',
            });     
        
        myMap.geoObjects.add(myPlacemark);
    }
};
yandexMap3();