import Socials from "../components/Socials";

export default function Footer() {
  return (
    <div className="my-0 w-full bg-atsev-1"> 
      <Socials />
      <p className="font-mali mt-2 md:mt-4">
        &copy; {new Date().getFullYear()} Anthonia Efe
      </p>{" "}
    </div>
  );
}
