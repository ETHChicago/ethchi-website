import { useState, ReactNode } from 'react';

export default function Accordion({label, children}: {label: string, children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div>
      <div
        className="w-full p-1 text-white font-bold cursor-pointer"
        onClick={toggleAccordion}
      >
        {label}
        {isOpen && <hr/>}
      </div>

      {isOpen && (
        <div className="mt-4 px-4 py-2">
          <p className="text-gray-800">
            {children}
          </p>
        </div>
      )}
    </div>
  );
};


