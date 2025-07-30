import axiosInstance from "../../../lib/axios";

const apiUrl = "someapiurl";

export const fetchOtherListing = async (): Promise<any> => {
  try {
    const res = await axiosInstance(apiUrl).get("");
    return res;
  } catch (err) {
    throw err;
  }
};
