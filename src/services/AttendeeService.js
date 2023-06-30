//GET all the USER data from the server
export async function getAllAttendees() {
    const response = await fetch(`/server/attendee`);
    return await response.json();
}

//POST USER
export async function createAttendee(data) {
    const response = await fetch(`/server/attendee`, {
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

//PUT USER 
export async function updateAttendee(data) {
    const reponse = await fetch(`/server/attendee`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: data
        })
    })
    return await reponse.json();
}

//DELETE USER
export async function deleteAttendee(data) {
    const reponse = await fetch(`/server/attendee`, {
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