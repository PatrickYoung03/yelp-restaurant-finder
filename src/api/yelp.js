import axios from "axios";

export default axios.create({
  baseURL: `https://api.yelp.com/v3/businesses`,
  headers: {
    Authorization:
      "Bearer 24cuhvQmYO_knnAkXWKqAX5U_xLXhL2oSUuE5Rj_YNBuYUDBwiDZYgNLEwZZCh1KVtSierwRybfrzaQbTrBkyjGoFGJYPcjkGCVaQwisoxnqfXRQT1wtmJ8cT622X3Yx",
  },
});
