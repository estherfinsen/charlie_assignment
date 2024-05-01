export default async function Form() {
  return (
    <form action="/results">
      <label htmlFor="url">INSERT URL</label>
      <input type="text" name="url" id="url" />
      <input type="submit" value="Submit" className="uppercase border-2 border-indigo-600 rounded-full p-1 px-2" />
    </form>
  );
}
