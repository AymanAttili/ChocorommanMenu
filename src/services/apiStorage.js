import supabase from "./supabase";

export async function uploadFlavourImage(file) {
    console.log(file);

    const imageName = `${Math.random()}-${file.name}`.replaceAll(
        "/",
        ""
    );

    const { data, error } = await supabase.storage.from('flavours').upload(imageName, file)
    if (error) {
        console.error(error);
        throw new Error("File could not be uploaded");
    }
    console.log(data);

    return `https://ncrmmrcorodshkfkxxwp.supabase.co/storage/v1/object/public/${data.fullPath}`;
}