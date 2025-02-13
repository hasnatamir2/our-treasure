// src/components/HorizontalTimeline.tsx
import React from "react";

interface HorizontalTimelineProps {
    children: React.ReactNode;
}

export default function HorizontalTimeline({
    children,
}: HorizontalTimelineProps) {
    return (
        <div className='overflow-x-auto flex space-x-8 snap-x snap-mandatory py-8'>
            {children}
        </div>
    );
}
