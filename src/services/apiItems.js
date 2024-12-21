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

export async function addItem(payload) {

  const newPayload = {
    categoryId: payload.parentId,
    name: payload.name,
    prices: {
      s: payload.small,
      m: payload.medium,
      l: payload.large
    },
  }

  const { data, error } = await supabase
    .from('items')
    .insert([
      newPayload
    ])
    .select()

  if (error) {
    console.error(error);
    throw new Error("Item could not be added");
  }
  return data;
}
export async function editItem(payload) {
  const newPayload = {
    name: payload.name,
    prices: {
      s: payload.small,
      m: payload.medium,
      l: payload.large
    }
  }
  const { data, error } = await supabase
    .from('items')
    .update(newPayload)
    .eq('id', payload.id)
    .select()

  if (error) {
    console.error(error);
    throw new Error("Item could not be updated");
  }
  return data;
}

export async function deleteItem(id) {
  const { error } = await supabase
    .from('items')
    .delete()
    .eq('id', id)

  if (error) {
    console.error(error);
    throw new Error("Item could not be deleted");
  }
}