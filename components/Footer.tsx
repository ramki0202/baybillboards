import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr] gap-10 mb-12">
          {/* Bay Billboards Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">
              BAY BILLBOARDS
            </h3>
            <h4
              className="text-gray-900"
              style={{ fontSize: "32px", fontWeight: "400" }}
            >
              High-Visibility Billboards in Hawkes Bay
            </h4>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">
              CONTACT
            </h3>
            <a
              href="mailto:hello@baybillboards.co.nz"
              className="text-gray-900 hover:text-gray-600 transition-colors"
            >
              hello@baybillboards.co.nz
            </a>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">
              FOLLOW US
            </h3>
            <div className="space-y-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-900 hover:text-gray-600 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-900 hover:text-gray-600 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="mb-4 md:mb-0">
            <Image
              src="/image/bay-billboards.png"
              alt="Bay Billboards"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          <div className="text-gray-600 text-sm">© 2025 Bay Billboards</div>

          <div>
            <a
              href="/privacy-policy"
              className="text-gray-900 hover:text-gray-600 transition-colors text-sm"
            >
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
