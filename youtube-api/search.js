const axios = require("axios");
const config = require("config");
const youtubekey = config.get("youtubekey");

const search = async () => {
  try {
    const res = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          maxResults: 30,
          order: "viewCount",
          q: "hair transplant",
          type: "channel",
          key: youtubekey
        }
      }
    );
    res.data.items.map(item => {
      const type = `\"${item.snippet.channelId}\"\,`;
      console.log(type);
    });
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = search;
