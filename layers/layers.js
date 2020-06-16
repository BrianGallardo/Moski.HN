var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_BatimetraMoskitiam_2 = new ol.format.GeoJSON();
var features_BatimetraMoskitiam_2 = format_BatimetraMoskitiam_2.readFeatures(json_BatimetraMoskitiam_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatimetraMoskitiam_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatimetraMoskitiam_2.addFeatures(features_BatimetraMoskitiam_2);
var lyr_BatimetraMoskitiam_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatimetraMoskitiam_2, 
                style: style_BatimetraMoskitiam_2,
                interactive: true,
    title: 'Batimetría Moskitia (m)<br />\
    <img src="styles/legend/BatimetraMoskitiam_2_0.png" /> 25<br />\
    <img src="styles/legend/BatimetraMoskitiam_2_1.png" /> 50<br />\
    <img src="styles/legend/BatimetraMoskitiam_2_2.png" /> 100<br />\
    <img src="styles/legend/BatimetraMoskitiam_2_3.png" /> 250<br />\
    <img src="styles/legend/BatimetraMoskitiam_2_4.png" /> 500<br />\
    <img src="styles/legend/BatimetraMoskitiam_2_5.png" /> 750<br />\
    <img src="styles/legend/BatimetraMoskitiam_2_6.png" /> 1000<br />\
    <img src="styles/legend/BatimetraMoskitiam_2_7.png" /> 1250<br />\
    <img src="styles/legend/BatimetraMoskitiam_2_8.png" /> 1500<br />\
    <img src="styles/legend/BatimetraMoskitiam_2_9.png" /> 1750<br />\
    <img src="styles/legend/BatimetraMoskitiam_2_10.png" /> 2000<br />\
    <img src="styles/legend/BatimetraMoskitiam_2_11.png" /> 2500<br />\
    <img src="styles/legend/BatimetraMoskitiam_2_12.png" /> 3000<br />\
    <img src="styles/legend/BatimetraMoskitiam_2_13.png" /> 3500<br />\
    <img src="styles/legend/BatimetraMoskitiam_2_14.png" /> 4000<br />\
    <img src="styles/legend/BatimetraMoskitiam_2_15.png" /> 4500<br />'
        });
var format_costa_atlantica_3 = new ol.format.GeoJSON();
var features_costa_atlantica_3 = format_costa_atlantica_3.readFeatures(json_costa_atlantica_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_costa_atlantica_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_costa_atlantica_3.addFeatures(features_costa_atlantica_3);
var lyr_costa_atlantica_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_costa_atlantica_3, 
                style: style_costa_atlantica_3,
                interactive: true,
                title: '<img src="styles/legend/costa_atlantica_3.png" /> costa_atlantica'
            });
var format_LagunaBacalar_4 = new ol.format.GeoJSON();
var features_LagunaBacalar_4 = format_LagunaBacalar_4.readFeatures(json_LagunaBacalar_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LagunaBacalar_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LagunaBacalar_4.addFeatures(features_LagunaBacalar_4);
var lyr_LagunaBacalar_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LagunaBacalar_4, 
                style: style_LagunaBacalar_4,
                interactive: true,
                title: '<img src="styles/legend/LagunaBacalar_4.png" /> Laguna Bacalar'
            });
var format_GrillaMedusaIII_5 = new ol.format.GeoJSON();
var features_GrillaMedusaIII_5 = format_GrillaMedusaIII_5.readFeatures(json_GrillaMedusaIII_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GrillaMedusaIII_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrillaMedusaIII_5.addFeatures(features_GrillaMedusaIII_5);
var lyr_GrillaMedusaIII_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GrillaMedusaIII_5, 
                style: style_GrillaMedusaIII_5,
                interactive: true,
                title: '<img src="styles/legend/GrillaMedusaIII_5.png" /> Grilla Medusa III'
            });
