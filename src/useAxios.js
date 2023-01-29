import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url)
    .then(function (response) {
      console.log(response);
      setData(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })

},[data])

  return [data];
};

export default useAxios;