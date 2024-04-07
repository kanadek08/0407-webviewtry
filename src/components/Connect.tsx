import React from 'react';
import provider from '../context/WalletProvider';


const Connect: React.FC = () => {
  const handleConnect = async () => {
    try {
      provider.on('display_uri', (uri: string) => {
        // ディープリンクを使ってウォレットアプリにリダイレクトする
        window.location.href = `oasys-wallet://${uri}`;
      });

      // WalletConnectプロバイダとの接続を開始
      await provider.connect();
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  return (
    <button onClick={handleConnect}>
      Connect
    </button>
  );
};

export default Connect;

