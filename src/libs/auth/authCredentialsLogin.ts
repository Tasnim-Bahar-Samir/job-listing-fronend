import axios from 'axios';

type LoginType = {
  email: string;
  password: string;
};

// api call
const authCredentialsLogin = async (data: LoginType) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login/`, data);

    return res.data;
  } catch (error) {
    console.log(222, error);
    return false;
  }
};

export default authCredentialsLogin;
