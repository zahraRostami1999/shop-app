const Page404 = () => {
    return (
        <>
            <div className="min-h-screen mt-10">
                <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
                    <h1 className="lg:text-9xl md:text-7xl text-6xl font-bold text-gray-800">404</h1>
                    <p className="text-2xl md:text-xl sm:text-lg font-medium text-gray-600">Page not found</p>
                    <a href="/" className="mt-4 bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Go Home
                    </a>
                </div>
            </div>
        </>
    );
}

export default Page404;