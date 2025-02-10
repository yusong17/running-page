interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'RUN Yu Run',
  siteUrl: 'https://yihong.run',
  logo: 'https://s2.loli.net/2023/06/03/w5kdK1Of2yBq4pD.jpg',
  description: 'Yu is running',
  navLinks: [
    {
      name: 'Yu Song',
      url: 'https://yusong17.github.io',
    },
    {
      name: 'Follow me',
      url: 'https://strava.app.link/UaFKv6EtWzb',
    },
  ],
};

export default data;
