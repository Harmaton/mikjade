import { Instagram } from "lucide-react"
import Link from "next/link"

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Our Story
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Our Team
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Careers
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <Link href="#contactus" className="hover:text-gray-300 transition-colors">
              Get in Touch
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Support
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              FAQ
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/mikjadeventure?igsh=MTlwcGc4N2FtNWw1cg==" aria-label="Instagram" className="hover:text-gray-300 transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="https://www.tiktok.com/@mikjade_ventures?_t=ZM-8u61XBTjamD&_r=1" aria-label="TikTok" className="hover:text-gray-300 transition-colors">
                <TikTokIcon />
              </Link>
              {/* <Link href="https://www.tiktok.com/@mikjade_ventures?_t=ZM-8u61XBTjamD&_r=1" aria-label="Twitter" className="hover:text-gray-300 transition-colors">
                <Twitter className="w-6 h-6" />
              </Link> */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MIKJADE VENTURES LIMITED. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

