export const FooterTest = () => {
    return (
        <footer className="relative bg-[#fffff] text-white top-5">
            {/* Courbes supérieures */}
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1280 400"
                    className="absolute top-0 left-0 w-full"
                >
                    {/* Couche claire */}
                    <path
                        d="M0 400H1280V82C782.636 -27 502.408 -27 0 82V400Z"
                        fill="#C4B8D8"
                    />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1280 400"
                    className="absolute top-0 left-0 w-full"
                >
                    {/* Couche intermédiaire */}
                    <path
                        d="M0 400H1280V94C782.636 -18 502.408 -18 0 94V400Z"
                        fill="#8C729D"
                    />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1280 400"
                    className="absolute top-0 left-0 w-full"
                >
                    {/* Couche foncée */}
                    <path
                        d="M0 400H1280V111C782.636 -1 502.408 -1 0 111V156.552Z"
                        fill="#190039"
                    />
                </svg>
            </div>

            {/* Contenu principal du footer */}
            <div className="relative z-10 p-8">
                <div className="flex justify-center items-center">
                    <h1 className="font-semibold text-left">STAF</h1>

                    <div className="inline-flex justify-center items-center gap-5">
                        {/* Contenu ici */}
                        <div className="bg-gray-300 p-4">Élément 1</div>
                        <div className="bg-gray-300 p-4">Élément 2</div>
                        <div className="bg-gray-300 p-4">Élément 3</div>
                    </div>
                </div>
            </div>

        </footer>
    );
};
