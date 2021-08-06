export function getEPGPrograms(channelId: number): Promise<number> {
    const URL = `https://lab-gcp.ifeelsmart.net/demo/v1/data/epg/programs?channel=${channelId}`;
    return fetch(URL)
        .then((response) => response.json())
        .catch((error) => console.error(error.messages));
}
