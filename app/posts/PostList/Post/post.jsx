
export function Post({ id, name, email, gender, status }) {
    return (
        <div className="flex flex-col justify-center items-center gap-2 border p-10 w-150">
            <p>ID : {id}</p>
            <p>name : {name}</p>
            <p>email : {email}</p>
            <p>gender : {gender}</p>
            <p>status : {status}</p>
        </div>
    );
}