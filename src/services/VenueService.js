//GET all VENUE data from the server
export async function getAllVenues() {
    const response = await fetch(`/server/venue`);
    return await response.json();
}

//POST VENUE
export async function createVenue(data) {
    const response = await fetch(`/server/venue`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            venue: data
        })
    })
    return await response.json();
}

//PUT VENUE 
export async function updateVenue(data) {
    const reponse = await fetch(`/server/venue`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            venue: data
        })
    })
    return await reponse.json();
}