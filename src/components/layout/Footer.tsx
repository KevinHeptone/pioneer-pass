import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/tina-icon-256.png"
                alt="TINA"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="text-lg font-bold text-text-primary">TINA</span>
            </Link>
            <p className="text-text-secondary text-sm">
              INAVI x Hepton collaboration. Mining the roads, mapping the
              future.
            </p>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#specs" className="hover:text-cyan-400 transition-colors">Specifications</a>
              </li>
              <li>
                <a href="#token" className="hover:text-cyan-400 transition-colors">Token Economics</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">Discord</span>
              </li>
              <li>
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">Twitter / X</span>
              </li>
              <li>
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">Documentation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} TINA by INAVI x Hepton. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
