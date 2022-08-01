import { useState, useEffect } from 'react';
import api from '@api/index';

const Home = () => {

  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const userData: any = await api.get("user");
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
