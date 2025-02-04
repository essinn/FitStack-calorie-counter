"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function BottomSheet({ isOpen, onClose, children }: BottomSheetProps) {
  const sheetRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startY, setStartY] = React.useState(0);
  const [currentY, setCurrentY] = React.useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging) {
      const currentY = e.touches[0].clientY;
      const deltaY = currentY - startY;
      setCurrentY(deltaY > 0 ? deltaY : 0);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (currentY > 50) {
      onClose();
    } else {
      setCurrentY(0);
    }
  };

  React.useEffect(() => {
    if (!isOpen) {
      setCurrentY(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-background/40 z-50" onClick={onClose} />
      <div
        ref={sheetRef}
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 bg-background rounded-t-[10px] shadow-lg transition-transform duration-300 ease-out",
          isDragging ? "transition-none" : ""
        )}
        style={{ transform: `translateY(${currentY}px)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="p-4">
          <div className="w-12 h-1.5 bg-muted-foreground/20 rounded-full mx-auto mb-4" />
          {children}
        </div>
      </div>
    </>
  );
}
