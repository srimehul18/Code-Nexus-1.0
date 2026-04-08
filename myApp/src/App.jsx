import { useState } from "react";
import Navbar from "./components/navbar";
import FeatureButtons from "./components/FeatureButtons";
import InputBox from "./components/InputBox";
import OutputBox from "./components/OutputBox";
import Loader from "./components/Loader";
import { callAI as fetchAI } from "./api";