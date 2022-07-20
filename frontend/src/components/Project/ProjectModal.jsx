export default function ProjectModal() {
  return (
    <form>
      <label>
        Nom du projet :
        <input type="text" name="name" />
      </label>
      <label>
        Description :
        <input type="text" name="description" />
      </label>
      <label>
        URL Github :
        <input type="text" name="github" />
      </label>
      <label>
        URL Site :
        <input type="text" name="site" />
      </label>
      <label>
        Image :
        <input type="text" name="image" />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
}
