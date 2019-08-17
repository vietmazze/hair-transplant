const axios = require("axios");
const key = "AIzaSyDDFCMawWdgC2E8EDyVOpcCRLeSvKElC0U";
const type = require("./channelId");

const channelSearch = async () => {
  try {
    const res = await axios.get(
      "https://www.googleapis.com/youtube/v3/channels",
      {
        params: {
          part: "statistics",
          id: type.toString(),
          key: key,
          maxResults: 50
        }
      }
    );
    res.data.items.map(item => {
      console.log(item.statistics);
    });
  } catch (err) {
    console.error(err.message);
  }
};

channelSearch();
