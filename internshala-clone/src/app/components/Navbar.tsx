import React from 'react';
import { Search, ChevronDown, Send } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-3 border-b border-gray-200 bg-white shadow-sm">
            {/* Left side: Logo */}
            <div className="flex items-center space-x-12">
                <div className="flex items-center cursor-pointer relative">
                    <div className="absolute -top-3.5 right-6 text-[#00A5EC]">
                        <Send size={18} className="transform -rotate-6 fill-current" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-[#00A5EC]">INTERN</span>
                    <span className="text-2xl font-bold tracking-tight text-gray-700">SHALA</span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-[#00A5EC] font-medium transition-colors">
                        <span>Jobs</span>
                        <ChevronDown size={18} className="text-gray-500" />
                    </button>

                    <button className="flex items-center space-x-1 text-gray-700 hover:text-[#00A5EC] font-medium transition-colors">
                        <span>Internships</span>
                        <ChevronDown size={18} className="text-gray-500" />
                    </button>

                    <button className="flex items-center space-x-1 text-gray-700 hover:text-[#00A5EC] font-medium transition-colors relative">
                        <span>Courses</span>
                        <span className="bg-[#FF8C00] text-white text-[10px] font-bold px-1.5 py-0.5 rounded ml-1 tracking-wider">
                            OFFER
                        </span>
                        <ChevronDown size={18} className="text-gray-500 ml-0.5" />
                    </button>
                </div>
            </div>

            {/* Right side: Search, Login, Register */}
            <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-700 border border-gray-200 rounded-md px-4 py-2 hover:bg-gray-50 transition-colors">
                    <Search size={16} className="text-gray-500" />
                    <span className="text-sm font-medium">Search</span>
                </button>

                {/* Divider */}
                <div className="w-[1px] h-8 bg-gray-200 mx-2"></div>

                <button className="text-[#00A5EC] border border-[#00A5EC] hover:bg-[#00A5EC] hover:text-white px-6 py-2 rounded-md font-medium transition-colors text-sm">
                    Login
                </button>

                <button className="bg-[#00A5EC] text-white hover:bg-[#008ECA] px-6 py-2 rounded-md font-medium transition-colors border border-[#00A5EC] text-sm">
                    Register
                </button>
            </div>
        </nav>
    );
}