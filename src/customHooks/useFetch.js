//import { useEffect, useState } from "react";
import OwlBot from "owlbot-js";

/*
const useFetch = word => {
  const [error, setError] = useState(null);
  useEffect(() => {
    const client = OwlBot("5f9be6778105e4e82d5a3445d9ff6ffc7207d469");
    client
      .define(word)
      .then(function (result) {
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [word]);
  return { error };
};
*/

export const validateWord = async word => {
  const client = OwlBot("5f9be6778105e4e82d5a3445d9ff6ffc7207d469");
  const validate = await client
    .define(word)
    .then(() => true)
    .catch(() => false);
  return validate;
};

//export default useFetch;
