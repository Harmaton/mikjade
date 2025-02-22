import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="p-2 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
      <Compare
        firstImage="/floor5.jpg"
        secondImage="/floor3.jpg"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}
