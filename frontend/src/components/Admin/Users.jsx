

function Users() {
    const arr = [1, 2, 3, 4];
    return (
        <section className="tableClass">
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Role</th>
                            <th>Since</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map(i => (
                            <tr key={i}>
                                <td>asdasd</td>
                                <td>Raky</td>
                                <td><img src="https://i.pinimg.com/564x/f4/0e/25/f40e25243ca82916bde748b608767d26.jpg" alt="User" /></td>
                                <td>Admin</td>
                                <td>{ "24-23-2023"}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </main>
        </section >
    )
}

export default Users