import { DOMAIN_URL } from "@/config";
import axios from "axios";

// export const DOMAIN_URL = ENV.DOMAIN_URL;
// export const BROKER_DOMAIN_URL = ENV.BROKER_DOMAIN_URL;
// export const IMAGES_BASE_URL = ENV.IMAGES_BASE_URL;
// export const IMAGES_BASE_URL1 = ENV.IMAGES_BASE_URL1;
// export const VERSION = ENV.VERSION;
// export const STRIPE_KEY = ENV.STRIPE_KEY;

const API_URL = DOMAIN_URL;

const authHeader = (endpoint, accessToken) => {
  const publicEndpoints = ["public url"];
  if (accessToken && !publicEndpoints.includes(endpoint)) {
    return {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  }
  return {};
};

const ApiService = {
  get: async (endpoint) => {
    try {
      const response = await axios.get(
        `${API_URL}/${endpoint}`
        // authHeader(endpoint, )
      );
      if (response && response.data && response.data.success) {
        return response.data;
      }
    } catch (error) {
      //   toast.error(error.message);
    }
  },

  post: async (endpoint, data) => {
    try {
      const response = await axios.post(`${API_URL}/${endpoint}`, data);
      if (response && response.data) {
        return response;
      }
    } catch (error) {
      //   toast.error(error.message);
      return error;
    }
  },
  //   post_two: async (endpoint, data, token) => {
  //     try {
  //       const response = await axios.post(
  //         `${API_URL}/${endpoint}`,
  //         data,
  //         authHeader(endpoint, token)
  //       );
  //       return response.data;
  //     } catch (error) {
  //       toast.error(error.message);
  //       return error.message;
  //     }
  //   },
  //   post_faqs: async (endpoint, data) => {
  //     try {
  //       const response = await axios.post(endpoint, data);
  //       return response.data;
  //     } catch (error) {
  //       toast.error(error.message);
  //       return error.message;
  //     }
  //   },
  //   put: async (endpoint, data, token) => {
  //     try {
  //       const response = await axios.put(
  //         `${API_URL}/${endpoint}`,
  //         data,
  //         authHeader(endpoint, token)
  //       );
  //       if (response && response.data) {
  //         return response.data;
  //       }
  //     } catch (error) {
  //       toast.error(error.message);
  //       return error;
  //     }
  //   },

  //   delete: async (endpoint, token) => {
  //     const response = await axios.delete(
  //       `${API_URL}/${endpoint}`,
  //       authHeader(endpoint, token)
  //     );
  //     return response.data;
  //   },
  //   post_checkout: async (endpoint, data, token) => {
  //     try {
  //       const response = await axios.post(
  //         `${endpoint}`,
  //         data,
  //         authHeader(endpoint, token)
  //       );
  //       return response.data;
  //     } catch (error) {
  //       toast.error(error.message);
  //       return error.message;
  //     }
  //   },
  //   post_landing: async (endpoint, data, token) => {
  //     try {
  //       const response = await axios.post(
  //         `${endpoint}`,
  //         data,
  //         authHeader(endpoint, token)
  //       );
  //       return response.data;
  //     } catch (error) {
  //       toast.error(error.message);
  //       return error.message;
  //     }
  //   },
  //   put_location: async (endpoint, data, token) => {
  //     try {
  //       const response = await axios.put(
  //         `${endpoint}`,
  //         data,
  //         authHeader(endpoint, token)
  //       );
  //       return response.data;
  //     } catch (error) {
  //       toast.error(error.message);
  //       return error.message;
  //     }
  //   },
};

export default ApiService;
