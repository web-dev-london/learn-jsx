const BlogList = ({ user }) => {


    const listofBlogs = user && user?.users.map((user) => {
        return (
            <div
                key={user.id}
                className="blog-preview"
            >
                <h2>{user.country}</h2>
                <p> User name is  {user.firstName} {user.lastName}</p>
                <p>Email address:  {user.email}</p>
                <p>User age is {user.age}</p>
                <p>Gender is {user.gender}</p>
                <p>Contact is {user.phone}</p>
            </div>

        )
    })

    return (
        <>
            <div className="blog-list">
                {listofBlogs}
            </div>
        </>
    );
}

export default BlogList;