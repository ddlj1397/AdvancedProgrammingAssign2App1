src="https://js.arcgis.com/4.25/"
require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
      var webmap = new WebMap({
          portalItem: {
            id: "38d03b3db39f41f9bb0b2ca11162fe11"
          }
        });
       
        var view = new MapView({
              map: webmap,
                 container: "viewDiv"
        
        }); 
    });
