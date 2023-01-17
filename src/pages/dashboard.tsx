import Head from "next/head";
import Image from "next/image";

import Menu from "src/components/menu";

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Menu>
        <div className="flex flex-col items-center gap-4">
          <h1>Franklin & Sydney</h1>
          <Image
            src="https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Soulmate Image"
            width="800"
            height="800"
            className="rounded"
          />
          <p>August 14, 2020</p>
          <h2 className="uppercase">You have been together for</h2>
          <p>2 years, 5 months and 2 days</p>
          <h2 className="uppercase">In other words</h2>
          <p>29 months</p>
          <p>126 weeks</p>
          <p>885 days</p>
        </div>
      </Menu>
    </div>
  );
};

export default Dashboard;
