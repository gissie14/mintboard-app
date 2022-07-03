import React, { useState } from "react";

export const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 bg-black">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
          <div className="text-white">MintBoard</div>
        </div>
      </div>
    </footer>
  );
};
