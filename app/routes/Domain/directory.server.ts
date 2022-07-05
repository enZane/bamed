import imageUrlBuilder from '@sanity/image-url'
import { getClient } from "~/lib/sanity/getClient"

const sanityClient = getClient();
const builder = imageUrlBuilder(sanityClient);

export const getAllPeople = async () => {
    const people = await sanityClient.fetch(
        `*[_type == 'directorio'] {
            name, posicion, foto, redesSociales[]{name, url}
          }`
    )

    people.forEach(person => {
        person.foto = builder.image(person.foto).url()
        console.log(person.foto)
    })

    return people;
}