import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowBigUp, ArrowBigDown } from 'lucide-react';

const StringSelect = () => {
  return (
    <div className="flex-col flex">
      <Button variant="outline" size="icon" className="w-12 h-12">
        <ArrowBigUp />
      </Button>
      <div className="w-12 h-12">
        <text>E</text>
      </div>
      <Button variant="outline" size="icon" className="w-12 h-12">
        <ArrowBigDown />
      </Button>
    </div>
  );
};

export default StringSelect;
