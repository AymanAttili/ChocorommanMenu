import { uploadFlavourImage } from "./apiStorage";
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

export async function addFlavour(payload) {
    const image = await uploadFlavourImage(payload.image[0])
    const newPayload = {
        itemId: payload.parentId,
        name: payload.name,
        prices: {
            s: payload.small,
            m: payload.medium,
            l: payload.large
        },
        image
    }

    const { data, error } = await supabase
        .from('flavours')
        .insert([
            newPayload
        ])
        .select()

    if (error) {
        console.error(error);
        throw new Error("Flavour could not be aded");
    }
    return data;
}
export async function editFlavour(payload) {
    let newPayload = {
        name: payload.name,
        prices: {
            s: payload.small,
            m: payload.medium,
            l: payload.large
        }
    }

    if (payload.image?.length > 0) {
        const image = await uploadFlavourImage(payload.image[0])
        newPayload = { ...newPayload, image };
    }

    const { data, error } = await supabase
        .from('flavours')
        .update(newPayload)
        .eq('id', payload.id)
        .select()

    if (error) {
        console.error(error);
        throw new Error("Flavour could not be updated");
    }
    return data;
}

export async function deleteFlavour(id) {
    const { error } = await supabase
        .from('flavours')
        .delete()
        .eq('id', id)

    if (error) {
        console.error(error);
        throw new Error("Flavour could not be deleted");
    }
}