
const renderData = (datos) => {

  let div = document.getElementById("profile");

  if (div) {
    div.innerHTML = `
    <div class="row">
      <div class="col-md-5 col-sm-5 text-center">
        <a id="enlace" href="/html/mosaico.html"><img src="${datos.account_picture}" class="img-fluid" id="fotop"></a>
        <div><i class="${datos.rss_icon} text-danger"></i> ${datos.username}</div>
        <div>${datos.gender == 1 ? "Mujer" : "Hombre" }, ${datos.age} años</div>
        <div><img src="/assets/flags/4x3/es.svg" class="flag"> ${datos.country}</div>
        <div class="text-truncate">programación música peliculas</div>
      </div>
      <div class="col-md-7 col-sm-7">
        <h3 class="card-title">${datos.name}</h3>
        <div class="row">        
          <div class="col-6"><i class="fas fa-users text-grey"></i>&nbsp;Audiencia</div>
          <div class="col-6 text-end">${datos.followers_formated}</div>
          <div class="col-6"><i class="fas fa-user text-grey"></i>&nbsp;Fakes</div>
          <div class="col-6 text-end">${datos.fake_followers_formated}%</div>
          <div class="col-6"><i class="fas fa-heart text-grey"></i>&nbsp;Media Eng</div>
          <div class="col-6 text-end">${datos.avg_engagement_formated}</div>
          <div class="col-6"><i class="fas fa-heart text-grey"></i>&nbsp;Eng Rate</div>
          <div class="col-6 text-end">${datos.er_audiencia}%</div>
          <div class="col-6"><i class="fas fa-eye text-grey"></i>&nbsp;Impresion</div>
          <div class="col-6 text-end">${datos.impressions_formated}</div>
        </div>
      </div>
    </div>
    `;
  }     
  
};

const renderHeader = (datos) => {

  let div = document.getElementById("header");

  if(div) {


    div.innerHTML = `
    
    <div class="row">


      <div class="col-4">  
      
        <div class="hstack">
          <div class="ms-3">
          
            <img src="${datos.account_picture}" id="foto" class="img-fluid position-relative" alt="Foto de perfil">
              <div  class="position-absolute top-0 start-0">
                <div class="position-relative circle bg-danger bg-gradient">
                  <i class="${datos.rss_icon} text-white position-absolute top-50 start-50 translate-middle"></i>
                </div>
              </div>
            </img>
          </div>
          <div class="vstack ms-3">
            <div class="display-6">${datos.name}</div>
            <div><i class="${datos.rss_icon} text-danger"></i> ${datos.username}</div>
            <div><img src="/assets/flags/4x3/es.svg" class="flag"> ${datos.country} - <i class="fas ${datos.gender == 1 ? "fa-venus text-danger" : "text-mars bg-primary"}"></i> ${datos.age} años</div>
          </div>

        </div>
      </div>



      <div class="col-4">

        <div class="hstack">
          <div class="vstack ccontainer">
            <div class="text-center text-primary">Reach</div>
            <div class="circular-progress" id="circ-prog1">
              <span class="progress-value" id="prog-val1">0%</span>
            </div>
          </div>
          <div class="vstack ccontainer">
            <div class="text-center text-warning">Relevance</div>
            <div class="circular-progress" id="circ-prog2">
              <span class="progress-value" id="prog-val2">0%</span>
            </div>
          </div>
          <div class="vstack ccontainer">
            <div class="text-center text-info">Resonance</div>
            <div class="circular-progress"  id="circ-prog3">
              <span class="progress-value" id="prog-val3">0%</span>
            </div>
          </div>
        </div>
      </div>



      <div class="col-4 auto">      
        <div class="row">
          <div class="col-6"></div>
          <div class="col-6">
            <div class="vstack fp">
              <div><a href="/" class="text-dark"><i class="fas fa-door-open"></i><span>&nbsp;Salir</span></a></div>
              <div><i class="fas fa-download"></i><span>&nbsp;Descargar influcard</span></div>
              <div><i class="fas fa-eye"></i><span>&nbsp;Ver perfil</span></div>
              <div>Datos actualizados a ${datos.updated_at_formated}</div>
            </div>
          </div>
        
        </div>
      </div>


    </div>
    `;

    circularProg(1,datos.reach_formated_graph);
    circularProg(2,datos.relevance_formated_graph);
    circularProg(3,datos.resonance_formated_graph);
  }

};

