import React from 'react';

function Footer() {
    return (
        <>
            <footer className="bg-gray-900 mt-12">
                <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                    <div className="flex justify-center space-x-6 md:order-2">
                    </div>
                    <div className="mt-8 md:order-1 md:mt-0">
                        <p className="text-center text-xs leading-5 text-gray-500">
                            &copy; Isac Holstad
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
