import { FC } from "react";

export const Partners: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Partners</h1>
      <div className="space-y-6">
        {/* Partners content will be added later */}
        <p className="text-gray-600 dark:text-gray-300">
      <p className="mb-4">
        We are proud to partner with the following organizations to ensure the
        highest standards of security and compliance:
        <li>XDC Network</li>
        <li>Khiza</li>
        <li>Fireblocks</li>
        <li>BlindPay</li>
      </p>
        </p>
      </div>
    </div>
  );
};

export default Partners;
