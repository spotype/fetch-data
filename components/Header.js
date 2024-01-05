import Link from "next/link";

export default function Header() {
  return (
    <div className="py-5 bg-slate-800">
      <div className="flex items-center justify-between mx-auto w-3/4">
        <span>Logo</span>

        <ul className="flex gap-5 font-bold">
          <li>
            <Link href={""}>Home</Link>
          </li>
          <li>
            <Link href={""}>JSON Data</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
