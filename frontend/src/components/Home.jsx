export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-24 text-center">
        {" "}
        Bonjour je suis Quentin Samuel et je suis un développeur web
      </h1>

      <div className="flex items-center justify-center p-14 mt-14 flex-wrap">
        <img src="https://picsum.photos/250/250?random=1" alt="quentin" />
        <p className="p-10">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Perspiciatis, eius? Non facilis deleniti adipisci sunt ratione eveniet
          animi cumque molestiae fuga! Ratione tempora delectus ipsa quibusdam
          doloribus doloremque dolor minima! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit
        </p>
      </div>
    </div>
  );
}
