import axios from "axios";

const CLINET_ID = import.meta.env.VITE_NAVER_CLINET_ID;
const CLINET_PW = import.meta.env.VITE_NAVER_CLINET_PW;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const NewsList = async () => {
  await axios
    .get(BASE_URL, {
      params: {
        query: "프리미어리그, 영국, 오피셜",
        display: 10,
        sort: "sim",
      },
      headers: {
        "X-Naver-Client-Id": CLINET_ID,
        "X-Naver-Client-Secret": CLINET_PW,
      },
    })
    .then((response) => console.log(response.data.items))
    .catch((e) => console.log(e));
};
