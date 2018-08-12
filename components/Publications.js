import React from "react";

const Publications = () => {
  const articles = [
    {
      title:
        "A Comparison of Approaches for Estimating Covariate Effects in Nonparametric Multilevel Latent Class Models",
      authors: "Jungkyu Park, HSIU-TING YU",
      date: "2018.03"
    },
    {
      title:
        "Recommendations on the Sample Sizes for Multilevel Latent Class Models",
      authors: "Jungkyu Park, HSIU-TING YU",
      date: "2017.07"
    },
    {
      title:
        "An empirical comparison of different models of active aging in Canada: The International Mobility in Aging Study",
      authors:
        "Bélanger, E.*, Salah, T., Filiatrault, J., Yu, H.-T., Zunzunegui, M. V.",
      date: "2017.04"
    }
  ];
  return (
    <div className="publications">
      <h1 className="publications__head">Latest publications</h1>
      <div className="publications__articles">
        {articles.map(article => (
          <div className="publications__articles--article" key={article.title}>
            <svg>
              <use xlinkHref="/static/symbols.svg#icon-books" />
            </svg>
            <h3>{article.title}</h3>
            <span>{article.authors}</span>
            <span>{article.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
