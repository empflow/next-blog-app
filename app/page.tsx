import HomepageAllPosts from "./components/HomepageAllPosts";

export default function Home() {
  return (
    <>
      <section className="mb-10">
        <h1 className="mb-2 text-3xl font-semibold">Что я прочитал летом</h1>
      </section>

      <section>
        <HomepageAllPosts />
      </section>
    </>
  );
}
