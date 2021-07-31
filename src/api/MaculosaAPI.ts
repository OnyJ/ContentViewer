export function getEPGPrograms(channelId) {
    const URL = `https://lab-gcp.ifeelsmart.net/demo/v1/data/epg/programs?channel=${channelId}`;
    return new Promise((resolve) => {
        fetch(URL)
            .then((response) => response.json())
            .then((response) => resolve(response))
            .catch((error) => console.error(error.messages));
    });
}