const renderAudiencia = (datos) => {
  
  let div = document.getElementById("audiencia");

  if(div) {
    

  let countries = "";

  
  for (let country of datos.top_countries_formated) {
    countries = countries + `
    <div class="col-2 p-0 fp pb-2">${country.country_short} <img class="flag text-end" src="${country.href}"></div>
    <div class="col-8 p-0">      
      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${country.value}" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar bg-danger " style="width: ${country.value}%"></div>
      </div>  
    </div>    
    <div class="col-2 p-0 fp">${country.value} %</div>`;
  }

  
  


div.innerHTML = `

  <div class="card shadow my-2">
    <div class="card-body hstack">
      <div class="position-relative circle bg-primary">
        <i class="fas fa-users text-white position-absolute top-50 start-50 translate-middle"></i>
      </div><span class="fw-bold">&nbsp; AUDIENCIA</span>
    </div>
  </div>


<div class="card shadow my-2">
  <div class="card-body">
  <div class="row text-center">
    <div class="col-4 vstack">
      <div>Audiencia</div>
      <div><i class="fas fa-users"></i></div>
      <div>${datos.followers_formated}</div>
    </div>
    <div class="col-4 vstack">
      <div>Seguidores Fake</div>
      <div><i class="fas fa-users"></i></div>
      <div>${datos.fake_followers_formated} %</div>
    </div>
    <div class="col-4 vstack">
      <div>Audiencia Real</div>
      <div><i class="fas fa-user"></i></div>
      <div>${datos.real_followers_formated}</div>
    </div>
  </div>
  </div>
</div>




<div class="card shadow my-2">
  <div class="card-body">
    <div class="row">
      <div class="col-12">
        <div class="card-title text-center">Distribución por edad</div>
      </div>
      <div class="col-2">13-17</div>
      <div class="col-8">      
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${datos.insight_perc[0].toFixed(2)}" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" style="width: ${datos.insight_perc[0].toFixed(2)}%"></div>
        </div>  
      </div>    
      <div class="col-2 text-end">${datos.insight_perc[0].toFixed(2)} %</div>
      <div class="col-2">18-25</div>
      <div class="col-8">      
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${datos.insight_perc[1].toFixed(2)}" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" style="width: ${datos.insight_perc[1].toFixed(2)}%"></div>
        </div>  
      </div>    
      <div class="col-2 text-end">${datos.insight_perc[1].toFixed(2)} %</div>
      <div class="col-2">25-34  </div>
      <div class="col-8">      
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${datos.insight_perc[2].toFixed(2)}" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" style="width: ${datos.insight_perc[2].toFixed(2)}%"></div>
        </div>  
      </div>    
      <div class="col-2 text-end">${datos.insight_perc[2].toFixed(2)} %</div>
      <div class="col-2">35-44</div>
      <div class="col-8">      
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${datos.insight_perc[3].toFixed(2)}" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" style="width: ${datos.insight_perc[3].toFixed(2)}%"></div>
        </div>  
      </div>    
      <div class="col-2 text-end">${datos.insight_perc[3].toFixed(2)} %</div>
      <div class="col-2">45-64</div>
      <div class="col-8">      
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${datos.insight_perc[4].toFixed(2)}" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" style="width: ${datos.insight_perc[4].toFixed(2)}%"></div>
        </div>  
      </div>    
      <div class="col-2 text-end">${datos.insight_perc[4].toFixed(2)} %</div>
      <div class="col-2">65 +</div>
      <div class="col-8">      
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${datos.insight_perc[5].toFixed(2)}" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" style="width: ${datos.insight_perc[5].toFixed(2)}%"></div>
        </div>  
      </div>    
      <div class="col-2 text-end">${datos.insight_perc[5].toFixed(2)} %</div>
    </div>
  </div>
</div>


<div class="row">
  <div class="col-6 p-1">
    <div class="card shadow">
      <div class="card-body">
        <div class="card-title text-center">Distribución por sexo</div>
        <div class="card-text h300" id="chartGender"></div>
      </div>
    </div>
  </div>



  <div class="col-6 p-1">
    <div class="card  shadow">
      <div class="card-body">
        <div class="card-title text-center">Distribución por país</div>
        <div class="card-text h300">
          <div class="row">${countries}</div>
        </div>
      </div>
    </div>
  </div>

</div>
`;

chartGender(datos);
}


}

