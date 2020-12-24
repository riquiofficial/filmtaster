import axios from "axios";
import { movieDetailsUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(movieDetailsUrl(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      film: detailData.data,
    },
  });
};
