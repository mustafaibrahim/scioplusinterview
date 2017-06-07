//Farms
var $farms = "http://www.scioplusinterview.com/frontend/api/farms.json";

//volumes
var $volumeFarm1 = "http://www.scioplusinterview.com/frontend/api/farms/1";
var $volumeFarm2 = "http://www.scioplusinterview.com/frontend/api/farms/2";

//Entities
var $entitiesFarm1 = "http://www.scioplusinterview.com/frontend/api/entities/farms/1/entities/entities.json";
var $entitiesFarm2 = "http://www.scioplusinterview.com/frontend/api/entities/farms/2/entities/entities.json";

//Farm one entities
var $farm1Entity1 = "http://www.scioplusinterview.com/frontend/api/entities/farms/1/entities/1";
var $farm1Entity2 = "http://www.scioplusinterview.com/frontend/api/entities/farms/1/entities/2";
var $farm1Entity3 = "http://www.scioplusinterview.com/frontend/api/entities/farms/1/entities/3";

//Farm two entities
var $farm2Entity1 = "http://www.scioplusinterview.com/frontend/api/entities/farms/2/entities/1";
var $farm2Entity2 = "http://www.scioplusinterview.com/frontend/api/entities/farms/2/entities/2";
var $farm2Entity3 = "http://www.scioplusinterview.com/frontend/api/entities/farms/2/entities/3";
var $farm2Entity4 = "http://www.scioplusinterview.com/frontend/api/entities/farms/2/entities/4";

$.when(
        $.get($farms),
        $.get($volumeFarm1),
        $.get($volumeFarm2),
        $.get($entitiesFarm1),
        $.get($entitiesFarm2),
        $.get($farm1Entity1),
        $.get($farm1Entity2),
        $.get($farm1Entity3),
        $.get($farm2Entity1),
        $.get($farm2Entity2),
        $.get($farm2Entity3),
        $.get($farm2Entity4))

    .then(function (resp1, resp2, resp3, resp4, resp5, resp6, resp7, resp8, resp9, resp10, resp11, resp12) {
        var farm1 = resp1[0][0],
            farm2 = resp1[0][1],
            volumeFarm1 = resp2[0],
            volumeFarm2 = resp3[0],
            entitiesFarm1 = resp4[0],
            entitiesFarm2 = resp5[0],
            farm1Entity1 = resp6[0],
            farm1Entity2 = resp7[0],
            farm1Entity3 = resp8[0],
            farm2Entity1 = resp9[0],
            farm2Entity2 = resp10[0],
            farm2Entity3 = resp11[0],
            farm2Entity4 = resp12[0];

        //Farm1
        $('.farm1').append(farm1.name);
        $('.volumeFarm1').append(volumeFarm1.volume);
        $.each(entitiesFarm1, function (i, value) {
            $('.entitiesFarm1Start').append('<span class="labels">' + 'Start Date for entity' + ' ' + value.id + '</span>' + '<span class="labels">' + ' ' + value.startDate + '</span>');
            $('.entitiesFarm1End').append('<span class="labels">' + 'End Date for entity' + ' ' + value.id + '</span>' + '<span class="labels">' + ' ' + value.endDate + '</span>' + '<hr>');
        });

        //Farm2
        $('.farm2').append(farm2.name);
        $('.volumeFarm2').append(volumeFarm2.volume);
        $.each(entitiesFarm2, function (i, value) {
            $('.entitiesFarm2Start').append('<span class="labels">' + 'Start Date for entity' + ' ' + value.id + '</span>' + '<span class="labels">' + ' ' + value.startDate + '</span>');
            $('.entitiesFarm2End').append('<span class="labels">' + 'End Date for entity' + ' ' + value.id + '</span>' + '<span class="labels">' + ' ' + value.endDate + '</span>' + '<hr>');
        });
    })
