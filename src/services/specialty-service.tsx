const API_URL: string = process.env.NEXT_PUBLIC_API_URL ?? ":";
const ORIGIN: string = process.env.NEXT_PUBLIC_ORIGIN ?? "";

const findByFilters = async (name: string, pageSize: number, pageNumber: number, token: string) => {
    try {
        const response = await fetch(API_URL.concat(`/specialty/find-by-filters?name=${name}&size=${pageSize}&page=${pageNumber}`), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Origin": ORIGIN,
                "Authorization": "Bearer ".concat(token)
            },
        })

        return await response.json()
    } catch (error) {
        throw new Error("Unable to connect to the server.")
    }
}

const create = async ({specialty, token}: { specialty: Specialty, token: string }) => {
    try {
        const response = await fetch(API_URL.concat(`/specialty/create`), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Origin": ORIGIN,
                "Authorization": "Bearer ".concat(token)
            },
            body: JSON.stringify(specialty)
        })

        return response.status;
    } catch (error) {
        throw new Error("An error occurred while creating the Specialty.")
    }
}

const update = async ({specialty, token}: { specialty: Specialty, token: string }) => {
    try {
        const response = await fetch(API_URL.concat(`/specialty/update`), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Origin": ORIGIN,
                "Authorization": "Bearer ".concat(token)
            },
            body: JSON.stringify(specialty)
        })

        return response.status
    } catch (error) {
        throw new Error("An error occurred while updating the Specialty.")
    }
}

const deleteById = async (id: number, token: string) => {
    try {
        const response = await fetch(API_URL.concat(`/specialty/delete-by-id/${id}`), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Origin": ORIGIN,
                "Authorization": "Bearer ".concat(token)
            }
        })

        return response.status
    } catch (error) {
        throw new Error("An error occurred while delete the Specialty.")
    }
}

export {
    findByFilters,
    create as CreateSpecialty,
    update as UpdateSpecialty,
    deleteById as DeleteSpecialty
}