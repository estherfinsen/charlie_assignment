import React from "react";
import Reportfull from "@/components/Reportfull";
import Retry from "@/components/Retry";
import Link from "next/link";

export const revalidate = 1800;

export default async function Report({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const respons = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await respons.json();
  console.log(data);

  if (data.url[0] === "Ugyldig URL" || "fejl" in data) {
    return <Retry />;
  }

  return (
    <>
      <div>
        <Link href="/">
          <a>DIVERSA</a>
        </Link>
      </div>
      <Reportfull data={data} />
    </>
  );
}
