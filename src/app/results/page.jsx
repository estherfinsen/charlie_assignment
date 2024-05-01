export default async function Result({ searchParams }) {
  "use server";
  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();
  console.log(data);

  return (
    //Data skal renders i et komponent eller html her
    <h1>{data.url}</h1>
  );
}
