//POST USER
export async function createAttendeeEvent(data) {
    const response = await fetch(`/server/attendeeEvent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            subscription: data
        })
    })
    return await response.json();
}