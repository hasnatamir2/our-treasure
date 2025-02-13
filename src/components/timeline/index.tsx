import { ReactNode } from "react";

interface TimelineProps {
    children: ReactNode;
}

export default function Timeline({ children }: TimelineProps) {
    return (
        <div className='relative'>
            {/* Refinedx timeline vertical line */}
            <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300'></div>
            <div className='space-y-12'>{children}</div>
        </div>
    );
}
