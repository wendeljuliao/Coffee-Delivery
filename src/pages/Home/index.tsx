import { CoffeesCard } from "./components/CoffeesCard";
import { FirstCard } from "./components/FirstCard";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <FirstCard />
      <CoffeesCard />
    </HomeContainer>
  );
}
