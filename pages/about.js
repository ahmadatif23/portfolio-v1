import Meta from "@/components/Meta";
import Technologies from "@/components/about/Technologies";

export default function About() {
  return (
    <>
      <Meta title="About | Ahmad Atif" />

      <main className="w-full min-h-full">
        <section className="text-center sm:text-start sm:min-h-screen flex flex-col justify-center items-center sm:py-10 py-5">
          <p className="sm:text-4xl text-2xl font-bold sm:mb-8 mb-6">
            Hi, I’m Ahmad. Nice to meet you.
          </p>

          <div className="max-w-3xl sm:text-base text-sm flex flex-col items-center text-center gap-4">
            <p>
              Hello! My name is Ahmad and I enjoy creating things that live on
              the internet. During my time in university, I had a roommate who
              was studying computer science while I pursued a degree in civil
              engineering.
            </p>

            <p>
              Surprisingly, I found myself comprehending his programming
              endeavors more easily than the subjects in my own field. My
              curiosity grew, and I became captivated by his work, which sparked
              my own interest in creating beginner-level games using JavaScript.
            </p>

            <p>
              Upon graduation, I reluctantly followed the path of civil
              engineering but lacked the passion and motivation for it. However,
              everything changed when I landed an internship opportunity at a
              startup company. There, I quickly absorbed knowledge and honed my
              skills, ultimately becoming proficient in web development. From
              that point on, I have been continuously thriving and growing in
              this field.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <Technologies />
        </section>
      </main>
    </>
  );
}
