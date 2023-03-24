import React from 'react'

interface IHeader {
  title: string;
}

const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <nav className="fixed w-full z-30 py-6 bg-black px-10 md:px-0">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div>
          <h4 className="font-Rajdhani text-white text-2xl" data-testid="Test-Header">{title}</h4>
        </div>
        <div className="flex flex-row justify-center items-center">
        </div>
      </div>
    </nav>
  )
}

export default Header;
