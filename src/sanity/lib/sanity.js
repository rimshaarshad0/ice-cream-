import {createClient} from "@sanity/client"

export const client = createClient({
    projectId: "fsl2lkyi",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-01-01"
})