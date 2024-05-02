export default async function Form() {
  return (
    <form action="/results">
      <label htmlFor="url" className="m-1">
        INSERT URL
      </label>
      <input type="text" name="url" id="url" />
      <input type="submit" value="Submit" className="uppercase border-2 bg-brand-turquoise50 border-brand-turquoise50 rounded-full p-1 px-2 m-1 " />
    </form>
  );
}
