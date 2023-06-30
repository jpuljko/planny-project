//GET all EVENT data from the server
export async function getAllEvents() {
    const response = await fetch(`/server/event`);
    return await response.json();
}

//POST EVENT
export async function createEvent(data) {
    const response = await fetch(`/server/event`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            event: data
        })
    })
    return await response.json();
}

//DELETE EVENT
export async function deleteEvent(data) {
    console.log("this is id_event " + typeof data);
    const reponse = await fetch(`/server/event`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            event: data
        })
    })
    return await reponse.json();
}