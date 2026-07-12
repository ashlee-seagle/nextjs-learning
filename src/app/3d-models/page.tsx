import { getAllModels } from "../lib/models";

export default async function ModelsPage() {
  const models = await getAllModels();

  return (
    <ul>
      {models.map((model) => (
        <li key={model.id}>{model.name}</li>
      ))}
    </ul>
  );
}
