import ApiService from "../api-services/api-services";
import { GET_DEAL_LISTINGS } from "../constant/api";
const Posts = async () => {
  if (data) {
    const response = await ApiService.get(GET_DEAL_LISTINGS);
    if (response && response.success) {
      return response.data;
    }
    throw new Error("Deals Not Found!");
  }
};
export default Posts;