const renderPublicaciones = (datos) => {

  let div = document.getElementById("publicaiones");

  let brands = "";


  for (let brand of datos.brands_images) {
    brands = brands + `<div class="col-3 vstack">
    <img src="${brand.image}" class="img-fluid" alt="Foto de perfil"></img>
      <div class="text-center">${brand.name}</div>
    </div>`;
  }



div.innerHTML = `
  
<div class="card my-2 shadow">
<div class="card-body hstack">
  <div class="position-relative circle bg-primary">
    <i class="fas fa-camera-retro text-white position-absolute top-50 start-50 translate-middle"></i>
  </div><span class="fw-bold">&nbsp; PUBLICACIONES</span>
</div>
</div>


<div class="card my-2 shadow">
  <div class="card-body">
  <div class="card-title text-center">Distribución de publicaciones por territorios</div>
  <div class="card-text h300" id="chartTerritory"></div>
  </div>
</div>



<div class="card my-2 shadow">
  <div class="card-body">
  <div class="card-title text-center">Franja horaria de sus publicaciones</div>
  <div class="card-text h300" id="chartHora"></div>
  </div>
</div>


<div class="card my-2 shadow">
  <div class="card-body">
  <div class="card-title text-center">Marcas con las que ha trabajado</div>
  
  <div class="row">
  ${brands}
  </div>
  </div>
</div>
`;
chartCat(datos);
chartHora(datos);

}

const renderDesempenyo = (datos) => {  


  let div = document.getElementById("desempenyo");

  if (div) {
    
div.innerHTML = `
  
<div class="card my-2 shadow">
<div class="card-body hstack">
  <div class="position-relative circle bg-primary">
    <i class="fas fa-arrow-up text-white position-absolute top-50 start-50 translate-middle"></i>
  </div><div class="fw-bold">&nbsp; DESEMPEÑO</div>
</div>
</div>


  <div class="card my-2 shadow">
   
    <div class="card-body">     
      <div class="row">
      
        <div class="col-9 hstack mb-2">
          <div class="position-relative circle-p bg-dark">
            <i class="fas fa-users text-white position-absolute top-50 start-50 translate-middle"></i>
          </div>
          <div>&nbsp; Audiencia</div>          
        </div>  
        <div class="col-3 text-end">${datos.followers_formated}</div>
        <div class="col-9 hstack mb-2">
          <div class="position-relative circle-p bg-dark">
            <i class="fas fa-user text-white position-absolute top-50 start-50 translate-middle"></i>
          </div>
          <div>&nbsp; Alcance</div>
        </div>
        <div class="col-3 text-end">${datos.reach_formated}</div>
      </div>  
    </div>
  </div>

    




  <div class="card my-2 shadow">
    <div class="card-body">          
      <div class="row">
      <div class="col-9 hstack">
      <div class="position-relative circle-p bg-primary">
        <i class="fas fa-compress text-white position-absolute top-50 start-50 translate-middle"></i>
      </div>
      <div>&nbsp; Impresiones</div>        
    </div>  
    <div class="col-3 text-end">${datos.avg_impressions_formated}</div>
    </div>
    
    <div class="hstack">

        <div class="vstack text-center">
          <div>${datos.ir_alcance} %</div>
          <div>Alcance</div>
        </div>
        <div class="vr"></div>
        <div class="vstack text-center">
          <div>${datos.ir_audiencia} %</div>
          <div>Audiencia</div>
        </div>

        </div>
        
  
    </div>
  </div>



  <div class="card my-2 shadow">
    <div class="card-body">

    <div class="row">
        
      <div class="col-9 hstack">
      <div class="position-relative circle-p bg-primary bg-opacity-75">
        <i class="fas fa-play text-white position-absolute top-50 start-50 translate-middle"></i>
      </div>
      <div>&nbsp; Reproducciones</div>        
    </div>  
    <div class="col-3 text-end">${datos.vplays_formated}</div>
    </div>
    
    <div class="hstack">

        <div class="vstack text-center">
          <div>${datos.vr_alcance} %</div>
          <div>Alcance</div>
        </div>
        <div class="vr"></div>
        <div class="vstack text-center">
          <div>${datos.vr_audiencia} %</div>
          <div>Audiencia</div>
        </div>

        </div>
        
  
    </div>
  </div>

  <div class="card my-2 shadow">
    <div class="card-body">
    

    <div class="row">
        
      <div class="col-9 hstack">
      <div class="position-relative circle-p bg-info">
        <i class="fas fa-heart text-white position-absolute top-50 start-50 translate-middle"></i>
      </div>
      <div>&nbsp; Engagement</div>        
    </div>  
    <div class="col-3 text-end">${datos.engagement_formated}</div>
    </div>
    
    <div class="hstack">

        <div class="vstack text-center">
          <div>${datos.er_alcance} %</div>
          <div>Alcance</div>
        </div>
        <div class="vr"></div>
        <div class="vstack text-center">
          <div>${datos.er_audiencia} %</div>
          <div>Audiencia</div>
        </div>

        </div>
        
  
    </div>
  </div>


  <div class="card my-2 shadow">
    <div class="card-body">

  <div class="card-title text-center">Engagement rate según día de publicación</div>
  <div class="card-text h300" id="chartWeek"></div>

    </div>
  </div>
  `;

  chartWeek(datos);

}

}