var format_Grilla_Medusa_II_Cuadro_6 = new ol.format.GeoJSON();
var features_Grilla_Medusa_II_Cuadro_6 = format_Grilla_Medusa_II_Cuadro_6.readFeatures(json_Grilla_Medusa_II_Cuadro_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grilla_Medusa_II_Cuadro_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grilla_Medusa_II_Cuadro_6.addFeatures(features_Grilla_Medusa_II_Cuadro_6);
var lyr_Grilla_Medusa_II_Cuadro_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Grilla_Medusa_II_Cuadro_6, 
                style: style_Grilla_Medusa_II_Cuadro_6,
                interactive: true,
                title: '<img src="styles/legend/Grilla_Medusa_II_Cuadro_6.png" /> Grilla_Medusa_II_Cuadro'
            });
var format_Grilla_Medusa_I_Cuadro_7 = new ol.format.GeoJSON();
var features_Grilla_Medusa_I_Cuadro_7 = format_Grilla_Medusa_I_Cuadro_7.readFeatures(json_Grilla_Medusa_I_Cuadro_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grilla_Medusa_I_Cuadro_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grilla_Medusa_I_Cuadro_7.addFeatures(features_Grilla_Medusa_I_Cuadro_7);
var lyr_Grilla_Medusa_I_Cuadro_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Grilla_Medusa_I_Cuadro_7, 
                style: style_Grilla_Medusa_I_Cuadro_7,
                interactive: true,
                title: '<img src="styles/legend/Grilla_Medusa_I_Cuadro_7.png" /> Grilla_Medusa_I_Cuadro'
            });
var format_Zona_Medusa_Cuadro_8 = new ol.format.GeoJSON();
var features_Zona_Medusa_Cuadro_8 = format_Zona_Medusa_Cuadro_8.readFeatures(json_Zona_Medusa_Cuadro_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_Medusa_Cuadro_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_Medusa_Cuadro_8.addFeatures(features_Zona_Medusa_Cuadro_8);
var lyr_Zona_Medusa_Cuadro_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zona_Medusa_Cuadro_8, 
                style: style_Zona_Medusa_Cuadro_8,
                interactive: true,
                title: '<img src="styles/legend/Zona_Medusa_Cuadro_8.png" /> Zona_Medusa_Cuadro'
            });
var format_Grilla_Escama_Cuadro_9 = new ol.format.GeoJSON();
var features_Grilla_Escama_Cuadro_9 = format_Grilla_Escama_Cuadro_9.readFeatures(json_Grilla_Escama_Cuadro_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grilla_Escama_Cuadro_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grilla_Escama_Cuadro_9.addFeatures(features_Grilla_Escama_Cuadro_9);
var lyr_Grilla_Escama_Cuadro_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Grilla_Escama_Cuadro_9, 
                style: style_Grilla_Escama_Cuadro_9,
                interactive: true,
                title: '<img src="styles/legend/Grilla_Escama_Cuadro_9.png" /> Grilla_Escama_Cuadro'
            });
var format_Zona_Escama_Cuadro_10 = new ol.format.GeoJSON();
var features_Zona_Escama_Cuadro_10 = format_Zona_Escama_Cuadro_10.readFeatures(json_Zona_Escama_Cuadro_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_Escama_Cuadro_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_Escama_Cuadro_10.addFeatures(features_Zona_Escama_Cuadro_10);
var lyr_Zona_Escama_Cuadro_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zona_Escama_Cuadro_10, 
                style: style_Zona_Escama_Cuadro_10,
                interactive: true,
                title: '<img src="styles/legend/Zona_Escama_Cuadro_10.png" /> Zona_Escama_Cuadro'
            });
var format_Paratcnico_11 = new ol.format.GeoJSON();
var features_Paratcnico_11 = format_Paratcnico_11.readFeatures(json_Paratcnico_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paratcnico_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paratcnico_11.addFeatures(features_Paratcnico_11);
var lyr_Paratcnico_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Paratcnico_11, 
                style: style_Paratcnico_11,
                interactive: true,
    title: 'Paratécnico<br />\
    <img src="styles/legend/Paratcnico_11_0.png" /> Aurata<br />\
    <img src="styles/legend/Paratcnico_11_1.png" /> Barra de Karataska<br />\
    <img src="styles/legend/Paratcnico_11_2.png" /> Barra Patuca<br />\
    <img src="styles/legend/Paratcnico_11_3.png" /> Batalla<br />\
    <img src="styles/legend/Paratcnico_11_4.png" /> Kaukira<br />\
    <img src="styles/legend/Paratcnico_11_5.png" /> Kruta<br />\
    <img src="styles/legend/Paratcnico_11_6.png" /> Prumhnintara<br />\
    <img src="styles/legend/Paratcnico_11_7.png" /> Puerto Lempira<br />\
    <img src="styles/legend/Paratcnico_11_8.png" /> Tansing<br />\
    <img src="styles/legend/Paratcnico_11_9.png" /> Ujumbila<br />\
    <img src="styles/legend/Paratcnico_11_10.png" /> Yahurabila<br />'
        });
