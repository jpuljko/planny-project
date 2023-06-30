//GET all USER LOG data from the server
export async function getMultiple() {
    const response = await fetch(`/server/user_error_log`);
    return await response.json();
}

//POST USER
export async function createReport(data) {
    const response = await fetch(`/server/user_error_log`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_error_log: data
        })
    })
    return await response.json();
}




//DELETE USER LOG


export async function removeLog(data) {
    const reponse = await fetch(`/server/user_error_log`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_error_log: data
        })
    })
    return await reponse.json();
}