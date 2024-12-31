import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  emoji: string;
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ emoji, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-6 text-left flex items-start justify-between gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-4 items-center">
          <span className="text-2xl">{emoji}</span>
          <h3 className="font-bold text-lg text-gray-900">{question}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="flex-shrink-0 text-gray-500" />
        ) : (
          <ChevronDown className="flex-shrink-0 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 pl-16 pr-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;