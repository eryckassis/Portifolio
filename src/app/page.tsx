import AnimatedContractInfo from "@components/animations/AnimatedContract";
import Logo from "../components/Logo";
import Clock from "../components/Clock";
import MainTitle from "../components/MainTitle";
import Subtitle from "../components/Subtitle";
import SoundToggle from "../components/SoundToggle";
import ScrollDownIcon from "../components/ScrollDownIcon";
import SideNav from "../components/SideNav";
import MenuButton from "../components/MenuButton";
import MouseFollow from "@components/MouseFollow";

import "../styles/Scroll.css";
import "../styles/animations.css";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}
    >
      <AnimatedContractInfo />
      <Logo />
      <div style={{ position: "absolute", top: 20, left: 20 }}>AD</div>
      <div
        style={{
          position: "absolute",
          top: 30,
          left: 60,
          right: 0,
          width: "100%",
          textAlign: "center",
          fontSize: 13,
          fontWeight: 400,
        }}
      ></div>
      <Clock />
      <SideNav />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div
          style={{ width: "100%", textAlign: "center", position: "relative" }}
        >
          <MouseFollow />
          <Subtitle />
          <MainTitle />
        </div>
        <ScrollDownIcon />
      </div>
      <SoundToggle />

      <MenuButton />
    </div>
  );
}
