//GET all the USER Events from the server
export async function getAllAttendeeEvents() {
    const response = await fetch(`/server/attendeeEvent`);
    return await response.json();
}

//POST USER
export async function createAttendeeEvent(data) {
    const response = await fetch(`/server/attendeeEvent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: data
        })
    })
    return await response.json();
}

//DELETE USER
export async function deleteAttendeeEvent(data) {
    const reponse = await fetch(`/server/attendeeEvent`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: data
        })
    })
    return await reponse.json();
}