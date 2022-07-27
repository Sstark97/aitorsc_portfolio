import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const userData: any = await axios.get(`${import.meta.env.VITE_API}api/v1/user`, {
        headers: {
          'x-access-tokens': import.meta.env.VITE_API_KEY
        }
      });

      setData(userData.data);
    }

    fetchData();
  }), [];

  return (
    <div className="home">
      <p>{data !== undefined && data.presentation}</p>
    </div>
  );
};

export default Home;
