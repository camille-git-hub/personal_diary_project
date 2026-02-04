const EntryDetails = ({entry} ) => {

    return (
    <div>
        <div className="max-w-3xl mx-auto p-6 font-sans overflow-hidden ">
            <h1 className="text-3xl font-semibold mb-4"> {entry.title} </h1>
            <div className="text-gray-600 text-sm mb-3"> {entry.date} </div>

            <div className="flex flex-col md:flex-row md:gap-12 md:items-start flex-1 overflow-hidden">
                <div className="md:w-1/3 pt-2 shrink-0">
                    {entry.picture ? (
                    <img src={entry.picture} alt="{entry.date}" className="w-full h-auto rounded-lg shadow-md "/> ) : (
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                        no picture here
                    </div>
                    )}
                </div>
                <div className="md:w-2/3 leading-relaxed overflow-hidden line-clamp-6"> {entry.content} </div>
            </div>

        </div>
    </div>
    );

};

export default EntryDetails;
