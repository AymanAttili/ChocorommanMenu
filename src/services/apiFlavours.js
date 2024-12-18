import supabase from "./supabase";

export async function changeAvailability(id, val) {
    const { data, error } = await supabase
        .from('flavours')
        .update({ isAvailable: val })
        .eq('id', id)

    if (error) {
        console.error(error);
        throw new Error("Flavour could not be updated");
    }
    return data;
}