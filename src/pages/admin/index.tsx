import { AdminPageLayout } from "@/layout";

const AdminPage = () => {
    const archive = [
        {
            id: 1,
            year: 2019,
        },
        {
            id: 2,
            year: 2020,
        },
        {
            id: 3,
            year: 2021,
        },
        {
            id: 4,
            year: 2022,
        },
    ];

    return (
        <div className={"flex flex-col items-center py-2"}>
            <h1 className={"text-2xl font-bold"}>Select a year</h1>
            <div
                className={"grid h-full w-full grid-cols-1 gap-2 py-5 md:grid-cols-3"}
            >
                {archive.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                "col-span-1 flex cursor-pointer flex-col items-center justify-center border-2 border-gray-200 bg-gray-50 px-3 py-5"
                            }
                        >
                            {item.year}
                        </div>
                    );
                })}
                <div
                    className={
                        "col-span-1 flex cursor-pointer flex-col items-center justify-center border-2 border-gray-200 bg-blue-100 px-3 py-5"
                    }
                >
                    Create New
                </div>
            </div>
        </div>
    );
};

AdminPage.pageLayout = AdminPageLayout;

export default AdminPage;