var format_PasantesUniversitarios_12 = new ol.format.GeoJSON();
var features_PasantesUniversitarios_12 = format_PasantesUniversitarios_12.readFeatures(json_PasantesUniversitarios_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PasantesUniversitarios_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PasantesUniversitarios_12.addFeatures(features_PasantesUniversitarios_12);
var lyr_PasantesUniversitarios_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PasantesUniversitarios_12, 
                style: style_PasantesUniversitarios_12,
                interactive: true,
    title: 'Pasantes Universitarios<br />\
    <img src="styles/legend/PasantesUniversitarios_12_0.png" /> 0<br />\
    <img src="styles/legend/PasantesUniversitarios_12_1.png" /> 1<br />\
    <img src="styles/legend/PasantesUniversitarios_12_2.png" /> 2<br />\
    <img src="styles/legend/PasantesUniversitarios_12_3.png" /> 3<br />\
    <img src="styles/legend/PasantesUniversitarios_12_4.png" /> 4<br />\
    <img src="styles/legend/PasantesUniversitarios_12_5.png" /> 5<br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_BatimetraMoskitiam_2.setVisible(true);lyr_costa_atlantica_3.setVisible(true);lyr_LagunaBacalar_4.setVisible(true);lyr_GrillaMedusaIII_5.setVisible(true);lyr_Grilla_Medusa_II_Cuadro_6.setVisible(true);lyr_Grilla_Medusa_I_Cuadro_7.setVisible(true);lyr_Zona_Medusa_Cuadro_8.setVisible(true);lyr_Grilla_Escama_Cuadro_9.setVisible(true);lyr_Zona_Escama_Cuadro_10.setVisible(true);lyr_Paratcnico_11.setVisible(true);lyr_PasantesUniversitarios_12.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,lyr_BatimetraMoskitiam_2,lyr_costa_atlantica_3,lyr_LagunaBacalar_4,lyr_GrillaMedusaIII_5,lyr_Grilla_Medusa_II_Cuadro_6,lyr_Grilla_Medusa_I_Cuadro_7,lyr_Zona_Medusa_Cuadro_8,lyr_Grilla_Escama_Cuadro_9,lyr_Zona_Escama_Cuadro_10,lyr_Paratcnico_11,lyr_PasantesUniversitarios_12];
lyr_BatimetraMoskitiam_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'depth': 'depth', 'Shape_Leng': 'Shape_Leng', });
lyr_costa_atlantica_3.set('fieldAliases', {'COSTA': 'COSTA', 'Shape_Leng': 'Shape_Leng', });
lyr_LagunaBacalar_4.set('fieldAliases', {'COSTA': 'COSTA', 'Shape_Leng': 'Shape_Leng', });
lyr_GrillaMedusaIII_5.set('fieldAliases', {'left': 'left', 'bottom': 'bottom', 'right': 'right', 'top': 'top', 'codigo': 'codigo', });
lyr_Grilla_Medusa_II_Cuadro_6.set('fieldAliases', {'left': 'left', 'bottom': 'bottom', 'right': 'right', 'top': 'top', 'codigo': 'codigo', });
lyr_Grilla_Medusa_I_Cuadro_7.set('fieldAliases', {'left': 'left', 'bottom': 'bottom', 'right': 'right', 'top': 'top', 'codigo': 'codigo', });
lyr_Zona_Medusa_Cuadro_8.set('fieldAliases', {'id': 'id', 'AREA': 'AREA', 'Perimetro': 'Perimetro', });
lyr_Grilla_Escama_Cuadro_9.set('fieldAliases', {'left': 'left', 'bottom': 'bottom', 'right': 'right', 'top': 'top', 'codigo': 'codigo', });
lyr_Zona_Escama_Cuadro_10.set('fieldAliases', {'id': 'id', 'AREA': 'AREA', 'Perimetro': 'Perimetro', });
lyr_Paratcnico_11.set('fieldAliases', {'id': 'id', 'Comunidad': 'Comunidad', 'X': 'X', 'Y': 'Y', });
lyr_PasantesUniversitarios_12.set('fieldAliases', {'id': 'id', 'X': 'X', 'Y': 'Y', });
lyr_BatimetraMoskitiam_2.set('fieldImages', {'OBJECTID': 'Range', 'depth': 'Range', 'Shape_Leng': 'TextEdit', });
lyr_costa_atlantica_3.set('fieldImages', {'COSTA': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_LagunaBacalar_4.set('fieldImages', {'COSTA': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_GrillaMedusaIII_5.set('fieldImages', {'left': 'TextEdit', 'bottom': 'TextEdit', 'right': 'TextEdit', 'top': 'TextEdit', 'codigo': 'TextEdit', });
lyr_Grilla_Medusa_II_Cuadro_6.set('fieldImages', {'left': 'TextEdit', 'bottom': 'TextEdit', 'right': 'TextEdit', 'top': 'TextEdit', 'codigo': 'TextEdit', });
lyr_Grilla_Medusa_I_Cuadro_7.set('fieldImages', {'left': 'TextEdit', 'bottom': 'TextEdit', 'right': 'TextEdit', 'top': 'TextEdit', 'codigo': 'TextEdit', });
lyr_Zona_Medusa_Cuadro_8.set('fieldImages', {'id': 'TextEdit', 'AREA': '', 'Perimetro': '', });
lyr_Grilla_Escama_Cuadro_9.set('fieldImages', {'left': 'TextEdit', 'bottom': 'TextEdit', 'right': 'TextEdit', 'top': 'TextEdit', 'codigo': 'TextEdit', });
lyr_Zona_Escama_Cuadro_10.set('fieldImages', {'id': 'TextEdit', 'AREA': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_Paratcnico_11.set('fieldImages', {'id': 'TextEdit', 'Comunidad': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_PasantesUniversitarios_12.set('fieldImages', {'id': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_BatimetraMoskitiam_2.set('fieldLabels', {'OBJECTID': 'no label', 'depth': 'no label', 'Shape_Leng': 'no label', });
lyr_costa_atlantica_3.set('fieldLabels', {'COSTA': 'header label', 'Shape_Leng': 'no label', });
lyr_LagunaBacalar_4.set('fieldLabels', {'COSTA': 'no label', 'Shape_Leng': 'no label', });
lyr_GrillaMedusaIII_5.set('fieldLabels', {'left': 'no label', 'bottom': 'no label', 'right': 'no label', 'top': 'no label', 'codigo': 'no label', });
lyr_Grilla_Medusa_II_Cuadro_6.set('fieldLabels', {'left': 'no label', 'bottom': 'no label', 'right': 'no label', 'top': 'no label', 'codigo': 'no label', });
lyr_Grilla_Medusa_I_Cuadro_7.set('fieldLabels', {'left': 'no label', 'bottom': 'no label', 'right': 'no label', 'top': 'no label', 'codigo': 'no label', });
lyr_Zona_Medusa_Cuadro_8.set('fieldLabels', {'id': 'no label', 'AREA': 'no label', 'Perimetro': 'no label', });
lyr_Grilla_Escama_Cuadro_9.set('fieldLabels', {'left': 'no label', 'bottom': 'no label', 'right': 'no label', 'top': 'no label', 'codigo': 'no label', });
lyr_Zona_Escama_Cuadro_10.set('fieldLabels', {'id': 'no label', 'AREA': 'no label', 'Perimetro': 'no label', });
lyr_Paratcnico_11.set('fieldLabels', {'id': 'no label', 'Comunidad': 'header label', 'X': 'no label', 'Y': 'no label', });
lyr_PasantesUniversitarios_12.set('fieldLabels', {'id': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_PasantesUniversitarios_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});