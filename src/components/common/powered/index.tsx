import Link from "next/link";
import { Social } from "../social";

export function Powered() {
  return (
    // <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md text-sm">
    //   <span>Desenvolvido por 
    //     <Link 
    //       href={'https://github.com/thecarvalhosamuel'}
    //       target="_blank"
    //       className="ml-1 text-cyan-700 hover:underline hover:text-cyan-500"
    //     >
    //     Samuel Carvalho
    //     </Link>
    //   </span>
    // </div>
    <footer className="w-full py-4 text-center text-sm text-muted-foreground hover:cursor-pointer border-t border-gray-200">
      Desenvolvido por
      <Link
        href="https://github.com/thecarvalhosamuel"
        target="_blank"
        className=" hover:text-gray-700 hover:underline"
      >
        <i className="fa-brands fa-github ml-1 mr-1 text-xl text-foreground"></i>
        <span className="font-semibold text-foreground">Samuel Carvalho</span>
      </Link>
    </footer>
  )
}