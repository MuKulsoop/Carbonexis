import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import MarketplaceABI from '../abis/Marketplace.json' assert { type: 'json' };

const initWeb3 = () => {
  const provider = new Web3.providers.WebsocketProvider(
    process.env.WEB3_PROVIDER_WS,
    { clientConfig: { keepalive: true } }
  );
  
  const web3 = new Web3(provider);
  const marketplace = new web3.eth.Contract(
    MarketplaceABI.abi as AbiItem[],
    process.env.MARKETPLACE_ADDRESS
  );

  return { web3, marketplace };
};

const handleBlockchainEvents = async () => {
  const { marketplace } = initWeb3();
  
  marketplace.events.allEvents()
    .on('data', async (event) => {
      await processEvent(event);
    })
    .on('error', (error) => {
      logger.error(`Web3 Error: ${error.message}`);
    });
};

export { initWeb3, handleBlockchainEvents };