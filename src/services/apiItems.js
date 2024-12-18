import supabase from "./supabase";

export async function getItemsByCategory(categoryId) {
  if (!categoryId)
    return await getAllItems();


  const { data: items, error } = await supabase
    .from('categories')
    .select(`
        id,
        name,
        items (
          *,
          flavours (
            *
          )
        )
      `)
    .eq('id', categoryId)


  if (error) {
    console.error(error);
    throw new Error("Items could not be loaded");
  }

  return items[0]?.items;
}

export async function getAllItems() {
  const { data: items, error } = await supabase
    .from('categories')
    .select(`
        id,
        name,
        items (
          *,
          flavours (
            *
          )
        )
      `)


  if (error) {
    console.error(error);
    throw new Error("Items could not be loaded");
  }

  return items;
}

