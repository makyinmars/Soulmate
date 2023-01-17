import Head from "next/head";

import Menu from "src/components/menu";

const Settings = () => {
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <Menu>
        <div className="flex flex-col items-center gap-4 custom-container">
          <h1 className="custom-h1">General Settings</h1>
          <h2 className="custom-h2 text-rose-600 font-semibold">Your Information</h2>
          <p className="custom-p">Your names: Franklin & Sydney</p>
          <p className="custom-p">Together since: Aug 14, 2020</p>
          <h2 className="custom-h2 text-rose-600 font-semibold">Picture</h2>
          <button className="custom-button text-lg">Choose a custom picture</button>
          <button className="custom-button text-lg">Choose from default pictures</button>
          <h2 className="custom-h2 text-rose-600 font-semibold">Notifications</h2>
          <div className="flex items-center gap-2">
            <p className="custom-p">Notify me on special days</p>
            <input type="checkbox" className="h-4 w-4" />
          </div>
        </div>
      </Menu>
    </>
  );
};

export default Settings;