const chartGender = (datos) => {
  
am5.ready(function() {

  var root = am5.Root.new("chartGender");
  
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  var chart = root.container.children.push(am5percent.PieChart.new(root, {}));
  
  var series = chart.series.push(am5percent.PieSeries.new(root, {
    valueField: "value",
    categoryField: "category"
  }));
  
  series.data.setAll([
    { value: datos.insight_perc_m, category: "Hombres" },
    { value: datos.insight_perc_f, category: "Mujeres" },
  ]);

  var legend = chart.children.push(am5.Legend.new(root, {
    centerX: am5.percent(50),
    x: am5.percent(50),
    marginTop: 15,
    marginBottom: 15
  }));
  
  legend.data.setAll(series.dataItems);
  
  series.appear(1000, 100);
  
  });
}

const chartCat = (datos) => {
  am5.ready(function() {


    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartTerritory");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "none",
      wheelY: "none"
    }));
    
    // We don't want zoom-out button to appear while animating, so we hide it
    chart.zoomOutButton.set("forceHidden", true);
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var yRenderer = am5xy.AxisRendererY.new(root, {
      minGridDistance: 30
    });
    
    yRenderer.grid.template.set("location", 1);
    
    var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
      maxDeviation: 0,
      categoryField: "network",
      renderer: yRenderer,
      tooltip: am5.Tooltip.new(root, { themeTags: ["axis"] })
    }));
    
    var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0,
      min: 0,
      extraMax: 0.1,
      renderer: am5xy.AxisRendererX.new(root, {
        strokeOpacity: 0.1
      })
    }));
    
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueXField: "value",
      categoryYField: "network",
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "left",
        labelText: "{valueX}"
      })
    }));
    
    
    // Rounded corners for columns
    series.columns.template.setAll({
      cornerRadiusTR: 5,
      cornerRadiusBR: 5,
      strokeOpacity: 0
    });
    
    // Make each column to be of a different color
    series.columns.template.adapters.add("fill", function(fill, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    
    series.columns.template.adapters.add("stroke", function(stroke, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    
    
    // Set data
    var data = [
      {
        "network": datos.post_territory[0].category,
        "value": datos.post_territory[0].value
      },
      {
        "network": datos.post_territory[1].category,
        "value": datos.post_territory[1].value
      },
      {
        "network": datos.post_territory[2].category,
        "value": datos.post_territory[2].value
      },
      {
        "network": datos.post_territory[3].category,
        "value": datos.post_territory[3].value
      },
      {
        "network": datos.post_territory[4].category,
        "value": datos.post_territory[4].value
      },
      {
        "network": datos.post_territory[5].category,
        "value": datos.post_territory[5].value
      }
    ];
    
    yAxis.data.setAll(data);
    series.data.setAll(data);
    sortCategoryAxis();
    
    // Get series item by category
    function getSeriesItem(category) {
      for (var i = 0; i < series.dataItems.length; i++) {
        var dataItem = series.dataItems[i];
        if (dataItem.get("categoryY") == category) {
          return dataItem;
        }
      }
    }
    
    chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none",
      xAxis: xAxis,
      yAxis: yAxis
    }));
    
    
    // Axis sorting
    function sortCategoryAxis() {
    
      // Sort by value
      series.dataItems.sort(function(x, y) {
        return x.get("valueX") - y.get("valueX"); // descending
        //return y.get("valueY") - x.get("valueX"); // ascending
      })
    
      // Go through each axis item
      am5.array.each(yAxis.dataItems, function(dataItem) {
        // get corresponding series item
        var seriesDataItem = getSeriesItem(dataItem.get("category"));
    
        if (seriesDataItem) {
          // get index of series data item
          var index = series.dataItems.indexOf(seriesDataItem);
          // calculate delta position
          var deltaPosition = (index - dataItem.get("index", 0)) / series.dataItems.length;
          // set index to be the same as series data item index
          dataItem.set("index", index);
          // set deltaPosition instanlty
          dataItem.set("deltaPosition", -deltaPosition);
          // animate delta position to 0
          dataItem.animate({
            key: "deltaPosition",
            to: 0,
            duration: 1000,
            easing: am5.ease.out(am5.ease.cubic)
          })
        }
      });
    
      // Sort axis items by index.
      // This changes the order instantly, but as deltaPosition is set,
      // they keep in the same places and then animate to true positions.
      yAxis.dataItems.sort(function(x, y) {
        return x.get("index") - y.get("index");
      });
    }
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
})
};

