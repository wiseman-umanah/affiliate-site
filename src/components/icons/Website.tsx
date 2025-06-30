import React from "react";

const WebsiteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill={"#ffffff"}
    viewBox="0 0 24 24"
    {...props}
  >
    {/* Boxicons v3.0 Globe Icon */}
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.938 9h-2.02a15.837 15.837 0 00-1.27-5.072A8.038 8.038 0 0119.938 11zM12 4c.94 0 2.858 2.336 3.448 6H8.552C9.142 6.336 11.06 4 12 4zM4.062 13h2.02a15.837 15.837 0 001.27 5.072A8.038 8.038 0 014.062 13zM6.082 11H4.062a8.038 8.038 0 013.258-5.072A15.837 15.837 0 006.082 11zM12 20c-.94 0-2.858-2.336-3.448-6h6.896C14.858 17.664 12.94 20 12 20zm2.628-2.928A17.633 17.633 0 0015.918 13h2.02a8.038 8.038 0 01-3.31 4.072z" />
  </svg>
);

export default WebsiteIcon;
