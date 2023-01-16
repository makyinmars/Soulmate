import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Soulmate</title>
        <meta
          name="description"
          content="Application that shows how long you and your partner have already been together"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container mx-auto flex flex-col items-center justify-center gap-12 p-4">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Soul<span className="text-rose-600">Mate</span>
          </h1>
          <p className="text-xl leading-relaxed md:text-3xl">
            An application that can help couples keep track of the time they
            have spent together. This app can show you how long you and your
            partner have been in a relationship, and can also provide a way for
            you to commemorate important anniversaries or milestones
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-[4rem]">
            Features
          </h2>
          <ul className="flex flex-col justify-center gap-4 rounded bg-rose-400 bg-opacity-30 p-4 text-lg md:text-2xl">
            <li>Countdown to your next anniversary</li>
            <li>Add special memories throughout the relationship</li>
            <li>Add special memories throughout the relationship</li>
            <li>Ability to set reminders for upcoming special occasions</li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
