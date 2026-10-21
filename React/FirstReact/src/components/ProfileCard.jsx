function ProfileCard(){
    const username = "ohad";
    const birthday = new Date(2009, 11, 2); 
    const followers = 2223;
    const following = 5455;
    const currentYear = 2026;

    return(
        <>
            <h2>@{username}</h2>
            <p>{birthday.getDate()}/{birthday.getMonth()+1}/{birthday.getFullYear()} - Age: {currentYear-birthday.getFullYear()} | {followers} followers - {following} following</p>
            <p>Welcome back @{username}!</p>
        </>
    )
}

export default ProfileCard;