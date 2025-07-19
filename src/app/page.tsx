import AnimatedContractInfo from "@components/animations/AnimatedContract";
import Logo from "../components/Logo";
import Clock from "../components/Clock";
import MainTitle from "../components/MainTitle";
import Subtitle from "../components/Subtitle";
import SoundToggle from "../components/SoundToggle";
import ScrollDownIcon from "../components/ScrollDownIcon";
import SideNav from "../components/SideNav";
import MenuButton from "../components/MenuButton";

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
          <Subtitle />
          <MainTitle />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              fontWeight: 500,
              fontSize: 15,
            }}
          >
            GOOD DESIGN IS HONEST
          </div>
        </div>
        <ScrollDownIcon />
      </div>
      <SoundToggle />
      <MenuButton />
    </div>
  );
}
