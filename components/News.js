import React from "react";

const News = () => {
  const newsInfos = [
    {
      clip:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image:
        "https://images.pexels.com/photos/401683/pexels-photo-401683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      clip:
        "Duis vel venenatis eros, sed gravida nisi. Maecenas congue nisi nisi, non porttitor enim posuere ac. Mauris eros lacus",
      image:
        "https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      clip:
        "Fusce sit amet diam id orci semper pellentesque vel vel felis. Maecenas nec justo et mi tincidunt pellentesque at non mi. Morbi fringilla odio fringilla accumsan maximus.",
      image:
        "https://images.pexels.com/photos/220301/pexels-photo-220301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
  ];

  return (
    <div className="news">
      <h3 className="news__head">News</h3>
      <div className="news__content">
        {newsInfos.map(news => (
          <div
            key={news.clip}
            style={{
              backgroundImage: `linear-gradient(to top right, rgba(90, 18, 90, 0.9), rgba(70, 33, 88, 0.9)), url(${
                news.image
              })`,
              backgroundSize: "cover",
              height: "30rem"
            }}
          >
            <h5>{news.clip}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
