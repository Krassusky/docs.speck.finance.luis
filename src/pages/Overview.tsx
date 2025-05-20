import { FC } from 'react';

export const Overview: FC = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Welcome to Speck</h1>
      <p className="mb-4">
        Speck Finance is an international investment platform that uses blockchain as its base technology. We have built a regulatory and technological infrastructure to intermediate the purchase of the world's best assets aimed at protecting and growing the wealth of people living in emerging markets.
      </p>
      <p className="mb-4">
        Starting with Brazil and subsequently expanding to:
      </p>
      <div className="flex flex-col gap-2 mb-4 pl-4">
        <p>• Argentina</p>
        <p>• Mexico</p>
        <p>• Colombia</p>
        <p>• Chile</p>
        <p>• Nigeria</p>
        <p>• South Africa</p>
        <p>• Egypt</p>
        <p>• India</p>
        <p>• Indonesia</p>
        <p>• Vietnam</p>
        <p>• South Korea</p>
        <p>• Turkey</p>
        <p>• Ukraine</p>
        <p>• Poland</p>
      </div>
      <p className="mb-4">
        Our team of investment specialists is responsible for monitoring, testing, and evaluating the best investment opportunities daily. This way, we can be efficient in listing and creating the best financial products, whether with bitcoins, altcoins, tokenized assets (RWA), and DeFi to fit according to the investor profile using Speck.
      </p>
      <p className="mb-4">
        Speck has its own technological base but also counts on great partners to offer a fluid solution to all users. In Brazil, we are already integrated with local payment methods, offering a very fast and secure experience to transform Fiat Real into an allocation in a dollar-tokenized international product in seconds.
      </p>
      <p className="mb-4">
        Currently, Speck is incorporated and licensed to operate via Costa Rica, a friendly regulatory environment for crypto platforms. Strategically, Speck needs to be outside the countries where it intends to acquire a relevant user base, precisely to offer a safe alternative for its users to send part of their assets abroad and escape local risk.
      </p>
    </div>
  );
};
