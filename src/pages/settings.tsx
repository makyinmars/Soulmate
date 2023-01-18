import Head from "next/head";
import { useForm, SubmitHandler } from "react-hook-form";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

import { api } from "src/utils/api";
import Menu from "src/components/menu";
import { ssrInit } from "src/utils/ssg";

type SettingsInputs = {
  names: string;
  initialDate: string;
  picture: string;
  notification: boolean;
};

const Settings = ({
  userId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { register } = useForm<SettingsInputs>({
    defaultValues: {
      names: "",
      initialDate: "",
      picture: "",
      notification: false,
    },
  });

  const utils = api.useContext();

  const user = utils.user.getUserById.getData({ id: userId });

  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <Menu>
        <div className="custom-container flex flex-col items-center gap-4">
          <h1 className="custom-h1">General Settings</h1>
          <h2 className="custom-h2 font-semibold text-rose-600">
            Your Information
          </h2>
          <p className="custom-p">Your names: Franklin & Sydney</p>
          <p className="custom-p">Together since: Aug 14, 2020</p>
          <input type="date" className="rounded bg-blue-400 p-2" />
          <h2 className="custom-h2 font-semibold text-rose-600">Picture</h2>
          <button className="custom-button text-base md:text-lg">
            Choose a custom picture
          </button>
          <button className="custom-button text-base md:text-lg">
            Choose from default pictures
          </button>
          <h2 className="custom-h2 font-semibold text-rose-600">
            Notifications
          </h2>
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

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { ssg, session } = await ssrInit(context);

  if (session) {
    const userId = session.user?.id as string;

    const user = await ssg.user.getUserById.fetch({ id: userId });

    if (user) {
      return {
        props: {
          trpcState: ssg.dehydrate(),
          userId: user.id,
        },
      };
    }
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
      props: {
        trpcState: ssg.dehydrate(),
        userId: null,
      },
    };
  }
};
