import { useEffect }from 'react'

const Dashboard = () => {
  const fetchData = async () => {
    try {
      //proxy was set up in package.json of client to avoid typing "http://localhost:5000"
      const response = await fetch('/api/v1/random')
      const data = await response.json
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return <h1>Dashboard</h1>;
};

export default Dashboard;
