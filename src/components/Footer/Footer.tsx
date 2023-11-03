export default function Footer(): JSX.Element {
    return (
        <div className=" bg-violet-300">
            <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-5">
                <div className="lg:flex lg:items-start lg:justify-between">
                    <div>
                        <div className="flex justify-center items-center text-violet-400 hover:text-violet-200 lg:justify-start">
                            <img src="/public/logocmh.png" alt="Logotipo" className=" h-10 rounded-md"/>
                            <span className=" text-2xl font-bold ml-2">Evolutivo</span>                
                        </div>
                        <p className="mx-auto mt-5 max-w-md text-center leading-relaxed text-gray-700 lg:text-left">
                            No estas solo, siempre habra alguien que comparta contigo
                        </p>
                    </div>
                    <div className=" flex-col">
                        <ul className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                            <li>
                                <a className="text-gray-700 transition hover:text-violet-200/75" href="/">
                                    Acerca de
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-700 transition hover:text-violet-200/75" href="/">
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-700 transition hover:text-violet-200/75" href="/">
                                    Proyectos
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-700 transition hover:text-violet-200/75" href="http://www.tlajomulco.tecnm.mx/">
                                    TecNM-Tlajomulco
                                </a>
                            </li>
                        </ul>
                        <p className="mt-10 text-center text-sm text-gray-700 lg:text-right">
                            Copyright &copy; 2023. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}