export default function About() {
  return (
    <div
      className="flex flex-col items-start md: justify-center min-h
        screen-75 my-16 ml-16"
    >
      <h1 className="text-6xl font-bold">About</h1>
      <h2 className="text-4xl mt-4">Author</h2>
      <p className="text-xl mt-4">Vedant Sonkar</p>
      <h2 className="text-4xl mt-4">Project</h2>
      <p className="text-xl mt-4">This is a SpaceX Blog Page</p>
      <p className="text-xl mt-4">
        This app is built with React.js, Next.js and Tailwind CSS
      </p>
      <p className="text-xl mt-4">
        The data is fetched from php backend hosted at &nbsp;
        <a
          href="https://php-spacex-blog.000webhostapp.com"
          target="_blank"
          className="underline"
        >
          https://php-spacex-blog.000webhostapp.com
        </a>{" "}
        which makes a request to the SpaceX v4 APIs and sends the response ahead
      </p>
      <p className="text-xl mt-4">The app is deployed on Vercel</p>
    </div>
  );
}