const chartHora = (datos) => {
  
am5.ready(function() {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartHora");
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  var data = [
    {
      name: "Noche",
      steps: 45688
    },
    {
      name: "Tarde",
      steps: 35781
    },
    {
      name: "Mañana",
      steps: 25464
    }
  ];
  
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "none",
      wheelY: "none",
      paddingLeft: 10,
      paddingRight: 10
    })
  );
  
  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  
  var yRenderer = am5xy.AxisRendererY.new(root, {});
  yRenderer.grid.template.set("visible", false);
  
  var yAxis = chart.yAxes.push(
    am5xy.CategoryAxis.new(root, {
      categoryField: "name",
      renderer: yRenderer,
      paddingRight:40
    })
  );
  
  var xRenderer = am5xy.AxisRendererX.new(root, {});
  xRenderer.grid.template.set("strokeDasharray", [3]);
  
  var xAxis = chart.xAxes.push(
    am5xy.ValueAxis.new(root, {
      min: 0,
      renderer: xRenderer
    })
  );
  
  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Income",
      xAxis: xAxis,
      yAxis: yAxis,
      valueXField: "steps",
      categoryYField: "name",
      sequencedInterpolation: true,
      calculateAggregates: true,
      maskBullets: false,
      tooltip: am5.Tooltip.new(root, {
        dy: -30,
        pointerOrientation: "vertical",
        labelText: "{valueX}"
      })
    })
  );
  
  series.columns.template.setAll({
    strokeOpacity: 0,
    cornerRadiusBR: 10,
    cornerRadiusTR: 10,
    cornerRadiusBL: 10,
    cornerRadiusTL: 10,
    maxHeight: 20,
    fillOpacity: 0.8
  });
  
  var currentlyHovered;
  
  series.columns.template.events.on("pointerover", function(e) {
    handleHover(e.target.dataItem);
  });
  
  series.columns.template.events.on("pointerout", function(e) {
    handleOut();
  });
  
  function handleHover(dataItem) {
    if (dataItem && currentlyHovered != dataItem) {
      handleOut();
      currentlyHovered = dataItem;
      var bullet = dataItem.bullets[0];
      bullet.animate({
        key: "locationX",
        to: 1,
        duration: 600,
        easing: am5.ease.out(am5.ease.cubic)
      });
    }
  }
  
  function handleOut() {
    if (currentlyHovered) {
      var bullet = currentlyHovered.bullets[0];
      bullet.animate({
        key: "locationX",
        to: 0,
        duration: 600,
        easing: am5.ease.out(am5.ease.cubic)
      });
    }
  }
  
  
  var circleTemplate = am5.Template.new({});
  
  series.bullets.push(function(root, series, dataItem) {
    var bulletContainer = am5.Container.new(root, {});
    var circle = bulletContainer.children.push(
      am5.Circle.new(
        root,
        {
          radius: 24
        },
        circleTemplate
      )
    );
  
    var maskCircle = bulletContainer.children.push(
      am5.Circle.new(root, { radius: 27 })
    );
  
    // only containers can be masked, so we add image to another container
    var imageContainer = bulletContainer.children.push(
      am5.Container.new(root, {
        mask: maskCircle
      })
    );
  
    // not working
    var image = imageContainer.children.push(
      am5.Picture.new(root, {
        templateField: "pictureSettings",
        centerX: am5.p50,
        centerY: am5.p50,
        width: 60,
        height: 60
      })
    );
  
    return am5.Bullet.new(root, {
      locationX: 0,
      sprite: bulletContainer
    });
  });
  
  // heatrule
  series.set("heatRules", [
    {
      dataField: "valueX",
      min: am5.color(0xe5dc36),
      max: am5.color(0x5faa46),
      target: series.columns.template,
      key: "fill"
    },
    {
      dataField: "valueX",
      min: am5.color(0xe5dc36),
      max: am5.color(0x5faa46),
      target: circleTemplate,
      key: "fill"
    }
  ]);
  
  series.data.setAll(data);
  yAxis.data.setAll(data);
  
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
  cursor.lineX.set("visible", false);
  cursor.lineY.set("visible", false);
  
  cursor.events.on("cursormoved", function() {
    var dataItem = series.get("tooltip").dataItem;
    if (dataItem) {
      handleHover(dataItem)
    }
    else {
      handleOut();
    }
  })
  
  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear();
  chart.appear(1000, 100);
  
  });
}

