import React from "react";
import clsx from "clsx";
import { Logo } from "@/icons/brands";
const Tailwind: React.FC<Logo> = ({ className }) => (
  <svg
    className={className}
    width="198"
    height="25"
    viewBox="0 0 198 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.4046 0C14.9634 0 11.5626 2.72727 10.2023 8.18182C12.2427 5.45455 14.6233 4.43182 17.3439 5.11364C18.8962 5.50227 20.0056 6.63182 21.2336 7.88106C23.234 9.91667 25.5496 12.2727 30.6069 12.2727C36.0481 12.2727 39.4489 9.54545 40.8092 4.09091C38.7687 6.81818 36.3882 7.84091 33.6676 7.15909C32.1153 6.77045 31.0059 5.64091 29.7778 4.39167C27.7774 2.35606 25.4619 0 20.4046 0ZM10.2023 12.2727C4.76107 12.2727 1.36031 15 0 20.4545C2.04046 17.7273 4.42099 16.7045 7.1416 17.3864C8.69386 17.7758 9.80327 18.9045 11.0313 20.1538C13.0317 22.1894 15.3473 24.5455 20.4046 24.5455C25.8458 24.5455 29.2466 21.8182 30.6069 16.3636C28.5664 19.0909 26.1859 20.1136 23.4653 19.4318C21.913 19.0432 20.8036 17.9136 19.5755 16.6644C17.5751 14.6288 15.2596 12.2727 10.2023 12.2727Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M61.2107 10.3417H57.6498V17.2508C57.6498 19.0933 58.8559 19.0645 61.2107 18.9493V21.7417C56.4436 22.3175 54.5483 20.9933 54.5483 17.2508V10.3417H51.9062V7.34777H54.5483V3.48111L57.6498 2.5599V7.34777H61.2107V10.3417ZM74.7851 7.34777H77.8866V21.7417H74.7851V19.669C73.6938 21.1948 71.9995 22.116 69.7595 22.116C65.8539 22.116 62.6088 18.8054 62.6088 14.5448C62.6088 10.2554 65.8539 6.97353 69.7595 6.97353C71.9995 6.97353 73.6938 7.89477 74.7851 9.39174V7.34777ZM70.2477 19.1508C72.8323 19.1508 74.7851 17.222 74.7851 14.5448C74.7851 11.8675 72.8323 9.93871 70.2477 9.93871C67.6631 9.93871 65.7103 11.8675 65.7103 14.5448C65.7103 17.222 67.6631 19.1508 70.2477 19.1508ZM83.0557 5.18868C81.9645 5.18868 81.0742 4.26747 81.0742 3.20232C81.075 2.67581 81.2843 2.17115 81.6554 1.79886C82.0272 1.42655 82.5305 1.21696 83.0557 1.21596C83.581 1.21696 84.0843 1.42655 84.4561 1.79886C84.8272 2.17115 85.0365 2.67581 85.0372 3.20232C85.0372 4.26747 84.147 5.18868 83.0557 5.18868ZM81.505 21.7417V7.34777H84.6065V21.7417H81.505ZM88.1962 21.7417V0.726562H91.2977V21.7417H88.1962ZM111.429 7.34777H114.702L110.194 21.7417H107.15L104.163 12.0402L101.148 21.7417H98.1037L93.5951 7.34777H96.8689L99.6545 17.2796L102.67 7.34777H105.628L108.614 17.2796L111.429 7.34777ZM118.551 5.18868C117.459 5.18868 116.569 4.26747 116.569 3.20232C116.57 2.67581 116.779 2.17115 117.15 1.79886C117.522 1.42655 118.025 1.21696 118.551 1.21596C119.076 1.21696 119.579 1.42655 119.951 1.79886C120.322 2.17115 120.531 2.67581 120.532 3.20232C120.532 4.26747 119.642 5.18868 118.551 5.18868ZM117 21.7417V7.34777H120.101V21.7417H117ZM131.244 6.97353C134.46 6.97353 136.758 9.16144 136.758 12.9039V21.7417H133.656V13.2205C133.656 11.0327 132.393 9.88114 130.44 9.88114C128.401 9.88114 126.793 11.0902 126.793 14.0266V21.7417H123.691V7.34777H126.793V9.19023C127.74 7.69326 129.291 6.97353 131.244 6.97353ZM151.461 1.5902H154.562V21.7417H151.461V19.669C150.37 21.1948 148.675 22.116 146.435 22.116C142.53 22.116 139.285 18.8054 139.285 14.5448C139.285 10.2554 142.53 6.97353 146.435 6.97353C148.675 6.97353 150.37 7.89477 151.461 9.39174V1.5902ZM146.924 19.1508C149.508 19.1508 151.461 17.222 151.461 14.5448C151.461 11.8675 149.508 9.93871 146.924 9.93871C144.339 9.93871 142.386 11.8675 142.386 14.5448C142.386 17.222 144.339 19.1508 146.924 19.1508ZM164.958 22.116C160.622 22.116 157.377 18.8054 157.377 14.5448C157.377 10.2554 160.622 6.97353 164.958 6.97353C167.773 6.97353 170.214 8.44174 171.362 10.6872L168.691 12.2417C168.06 10.8887 166.653 10.0251 164.929 10.0251C162.402 10.0251 160.478 11.9539 160.478 14.5448C160.478 17.1357 162.402 19.0645 164.929 19.0645C166.653 19.0645 168.06 18.172 168.749 16.8478L171.42 18.3736C170.214 20.6478 167.773 22.116 164.958 22.116ZM176.531 11.3205C176.531 13.9402 184.256 12.3569 184.256 17.6827C184.256 20.5614 181.758 22.116 178.656 22.116C175.785 22.116 173.717 20.8205 172.798 18.7478L175.469 17.1933C175.928 18.4887 177.077 19.266 178.656 19.266C180.035 19.266 181.097 18.8054 181.097 17.6539C181.097 15.0917 173.372 16.5311 173.372 11.3781C173.372 8.67205 175.699 6.97353 178.628 6.97353C180.983 6.97353 182.935 8.0675 183.941 9.9675L181.327 11.4357C180.81 10.313 179.805 9.79477 178.628 9.79477C177.508 9.79477 176.531 10.2842 176.531 11.3205ZM189.77 11.3205C189.77 13.9402 197.495 12.3569 197.495 17.6827C197.495 20.5614 194.997 22.116 191.895 22.116C189.024 22.116 186.956 20.8205 186.037 18.7478L188.708 17.1933C189.167 18.4887 190.316 19.266 191.895 19.266C193.274 19.266 194.336 18.8054 194.336 17.6539C194.336 15.0917 186.611 16.5311 186.611 11.3781C186.611 8.67205 188.937 6.97353 191.867 6.97353C194.221 6.97353 196.174 8.0675 197.179 9.9675L194.566 11.4357C194.049 10.313 193.044 9.79477 191.867 9.79477C190.747 9.79477 189.77 10.2842 189.77 11.3205Z"
      fill="white"
    />
  </svg>
);

export default Tailwind;
