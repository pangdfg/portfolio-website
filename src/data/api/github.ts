import axios from "axios";

const BASE_URL = "https://api.github.com/users/pangdfg";

export const getGithubUser = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const getGithubRepos = async () => {
  const res = await axios.get(
    `${BASE_URL}/repos?sort=updated&per_page=10`
  );
  return res.data;
};