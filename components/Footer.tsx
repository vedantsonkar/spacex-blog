import PrimaryButton from "./PrimaryButton";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 dark:invert">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center dark:invert">
          <div className="flex text-4xl lg:text-[2.5rem] tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 text-black dark:invert">
            <h3 className="w-max">Created by&nbsp;</h3>
            <h3 className="font-bold w-max">{process.env.USER_NAME}</h3>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <PrimaryButton
              label="Linkedin Profile"
              link={process.env.LINKEDIN_PROFILE}
            />
            <PrimaryButton
              label="Github Profile"
              link={process.env.GITHUB_PROFILE}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
