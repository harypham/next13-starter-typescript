
const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
    console.log(">> check id: ", params.id)
    return (
        <div>
            view detail with hoidanit = {params.id}
        </div>
    )
}

export default ViewDetailBlog;