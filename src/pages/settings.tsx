import Menu from "src/components/menu";

const Settings = () => {
  return (
    <Menu>
      <div className="flex flex-col items-center gap-4">
        <h1>General Settings</h1>
        <h2 className="">Your Information</h2>
        <p>Your names: Franklin & Sydney</p>
        <p>Together since: Aug 14, 2020</p>
        <h2 className="">Picture</h2>
        <p>Choose a custom picture</p>
        <p>Choose from default pictures</p>
        <h2 className="">Notifications</h2>
        <div className="flex items-center gap-2">

        <p>Notify me on special days</p>
        <input type="checkbox" className="h-4 w-4" />
        </div>
      </div>
    </Menu>
  );
};

export default Settings;
