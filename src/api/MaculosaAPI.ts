function handleImagesUrls(response) {
    const contents = response.contents.map((content) => {
        const imageUrl = content.pictures != undefined && content.pictures.thumbnails[0];
        return { ...content, picture: imageUrl };
    });
    return { ...response, contents: contents };
}

export function getEPGPrograms(channelId: number): Promise<void> {
    const URL = `https://lab-gcp.ifeelsmart.net/demo/v1/data/epg/programs?channel=${channelId}`;
    return fetch(URL)
        .then((response) => response.json())
        .then((response) => {
            return handleImagesUrls(response);
        })
        .then((response) => response)
        .catch((error) => console.error(error.messages));
}
