import Image from "next/image";
import cross from "../../public/images/cross.svg";
import check from "../../public/images/check.svg";
import halfcheck from "../../public/images/halfcheck.svg";

export default async function Reportscore({ violations }) {
  let source;

  if (violations.length >= 3) {
    source = cross;
  } else if (violations.length == 2) {
    source = halfcheck;
  } else if (violations.length == 0 || 1) {
    source = check;
  }
  console.log(violations.length);
  return (
    //TODO update alt on check
    <article className="bg-c-grey80 m-4 px-8 h-52 line-clamp-2 w-10/12 sm:w-96 rounded-xl flex justify-center">
      <Image priority src={source} alt="checkmark" />
    </article>
  );
}
