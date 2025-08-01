import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-[#13233A] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          
          {/* Column 1: Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="text-center md:text-left">
              <Image 
                src="/logo/logoDark.webp" 
                alt="Prisma Coatings Logo" 
                width={300} 
                height={250}
                className="h-20 md:h-24 lg:h-28 w-auto mx-auto md:mx-0"
              />
            </div>
          </div>

          {/* Column 2: Follow Us */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-6">FOLLOW US</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Facebook */}
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#13233A] hover:bg-gray-100 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#13233A] hover:bg-gray-100 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#13233A] hover:bg-gray-100 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.989.013 7.041.072 6.094.131 5.42.333 4.844.63c-.611.318-1.13.74-1.65 1.26C2.674 2.41 2.252 2.929 1.934 3.54c-.297.576-.499 1.25-.558 2.197C1.317 6.686 1.304 7.093 1.304 10.714s.013 4.028.072 4.976c.059.947.261 1.621.558 2.197.318.611.74 1.13 1.26 1.65.52.52 1.039.942 1.65 1.26.576.297 1.25.499 2.197.558.948.059 1.355.072 4.976.072s4.028-.013 4.976-.072c.947-.059 1.621-.261 2.197-.558.611-.318 1.13-.74 1.65-1.26.52-.52.942-1.039 1.26-1.65.297-.576.499-1.25.558-2.197.059-.948.072-1.355.072-4.976s-.013-4.028-.072-4.976c-.059-.947-.261-1.621-.558-2.197C21.253 4.154 20.831 3.635 20.311 3.115c-.52-.52-1.039-.942-1.65-1.26C18.085.333 17.411.131 16.464.072 15.516.013 15.109 0 11.488 0h.529zm-.481 2.168c3.518 0 3.934.014 5.324.072.89.041 1.374.191 1.696.318.427.166.732.364 1.052.684.32.32.518.625.684 1.052.127.322.277.806.318 1.696.058 1.39.072 1.806.072 5.324s-.014 3.934-.072 5.324c-.041.89-.191 1.374-.318 1.696-.166.427-.364.732-.684 1.052-.32.32-.625.518-1.052.684-.322.127-.806.277-1.696.318-1.39.058-1.806.072-5.324.072s-3.934-.014-5.324-.072c-.89-.041-1.374-.191-1.696-.318-.427-.166-.732-.364-1.052-.684-.32-.32-.518-.625-.684-1.052-.127-.322-.277-.806-.318-1.696-.058-1.39-.072-1.806-.072-5.324s.014-3.934.072-5.324c.041-.89.191-1.374.318-1.696.166-.427.364-.732.684-1.052.32-.32.625-.518 1.052-.684.322-.127.806-.277 1.696-.318 1.39-.058 1.806-.072 5.324-.072zm0 3.69c-3.67 0-6.642 2.973-6.642 6.642s2.973 6.642 6.642 6.642 6.642-2.973 6.642-6.642-2.973-6.642-6.642-6.642zm0 10.954c-2.38 0-4.312-1.932-4.312-4.312s1.932-4.312 4.312-4.312 4.312 1.932 4.312 4.312-1.932 4.312-4.312 4.312zm8.458-11.206c0 .858-.694 1.552-1.552 1.552s-1.552-.694-1.552-1.552.694-1.552 1.552-1.552 1.552.694 1.552 1.552z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 3: Address */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-6">ADDRESS</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-lg">Customer Service</h4>
                <p className="text-gray-300 text-lg">0401 508 036</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-300">prismacoatings@gmail.com</p>
                <p className="text-gray-300">20/25 Marlowe St, Campsie NSW 2193</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
            </div> */}
            <div className="text-sm text-gray-300 mt-4 md:mt-0">
              Copyright © 2025 Prisma Coatings | Powered by Israel
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
