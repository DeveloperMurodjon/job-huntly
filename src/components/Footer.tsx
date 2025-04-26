import React from "react";
function Footer() {
  return (
    <footer className="bg-muted py-12 mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Footer content */}
        </div>
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} JobHuntly. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
