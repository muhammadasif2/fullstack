import ApiService from "../api-services/api-services";
import { GET_DEAL_LISTINGS } from "../constant/api";
const Posts = async (data) => {
  if (data) {
    const response = await ApiService.post(GET_DEAL_LISTINGS, data);
    if (response && response.success) {
      response;
      return response.data;
    }
    throw new Error("Deals Not Found!");
  }
};
export default Posts;
