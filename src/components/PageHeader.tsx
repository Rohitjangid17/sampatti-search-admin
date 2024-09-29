const PageHeader = ({ pageTitle }: any) => {
    return (
        <>
            <div className="flex items-center justify-between py-3 px-4">
                <h1 className="text-[#5d7186] font-semibold text-lg">{pageTitle}</h1>

                {/* <div>

                </div> */}
            </div>
        </>
    )
}

export default PageHeader;