export default function Skill() {
  return (
    <>
      <div className="flex flex-col  ">
        <section className="flex space-x-10 m-2">
          <div className="rounded-full bg-black text-white w-24 h-24 items-center justify-center  flex m-2">
            <p>JavaScript</p>
          </div>
          <div className="rounded-full bg-black text-white w-24 h-24 items-center justify-center  flex m-2">
            <p>MySQL</p>
          </div>
        </section>
        <section className="flex space-x-10 m-2">
          <div className="rounded-full bg-black text-white w-24 h-24 items-center justify-center  flex m-2">
            <p>HTML</p>
          </div>
          <div className="rounded-full bg-black text-white w-24 h-24 items-center justify-center  flex m-2">
            <p>CSS</p>
          </div>
        </section>
        <section className="flex space-x-10 m-2">
          <div className="rounded-full bg-black text-white w-24 h-24 items-center justify-center  flex m-2">
            <p>Express</p>
          </div>
          <div className="rounded-full bg-black text-white w-24 h-24 items-center justify-center  flex m-2">
            <p>React</p>
          </div>
        </section>
        <section className="flex space-x-10 m-2">
          <div className="rounded-full bg-black text-white w-24 h-24 items-center justify-center flex m-2">
            <p>Git</p>
          </div>
          <div className="rounded-full bg-black text-white w-24 h-24 items-center justify-center flex m-2">
            <p>NodeJS</p>
          </div>
        </section>
      </div>
      <button
        type="button"
        className="border border-gray-900 bg-black text-white p-2 rounded-xl mb-20 w-28 h-28  mt-10 ml-20 "
      >
        Télécharger mon CV
      </button>
    </>
  );
}
