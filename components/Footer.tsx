import PrimaryButton from "./PrimaryButton";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 dark:invert">
      <Container>
        <div className="pt-28 pb-16 flex flex-col lg:flex-row items-center dark:invert">
          <div className="flex text-xl lg:text-[2.5rem] sm:text-4xl tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 text-black dark:invert">
            <h3 className="w-max">Created by&nbsp;</h3>
            <h3 className="font-bold w-max">{process.env.USER_NAME}</h3>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <PrimaryButton
              label="Linkedin Profile"
              link={process.env.LINKEDIN_URL}
            />
            <PrimaryButton
              label="Github Profile"
              link={process.env.GITHUB_URL}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-3 pb-4 text-black">
          <p className="text-sm">© 2023 SpaceX. All rights reserved.</p>
          <p className="text-sm">
            This website is a test project and is not affiliated with or
            endorsed by SpaceX. The content and information presented here are
            for demonstration and educational purposes only.
          </p>
          <p className="text-sm">
            For official and up-to-date information, please visit the SpaceX
            website at www.spacex.com.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
