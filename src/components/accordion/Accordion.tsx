import { useState, ReactNode } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri' 

export default function Accordion({label, children}: {label: string, children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div>
      <div
        className="flex flex-row p-1 font-bold cursor-pointer"
        onClick={toggleAccordion}
      >
        <div>
          {isOpen ? (
              <RiArrowDropDownLine size={30} className="rotate-180" />  
            ) : (
              <RiArrowDropDownLine size={30}  />  
            )
          }
        </div>
        <div>{label}</div>
      </div>

      <div>
        <hr className='text-primaryBackground'/>
      </div>

      {isOpen && (
        <div className="px-4">
          <p className="text-gray-800">
            {children}
          </p>
        </div>
      )}
    </div>
  );
};


