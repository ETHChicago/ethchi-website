import { useState, ReactNode } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri' 

export default function Accordion({label, children}: {label: string, children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className='w-full bg-secondaryBrand2 rounded-xl shadow-xl bg-opacity-10 p-2'>
      <div
        className="flex justify-between items-center flex-row p-1 cursor-pointer text-primaryType font-semibold"
        onClick={toggleAccordion}
      >
        <div className='ml-4'>{label}</div>
        <div>
          {isOpen ? (
              <RiArrowDropDownLine size={30} className="rotate-180" />  
            ) : (
              <RiArrowDropDownLine size={30}  />  
            )
          }
        </div>
      </div>

      {isOpen && (
        <div className="px-4 py-2">
          <p className="text-primaryType">
            {children}
          </p>
        </div>
      )}
    </div>
  );
};


