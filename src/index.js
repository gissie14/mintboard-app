import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Mypage } from "pages/Mypage";
import { Mint } from "pages/Mint";
import { ConnectWallet } from "pages/ConnectWallet";
import { CollectionList } from "pages/CollectionList";
import { Send } from "pages/Send";
import { Sent } from "pages/Sent";
import { Collection } from "pages/Collection";
import NftUploader from "components/NftUploader/NftUploader";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<App />} />
        <Route path={`test`} element={<NftUploader />} />
        <Route path={`Connect`} element={<ConnectWallet />} />
        <Route path={`mypage`} element={<Mypage />} />
        <Route path={`mint`} element={<Mint />} />
        <Route path={`collection`} element={<CollectionList />} />
        <Route path={`collection/:colledctionId`} element={<Collection />} />
        <Route path={`collection/:colledctionId/:NFTid`} element={<Send />} />
        <Route
          path={`/collection/:colledctionId/:NFTid/sent`}
          element={<Sent />}
        />
        <Route path="*" element={<Sent />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
