export default function Rocket() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h
        screen-75"
    >
      <h1 className="text-6xl font-bold">About :</h1>
      <h2 className="text-4xl mt-4">This is a SpaceX Blog Page</h2>
      <p className="text-xl mt-4">
        This app is built with React.js, Next.js and Tailwind CSS by Vedant
        Sonkar
      </p>
      <p className="text-xl mt-4">The data is fetched from the SpaceX API</p>
      <p className="text-xl mt-4">The app is deployed on Vercel</p>
    </div>
  );
}
