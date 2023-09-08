// Declarar una función para cargar el archivo JSON.
async function loadJSON() {
  
  const data = await fetch('./data/data.json').then((res) => res.json());
  return data.influcard;
}

function getProf(datos) {
  
  return {
    "account_picture": datos.account_picture,
    "rss_icon": datos.rrss_icon,
    "username": datos.username,
    "gender": datos.gender,
    "age": datos.age,
    "country": datos.country,
    "interests": datos.interests,
    "name": datos.name,
    "followers_formated": datos.followers_formated,
    "fake_followers_formated": datos.fake_followers_formated,
    "avg_engagement_formated": datos.avg_engagement_formated,
    "er_audiencia": datos.er_audiencia,
    "impressions_formated": datos.impressions_formated,
  };
}

const getHeader = (datos) => {
  
  return {
    "account_picture": datos.account_picture,
    "name": datos.name,
    "rss_icon": datos.rrss_icon,
    "username": datos.username,
    "country": datos.country,
    "gender": datos.gender,
    "age": datos.age,
    "reach_formated_graph": datos.reach_formated_graph,
    "relevance_formated_graph": datos.relevance_formated_graph,
    "resonance_formated_graph": datos.resonance_formated_graph,
    "updated_at_formated": datos.updated_at_formated
  };
};

const getAudiencia = (datos) => {

  const insight_perc = [
    datos.insight_perc_13,
    datos.insight_perc_18,
    datos.insight_perc_25,
    datos.insight_perc_35,
    datos.insight_perc_45,
    datos.insight_perc_65,
  ];
  
  return {
    "followers_formated": datos.followers_formated,
    "fake_followers_formated": datos.fake_followers_formated,
    "real_followers_formated": datos.real_followers_formated,
    "insight_perc": insight_perc,
    "insight_perc_m": datos.insight_perc_m,
    "insight_perc_f": datos.insight_perc_f,
    "top_countries_formated": datos.top_countries_formated
  }
};

const getPublicaciones = (datos) => {

  return {
    "post_territory": datos.post_territory,
    "account_post_moment": datos.account_post_moment,
    "brands_images": datos.brands_images
  }
};

const getDesempenyo = (datos) => {

  return {
    "followers_formated": datos.followers_formated,
    "reach_formated": datos.reach_formated,
    "avg_impressions_formated": datos.avg_impressions_formated,
    "ir_alcance": datos.ir_alcance,
    "ir_audiencia": datos.ir_audiencia,
    "vplays_formated": datos.vplays_formated,
    "vr_alcance": datos.vr_alcance,
    "vr_audiencia": datos.vr_audiencia,
    "engagement_formated": datos.engagement_formated,
    "er_alcance": datos.er_alcance,
    "er_audiencia": datos.er_audiencia,
    "post_week_day": datos.post_week_day
  }
};