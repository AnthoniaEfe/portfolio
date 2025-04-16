import Socials from "./Socials";

export default function Footer() {
  return (
    <div className="my-0 w-full pb-2 md:pb-4 bg-purple-light">
      <Socials />
      <p className="mt-4 md:mt-6">
        &copy; {new Date().getFullYear()} Anthonia Efe
      </p>{" "}
    </div>
  );
}
