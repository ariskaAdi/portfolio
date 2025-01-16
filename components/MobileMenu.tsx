import { Button } from "@/components/ui/button";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-background p-6 shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Menu</h2>
          {/* Close Button */}
          <Button variant="ghost" onClick={onClose}>
            <span className="text-xl">×</span> {/* Close icon */}
          </Button>
        </div>

        <nav className="flex flex-col space-y-4 mt-4">
          <Button variant="ghost" asChild onClick={onClose}>
            <Link href="#skills">Skills</Link>
          </Button>
          <Button variant="ghost" asChild onClick={onClose}>
            <Link href="#services">Services</Link>
          </Button>
          <Button variant="ghost" asChild onClick={onClose}>
            <Link href="#projects">Projects</Link>
          </Button>
          <Button variant="ghost" asChild onClick={onClose}>
            <Link href="#contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </div>
  );
}
