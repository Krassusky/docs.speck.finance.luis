import { FC, useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

interface TocItem {
  element: HTMLElement;
  title: string;
  level: number;
}

export const TableOfContents: FC = () => {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeElement, setActiveElement] = useState<HTMLElement | null>(null);
  const location = useLocation();
  const tocRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    );
    const items = elements.map((element, index) => ({
      element: element as HTMLElement,
      title: element.textContent || `Section ${index + 1}`,
      level: Number(element.tagName.charAt(1)),
    }));
    setHeadings(items);
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveElement(entry.target as HTMLElement);
            // Scroll the active TOC item into view
            const activeTocItem = tocRef.current?.querySelector(
              `[data-heading="${entry.target.textContent}"]`
            );
            if (activeTocItem) {
              activeTocItem.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
              });
            }
          }
        });
      },
      {
        rootMargin: "-10% 0px -70% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, [location]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    element: HTMLElement
  ) => {
    e.preventDefault();
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    setActiveElement(element);
  };

  if (headings.length === 0) return null;

  return (
    <aside className="hidden lg:block fixed top-14 right-0 w-44 h-[calc(100vh-3.5rem)] border-l border-gray-200 dark:border-gray-800 overflow-y-auto">
      <div className="p-4">
        <nav ref={tocRef} className="space-y-1">
          {headings.map((heading, index) => (
            <a
              key={`${heading.level}-${index}`}
              href="#"
              data-heading={heading.title}
              onClick={(e) => handleClick(e, heading.element)}
              className={`block px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 ${
                activeElement === heading.element
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 dark:text-gray-300"
              }`}
              style={{ marginLeft: `${(heading.level - 1) * 1}rem` }}
            >
              {heading.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};
