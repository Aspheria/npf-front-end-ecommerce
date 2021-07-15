import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setNft } from "../redux/actions/nftActions";
import NftComponent from "./NftComponent";

const NftPage = () => {
  const nft = useSelector((state) => state.allNft.nft);
  const dispatch = useDispatch();
  const fetchNft = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setNft(response.data));
  };

  useEffect(() => {
    fetchNft();
  }, []);

  console.log("Nft :", nft);
  return (
    <div className="ui grid container">
      <NftComponent />
    </div>
  );
};

export default NftPage;
