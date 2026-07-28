"use client";

import ModelsSearch from "../components/ModelsSearch";
import ModelsGrid from "../components/ModelsGrid";
import type { Model } from "../lib/types";
import { useTransition } from "react";
/*
CHALLENGE - Create a shared ModelsBrowser component  
  
1. Copy the current browser UI from `/3d-models/page.tsx`  
into `ModelsBrowser`
  
2. Import anything `ModelsBrowser` now needs  

3. Accept and type the props this component needs
   (seeing as ModelGrid is used both the 
    3D Models page and Category page)
  
4. Back in `/3d-models/page.tsx`,  
   render `ModelsBrowser` and pass in the required props  
  
5. Then go to `/3d-models/categories/[categorySlug]/page.tsx`  
   and use `ModelsBrowser` there too  
   (note: the SearchForm will now appear in the Category page,
    but it won't work. We'll handle this later)
  
6. Pass the category name into `ModelsBrowser`  
   so the grid title still works on category pages  
  
When you're done, both pages should look and behave exactly the same.
*/

export default function ModelsBrowser({
  search,
  models,
  categoryName,
}: {
  search?: string;
  models: Model[];
  categoryName?: string;
}) {
  const [isPending, startTransition] = useTransition();
  return (
    <div>
      <ModelsSearch
        search={search}
        startTransition={startTransition}
      ></ModelsSearch>
      <ModelsGrid
        models={models}
        search={search}
        categoryName={categoryName}
        isPending={isPending}
        startTransition={startTransition}
      ></ModelsGrid>
    </div>
  );
}
