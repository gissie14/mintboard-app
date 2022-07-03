import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ethers } from "ethers";
import { Web3Storage } from "web3.storage";
import Web3Mint from "utils/Web3Mint.json";

import { Home } from "pages/Home";
import { Mypage } from "pages/Mypage";
import { Mint } from "pages/Mint";
import { ConnectWallet } from "pages/ConnectWallet";
import { CollectionList } from "pages/CollectionList";
import { Detail } from "pages/Detail";
import { Sent } from "pages/Sent";
import { Collection } from "pages/Collection";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

import NftUploader from "components/NftUploader/NftUploader";

function App() {
  /*
   * ユーザーのウォレットアドレスを格納するために使用する状態変数を定義します。
   */
  const [currentAccount, setCurrentAccount] = useState("");
  /*この段階でcurrentAccountの中身は空*/
  console.log("currentAccount: ", currentAccount);
  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Make sure you have MetaMask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };
  const connectWalletHandler = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      /*
       * ウォレットアドレスに対してアクセスをリクエストしています。
       */
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      /*
       * ウォレットアドレスを currentAccount に紐付けます。
       */
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * ページがロードされたときに useEffect()内の関数が呼び出されます。
   */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentAccount && currentPath == "/") {
      window.location.href = `/collection/${currentAccount}`;
    }
  }, [currentAccount]);


  return (
    <>
      <Header
        currentAccount={currentAccount}
        connectWalletHandler={connectWalletHandler}
      />
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`test`} element={<NftUploader />} />
          <Route
            path={`Connect`}
            element={
              <ConnectWallet connectWalletHandler={connectWalletHandler} />
            }
          />
          <Route path={`mypage`} element={<Mypage />} />
          <Route path={`mint`} element={<Mint />} />
          <Route
            path={`collection`}
            element={<CollectionList currentAccount />}
          />
          <Route
            path={`collection/:collectionId`}
            element={<Collection />}
          />
          <Route
            path={`collection/:collectionId/:tokenId`}
            element={<Detail />}
          />
          <Route
            path={`/collection/:collectionId/:NFTid/sent`}
            element={<Sent />}
          />
          <Route path="*" element={<Sent />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
