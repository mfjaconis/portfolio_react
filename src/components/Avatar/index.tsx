import { useGetUserQuery } from "../../services/api";

function Avatar ()  {
    const { data, error, isLoading } = useGetUserQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>An error occurred</p>;

    console.log(data.avatar_url)
    return(
        <>
            <img src={data.avatar_url} alt="" />
        </>
            )
          
}

export default Avatar;