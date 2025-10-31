import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";   

interface Option { label: string; value: string; }
interface Props {
  title: string;                
  options: Option[];
  onSelect: (value: string) => void;
  selected: string;
}

export const ProductFilter: React.FC<Props> = ({
  title,
  options,
  onSelect,
  selected,
}) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const currentLabel = options.find(o => o.value === selected)?.label ?? title;

  return (
    <div ref={rootRef} className="relative mb-4">
      <button
        onClick={() => setOpen(!open)}
        className={`
          w-full flex items-center justify-between
          px-4 py-2 rounded-md text-sm font-medium
          bg-white border border-gray-300
          hover:border-cherry-500 focus:outline-none
          transition-colors duration-200
        `}
      >
        <span className="truncate">{currentLabel}</span>
        <ChevronDown
          className={`ml-2 h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          className={`
            absolute z-10 mt-1 w-full rounded-md shadow-lg
            bg-white ring-1 ring-black ring-opacity-5
            max-h-60 overflow-auto
          `}
        >
          {options.map(opt => (
            <li
              key={opt.value}
              onClick={() => {
                onSelect(opt.value);
                setOpen(false);
              }}
              className={`
                px-4 py-2 text-sm cursor-pointer
                hover:bg-cherry-50
                ${opt.value === selected ? "bg-cherry-100 text-cherry-800" : ""}
              `}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};