const chartWeek = (datos) => {
am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartWeek");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: true,
  panY: true,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX: true
}));

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
cursor.lineY.set("visible", false);


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
xRenderer.labels.template.setAll({
  rotation: 0,
  centerY: am5.p50,
  centerX: am5.p100,
  paddingRight: 15
});

xRenderer.grid.template.setAll({
  location: 1
})

var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  maxDeviation: 0.3,
  categoryField: "country",
  renderer: xRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  min: 0,
  max: 2.5,
  numberFormat: "#.0'%'",
  renderer: am5xy.AxisRendererY.new(root, {
    strokeOpacity: 0.1
  })
}));


// Create series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(am5xy.ColumnSeries.new(root, {
  name: "Series 1",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value",
  sequencedInterpolation: true,
  categoryXField: "country",
  tooltip: am5.Tooltip.new(root, {
    labelText: "{valueY}"
  })
}));

series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
series.columns.template.adapters.add("fill", function(fill, target) {
  return chart.get("colors").getIndex(series.columns.indexOf(target));
});

series.columns.template.adapters.add("stroke", function(stroke, target) {
  return chart.get("colors").getIndex(series.columns.indexOf(target));
});

// Set data
var data = [{
  country: "L",
  value: Number(datos.post_week_day[0].engrate)
}, {
  country: "M",
  value: Number(datos.post_week_day[1].engrate)
}, {
  country: "X",
  value: Number(datos.post_week_day[2].engrate)
}, {
  country: "J",
  value: Number(datos.post_week_day[3].engrate)
}, {
  country: "V",
  value: Number(datos.post_week_day[4].engrate)
}, {
  country: "S",
  value: Number(datos.post_week_day[5].engrate).toFixed(2)
}, {
  country: "D",
  value: Number(datos.post_week_day[6].engrate).toFixed(2)
}];


xAxis.data.setAll(data);
series.data.setAll(data);


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear(1000);
chart.appear(1000, 100);


  });
}


const circularProg = (num, value) => {
  let circularProgress = document.querySelector(`#circ-prog${num}`),
  progressValue = document.querySelector(`#prog-val${num}`);
  let progressStartValue = 0,    
      progressEndValue = value,    
      speed = 15;


  const color = ['#0000FF','#FFA500','#00FFFF']
      
  let progress = setInterval(() => {
      progressStartValue++;
      progressValue.textContent = `${progressStartValue}%`
      circularProgress.style.background = `conic-gradient(${color[num-1]} ${progressStartValue * 3.6}deg, #ededed 0deg)`
      if(progressStartValue == progressEndValue){
          clearInterval(progress);
      }    
  }, speed);

}
