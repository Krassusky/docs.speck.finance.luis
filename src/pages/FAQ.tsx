import { FC } from "react";

export const FAQ: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">What is Speck Finance?</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Speck Finance is a decentralized finance platform that provides
            users with secure and efficient ways to manage their digital assets,
            participate in yield farming, and access various DeFi services.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">How do I get started?</h2>
          <p className="text-gray-600 dark:text-gray-300">
            To get started, you'll need to complete our KYC (Know Your Customer)
            form. After submission, our team will review your application within
            24 hours. Once approved, you can begin exploring our various
            investment opportunities, including DeFi assets and Real World
            Assets (RWA).
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">Is my investment safe?</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We prioritize security and have implemented multiple layers of
            protection. Our smart contracts are audited by leading security
            firms, and we maintain transparent operations. However, as with any
            DeFi platform, users should always do their own research and never
            invest more than they can afford to lose.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">What are the fees?</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our platform charges minimal fees for transactions and services.
            These fees are used to maintain the platform and ensure its
            security. Specific fee structures can be found in our documentation.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">
            How can I contact support?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            You can reach our support team through multiple channels:
            <ul className="list-disc ml-6 mt-2">
              <li>Email: support@speck.finance</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
