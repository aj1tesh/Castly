import React from "react";
import Header from "@/components/Header";
import DropdownList from "@/components/DropdownList";

const Page = async ({params}: ParamsWithSearch) => {
    const {id} = await params;
    return (
        <div className="wrapper page">
            <Header title="Ajitesh | Developer" SubHeader="nucking.aj21@gmail.com" usrImg="/assets/images/dummy.jpg"/>
            <DropdownList />
            <h1 className="text-2xl font-karla">USER ID: {id}</h1>
        </div>
    )
};

export default Page