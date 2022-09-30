import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId: "xospdamm",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
    token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

function urlFor(source){
    return builder.image(source)
}

export default client;

export { urlFor };