import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 text-blue-700 font-extrabold text-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6"
        />
      </svg>
      <span>Continental<span className="text-blue-900">Shift</span></span>
    </Link>
  )
}
