export enum IDashboardTag {
  General = "Ethereum",
  EcosystemHealth = "Ecosystem Health",
  Staking = "Staking",
  MonetaryPolicy = "Monetary Policy",
  DeFi = "DeFi",
  MEV = "MEV",
  DuneAnalytics = "Dune Analytics",
  NFTs = "NFTs",
}

export interface IDashboard {
  name: string;
  image?: string;
  url: string;
  tags?: IDashboardTag[];
}

export const dashboards: IDashboard[] = [
  {
    name: "AlphaDay",
    url: "https://app.alphaday.com/",
    image: "alpha-day.png",
    tags: [IDashboardTag.General],
  },
  {
    name: "Rotki",
    url: "https://rotki.com/",
    image: "rotki.png",
    tags: [IDashboardTag.General],
  },
  {
    name: "Project Sunshine",
    url: "https://ethsunshine.com",
    image: "project-sunshine.png",
    tags: [IDashboardTag.EcosystemHealth],
  },
  {
    name: "Node Watch",
    url: "https://nodewatch.io",
    image: "node-watch.png",
    tags: [IDashboardTag.EcosystemHealth],
  },
  {
    name: "Miga Labs Crawler",
    url: "https://migalabs.es/crawler/dashboard",
    image: "miga-labs.png",
    tags: [IDashboardTag.EcosystemHealth],
  },
  {
    name: "Ethereum Nodes Statistics",
    url: "https://ethernodes.org/",
    image: "ethernodes.png",
    tags: [IDashboardTag.EcosystemHealth],
  },
  {
    name: "Rated.Network",
    url: "https://www.rated.network/?network=mainnet&view=entity",
    image: "rated-network.png",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Client Diversity.org",
    url: "https://clientdiversity.org",
    image: "client-diversity.png",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Ethereum Pools.info",
    url: "https://ethereumpools.info/d/ox1NIwf7k/ethereumpools-public?orgId=1&kiosk&refresh=5m",
    image: "eth-pools.png",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "EthSta.com",
    url: "https://ethsta.com",
    image: "ethsta.png",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Beaconcha.in",
    url: "https://beaconcha.in",
    image: "beacon-chain.png",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Rocket Pool Dashboard",
    url: "https://rocketscan.io",
    image: "rocket-scan.png",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Hildobby's ETH Staking Deposits",
    url: "https://dune.com/hildobby/ETH2-Deposits",
    image: "hildobby.png",
    tags: [IDashboardTag.Staking, IDashboardTag.DuneAnalytics],
  },
  {
    name: "UltraSound Money",
    url: "https://ultrasound.money/",
    image: "ultra-sound.png",
    tags: [IDashboardTag.MonetaryPolicy],
  },
  {
    name: "Ratio Gang",
    url: "https://ratiogang.com/",
    image: "ratio-gang.png",
    tags: [IDashboardTag.MonetaryPolicy],
  },
  {
    name: "DeFi Llama",
    url: "https://defillama.com/",
    image: "defi-llama.png",
    tags: [IDashboardTag.DeFi],
  },
  {
    name: "DeFi Toolkit",
    url: "https://hackmd.io/@gweicz/defi-toolkit",
    image: "defi-toolkit.png",
    tags: [IDashboardTag.DeFi],
  },
  {
    name: "Flashbots",
    url: "https://transparency.flashbots.net",
    image: "flashbots.png",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "MEV Boost.org",
    url: "https://mevboost.org",
    image: "mev-boost.png",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "MEV Boost.pics",
    url: "https://mevboost.pics",
    image: "mev-boost-pics.png",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "MEV Watch",
    url: "https://mevwatch.info",
    image: "mev-boost.png",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "Eigen Phi",
    url: "https://eigenphi.io",
    image: "eigen-phi.png",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "Chainsight Analytics MEV",
    url: "https://dune.com/ChainsightAnalytics/mev-after-ethereum-merge",
    image: "chain-analytics.png",
    tags: [IDashboardTag.MEV, IDashboardTag.DuneAnalytics],
  },
  {
    name: "icy.tools",
    url: "https://icy.tools/",
    image: "icy-tools.png",
    tags: [IDashboardTag.NFTs],
  },
];